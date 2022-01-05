import React from 'react';
import Router, {useRouter} from 'next/router'

import styles from './Pagination.module.css'
import {getPagesArray} from "../../utils/pages";

const Pagination = ({totalPages, url}) => {
    const router = useRouter();
    const { query } = router || {};
    const pageOne = (query.page && +query.page) || 1;
    const isLastPage = pageOne === totalPages;
    const onChangePage = (pageOne) => {
        Router.push(`/${url}/?page=${pageOne}`);
    }

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={styles.page_wrapper}>
            <button
                className={styles.button}
                onClick={() => onChangePage(pageOne-1)}
                disabled={pageOne <= 1}>
                PREV
            </button>
            <div className={styles.page_list_wrapper}>
                {pagesArray.map(p =>
                    <span
                        onClick={() => onChangePage(p)}
                        key={p}
                        className={pageOne === p ? styles.page +' '+ styles.page_current : styles.page}
                    >
                        {p}
                    </span>
                )}
            </div>
            <button
                className={styles.button}
                onClick={() => onChangePage(pageOne+1)}
                disabled={isLastPage}>
                NEXT
            </button>
        </div>
    )
};

export default Pagination;