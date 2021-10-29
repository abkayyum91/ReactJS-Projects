import React from 'react'

export default function Contact(props) {
    return (
        <>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Contact us regarding any query</h2>
            </div>
            <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#272f4b', color: props.mode === 'light' ? 'black' : 'white' }} placeholder="Name.." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#272f4b', color: props.mode === 'light' ? 'black' : 'white' }} placeholder="Email.." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Your Query</label>
                        <textarea className="form-control" id="message" rows="5" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#272f4b', color: props.mode === 'light' ? 'black' : 'white' }} placeholder="Enter Your Query Here.."></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
