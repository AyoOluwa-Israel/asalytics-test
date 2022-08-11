export const getBackgroundColor = (data: boolean) => {
  let color;
  if (data) {
    color = "bg-success";
  } else {
    color = "bg-danger";
  }
  return color;
};
