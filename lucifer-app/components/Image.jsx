// components/Image.jsx
import React from "react";

const CustomImage = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
};

export default CustomImage;