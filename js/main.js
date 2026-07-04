document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const grid = document.querySelector(".project-grid");
  if (filterBtns.length && grid) {
    const cards = grid.querySelectorAll(".card[data-category]");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.filter;
        cards.forEach((card) => {
          const show = category === "*" || card.dataset.category.split(" ").includes(category);
          card.style.display = show ? "" : "none";
        });
      });
    });
  }
});
