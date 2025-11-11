import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/Lucifer123Morning?tab=repositories",
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/дмитро-листопадов-b09359336",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/lucifer_denica1",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyles}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default Social;