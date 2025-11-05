// pages/api/github-stats.js
import fetch from 'node-fetch';

const GITHUB_USERNAME = 'Lucifer123Morning'; // Замените на ваш GitHub username
const GITHUB_TOKEN = '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'; // Замените на ваш GitHub token


const fetchGitHubData = async () => {
    try {
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        if (!reposResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const repos = await reposResponse.json();
        const repoCommitsPromises = repos.map(async (repo) => {
            const commitsResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                },
            });
            if (!commitsResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const commits = await commitsResponse.json();
            return commits.length;
        });

        const commitsCounts = await Promise.all(repoCommitsPromises);
        const totalCommits = commitsCounts.reduce((acc, count) => acc + count, 0);

        return {
            repos: repos.length,
            commits: totalCommits,
        };
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        return {
            repos: 0,
            commits: 0,
        };
    }
};

export default async function handler(req, res) {
    try {
        res.status(200).json(await fetchGitHubData());
    } catch (error) {
        res.status(500).json({ error: 'Error fetching GitHub data' });
    }
}