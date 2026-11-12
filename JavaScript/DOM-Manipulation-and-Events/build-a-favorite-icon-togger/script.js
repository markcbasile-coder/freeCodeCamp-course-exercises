const favIcons = document.querySelectorAll(".favorite-icon");

favIcons.forEach((favIcon) => {
  favIcon.addEventListener("click", () => {
    if (favIcon.classList.contains("filled")) {
      favIcon.classList.remove("filled");
      favIcon.innerHTML = "&#9825;";
    } else {
      favIcon.classList.add("filled");
      favIcon.innerHTML = "&#10084;";
    }
  });
});
