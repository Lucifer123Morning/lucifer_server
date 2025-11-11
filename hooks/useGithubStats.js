"use client";
import { useState, useEffect } from "react";

export default function useGitHubStats(username = "Lucifer123Morning", token = "") {
    const [stats, setStats] = useState({
        repos: null,
        commits: null,
        loading: true,
    });

    useEffect(() => {
        let mounted = true;
        const headers = token ? { Authorization: `token ${token}` } : {};

        async function fetchStats() {
            try {
                // 1) базовая инфа о пользователе (кол-во публичных реп)
                const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
                if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);
                const userJson = await userRes.json();
                const totalRepos = userJson.public_repos ?? null;

                // 2) получить все репозитории (пагинация по 100)
                let repos = [];
                let page = 1;
                while (true) {
                    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`, { headers });
                    if (!res.ok) break;
                    const pageJson = await res.json();
                    repos = repos.concat(pageJson);
                    if (!Array.isArray(pageJson) || pageJson.length < 100) break;
                    page += 1;
                }

                // 3) суммируем коммиты по каждому репо через stats/participation
                //    учёт того, что API может вернуть 202 (статистика генерируется) или ошибку
                let commitsSum = 0;
                let gotAny = false;
                for (const r of repos) {
                    try {
                        const stRes = await fetch(`https://api.github.com/repos/${username}/${r.name}/stats/participation`, { headers });
                        if (!stRes.ok) continue;
                        const stJson = await stRes.json();
                        if (Array.isArray(stJson.all)) {
                            commitsSum += stJson.all.reduce((a, b) => a + b, 0);
                            gotAny = true;
                        }
                    } catch (e) {
                        // игнорировать конкретный репо при ошибке
                        continue;
                    }
                }

                if (mounted) {
                    setStats({
                        repos: totalRepos,
                        commits: gotAny ? commitsSum : null,
                        loading: false,
                    });
                }
            } catch (error) {
                console.error("Ошибка загрузки GitHub-стата:", error);
                if (mounted) setStats(s => ({ ...s, loading: false }));
            }
        }

        fetchStats();
        return () => { mounted = false; };
    }, [username, token]);

    return stats;
}