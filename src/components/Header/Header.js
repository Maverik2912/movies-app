import {useContext, useEffect, useState} from "react";
import {Switch} from "@mui/material";

import {SelectComponent} from "./SelectComponent/SelectComponent";
import {moviesService} from "../../services/moviesService";
import {options} from "../../constants/options/options";
import styles from './Header.module.css';
import {SearchInput} from "./SearchInput/SearchInput";
import {MovieAppContext} from "../../layouts/MainLayout";

const Header = () => {
    const {setIsDark, isDark} = useContext(MovieAppContext);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        moviesService.getGenres().then(({data}) => setGenres(data.genres));
    }, []);

    return (
        <header className={isDark ? styles.dark : styles.light}>
            <div className={styles.gridContainer}>
                <div className={styles.switchContainer}>
                    <div className={`${styles.switch} ${isDark ? styles.dark : styles.light}`}><Switch onChange={() => setIsDark(prev => !prev)} defaultChecked color="default"/></div>
                </div>

                <SelectComponent
                    inputLabel='All genres'
                    options={genres} />
                <SelectComponent
                    inputLabel='All times'
                    options={options} />
                <SearchInput />
            </div>
        </header>
    );
};

export {Header};