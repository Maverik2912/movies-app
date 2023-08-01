import {useContext} from "react";

import {UserInfo} from "../UserInfo/UserInfo";
import styles from './SideBar.module.css';
import {Navbar} from "../Navbar/Navbar";
import {SignOut} from "../SignOut/SignOut";
import {MovieAppContext} from "../../layouts/MainLayout";

const SideBar = () => {
    const {isDark} = useContext(MovieAppContext);
    return (
        <div className={`${styles.sidebar} ${isDark ? styles.dark : styles.light}`}>
            <UserInfo />
            <Navbar />
            <SignOut />
        </div>
    );
};

export {SideBar};