
"use client"
import Image from 'next/image';
import styles from '@/styles/hobby.module.scss';

export default function Hobbys(){
    return(
        <div className={styles.hobby_area}>
            <h2>趣味</h2>
            <ul>
                <li>
                    <Image src="assets/icon-music.svg" width={60} height={60} loading='lazy' alt="音楽"></Image>
                    <p>音楽</p>
                </li>
                <li>
                    <Image src="assets/icon-airport.svg" width={60} height={60} loading='lazy' alt="旅行"></Image>
                    <p>旅行</p>
                </li>
                <li>
                    <Image src="assets/icon-cycle.svg" width={60} height={60} loading='lazy' alt="自転車"></Image>
                    <p>自転車</p>
                </li>
                <li>
                    <Image src="assets/icon-airport.svg" width={60} height={60} loading='lazy' alt="飛行機"></Image>
                    <p>飛行機</p>
                </li>
            </ul>
        </div>
    )
};
