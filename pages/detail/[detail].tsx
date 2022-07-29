import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../src/styles/scss/detail.module.scss';
import { Utterances } from 'utterances-react-component';

type BookType = {
  id: number;
  bookTitle: string;
  bookSubTitle: string;
  author: string;
  publisher: string;
  summary: string;
  kyobo: string;
  yes24: string;
  sharing: string;
  img: string;
  suggestion: string[];
};

const Detail = () => {
  const router = useRouter();
  const query = router.query;
  const [book, setBook] = useState<BookType>();

  useEffect(() => {
    fetch('/assets/mock/mock.json')
      .then((res) => res.json())
      .then((res) => {
        const dataList = res.data;

        for (let i = 0; i < dataList.length; i++) {
          if (dataList[i].category === query.detail) {
            const bookList = dataList[i].bookList;
            for (let j = 0; j < bookList.length; j++) {
              if (bookList[j]['id'] === Number(query.id)) {
                setBook(bookList[j]);
                break;
              }
            }
          }
        }
      });
  }, [query]);

  return (
    <div>
      {book?.img && (
        <div className={styles.detailWrapper}>
          <div className={styles.img}>
            <Image alt='img' src={book.img} width={280} height={380}></Image>
          </div>
          <div className={styles.contentWrapper}>
            <h1>{book.bookTitle}</h1>
            <h2>{book.bookSubTitle}</h2>
            <div className={styles.spanDiv}>
              <span>{book.author}</span> | <span>{book.publisher}</span>
            </div>
            <p>
              <span>책 소개</span>
              {book.summary}
            </p>

            <div className={styles.links}>
              <span>바로 구매하기</span>
              <a href={book.kyobo} className={styles.link}>
                교보
              </a>
              <a href={book.kyobo} className={styles.link}>
                yes24
              </a>
            </div>

            <p>
              <span>추천사</span>
              {book.suggestion}
            </p>
          </div>
        </div>
      )}
      <Utterances
        repo='kk3june/dev-road-utterance'
        theme='github-dark'
        issueTerm='pathname'
      />
    </div>
  );
};

export default Detail;
