import React from 'react'
import found404 from '@/assets/404.png';
import styles from '@/styles/error.less';

function Found404() {
  return (
    <div className={styles.error}>
        <img src={found404} alt="img" />
    </div>
  )
}

export default Found404