import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import ButtonPrimary from './ButtonPrimary'
import NoteContext from '../context/notes/NoteContext'

const AddNoteForm = () => {
    // useHistory is used to redirect from one page to another
    const history = useHistory();
    const context = useContext(NoteContext);
    const { addNote, user } = context;

    const [newNote, setNewNote] = useState({ title: "", description: "", tag: "default" })

    // Handling form submission
    const handlSubmit = (e) => {
        e.preventDefault();
        if (user) {
            addNote(newNote.title, newNote.description, newNote.tag);
            setNewNote({ title: "", description: "", tag: "" })
        }
        else {
            history.push("/signin");
        }
    }

    // Handling onChange input field
    const handleChange = (e) => {
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
    }

    return (
        <form action="" onSubmit={handlSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Note Title</label>
                <input type="text" onChange={handleChange} value={newNote.title} className="form-control" id="title" name="title" placeholder="Note titile.." />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Note Description</label>
                <textarea rows="4" onChange={handleChange} value={newNote.description} className="form-control" id="description" name="description" placeholder="Note description.."></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" onChange={handleChange} value={newNote.tag} className="form-control" id="tag" name="tag" placeholder="Note tag.." />
            </div>
            <div className="mb-3">
                <ButtonPrimary msg="Save Note" />
            </div>
        </form>
    )
}

export default AddNoteForm
