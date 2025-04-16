
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

      <Slider delay={1000} visibleCount={2} slidesData={slidesData} autoPlay={true} >
        <div className='bg-rose-300 h-10'>52454</div>
        <div className='bg-rose-200 h-10'>52454</div>
        <div className='bg-rose-100 h-10'>52454</div>
      </Slider>
      {/* <Slider ref={ref} delay={1000} visibleCount={2} autoPlay={true} >
        <div className='bg-rose-300 h-10'>52454</div>
        <div className='bg-rose-200 h-10'>52454</div>
        <div className='bg-rose-100 h-10'>52454</div>
      </Slider> */}
    </div>
  );
};

export default TestCode;