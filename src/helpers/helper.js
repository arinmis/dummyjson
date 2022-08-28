export const craeteImageArray = (csvImages) => {
  return csvImages
    .replaceAll(" ", "")
    .split(",")
    .filter((url) => isImageUrl(url));
};

export const isImageUrl = (url) =>
  /(http(s?):)([/|.|\w|\s|-])*/g.test(url);
