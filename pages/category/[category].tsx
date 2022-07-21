import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Book from '../../src/components/atoms/book';
import ContentCenter from '../../src/components/template/ContentCenter';

type CategoryProps = {
  id: number;
  bookTitle: string;
  imgSrc: string;
};

function Category() {
  const router = useRouter();
  const query = router.query;
  const params = query['category'];
  const [group, setGroup] = useState<CategoryProps[]>();

  useEffect(() => {
    fetch('/assets/mock/mock.json')
      .then((res) => res.json())
      .then((res) => {
        const dataList = res.data;
        for (let i = 0; i < dataList.length; i++) {
          if (dataList[i].category === params) {
            setGroup(dataList[i].bookList);
          }
        }
      });
  }, []);

  return (
    <div>
      {group?.map((el) => (
        <Book key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Category;
