import React, { useState, useEffect } from 'react'
import NoteContext from './NoteContext';
import jwt_decode from "jwt-decode";



const NoteState = (props) => {
    const url = 'http://127.0.0.1:8000/api/notes/';

    // Using useState Hook
    const [notes, setNotes] = useState([]);
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)


    // Showing alert on actions
    const showAlert = (type, msg) => {
        setAlert({
            type: type,
            msg: msg
        });
        setTimeout(() => {
            setAlert(null);
        }, 4000);
    }

    // Fetching all notes from database using django-rest api
    const fetchNotes = async () => {
        try {
            setLoading(true);
            const params = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authToken.access),
                }
            }
            const respose = await fetch(url, params)
            const data = await respose.json();
            if (respose.status === 200) {
                setNotes(data)
                setLoading(false);
            }
            else {
                showAlert('danger', 'something went wrong!')
                setNotes(notes)
                setLoading(false);
            }
        } catch (error) {
            // showAlert('danger', 'something went wrong!')
            setLoading(false);
        }

    }

    // Adding a new notes to the database using api
    const addNote = async (title, description, tag) => {
        const docotedToken = jwt_decode(authToken.access)

        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authToken.access),
            },
            body: JSON.stringify({ user: docotedToken.user_id, title, description, tag })
        }
        const response = await fetch(url, params);
        const data = await response.json();

        if (response.status === 201) {
            setNotes(notes.concat(data));
            showAlert('success', 'Your note added successfully!')
        } else {
            showAlert('warning', 'Something went wrong!')
        }
    }


    // Updating notes in the databse using api
    const editNote = async (id, title, description, tag) => {
        const docotedToken = jwt_decode(authToken.access)
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authToken.access),
            },
            body: JSON.stringify({ id: id, user: docotedToken.user_id, title, description, tag })
        }

        const response = await fetch(url, params);
        if (response.status === 201) {
            showAlert('success', 'Your note is updated successfully!')
            // Logic to edit client side
            const newNotes = JSON.parse(JSON.stringify(notes))
            for (let index = 0; index < newNotes.length; index++) {
                const element = newNotes[index];
                if (element.id === id) {
                    newNotes[index].title = title;
                    newNotes[index].description = description;
                    newNotes[index].tag = tag;
                    break;
                }
            }
            setNotes(newNotes);
        } else {
            showAlert('warning', 'Something went wrong!')
        }
    }


    // Deleting note in the databse using api
    const deleteNote = async (id) => {
        const delNote = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authToken.access),
            },
            body: JSON.stringify({ id: id })
        }
        try {
            await fetch(url, delNote).then(() => {
                showAlert('danger', 'Your note is deleted successfully!')
            });
        } catch (error) {
            showAlert('warning', 'Something went wrong!')
        }

        const newNote = notes.filter((note) => { return note.id !== id })
        setNotes(newNote)
    }


    // Bookmark note functionlity
    const bookmarkNote = () => {
        showAlert('warning', 'Your note is bookmarked!');
    }



    // User registration and login functionality
    // Login user
    const signInUser = async (e) => {
        e.preventDefault();

        const newUser = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value })
        }
        const response = await fetch('http://127.0.0.1:8000/api/token/', newUser);
        if (response.status === 200) {
            const data = await response.json();
            setAuthToken(data);
            setUser(jwt_decode(data.access));
            showAlert('success', 'Logged in successfully!')
            localStorage.setItem('authToken', JSON.stringify(data));
        } else {
            showAlert('danger', 'username or password is incorrect')
        }
    }


    // Logout user
    const logOut = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        setNotes([]);
    }


    // Refresh token after 4 minutes automatically
    const refreshToken = async () => {
        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: authToken.refresh })
        }
        const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', params);
        const data = await response.json();
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authToken', JSON.stringify(data));
        } else {
            logOut();
        }
    }


    const contextData = {
        notes: notes,
        addNote: addNote,
        editNote: editNote,
        deleteNote: deleteNote,
        bookmarkNote: bookmarkNote,
        fetchNotes: fetchNotes,
        alert: alert,
        showAlert: showAlert,
        loading: loading,
        user: user,
        authToken: authToken,
        signInUser: signInUser,
        logOut: logOut,

    }

    // componentDidMount
    useEffect(() => {
        let fourMinutes = 1000 * 60 * 19;
        let interval = setInterval(() => {
            if (authToken) {
                refreshToken();
            }
        }, fourMinutes);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [authToken, user])



    return (
        <NoteContext.Provider value={contextData}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;