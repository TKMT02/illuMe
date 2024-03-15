"use client"
import { useEffect, useState } from 'react';
import styles from '@/styles/comment.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

type CommentProps = {
    text: string;
    onGoodClicked?: () => void; // 追加
    isMine?: boolean;
}


export default function mainfooter(props: CommentProps) {
    const [Good, setGood] = useState(false);

    return (
        <div className={`${styles.comment_area} ${props.isMine ? styles.mine : ""}`}>
            <p>{props.text}が好き！</p>
            <div className={styles.comment_good} onClick={() => { setGood(!Good); props.onGoodClicked?.(); }}>
                {Good ? <Image src="assets/iconGood_after.svg" width={30} height={30} loading='lazy' alt="グッドボタンが押された" /> : <Image src="assets/iconGood.svg" width={30} height={30} loading='lazy' alt="グッドボタン" />}
            </div>
        </div>
    )
};