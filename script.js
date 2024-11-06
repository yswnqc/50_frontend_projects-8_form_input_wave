const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.value) {
      input.nextElementSibling.style.top = "-15px";
      input.nextElementSibling.classList.add("active");
      input.nextElementSibling.childNodes.forEach((node) => {
        node.style.top = "0px";
      });
    } else {
      input.nextElementSibling.classList.remove("active");
    }
  });
  input.addEventListener("focus", () => {
    if (!input.value && input.nextElementSibling.style.top === "-15px") {
      input.nextElementSibling.childNodes.forEach((node) => {
        node.style.top = "0px";
      });
    }
  });
  input.addEventListener("blur", () => {
    if (!input.value && input.nextElementSibling.style.top === "-15px") {
      input.nextElementSibling.childNodes.forEach((node) => {
        node.style.top = "30px";
      });
    }
  });
});
