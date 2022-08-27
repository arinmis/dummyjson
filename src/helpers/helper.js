export const craeteImageArray = (csvImages) => {
  return csvImages
    .replaceAll(" ", "")
    .split(",")
    .filter((url) => isImageUrl(url));
};

export const isImageUrl = (url) =>
  /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)/g.test(url);
