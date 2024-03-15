"use client"
import styles from '@/styles/userInfo.module.scss'; import Image from 'next/image';

export default function UserInfo() {
    return (
        <div className={styles.user_area}>
            <Image src='https://picsum.photos/500' width={50} height={50} loading='lazy' alt="アイコン"></Image>
            <div className={styles.user_area_info}>
                <p className={styles.user_name}>本田 有人</p>
                <p className={styles.user_birth}>Birth. 02/02</p>
            </div>
            <div className={styles.followBtn}>
                <p>フォロー</p>
            </div>
        </div>
    )
};