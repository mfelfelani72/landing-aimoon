import React from 'react';
import ChessBoard from '../../features/core/components/ChessBoard.jsx';

const TestCode = () => {

  
  return (
    <>


      <ChessBoard className={"rotate-[25deg] skew-x-[-25deg] bg-[#f2f2f3]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} mosaicClassName={"border-Neutral-100/50"} />

    </>
  );

};

export default TestCode;