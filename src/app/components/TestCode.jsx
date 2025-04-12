import React from 'react';
import ChessBoard from '../../features/core/components/ChessBoard.jsx';

const TestCode = () => {


  return (
    <>


      <ChessBoard className={"rotate-[45deg] skew-x-[-45deg]"} bordClassName={`grid-cols-12 grid-rows-12 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#f2f2f3]"} mosaicClassName={"border-Neutral-100/50"} />

    </>
  );

};

export default TestCode;