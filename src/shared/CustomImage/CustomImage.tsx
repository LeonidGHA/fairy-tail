import Image from "next/image";

interface ICustomImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
  quality?: number;
}

const CustomImage: React.FC<ICustomImage> = ({
  src,
  alt,
  width,
  height,
  quality,
}) => {
  const imageLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 80}`;
  };

  return (
    <Image
      loading="lazy"
      loader={imageLoader}
      src="me.png"
      alt={alt ? alt : "photo"}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
