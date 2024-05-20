const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const index = url.indexOf("media/") + "media/".length;
  const prefix = url.slice(0, index);
  const suffix = url.slice(index);
  return prefix + "crop/600/400/" + suffix;
};

export default getCroppedImageUrl;
