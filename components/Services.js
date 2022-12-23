import React from 'react';
import Image from 'next/image'
const Services = () => {
  return (
    <div className="bg-[#DAA545] text-white text-center py-4">
      <h1 className="text-5xl font-bold mb-2 pt-5">Midas Touch Services</h1>
      <p className="text-sm font-light mb-4">Find professional DJs, high-quality lighting, interactive photobooths and unique event entertainment you need to create an unforgettable event!
</p>
      <div className="flex justify-around mb-4">
      <div className="mr-4">
          <img src="/djcon.png" alt="icon1" />
          <p>DJ Services</p>
        </div>
        <div className="mr-4">
          <img src="/photographer.png" alt="icon1" />
          <p>Photographers</p>
        </div>
        <div className="mr-4">
          <img src="/photoboothicon.png" alt="icon1" />
          <p>Photobooths</p>
        </div>
        <div className="mr-4">
          <img src="/lighticon.png" alt="icon1" />
          <p>Accent Uplighting</p>
        </div>
        <div className="mr-4">
          <img src="/speakericon2.png" alt="icon1" />
          <p>Sound Setups</p>
        </div>
      </div>
    </div>
  );
};

export default Services;