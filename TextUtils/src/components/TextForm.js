import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const toUpperText = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('info', 'Your text is converted into upper case');
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert('warning', 'Your text is cleard')
    };
    const toLowerText = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('info', 'Your text is converted into lower case');
    };
    const removePunctuation = () => {
        let punctuations = /[`~!@#$%^&*()_=+{};:<>?/\\]/g;
        let punctuationLess = text.replace(punctuations, "");
        let whiteSpaceLessString = punctuationLess.replace(/\s{2,}/g, " ");
        setText(whiteSpaceLessString);
        props.showAlert('info', 'Punctuation is removed from your text')
    };
    const removeWhiteSpace = () => {
        let regx = /\s{2,}/g;
        let newString = text.replace(regx, " ");
        setText(newString);
        props.showAlert('info', 'Extra space is removed from the text')
    };
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Text copied')
    };

    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3 className="mb-2">{props.title}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#272f4b', color: props.mode === 'light' ? 'black' : 'white' }} id="test" rows="8"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={toLowerText}>To Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={toUpperText}>To Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={removePunctuation}>Remove Punctuation</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={removeWhiteSpace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className={`summary text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>
                <h4>Your Text Summary:</h4>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes needed to read this text</p>
                {/* <p>Total {text.length > 0 ? text.split(".").length : '0'} sentence in the text</p> */}
                <p>Total {text.split(".").filter((element) => { return element.length !== 0 }).length} sentence in the text</p>
                <hr />
                <h4>Text Preview</h4>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
