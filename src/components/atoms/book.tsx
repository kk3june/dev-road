import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../src/styles/scss/components/atoms/book.module.scss';

const Book = ({ data, category }: any) => {
  return (
    <div className={styles.bookshelf}>
      <Link
        href={{
          pathname: `/detail/${category}`,
          query: { id: data.id },
        }}
      >
        <div className={styles.bookWrapper}>
          <Image alt='img' src={data.img} width={200} height={300} />
        </div>
      </Link>
    </div>
  );
};

export default Book;
