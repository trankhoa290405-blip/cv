document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("printCv");
  if (button) button.addEventListener("click", () => window.print());
});
