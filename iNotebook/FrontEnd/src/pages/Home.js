import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import AddNoteForm from '../components/AddNoteForm'
import Note from '../components/Note'
import Spinner from '../components/Spinner'
import NoteContext from '../context/notes/NoteContext'


const Home = () => {
    const context = useContext(NoteContext);
    const { loading, user } = context;

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6 bg-light">
                        <h2 className="my-3"> Save Your Note On Cloud </h2>
                        <AddNoteForm />
                    </div>
                    <div className="col-md-6">
                        <h2 className="my-2">Your Saved Notes</h2>
                        <hr />
                        <div className="row note-list">
                            {loading && <Spinner />}
                            {!loading && !user && <div className="p-3">
                                <p className="fs-4 lead">Login to view your notes!</p>
                                <Link to="/signin"><button className="btn btn-primary">SingIn</button></Link>
                            </div>}
                            {user && <Note />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
