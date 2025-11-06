/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // ❗ Игнорировать ошибки линтера во время билда
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
