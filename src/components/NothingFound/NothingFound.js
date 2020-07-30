import React from 'react'
import notFound from '../../not-found.png'
import './NothingFound.css'

const NothingFound = () => {
    return (
        <div className='NothingFound'>
            <img className='NothingFound__img' src={notFound} alt='No results'></img>
            <h1 className='NothingFound__title'>No results for your search!</h1>
        </div>
    )
}

export default NothingFound