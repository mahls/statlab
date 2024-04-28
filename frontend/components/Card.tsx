import React from 'react';

const Card = ({value, name, type}:{ name:any, value:any, type:any}) => {


  return (
    <div className='h-56 bg-stone-900 rounded-lg border border-stone-700 transform shadow-2xl '>
       <p className='font-bold pt-5 px-5'>{name}</p>
       <div className='border-b border-stone-700 pb-5 rounded'></div>
        <h1 className='font-bold flex justify-center items-center align-center text-4xl mt-14'>{value}{type}</h1>
    </div>
  );
};

export default Card;
