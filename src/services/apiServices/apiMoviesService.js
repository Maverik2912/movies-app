import axios from "axios";
import {baseMoviesURL} from "../../constants/urls/urls";
import {API_KEY} from "../../constants/apiKey/apiKey";

export const apiMoviesService = axios.create({
    baseURL: baseMoviesURL,
    headers: {
        Authorization: API_KEY,
    }
});