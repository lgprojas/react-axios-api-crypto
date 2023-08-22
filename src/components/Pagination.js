import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate, active }) {
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination mt-2'>
        {pageNumbers.map(number => (
            <li key={number} className={(active == number ? 'page-item active' : 'page-item')}>
                <a onClick={() => paginate(number)} href='!#' className='page-link'>
                    {number}
                </a>
            </li>
        ))}
        </ul>
    </nav>
  )
}

export default Pagination