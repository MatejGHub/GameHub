import noImage from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const index = url.indexOf("media/") + "media/".length;
  const prefix = url.slice(0, index);
  const suffix = url.slice(index);
  return prefix + "crop/600/400/" + suffix;
};

export default getCroppedImageUrl;
