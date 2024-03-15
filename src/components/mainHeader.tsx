"use client"
import styles from '@/styles/main_header.module.scss';
import { Dosis } from 'next/font/google';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})


export default function mainHeader() {
    return (
        <div className={styles.main_header}>
            <h1 className={DosisFont.className}>illuMe</h1>
            <input type='text' placeholder='部屋IDを入力' />
        </div>
    )
};