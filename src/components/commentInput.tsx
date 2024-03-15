"use client"
import { useState } from 'react';
import styles from '@/styles/commentInput.module.scss';
import Image from 'next/image';

export default function CommentInput({ onSend }: { onSend: (text: string) => void }) {
    const [inputText, setInputText] = useState('');


    return (
        <div className={styles.commentinput_area}>
            <div className={styles.commentinput_area_container}>
                <div className={styles.commentinput_text}>
                    <input type="text" placeholder='文字を入力' style={{ height: 40 }} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <p>が好き</p>
                </div>
                <div className={styles.commentinput_send} onClick={() => { onSend(inputText); setInputText(''); }}>
                    <Image src="assets/icon-send.svg" width={20} height={20} loading='lazy' alt="送信" />
                </div>
            </div>
        </div>
    )
};