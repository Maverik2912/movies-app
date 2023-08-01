import {NavLists} from "./NavLists/NavLists";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavLists />
        </div>
    );
};

export {Navbar};