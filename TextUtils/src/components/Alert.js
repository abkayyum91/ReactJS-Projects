import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div style={{ height: '45px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} py-2 my-0 fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}! </strong> {props.alert.msg}
            </div>}
        </div>
    )
}
