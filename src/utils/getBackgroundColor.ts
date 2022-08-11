export const getBackgroundColor = (data: boolean) => {
  let color;
  if (data) {
    color = "success";
  } else {
    color = "danger";
  }
  return color;
};
