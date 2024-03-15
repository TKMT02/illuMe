"use client"
import styles from '@/styles/sub_header.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})


export default function subHeader() {
    return (
        <div className={styles.sub_header}>
            <div className={styles.sub_header_container}>
                <p>退出</p>
                <h1>Web制作合宿</h1>
                <Image src='assets/icon-menu.svg' width={30} height={30} alt='メニュー' loading='lazy' />
            </div>
        </div>
    )
};