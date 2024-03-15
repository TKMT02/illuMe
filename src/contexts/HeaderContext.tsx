"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import MainHeader from '@/components/mainHeader';
import SubHeader from '@/components/subHeader';
import ProfileHeader from '@/components/profileHeader';

const HeaderContext = createContext<{
    currentHeader: ReactNode;
    setCurrentHeader: (header: ReactNode) => void;
}>({
    currentHeader: null, // ReactNodeはnullを含むので問題なし
    setCurrentHeader: () => { } // ここは空の関数で問題ないですが、型を合わせる必要があります。
});

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const [currentHeader, setCurrentHeader] = useState<ReactNode>(null);

    useEffect(() => {
        switch (pathname) {
            case '/':
                setCurrentHeader(<MainHeader />);
                break;
            case '/main':
                setCurrentHeader(<MainHeader />);
                break;
            case '/roomInner':
                setCurrentHeader(<SubHeader />);
                break;
            case '/profile':
                setCurrentHeader(<ProfileHeader />);
                break;
            default:
                setCurrentHeader(null); // デフォルトではヘッダーなし、または別のヘッダーを設定
        }
    }, [pathname]);

    return (
        <HeaderContext.Provider value={{ currentHeader, setCurrentHeader }}>
            {children}
        </HeaderContext.Provider>
    );
};