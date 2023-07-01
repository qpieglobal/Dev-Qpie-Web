'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from './page.module.css';

export default function Home() {
  const { push } = useRouter();

  useEffect(()=>{
    setTimeout(redirectToLogin,1000)
  },[])
  
  function redirectToLogin(){
    push('/login');
  }

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/qpie_home.png"
          alt="QPie"
          width={521}
          height={379}
          priority
        />
      </div>
    </main>
  )
}

