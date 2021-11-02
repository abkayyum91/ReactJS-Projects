import React, { useContext, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const EditNoteModal = (props) => {
    const { title, description, tag } = props.note;
    const [editedNote, setEditedNote] = useState({ etitle: title, edescription: description, etag: tag })

    // Using context
    const context = useContext(NoteContext);
    const { editNote } = context;

    // using ref Hook for referencing an element
    const refClose = useRef(null);
    const refModal = useRef(null);

    const handleUpdate = () => {
        editNote(props.id, editedNote.etitle, editedNote.edescription, editedNote.etag);
        refClose.current.click();
    }

    // handling onChange input
    const handleChange = (e) => {
        setEditedNote({ ...editedNote, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* iCon for trigerring modal */}
            <i className="fas fa-edit mx-2" ref={refModal} data-bs-toggle="modal" data-bs-target={`#modal${props.id}`}></i>

            {/* modal itself */}
            <div className="modal fade" id={`modal${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Your Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Note Title</label>
                                <input type="text" onChange={handleChange} className="form-control" id="etitle" name="etitle" value={editedNote.etitle} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Note Description</label>
                                <textarea rows="3" onChange={handleChange} className="form-control" id="edescription" name="edescription" value={editedNote.edescription} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <input type="text" onChange={handleChange} className="form-control" id="etag" name="etag" value={editedNote.etag} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleUpdate} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditNoteModal
