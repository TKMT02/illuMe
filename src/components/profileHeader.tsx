"use client"
import styles from '@/styles/profile_header.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';
import UserInfo from '@/components/userInfo';
import Link from 'next/link';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function Profile_header() {
    return (
        <div>
            <Link href="/roomInner" className={styles.back_link}>
                <Image src="assets/icon-back.svg" width={20} height={20} alt='' />
            </Link>
            <div className={styles.profile_container}>
                <UserInfo />
                <p className={styles.profile_container_message}>僕の趣味はモンスターエナジーを飲むこと！楽しい人生を送るんだ！わーい！</p>
            </div>
        </div>

    )
};