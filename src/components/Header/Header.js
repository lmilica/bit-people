import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FaRedo } from 'react-icons/fa'
import { FaMicrosoft } from 'react-icons/fa'
import './Header.css'



const Header = ({ changeView, isListView, refreshUsers }) => {
    return (
        <header className='Header'>
            <h1 className='Header__title'>BIT People</h1>
            <div className='Header__icons'>
                <span className='Header__icons_rel' onClick={refreshUsers}><FaRedo /></span>
                {isListView ?
                    <span onClick={changeView} className='Header__icons_gird grid'><FaMicrosoft /></span>
                    : <span onClick={changeView} className='Header__icons_list'><FaBars /></span>
                }
            </div>
        </header>
    )
}
export default Header