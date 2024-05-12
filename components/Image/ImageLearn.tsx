import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, width, height, priority = false }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"} // Set loading attribute based on priority
      className="dark:invert" // Apply any additional classes here
    />
  );
};

export default ImageComponent;

