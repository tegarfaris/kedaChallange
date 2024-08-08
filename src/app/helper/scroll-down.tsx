export const scrollDown = (path: string) => {
  const element = document.querySelector(path);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
