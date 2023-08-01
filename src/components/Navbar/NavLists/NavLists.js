import {navLists} from "../../../constants/navLists";
import {NavList} from "./NavList/NavList";
import styles from './NavLists.module.css';

const NavLists = () => {
    return (
        <div className={styles.navLists}>
            {navLists.map(navList => <NavList key={navList.title} navList={navList} /> )}
        </div>
    );
};

export {NavLists};