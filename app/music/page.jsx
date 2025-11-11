"use client";
import {motion} from "framer-motion";

const Music = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
                }}
        >
        <div className="relative p-6 bg-primary rounded-xl shadow-xl max-w-4xl mx-auto border-4 border-accent">
            {/* Title Container with Green Edges */}
            <div className="relative bg-primary border-4 border-accent rounded-xl p-6 mb-6 shadow-md">
                <h2 className="text-4xl font-bold text-white text-center">My Favorite Tracks</h2>
            </div>

            {/* Spotify iframe */}
            <div className="relative">
                <iframe
                    src="https://open.spotify.com/playlist/2P5RMFEbF7Mxu1PVIIKf8y?si=75ac26ba979e470e"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                    className="relative z-10 rounded-lg border-4 border-accent"
                    title="Spotify Playlist"
                ></iframe>
                <div className="absolute inset-0 rounded-lg border-4 border-accent/60 -z-10 opacity-80"></div>
            </div>

            <div className="mt-6 text-center">
                <a
                    href="https://open.spotify.com/playlist/0lQPvOGDJRB6ZWK2joqV71?si=c9c3fcf8e10848f7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-lg font-semibold hover:underline transition-all duration-300 ease-in-out"
                >
                    View the full playlist on Spotify
                </a>
            </div>
        </div>
        </motion.div>
    );
};


export default Music;