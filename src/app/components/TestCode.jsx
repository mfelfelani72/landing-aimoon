import React, { useEffect, useRef } from 'react';

const TestCode = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const lines = gridRef.current.querySelectorAll('.bar-line');

    const onMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      lines.forEach(line => {
        const rect = line.getBoundingClientRect();
        const dx = mouseX - (rect.left + rect.width / 2);
        const dy = mouseY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300;
        const strength = Math.max(0, 1 - dist / maxDist);

        line.style.transform = `${line.dataset.baseTransform} translateZ(${strength * 50}px) scaleY(${1 + strength * 0.2})`;
      });
    };

    const onMouseLeave = () => {
      lines.forEach(line => {
        line.style.transform = line.dataset.baseTransform;
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={gridRef}>
      {/* Bottom Grid Section */}
      <div className="absolute top-[27rem] left-1/2 -translate-x-1/2 flex flex-col gap-[86px]">
        {[...Array(7)].map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="bar-line w-[1700px] h-[2px] bg-black opacity-5 border border-black"
            data-base-transform="rotate(-25deg)"
            style={{
              transform: 'rotate(-25deg)',
              transition: 'transform 0.2s ease-out',
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Right Arc */}
      {[...Array(20)].map((_, i) => {
        const right = `${50 - i * 5}rem`;
        const bottom = `${-15 + i * 2.33}rem`;

        return (
          <div
            key={`arc-${i}`}
            className="absolute mx-[calc(50%-50rem)]"
            style={{ right, bottom }}
          >
            <div className="flex flex-col gap-[86px] w-full items-center">
              <div
                className="bar-line w-[710px] h-[2px] bg-black opacity-5 border border-black"
                data-base-transform="rotate(25deg)"
                style={{
                  transform: 'rotate(25deg)',
                  transition: 'transform 0.2s ease-out',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestCode;