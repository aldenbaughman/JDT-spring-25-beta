import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assetspy.svg'
import { useState } from 'react'

function About() {
    const [display, setDeiplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toogle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return (
        <div id="about">
            <h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
                About Me
            </h2>
            <div style={{display: display}}>
                <p>
                    I am student at Boston University studying {major}. i'm currently a memebr of {organization}.
                </p>
                <br/>
                <h3>My Skills</h3>
                <div className="icons">
                        <img width="60" src={HTML}/>
                        <img width="60" src={CSS}/>
                        <img width="60" src={PY}/>
                        <img width="60" src={HTML}/>
                </div>
            </div>
        </div>
    )
}