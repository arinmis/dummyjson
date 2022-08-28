export const craeteImageArray = (csvImages) => {
  return csvImages
    .replaceAll(" ", "")
    .split(",")
    .filter((url) => isImageUrl(url));
};

export const isImageUrl = (url) => /(http(s?):)([/|.|\w|\s|-])*/g.test(url);

export const isAnyNullExist = (obj) => {
  let result = false;
  Object.values(obj).forEach((val) => {
    if (
      val === null || val === "" || Array.isArray(val) ? val.length === 0 : false
    )
      result = true;
  });
  return result;
};
