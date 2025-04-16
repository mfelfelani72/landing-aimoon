
import React from 'react';
import Slider from '../../features/core/components/Slider.jsx';

const TestCode = () => {


  return (
    <div className='bg-white'>

      <Slider delay={1000} visibleCount={5} autoPlay={false} className={"mt-[5rem] w-[60rem] h-[50rem]"}>
        <div className='bg-rose-100 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 1</div>
        <div className='bg-rose-200 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 2</div>
        <div className='bg-rose-300 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 3</div>
        <div className='bg-rose-400 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 4</div>
        <div className='bg-rose-500 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 5</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
        <div className='bg-rose-600 h-96 w-[10rem] flex items-center justify-center text-4xl'>Slide 6</div>
      </Slider>

    </div>
  );
};

export default TestCode;