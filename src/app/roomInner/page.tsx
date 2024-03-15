"use client";
import { useState, useEffect } from 'react';
import Comment from '@/components/comment';
import CommentInput from '@/components/commentInput';
import Empathy from '@/components/empathy';
import EmpathyCome from '@/components/empathyCome';
import styles from '@/styles/roomInner.module.scss';

export default function RoomInner() {

    const [empathyShown, setEmpathyShown] = useState(false);
    const [empathyComeShown, setEmpathyComeShown] = useState(false);
    const [empathyKey, setEmpathyKey] = useState(0);
    const [sendComment, setSendComment] = useState(false);


    useEffect(() => {
        if (empathyComeShown) {
            const timer = setTimeout(() => {
                setEmpathyComeShown(false);
            }, 10000); // 表示後3秒で非表示にする
            return () => clearTimeout(timer);
        }
    }, [empathyComeShown]);

    const showEmpathy = () => {
        setEmpathyShown(true);
        setEmpathyKey(prevKey => prevKey + 1); // キーを更新
        setTimeout(() => setEmpathyShown(false), 10000); // アニメーション後に非表示にする

    };
    const [comments, setComments] = useState([
        { text: "映画", isMine: false },
        { text: "ラーメン", isMine: false },
        { text: "ゲーム", isMine: false },
        { text: "アニメ", isMine: false },
        { text: "ギター", isMine: false }]);


    return (
        <>
            <div className={styles.postsWrap}>
                {comments.map((comment, index) => (
                    <Comment key={index} text={comment.text} onGoodClicked={showEmpathy} isMine={comment.isMine} />
                ))}
                {empathyShown && <Empathy key={empathyKey} />}
                {empathyComeShown && <EmpathyCome key={empathyKey} />}
                <CommentInput onSend={(text) => {
                    setComments([...comments, { text, isMine: true }]);
                    setTimeout(() => setEmpathyComeShown(true), 3000); // 3秒後にempathyComeを表示
                }} />

            </div>

        </>
    )
}

