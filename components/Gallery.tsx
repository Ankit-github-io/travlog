import Image, { StaticImageData } from "next/image";
import React from "react";

interface GalleryProps {
  src: StaticImageData;
  imageStyle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ src, imageStyle }) => {
  return (
    <Image
      alt="galleryImage"
      src={src}
      className={`rounded-3xl ${imageStyle}`}
    />
  );
};

export default Gallery;
