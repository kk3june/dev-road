import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles/scss/roadmap.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Roadmap() {
  const [category, setCategory] = useState<
    {
      category: string;
      categoryTitle: string;
    }[]
  >();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch('/assets/mock/mock.json')
      .then((res) => res.json())
      .then((res) => {
        const dataList = res.data;
        const arr = [];
        for (let i = 0; i < dataList.length; i++) {
          arr.push({
            category: dataList[i]['category'],
            categoryTitle: dataList[i]['categoryTitle'],
          });
        }
        setCategory(arr);
      });
  }, []);
  console.log(category);

  return (
    <div className={styles.wrapper}>
      <div className={styles.roadMap}>
        <div className={styles.intro}>
          <h1>header</h1>
          <h3>blabla..</h3>
        </div>
        <div className={styles.section}>
          <div className={styles.categoryWrapper}>
            {category &&
              category.map((el) => (
                <Link key={el['category']} href={`/category/${el['category']}`}>
                  <a
                    className={styles.aTag}
                    href={`/category/${el['category']}`}
                  >
                    <div className={styles.categoryItem} data-aos='fade-up'>
                      <h3 className={styles.categoryHeader}>
                        {el['categoryTitle']}
                      </h3>
                      <Image
                        className={styles.logos}
                        alt='image'
                        width={70}
                        height={70}
                        src={`/assets/images/logos/${el['category']}.png`}
                      />
                    </div>
                  </a>
                </Link>
              ))}
          </div>
          <div className={styles.lineContainer}>
            <svg
              viewBox='0 0 388 976'
              fill='none'
              preserveAspectRatio='xMidYMax meet'
              strokeWidth={4}
            >
              <path
                d='M217.5 1C155.333 17.5 40.2999 56.9 77.4999 82.5C124 114.5 383.5 103.5 386.5 161C389.5 218.5 -10.4999 205 1.50006 273C13.5001 341 386.5 293.5 386.5 402.5C386.5 511.5 1.50006 484.5 1.50006 559.5C1.50006 634.5 374.5 590.5 374.5 682.5C374.5 774.5 11.5 699.5 14.5 789C17.5 878.5 374.5 824 374.5 886.5C374.5 949 221.5 925.5 201.5 946.5C185.5 963.3 200.833 998.833 210.5 1014.5'
                stroke='#b1b4bc'
              />
            </svg>
          </div>
          <div className={styles.destination}>🚀 프론트엔드 개발자</div>
        </div>
      </div>
    </div>
  );
}
