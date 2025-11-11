"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Music = () => {
    const [loaded, setLoaded] = useState(false);
    const playlistUrl = "https://open.spotify.com/playlist/2P5RMFEbF7Mxu1PVIIKf8y?si=75ac26ba979e470e";
    const externalUrl = "https://open.spotify.com/playlist/0lQPvOGDJRB6ZWK2joqV71?si=c9c3fcf8e10848f7";

    return (
        <motion.main
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.45 } }}
            className="p-6"
        >
            <div className="max-w-4xl mx-auto">
                {/* Gradient frame */}
                <div className="rounded-xl p-1 bg-gradient-to-r from-accent/60 via-accent/30 to-transparent">
                    <div className="relative bg-primary rounded-lg shadow-xl overflow-hidden border-2 border-accent/40">
                        {/* Header */}
                        <header className="px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white">My Favorite Tracks</h1>
                                <p className="text-sm text-white/60 mt-1">Curated playlist — open to everyone, no registrations.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href={externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-md font-medium hover:brightness-95 transition"
                                >
                                    Open in Spotify
                                </a>
                            </div>
                        </header>

                        {/* Player area */}
                        <section className="relative px-6 pb-6">
                            <div className="relative rounded-lg overflow-hidden border-4 border-accent">
                                {/* decorative blurred layer */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 to-transparent blur-sm opacity-90"></div>

                                {/* loader overlay */}
                                {!loaded && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-primary/80">
                                        <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-accent animate-spin" />
                                        <span className="mt-3 text-white/70">Загрузка плеера...</span>
                                    </div>
                                )}

                                {/* responsive iframe */}
                                <iframe
                                    title="Spotify Playlist"
                                    src={playlistUrl}
                                    className="w-full h-[520px] md:h-[600px] lg:h-[600px] relative z-10 bg-black"
                                    frameBorder="0"
                                    allow="encrypted-media; clipboard-write; autoplay"
                                    allowTransparency="true"
                                    onLoad={() => setLoaded(true)}
                                />
                            </div>

                            {/* caption */}
                            <div className="mt-4 text-center text-white/70">
                                <small>Если плеер не отображается — откройте плейлист в Spotify.</small>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default Music;