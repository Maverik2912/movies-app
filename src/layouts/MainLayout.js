import {Outlet, useNavigation} from "react-router-dom";
import {createContext, useState} from "react";

import {Header, Preloader, SideBar} from "../components";
import styles from './MainLayout.module.css';

export const MovieAppContext = createContext(null);
const MainLayout = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isDark, setIsDark] = useState(true);

    const navigation = useNavigation();

    return (
        <MovieAppContext.Provider value={{selectedValue, setSelectedValue, isDark, setIsDark}}>
            <div className={`${styles.container} ${isDark ? styles.dark : styles.light}`}>
                <div>
                    <SideBar />
                    <div className={styles.hide}></div>
                </div>
                <div>
                    <Header />
                    {navigation.state === 'loading' ? <Preloader /> :
                        <Outlet context={{setSelectedValue, selectedValue}} />
                    }
                </div>
            </div>
        </MovieAppContext.Provider>
    );
};

export {MainLayout};













