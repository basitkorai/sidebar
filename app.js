const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");

// click to show sidebar
toggle.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

// click to hide sidebar
close.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
