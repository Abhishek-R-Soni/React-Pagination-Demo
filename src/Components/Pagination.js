import React from 'react';

const Pagination = (props) => {
    const pageNum = [...Array((Math.ceil(props.totalPosts / props.page))).keys()]

    return (
        <nav>
            <ul className="pagination">
                {pageNum.map(number => (
                    <li key={number+1} className="page-item">
                        <a onClick={() => props.paginate(number+1)} href="!#" className="page-link">{number+1}</a>
                    </li>
                ))}
            </ul>
        </nav>       
    )
}

export default Pagination;