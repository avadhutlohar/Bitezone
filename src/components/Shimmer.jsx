import React from 'react';

function Shimmer() {
  return (
    <div className='flex flex-wrap justify-center'>
      {[...Array(12)].map((_, index) => (
        <div key={index} className='shimmerCard mx-4 my-4'>
          {/* Shimmer effect */}
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
