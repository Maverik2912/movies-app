import { useContext } from "react";
import { MovieAppContext } from "../../layouts/MainLayout";
import styles from './MoviePagination.module.css';

const MoviePagination = ({page, setPage, handleNextPage, isLastPage, isLoading }) => {
    const { isDark } = useContext(MovieAppContext);

    return (
        <div className={`${styles.buttons} ${isDark ? styles.dark : styles.light}`}>
            <button className={styles.firstPage} disabled={page === 1 || isLoading} onClick={() => setPage(1)}>
                To the first page
            </button>
            <button disabled={page === 1 || isLoading} onClick={() => setPage(page - 1)}>
                Prev page
            </button>
            <p>Page {page}</p>
            <button disabled={isLastPage || isLoading} onClick={() => setPage(page + 1)}>
                Next page
            </button>
        </div>
    );
};

export { MoviePagination };
