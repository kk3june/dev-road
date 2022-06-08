import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Category() {
  const router = useRouter();
  const query = router.query;
  const params = query['category'];
  const [group, setGroup] = useState<{ id: string; bookTitle: string }[]>();

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
        <div key={el.id}>{el.bookTitle}</div>
      ))}
    </div>
  );
}

export default Category;
