import React from 'react'
import './Counter.css'

const Counter = ({ users}) => {
    let male = 0;
    let female = 0;

    users.forEach(user => {
        if(user.gender === 'male'){
            return male ++
        } else {
            female ++
        }
    });

    return (
            <span className='Counter'>
                Male: {male} Female: {female}
            </span>
    )
}
export default Counter