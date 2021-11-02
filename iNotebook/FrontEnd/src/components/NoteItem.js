import React, { useContext } from 'react'
import '../App.css'
import NoteContext from '../context/notes/NoteContext'
import EditNoteModal from './EditNoteModal';


const NoteItem = (props) => {
    const { id, title, description, tag } = props.note;

    const context = useContext(NoteContext);
    const { deleteNote, bookmarkNote } = context;

    return (
        <div className="col-12 col-lg-6">
            <div className="card text-dark bg-light mb-3 mx-auto" style={{ "maxWidth": "18rem" }}>
                <div className="card-header d-flex justify-content-between">
                    <p className="mb-2">{tag}</p>
                    <div className="icons">
                        <EditNoteModal note={props.note} id={id} />
                        <i className="fas fa-trash-alt mx-2" onClick={() => { deleteNote(id) }}></i>
                        <i className="far fa-bookmark mx-2" onClick={() => { bookmarkNote(id) }}></i>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
