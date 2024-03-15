"use client"
import Link from 'next/link';
import styles from '@/styles/detail_ac.module.scss';


export default function Empathy() {
    return (
        <Link className={styles.detailAccount} href={'/profile'}>
            もっと知りたい！
        </Link>
    )
};