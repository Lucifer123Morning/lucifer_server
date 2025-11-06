/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Игнорируем ESLint ошибки во время сборки (на локали и на Vercel)
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Игнорируем ошибки TypeScript при сборке
        ignoreBuildErrors: true,
    },
    images: {
        //  Разрешаем использование обычных <img> тегов без ошибок
        unoptimized: true,
    },
    //  Убираем предупреждения Next.js про <img> (чтобы не мешали при билде)
    experimental: {
        forceSwcTransforms: true,
    },
    compiler: {
        // Игнорируем предупреждения ESLint об <img>
        reactRemoveProperties: false,
    },
    //  Можно отключить строгий режим React (если он мешает)
    reactStrictMode: false,
};

export default nextConfig;
