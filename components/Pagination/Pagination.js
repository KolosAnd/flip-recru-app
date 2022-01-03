import React from 'react';
import Router, {useRouter} from 'next/router'

import styles from './Pagination.module.css'

const Pagination = ({totalPages}) => {
    const router = useRouter();
    const { query } = router || {};
    const page = (query.page && +query.page) || 1;
    const isLastPage = page === totalPages;
    const onChangePage = (page) => {
        Router.push(`/planets/?page=${page}`);
    }

    return (
        <div className={styles.page_wrapper}>
            <button
                className={styles.button}
                onClick={() => onChangePage(page-1)}
                disabled={page <= 1}>
             PREV
            </button>
            <span className={styles.current}>Page: {page} </span>
            <button 
                className={styles.button}
                onClick={() => onChangePage(page+1)}
                disabled={isLastPage}>
             NEXT
            </button>
        </div>
    )
};

export default Pagination;