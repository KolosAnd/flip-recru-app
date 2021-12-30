import React from 'react';
import Router from 'next/router'

const Pagination = ({page, totalPages}) => {
    const isLastPage = page === totalPages;

    return (
        <div>
            <button
            onClick={() => Router.push(`/planets/?page=${page - 1}`)}
            disabled={page <= 1}
            >
             PREV
            </button>
            <span>Page: {page} </span>
            <button onClick={() => Router.push(`/planets/?page=${page + 1}`)} disabled={isLastPage}>
             NEXT
            </button>
        </div>
    )
};

export default Pagination;