
import React from 'react';
import Slider from '../../features/core/components/Slider.jsx';

const TestCode = () => {

  const slidesData = [
    { id: 1, color: 'bg-red-500', content: 'Slide 1' },
    { id: 2, color: 'bg-blue-500', content: 'Slide 2' },
    { id: 3, color: 'bg-green-500', content: 'Slide 3' },
    { id: 4, color: 'bg-yellow-500', content: 'Slide 4' },
    { id: 5, color: 'bg-purple-500', content: 'Slide 5' }
  ];
  return (
    <div className='bg-white'>

      <Slider delay={1000} visibleCount={3} autoPlay={false}>
        <div className='bg-rose-300 h-64 w-[10rem] flex items-center justify-center text-4xl'>Slide 1</div>
        <div className='bg-rose-200 h-64 w-[10rem] flex items-center justify-center text-4xl'>Slide 2</div>
        <div className='bg-rose-100 h-64 w-[10rem] flex items-center justify-center text-4xl'>Slide 3</div>
      </Slider>

    </div>
  );
};

export default TestCode;