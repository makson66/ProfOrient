const acardionEl = document.querySelectorAll(".acardion");
acardionEl.forEach((element) => {
  const acardionContent = element.querySelector(".acardion-content");
  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
      acardionContent.style.maxHeight = 0 + "px";
    } else {
      element.classList.add("active");
      acardionContent.style.maxHeight = acardionContent.scrollHeight + "px";
    }
  });
});
