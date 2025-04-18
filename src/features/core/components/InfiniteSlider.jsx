import React, {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement,
} from "react";

/**
 * InfiniteSlider
 *
 * Props:
 * - children: slide elements (JSX)
 * - visible: number of slides visible at once (default: 3)
 * - autoplay: boolean to enable autoplay (default: true)
 * - duration: autoplay interval in ms (default: 2000)
 * - direction: 'forward' | 'backward' (default: 'forward')
 */
const InfiniteSlider = ({
  children,
  visible = 3,
  autoplay = true,
  duration = 2000,
  direction = "forward",
}) => {
  const containerRef = useRef(null);
  const [idx, setIdx] = useState(visible);
  const totalOriginal = Children.count(children);
  const slidePct = 100 / visible;
  const dir = direction === "backward" ? -1 : 1;
  const timerRef = useRef(null);

  // Prepare slides for infinite loop
  const slides = [
    ...Children.toArray(children).slice(-visible),
    ...Children.toArray(children),
    ...Children.toArray(children).slice(0, visible),
  ];

  // Style the visible slides
  const styleVisible = () => {
    console.log("dfff");
    const c = containerRef.current;
    const kids = Array.from(c.children);
    kids.forEach(
      (el) =>
        (el.className = el.className.replace(
          /\b(bg-[^ ]+|opacity-\d+|scale-\d+|translate-y-[^ ]+|z-\d+)\b/g,
          ""
        ))
    );
    for (let i = 0; i < visible; i++) {
      const el = kids[idx + i];
      if (!el) continue;
      if (i === 0) el.classList.add("bg-blue-500", "opacity-50", "scale-90");
      if (i === 1) el.classList.add("-translate-y-4", "scale-110", "z-10");
      if (i === 2) el.classList.add("bg-violet-500", "opacity-50", "scale-90");
    }
  };

  // Initialize slider position and autoplay
  useEffect(() => {
    const c = containerRef.current;
    c.style.transition = "none";
    c.style.transform = `translateX(-${idx * slidePct}%)`;
    void c.offsetWidth;
    c.style.transition = "";
    styleVisible();
    autoplay && startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Move slider by n steps
  const go = (n) => {
    const c = containerRef.current;
    const newIdx = idx + dir * n;
    setIdx(newIdx);
    c.style.transform = `translateX(-${newIdx * slidePct}%)`;
  };
  const next = () => go(1);
  const prev = () => go(-1);

  // Handle looping logic on transition end
  const handleTransitionEnd = () => {
    const c = containerRef.current;
    let newIdx = idx;
    if (idx >= totalOriginal + visible) newIdx = visible;
    if (idx < visible) newIdx = totalOriginal + visible - 1;
    if (newIdx !== idx) {
      c.style.transition = "none";
      setIdx(newIdx);
      c.style.transform = `translateX(-${newIdx * slidePct}%)`;
      void c.offsetWidth;
      c.style.transition = "";
    }
    styleVisible();
  };

  // Autoplay controls
  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(next, duration);
  };
  const stopAutoplay = () => clearInterval(timerRef.current);

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div
        ref={containerRef}
        className="flex bg-rose-400 transition-transform duration-500 ease-in-out"
        style={{ width: `${(slides.length * 100) / visible}%` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((child, i) => (
          <div
            key={i}
            className="flex-shrink-0 p-2 transform transition-all duration-500 ease-in-out"
            style={{ width: `${slidePct}%` }}
          >
            <span className="text-rose-400">dsad</span>
            {console.log(cloneElement(child))}
            {/* {cloneElement(child)} */}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
};

export default InfiniteSlider;
