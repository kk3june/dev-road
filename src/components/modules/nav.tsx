import React from 'react';
import Link from 'next/link';
import styles from '../../../src/styles/scss/components/modules/nav.module.scss';

const nav = () => {
  return (
    <Link href='/'>
      <div className={styles.nav}>
        <h1>개발의 정석</h1>
      </div>
    </Link>
  );
};

export default nav;
