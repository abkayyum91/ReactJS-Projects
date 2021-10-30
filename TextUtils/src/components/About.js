import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const [btnText, setbtnText] = useState('Enable Dark Mode');
    const [btnBG, setbtnBG] = useState("btn btn-dark");

    const handleMode = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtnText('Enable Dark Mode');
            setbtnBG("btn btn-dark");
        }
        else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setbtnText('Enable Light Mode');
            setbtnBG("btn btn-light");
        }
    };

    return (
        <>
            <div className="container my-4">
                <h3 style={{color: props.mode === 'light'?'black':'white'}}>About Us</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto repellendus neque quia sed totam explicabo fugiat expedita! Molestias minus, delectus atque, adipisci nesciunt nemo a laborum nihil ut beatae debitis expedita numquam quo ipsum reiciendis ipsam? Aspernatur earum reiciendis quisquam laboriosam non quae. Sint? to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias qui quas praesentium optio voluptatem necessitatibus rerum possimus earum consequuntur corrupti similique magnam porro, placeat inventore neque. Perferendis qui iure, ratione molestias similique autem vel unde ullam! Repudiandae aut nobis, consequatur saepe vel animi quo iusto cumque temporibus, quam, facilis voluptas eveniet blanditiis eum? control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is Lorem ipsum and only lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, voluptas, dolorum quos incidunt harum placeat debitis officiis praesentium recusandae deleniti ipsa magni laboriosam pariatur beatae quibusdam vel eveniet dicta veniam ipsum eligendi. Eius, officiis dolor similique laboriosam ratione voluptatem aliquid porro odio fuga in ullam maxime minima illo? Officiis repudiandae, perferendis, molestias eius pariatur nihil distinctio inventore id fuga, quod perspiciatis voluptas. Officia quos repellendus ipsam nobis explicabo, accusamus facilis similique iusto magnam enim dolor quas voluptates laudantium, in consequatur nulla minus adipisci eius consectetur. Ab illo iure vitae assumenda eaque, non maiores qui deleniti repellat neque voluptate voluptatem beatae, itaque in, unde ex dolorum molestias atque! Tenetur aliquid fugiat ad possimus dicta! hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container enableMode">
                <button onClick={handleMode} className={btnBG}>{btnText}</button>
            </div>
        </>
    )
}
