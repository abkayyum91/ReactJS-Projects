import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <button className={`btn btn-primary ${props.size} ${props.mx} ${props.my} ${props.px} ${props.py}`}>{props.msg}</button>
    )
}

export default ButtonPrimary
