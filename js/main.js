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

  const tocLinks = document.querySelectorAll(".toc a");
  const sections = document.querySelectorAll(".detail-content > section[id]");
  if (tocLinks.length && sections.length) {
    const linkMap = new Map();
    tocLinks.forEach((link) => linkMap.set(link.getAttribute("href").slice(1), link));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkMap.get(entry.target.id);
          if (link && entry.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
