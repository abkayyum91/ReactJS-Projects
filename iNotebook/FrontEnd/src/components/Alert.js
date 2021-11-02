import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const Alert = () => {
    const context = useContext(NoteContext);
    const { alert } = context;

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div style={{ height: '45px', display:"contents" }}>
            {alert && <div className={`alert alert-${alert.type} py-2 my-0 fade show`} role="alert">
                <strong>{capitalize(alert.type)}! </strong> {alert.msg}
            </div>}
        </div>
    )
}

export default Alert
