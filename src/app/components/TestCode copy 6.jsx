import React, { useEffect } from "react";


const slider = () => {
  const slider = document.getElementById("slider");
  const container = document.getElementById("slides");
  const visible = +slider.dataset.visible || 1;
  const autoplay = slider.dataset.autoplay === "true";
  const duration = +slider.dataset.duration || 3000;
  const dir = slider.dataset.direction === "backward" ? -1 : 1;

  const originals = Array.from(container.children);
  const total = originals.length;
  const pct = 100 / visible;
  let idx = visible;
  let timer;

  // clone for infinite
  originals
    .slice(-visible)
    .forEach((n) => container.prepend(n.cloneNode(true)));
  originals
    .slice(0, visible)
    .forEach((n) => container.append(n.cloneNode(true)));
  Array.from(container.children).forEach((s) => (s.style.width = `${pct}%`));

  // position start
  container.style.transition = "none";
  // container.style.transform = `translateX(-${idx * pct}%)`;
  void container.offsetWidth;
  container.style.transition = '';

  function go(n) {
    idx += dir * n;
    container.style.transform = `translateX(-${20}%)`;
  }

  function styleVisible() {
    const slides = Array.from(container.children);
    slides.forEach((s) =>
      s.classList.remove(
        "bg-blue-500",
        "bg-violet-500",
        "-translate-y-4",
        "scale-110",
        "scale-90",
        "opacity-50",
        "z-10"
      )
    );
    for (let i = 0; i < visible; i++) {
      const s = slides[idx + i];
      if (!s) continue;
      if (i === 0) s.classList.add("bg-blue-500", "opacity-50", "scale-90");
      if (i === 1) s.classList.add("-translate-y-4", "scale-110", "z-10");
      if (i === 2) s.classList.add("bg-violet-500", "opacity-50", "scale-90");
    }
  }

  const next = () => go(1);
  const prev = () => go(-1);

  container.addEventListener("transitionend", () => {
    let reset = false;
    if (idx >= total + visible) {
      container.style.transition = "none";
      idx = visible;
      container.style.transform = `translateX(-${idx * pct}%)`;
      void container.offsetWidth;
      container.style.transition = "";
      reset = true;
    }
    if (idx < visible) {
      container.style.transition = "none";
      idx = total + visible - 1;
      container.style.transform = `translateX(-${idx * pct}%)`;
      void container.offsetWidth;
      container.style.transition = "";
      reset = true;
    }
    // always restyle after any move or reset
    styleVisible();
  });

  // events
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", () => {
    if (autoplay) timer = setInterval(next, duration);
  });
};

const TestCode = () => {
  useEffect(() => {
    slider();
  }, []);
  return (
    <div
      id="slider"
      className="relative overflow-hidden w-full max-w-3xl mx-auto"
      data-visible="3"
      data-autoplay="true"
      data-duration="2000"
      data-direction="forward"
    >
      <div
        id="slides"
        className="flex no-scrollbar transition-transform duration-500"
      >
        <div className="slide flex-shrink-0 w-1/3 p-2 transform transition-all duration-500 ease-in-out">
          <div className="bg-white p-4 shadow rounded">Slide 1</div>
        </div>
        <div className="slide flex-shrink-0 w-1/3 p-2 transform transition-all duration-500 ease-in-out">
          <div className="bg-white p-4 shadow rounded">Slide 2</div>
        </div>
        <div className="slide flex-shrink-0 w-1/3 p-2 transform transition-all duration-500 ease-in-out">
          <div className="bg-white p-4 shadow rounded">Slide 3</div>
        </div>
        <div className="slide flex-shrink-0 w-1/3 p-2 transform transition-all duration-500 ease-in-out">
          <div className="bg-white p-4 shadow rounded">Slide 4</div>
        </div>
        <div className="slide flex-shrink-0 w-1/3 p-2 transform transition-all duration-500 ease-in-out">
          <div className="bg-white p-4 shadow rounded">Slide 5</div>
        </div>
      </div>
      <button
        id="prevBtn"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &larr;
      </button>
      <button
        id="nextBtn"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &rarr;
      </button>
    </div>
  );
};

export default TestCode;
