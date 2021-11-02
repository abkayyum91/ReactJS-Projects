import React, { useContext } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import NoteContext from '../context/notes/NoteContext'

const SignIn = () => {
    const context = useContext(NoteContext);
    const { signInUser } = context;

    return (
        <div className="container">
            <form action="" className="mx-auto col-md-6 p-3 bg-light" onSubmit={signInUser}>
                <div className="title">
                    <h3>SignIn</h3>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usename</label>
                    <input type="text" className="form-control" name="username" placeholder="Username.." />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password.." />
                </div>
                <div className="mb-3">
                    <ButtonPrimary msg="SingIn" />
                </div>
            </form>
        </div>
    )
}

export default SignIn
