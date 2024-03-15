"use client"
import Image from 'next/image';
import styles from '@/styles/userIcon.module.scss';
import JoinButton from '@/components/button';

type UserIconProps = {
    random: number;

}
export default function UserIcon(props: UserIconProps) {
    return (
        <Image className={styles.userIcon} src={`https://picsum.photos/500?random=${props.random}`} width={50} height={50} loading='lazy' alt="アイコン" />
    );
};

