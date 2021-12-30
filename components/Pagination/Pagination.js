import React from 'react';
import {getPagesArray} from "../../utils/pages";
import cl from "./Pagination.module.css";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className={cl.page_wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? cl.page +' '+ cl.page_current : cl.page}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;