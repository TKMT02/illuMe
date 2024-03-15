"use client"
import Image from 'next/image';
import styles from '@/styles/room.module.scss';
import JoinButton from '@/components/button';
import UserIcon from '@/components/userIcon';
import { useHeaderContext } from '@/contexts/HeaderContext';
type RoomProps = {
    roomName: string;
    href: string;
    count: number;
}

export default function room(props: RoomProps) {
    const { toggleHeader } = useHeaderContext(); // 追加
    return (
        <div className={styles.room_area}>
            <div className={styles.room_header}>
                <h1 className={styles.room_name}>{props.roomName}</h1>
                <JoinButton title="入室" href={props.href} onClick={toggleHeader} />
            </div>
            <div className={styles.room_userIcon}>
                {[...Array(4)].map((_, index) => (
                    <UserIcon key={`userIcon-${index}`} random={index} />
                ))}
                <div className={styles.room_count}>+{props.count}</div>
            </div>
        </div>
    )
};