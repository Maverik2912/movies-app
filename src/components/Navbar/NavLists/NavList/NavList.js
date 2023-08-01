import {useContext} from "react";
import {NavLink} from "react-router-dom";

import {genId} from "../../../../utils/genId";
import {links} from "../../../../constants/links/links";
import {MovieAppContext} from "../../../../layouts/MainLayout";
import styles from './NavList.module.css';

const NavList = ({navList}) => {
    const {selectedValue, setSelectedValue, isDark} = useContext(MovieAppContext);
    const {title, items} = navList;

    const clickHandler = () => {
        selectedValue && setSelectedValue('');
    }

    return (
        <div className={styles.navList}>
            <h4 className={`${styles.title} ${isDark ? styles.dark : styles.light}`}>{title}</h4>
            <ul>
                {items.map(item => {
                    if (item === 'Movies') {
                        return <NavLink
                            onClick={clickHandler}
                            key={genId(4)}
                            className={isActive => isActive ? styles.active : styles.link}
                            id={isDark ? styles.dark : styles.light}
                            to={links.MOVIES}>{item}</NavLink>
                    } else {
                        return <li key={genId(4)} className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>{item}</li>
                    }
                })}
            </ul>
        </div>
    );
};

export {NavList};