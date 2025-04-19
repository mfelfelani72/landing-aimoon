import React, {
  Children,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";

// Functions
import { cn } from "../../../../utils/lib/cn";

const Slider = ({
  className,
  children,
  set_auto_play,
  set_mouse_enter,
  set_mouse_leave,
  set_button,
  set_current,
  ...props
}) => {
  // constants and states
  const visible_count = props?.visible_count || 3;
  const delay = props?.delay || 3000;
  const autoPlay = props?.auto_play === "false" ? "false" : "true";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  // Used to temporarily disable animation when doing the instant reset.
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const slides = Children.toArray(children);
  const extendedSlides = [...slides, ...slides];
  //   const extendedSlides = [...slides];

  // refs
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // functions

  // calculate the width of each slide.
  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setSlideWidth(containerWidth / visible_count);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [visible_count]);

  // Move forward one slide.
  const goLeft = (param = "") => {
    set_button("left");
    set_current?.(currentIndex + 2);
    if (currentIndex + 1 >= slides.length) {
      if (param === "autoPlaying") {
        setTransitionEnabled(false);
        setCurrentIndex(currentIndex - slides.length);
        set_current?.(1);
        setTimeout(() => {
          setTransitionEnabled(true);
        }, 500);
      } else {
        set_auto_play?.("false");
        setTransitionEnabled(false);
        setCurrentIndex(currentIndex - slides.length);
        setTimeout(() => {
          setTransitionEnabled(true);
          setCurrentIndex((prev) => prev + 1);
        }, 0);
      }
    } else if (currentIndex + 2 == slides.length) {
      set_current?.(0);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const goRight = () => {
    set_button?.("right");
    set_auto_play?.("false");
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(slides.length);
      set_current?.(currentIndex);
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentIndex(slides.length - 1);
        set_current?.(currentIndex);
      }, 0);
    } else {
      setCurrentIndex((prev) => prev - 1);
      set_current?.(currentIndex);
    }
  };

  // Auto-play: move forward every 3 seconds.
  useEffect(() => {
    if (props?.auto_play === "true") {
      autoPlayRef.current = setInterval(() => {
        goLeft("autoPlaying");
      }, delay);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex, set_mouse_enter, set_mouse_leave]);

  // Calculate the slider container style.
  const sliderStyle = {
    transform: `translateX(-${currentIndex * slideWidth}px)`,
    width: `${extendedSlides.length * slideWidth}px`,
    transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
  };

  return (
    <>
      <div
        {...props}
        className={cn(
          "left-to-right mx-auto p-4 relative overflow-hidden",
          className
        )}
        ref={containerRef}
        onMouseEnter={() => {
          set_auto_play?.("false");
          set_mouse_enter?.("true");
          set_mouse_leave?.("false");
        }}
        onMouseLeave={() => {
          if (autoPlay !== "false") {
            set_auto_play?.("true");
          } else if (props?.defaultAutoPaly === "true") {
            set_auto_play?.("true");
          }
          set_mouse_enter?.("false");
          set_mouse_leave?.("true");
        }}
      >
        <div className="relative h-full overflow-hidden">
          <div style={sliderStyle} className="flex absolute h-full">
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                id={index}
                className="h-full flex-shrink-0 flex items-start justify-center slider-item transition-all duration-500"
                style={{ width: `${slideWidth}px` }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Optional navigation buttons */}
        <div className="absolute inset-x-0 bottom-0 inline-flex justify-center items-center mb-6 gap-8">
          <button
            onClick={() => {
              set_auto_play?.("false");
              goLeft();
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              set_auto_play?.("false");
              goRight();
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
