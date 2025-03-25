import React from 'react';
import notFoundImage from '../assets/images/404.png';

function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="w-full h-full object-cover" src={notFoundImage} alt="404" />
    </div>
  );
}

export default NotFound;
