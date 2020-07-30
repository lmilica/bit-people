import React from "react";
import "./GridUser.css";
import {hideEmail} from '../../functions.js'
import PropTypes from 'prop-types'

const GridUser = ({ img, firstName, email, dateOfBirth, gender }) =>{ 
    const dob = new Date(dateOfBirth)
    const day = dob.getDate()
    const month = dob.getMonth()
    const year = dob.getFullYear()

return (
    <div className={`GridUser ${gender === 'female' && 'female'}`}>
        <div className="GridUser__img">
            <img src={img} alt="avatar"></img>
        </div>
        <p className='GridUser__name'>{firstName}</p>
        <p>Email: <i>{hideEmail(email)}</i></p>
        <p>Date of birth: {day}.{month + 1}.{year}</p>
    </div>
)
}


export { GridUser };

GridUser.propTypes = {
    img: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    dateOfBirth: PropTypes.string,
}