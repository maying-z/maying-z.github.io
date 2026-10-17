// 滚动渐现：给主要板块加 reveal，进入视口时淡入
(function () {
  var targets = document.querySelectorAll(
    ".quote-block, .case, .find-list li, .manual-grid, .checklist li, .closing"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
})();
