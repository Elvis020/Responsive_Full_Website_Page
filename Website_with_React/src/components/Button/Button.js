import React from 'react';
import './Button.css';
import { Link } from "react-router-dom";

const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium','btn--large'];

// Setting up Button Size and Colors
export const Button =({children,type,onClick,buttonStyle,buttonSize}) => {
    // Setting button style
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    // Setting button size
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} >
                {children}
            </button>
        </Link>
    )
}
