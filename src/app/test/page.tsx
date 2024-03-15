"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import Splash from '@/components/splash';
import Rooms from '@/components/room';
import Mainheader from '@/components/mainHeader';
import GroupAdd from '@/components/addGroup';
import Mainfooter from '@/components/footer';
import Subheader from '@/components/subHeader';
import Comment from '@/components/comment';
import UserInfo from '@/components/userInfo';
import Hobbys from '@/components/hobby';
import PostList from '@/components/postList';
import CommentInput from '@/components/commentInput';
import Empathy from '@/components/empathy';



const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function App() {
    return (
        <>
            <Mainheader />
            <Splash />
            <Rooms />
            <GroupAdd />
            <Mainfooter />
            <Subheader />
            <Comment />
            <UserInfo />
            <Hobbys />
            <PostList />
            <CommentInput />
            <Empathy />
        </>
    )
}

