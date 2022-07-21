import React from 'react';
import Image from 'next/image';
import styles from '../../../src/styles/scss/components/atoms/book.module.scss';

const Book = ({ data }: any) => {
  return (
    <div className={styles.bookshelf}>
      <div className={styles.bookWrapper}>
        <Image alt='img' src={data.img} width={200} height={300} />
      </div>
    </div>
  );
};

export default Book;
