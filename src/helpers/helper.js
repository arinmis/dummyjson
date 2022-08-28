export const craeteImageArray = (csvImages) => {
  return csvImages.replaceAll(" ", "").split(",");
};

export const isImageUrl = (url) => /(http(s?):)([/|.|\w|\s|-])*/g.test(url);

export const isAnyNullExist = (obj) => {
  for (const val of Object.values(obj)) {
    const isEmptyArray = Array.isArray(val) ? val.length === 0 : false;
    if (val === null || val === "" || isEmptyArray) return true;
  }
  return false;
};

// Array.isArray(val) ? val.length === 0 : false;
