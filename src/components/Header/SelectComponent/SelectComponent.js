import {useContext, useEffect, useRef, useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {moviesService} from "../../../services/moviesService";
import {links} from "../../../constants/links/links";
import {MovieAppContext} from "../../../layouts/MainLayout";
import './SelectComponent.css';

const SelectComponent = ({inputLabel, options}) => {
    const {selectedValue, setSelectedValue, isDark} = useContext(MovieAppContext);

    const [genresList, setGenresList] = useState([]);
    const [genreName, setGenreName] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        moviesService.getGenres().then(({data}) => setGenresList(data.genres));
    }, [])

    useEffect(() => {
        if(selectedValue) {
            if(inputLabel === 'All genres') {
                for (const genreItem of genresList) {
                    if(genreItem.id === selectedValue) {
                        setGenreName(genreItem.name);
                    }
                }
                navigate(`${links.GENRES}/${genreName}/${selectedValue}`);
            } else if(inputLabel === 'All times') {
                navigate(`${links.TIME}/${selectedValue}`)
            }
        }
    }, [selectedValue, genreName]);

    return (
        <FormControl
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            className={`custom-form-control ${isDark ? "dark" : "light"}`}
        >
            <InputLabel className={isDark ? 'dark' : 'light'} id="demo-select-small-label">{inputLabel}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectedValue}
                onChange={e => setSelectedValue(e.target.value)}
                label={inputLabel}
            >
                {options.map(option => <MenuItem
                    key={option.name}
                    value={option.id}>{option.name}
                </MenuItem>)}
            </Select>
        </FormControl>

    );
};

export {SelectComponent};