"use client"
import styles from '@/styles/header.module.scss';
import { useHeaderContext } from '@/contexts/HeaderContext';
import MainHeader from "@/components/mainHeader";
import SubHeader from "@/components/subHeader";
export default function Header() {

  const { currentHeader } = useHeaderContext();

  return (
    <div className={styles.header}>
      {currentHeader}
    </div>
  );
}
