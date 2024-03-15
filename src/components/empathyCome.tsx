"use client";
import { useEffect, useState } from 'react';
import styles from '@/styles/empathy.module.scss';
import DetailAC from '@/components/detailAc';

export default function Empathy() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        // アニメーションをリセットして再開始する
        setStartAnimation(false);
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 2000); // すぐにアニメーションを開始

        return () => {
            clearTimeout(timer);
        }; // コンポーネントのアンマウント時にタイマーをクリア
    }, []); // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

    return (
        <div className={`${styles.empathyLog} ${startAnimation ? styles.fadeOut : ''}`}>
            <p className={styles.empathyLog_msg}><span>上森たくと</span>に共感されました。</p>
            <DetailAC />
        </div>
    );
}
