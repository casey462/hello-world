const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "TYYYY";
  setTimeout(() => {
    btn.textContent = "give kiss";
  }, 1000);
});