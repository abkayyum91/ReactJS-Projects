import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../context/notes/NoteContext'

const Note = () => {
    const context = useContext(NoteContext);
    const { notes, loading, user, fetchNotes } = context;

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {notes.length > 0 && notes.map((note) => {
                return <NoteItem note={note} key={note.id} />
            })}
            {user && !loading && notes.length === 0 && <p className="lead">You don't have any note!</p>}
        </>
    )
}

export default Note
