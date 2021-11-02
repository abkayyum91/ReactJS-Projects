import React, { useContext } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import NoteContext from '../context/notes/NoteContext'
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const context = useContext(NoteContext);
    const history = useHistory();

    const handleSinUp = async (e) => {
        // restricting default behaviour of form submission using preventDefault()
        e.preventDefault();

        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: e.target.email.value, username: e.target.username.value, password: e.target.password.value, password2: e.target.password2.value })
        }
        const response = await fetch('http://127.0.0.1:8000/api/create-user/', params);
        if (response.status === 201) {
            const data = await response.json();
            context.showAlert('success', `User is created successfully! "${data.username}"`)
            history.push("/signin");
        } else {
            context.showAlert('danger', 'Fill correct credential!')
        }
    }


    return (
        <div className="container">
            <form action="" className="mx-auto col-md-6 p-3 bg-light" onSubmit={handleSinUp}>
                <div className="title">
                    <h3>SingUp</h3>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email.." />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usename</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Username.." />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password.." />
                </div>
                <div className="mb-3">
                    <label htmlFor="password2" className="form-label">Re-Password</label>
                    <input type="password" className="form-control" id="password2" name="password2" placeholder="Re-Password.." />
                </div>
                <div className="mb-3">
                    <ButtonPrimary msg="SingUp" />
                </div>
            </form>
        </div>
    )
}

export default SignUp
