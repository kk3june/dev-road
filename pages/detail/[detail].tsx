import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  suggestiong: string[];
};

const Detail = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query);
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
  }, []);
  console.log(book?.bookTitle);

  return <div>{book?.bookTitle}</div>;
};

export default Detail;
