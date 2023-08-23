import { ReactNode, FC } from 'react';

import Header from "./header/Header";
import Footer from "./footer/Footer";

import styles from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.root__body}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;