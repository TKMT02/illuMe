
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/button.module.scss';

type ButtonProps = {
    title: string;
    href: string;
    onClick?: () => void;
}

export default function button(props: ButtonProps) {

    return (
        <Link href={props.href} className={styles.button} onClick={props.onClick}>
            <p>{props.title}</p>
        </Link>
    )
}
