"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import Splash from '@/components/splash';
import Room from '@/components/room';
import Mainheader from '@/components/mainHeader';
import Header from '@/components/header';
import GroupAdd from '@/components/addGroup';
import Footer from '@/components/footer';
import Subheader from '@/components/subHeader';
import Comment from '@/components/comment';
import UserIcon from '@/components/userIcon';
import styles from '@/styles/main.module.scss';



const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function Main() {

    return (
        <main className={styles.main}>
            <div className={styles.room_wrapper}>
                <Room roomName="Web制作合宿" href="/roomInner" count={20} />
                <Room roomName="ECC WebDesign" href="/roomInner" count={15} />
                <Room roomName="軽音部" href="/roomInner" count={10} />
            </div>
        </main>
    )
}

