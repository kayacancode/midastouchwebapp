import React from 'react';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="relative h-64">
        <img src="/event3.png" alt="Image 1" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex text-center pt-20 p-6 bg-[#DAA545] bg-opacity-50 text-white">
          <h3 className="text-4xl  font-bold">Corporate</h3>
        </div>
      </div>
      <div className="relative h-64">
        <img src="/party3.png" alt="Image 2" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex text-center pt-20 p-6 bg-[#DAA545] bg-opacity-50 text-white">
          <h3 className="text-4xl font-bold ">Parties</h3>
        </div>
      </div>
      <div className="relative h-64">
        <img src="/party1.png" alt="Image 3" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex text-center pt-20 p-6 bg-[#DAA545] bg-opacity-50 text-white">
          <h3 className="text-4xl  font-bold">Social</h3>
        </div>
      </div>
      <div className="relative h-64">
        <img src="/wedding3.png" alt="Image 3" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex text-center pt-20 p-6 bg-[#DAA545] bg-opacity-50 text-white">
          <h3 className="text-4xl  font-bold">Wedding</h3>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
