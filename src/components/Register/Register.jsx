import React from 'react';

function Register() {
    const containerStyle = {
        background: 'linear-gradient(to top, #76b852, #8DC26F)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        fontFamily: 'Roboto, sans-serif',
    };

    const headingStyle = {
        fontSize: '3em',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 100,
        textTransform: 'capitalize',
        letterSpacing: '4px',
        fontFamily: 'Roboto, sans-serif',
    };

    const mainW3layoutsStyle = {
        padding: '3em 0 1em',
    };

    const mainAgileinfoStyle = {
        width: '35%',
        margin: '3em auto',
        background: 'rgba(0, 0, 0, 0.18)',
        backgroundSize: 'cover',
    };

    const inputStyle = {
        fontSize: '0.9em',
        color: '#fff',
        fontWeight: 100,
        width: '94.5%',
        display: 'block',
        border: 'none',
        padding: '0.8em',
        // border: 'solid 1px rgba(255, 255, 255, 0.37)',
        transition: 'all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1)',
        background: 'linear-gradient(top, rgba(255, 255, 255, 0, 96%, #fff 4%)',
        backgroundPosition: '-800px 0',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Roboto, sans-serif',
    };

    const emailInputStyle = {
        margin: '2em 0',
    };

    const submitButtonStyle = {
        fontSize: '0.9em',
        color: '#fff',
        background: '#76b852',
        outline: 'none',
        border: '1px solid #76b852',
        cursor: 'pointer',
        padding: '0.9em',
        WebkitAppearance: 'none',
        width: '100%',
        margin: '2em 0',
        letterSpacing: '4px',
    };

    const agreementLabelStyle = {
        fontSize: '0.9em',
        color: '#fff',
        fontWeight: 200,
        cursor: 'pointer',
        position: 'relative',
    };

    const checkboxStyle = {
        background: '#8DC26F',
        cursor: 'pointer',
        width: '1.2em',
        height: '1.2em',
    };

    const agreementCheckboxStyle = {
        background: '#8DC26F',
        cursor: 'pointer',
        width: '1.2em',
        height: '1.2em',
        before: {
            content: '',
            position: 'absolute',
            width: '1.2em',
            height: '1.2em',
            background: 'inherit',
            cursor: 'pointer',
        },
        after: {
            content: '',
            position: 'absolute',
            top: '0px',
            left: '0',
            zIndex: 1,
            width: '1.2em',
            height: '1.2em',
            borderColor: '#fff',
            transition: '0.4s ease-in-out',
        },
        checked: {
            after: {
                transform: 'rotate(-45deg)',
                height: '.5rem',
                borderColor: '#fff',
                borderTopColor: 'transparent',
                borderRightColor: 'transparent',
            },
        },
        animChecked: {
            after: {
                transform: 'rotate(-45deg)',
                height: '.5rem',
                borderColor: 'transparent',
                borderRightColor: 'transparent',
                animation: '0.4s rippling 0.4s ease',
                animationFillMode: 'forwards',
            },
        },
    };

    const copyrightStyle = {
        margin: '2em 0 1em',
        textAlign: 'center',
    };

    const copyrightParagraphStyle = {
        fontSize: '0.9em',
        color: '#fff',
        lineHeight: '1.8em',
        letterSpacing: '1px',
        fontWeight: 100,
    };

    const linkStyle = {
        color: '#fff',
        transition: '0.5s all',
        WebkitTransition: '0.5s all',
        MozTransition: '0.5s all',
        OTransition: '0.5s all',
        MsTransition: '0.5s all',
        fontWeight: 400,
    };

    return (
        <div style={containerStyle}>
            <div className="main-w3layouts wrapper" style={mainW3layoutsStyle}>
                <h1 style={headingStyle}>Creative SignUp Form</h1>
                <div className="main-agileinfo" style={mainAgileinfoStyle}>
                    <div className="agileits-top">
                        <form action="/" method="post">
                            <input style={inputStyle} type="text" name="Username" placeholder="Username" required />
                            <input style={{ ...inputStyle, ...emailInputStyle }} type="email" name="email" placeholder="Email" required />
                            <input style={inputStyle} type="password" name="password" placeholder="Password" required />
                            <input style={inputStyle} type="password" name="confirmPassword" placeholder="Confirm Password" required />
                            <div className="wthree-text">
                                <label style={agreementLabelStyle}>
                                    <input type="checkbox" style={checkboxStyle} required />
                                    <span>I Agree To The Terms & Conditions</span>
                                </label>
                                <div className="clear"> </div>
                            </div>
                            <input style={submitButtonStyle} type="submit" value="SIGNUP" />
                        </form>
                    </div>
                </div>
                <div className="colorlibcopy-agile" style={copyrightStyle}>
                    <p style={copyrightParagraphStyle}>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/" style={linkStyle} target="_blank">Colorlib</a></p>
                </div>
                <ul className="colorlib-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Register;
