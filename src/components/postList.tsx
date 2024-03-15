
"use client"
import Image from 'next/image';
import styles from '@/styles/postlist.module.scss';

export default function PostList(){
    return(
        <div className={styles.postlist_area}>
            <h2>最近のポスト</h2>
            <ul>
                <li>音楽が好き</li>
                <li>映画が好き</li>
                <li>K-POPが好き</li>
                <li>韓国ドラマが好き</li>
                <li>ソウルが好き</li>
            </ul>
        </div>
    )
};
