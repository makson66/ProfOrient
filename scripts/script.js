const tabBtns = document.querySelectorAll(".tab__btn");
const tabItems = document.querySelectorAll(".tab__body-item");

tabBtns.forEach((t, idx) =>
  t.addEventListener("click", () => {
    tabBtns.forEach((tb) => tb.classList.remove("tab__btn_active"));
    t.classList.add("tab__btn_active");
    tabItems.forEach((i) => i.classList.remove("tab__body-item_active"));
    tabItems[idx].classList.add("tab__body-item_active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
);
const acardionEl = document.querySelectorAll(".edu__acardion");
acardionEl.forEach((element) => {
  const acardionContent = element.querySelector(".edu__acardion-content");
  const acardionHeader = element.querySelector(".edu__acardion-header");
  acardionHeader.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
      acardionContent.style.maxHeight = 0 + "px";
    } else {
      element.classList.add("active");
      acardionContent.style.maxHeight = acardionContent.scrollHeight + "px";
    }
  });
});
const burgerbtn = document.querySelector(".header__burger");
const mobuleMenu = document.querySelector(".mobile-menu");
burgerbtn.addEventListener("click", () => {
  mobuleMenu.classList.add("active");
});
const burgerCross = document.querySelector(".mobile-menu__cross");
burgerCross.addEventListener("click", () => {
  mobuleMenu.classList.remove("active");
});
