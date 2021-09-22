import React from 'react'

function User(props) {
    const {title, details, date} = props.user;
    return (
        <div>
            <p>Name: {title}</p>
            <p>Email Address: {details}</p>
            <p>Email Address: {date}</p>
            <hr className='banner-text hr' />
        </div>
    )
}

export default User
