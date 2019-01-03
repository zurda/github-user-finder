export const addCommas = int => {
  if (typeof int !== "number") {
    return "0";
  } else {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
