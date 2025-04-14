import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StepBox from '../../features/home/components/howToWork/StepBox.jsx';


const steps = [
  {
    number: 1,
    title: 'جمع آوری لحظه ای خبر',
    content: 'بات به‌صورت خودکار از بیش لز 1000  منابع خبری معتبر داده‌ها رو دریافت می‌کنه.(مثلاً سایت‌های خبری کر یپتو، توییتر، ردیت و ...)',
  },
  {
    number: 2,
    title: 'تحلیل اخبار با هوش مصنوعی',
    content: 'مدل‌های پردازش زبان طبیعی محتوای خبر رو تحلیل می‌کنن و اطلاعات مهم رو استخراج می‌کنن.',
  },
  {
    number: 3,
    title: 'نمایش نتیجه در تلگرام',
    content: (
      <>
        <div>✔️ خلاصه خبر + تحلیل احساسات</div>
        <div>✔️ هشدارها (مثلاً نوسان شدید روی یه کوین خاص)</div>
        <div>✔️ لینک منبع خبر برای مطالعه کامل</div>
        <div>✔️ تحلیل خبر جفت ارزهای مهم در ساعات تعریف شده</div>
      </>
    ),
  },
];

const TestCode = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.8 });
  const scrollCooldownRef = useRef(false);

  // combine refs
  const setRefs = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  // Lock/unlock scrolling
  useEffect(() => {
    document.body.style.overflow = scrollLocked ? 'hidden' : 'auto';
  }, [scrollLocked]);

  useEffect(() => {
    if (inView && stepIndex < steps.length) {
      setScrollLocked(true);
    } else if (stepIndex >= steps.length) {
      setScrollLocked(false);
    }
  }, [inView, stepIndex]);

  const handleWheel = (e) => {
    if (!scrollLocked || scrollCooldownRef.current) return;
  
    const SCROLL_THRESHOLD = 50;
  
    if (e.deltaY > SCROLL_THRESHOLD && stepIndex < steps.length) {
      setStepIndex((prev) => Math.min(prev + 1, steps.length));
      scrollCooldownRef.current = true;
      setTimeout(() => (scrollCooldownRef.current = false), 400); // throttle scroll
    } else if (e.deltaY < -SCROLL_THRESHOLD && stepIndex > 0) {
      setStepIndex((prev) => Math.max(prev - 1, 0));
      scrollCooldownRef.current = true;
      setTimeout(() => (scrollCooldownRef.current = false), 400);
    }
  };

  return (
    <>
      <div className='py-[80rem] inline-flex justify-center items-center bg-Error-300'>mohammad and pooya</div>
      <div ref={setRefs} onWheel={handleWheel} className="relative w-full min-h-screen bg-white">
        <div className="text-center text-3xl font-bold py-20 text-Neutral-500">
          چطور کار می‌کنه؟
        </div>

        <div className="flex justify-center items-start gap-20 px-10">
          {/* Steps */}
          <div className="flex flex-col gap-20 w-2/3">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={i <= stepIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.6 }}
              >
                <StepBox number={step.number} title={step.title}>
                  <div className="text-Neutral-500 text-base font-medium">{step.content}</div>
                </StepBox>
              </motion.div>
            ))}
          </div>

          {/* Circles */}
          <div className="relative w-[6rem] h-[40rem]">
            <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-secondary-50 via-secondary-200 to-secondary-50 transform -translate-x-1/2" />
            {steps.map((_, i) => (
              <div
                key={i}
                className={`absolute w-4 h-4 rounded-full left-1/2 transform -translate-x-1/2`}
                style={{ top: `${i * 10}rem`, backgroundColor: i <= stepIndex ? '#8B5CF6' : '#E0E7FF' }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCode;