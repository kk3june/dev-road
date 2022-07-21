import React from 'react';
import Image from 'next/image';

const Book = ({ data }: any) => {
  return (
    <div key={data.id}>
      <Image alt='img' src={data.img} width={200} height={300} />
      {data.bookTitle}
    </div>
  );
};

export default Book;
