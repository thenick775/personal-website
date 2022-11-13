[...document.querySelectorAll("[data-loadcss]")].map((elem) =>
  elem.addEventListener("load", (e) => {
    elem.onload = null;
    elem.removeAttribute("media");
  })
);
