import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [loggedIn, setLoggedIn] = useState(false);

    const onSubmit = (data) => {
        // Retrieve registered users from local storage
        const registeredUsers = JSON.parse(localStorage.getItem("registered-users")) || [];

        // Find user with matching email and password
        const user = registeredUsers.find(
            (u) => u.email === data.email && u.password === data.password
        );

        if (user) {
            // Display the "Successfully logged in" message
            setLoggedIn(true);
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login-form-container">
            <h2>Login Form</h2>
            {!loggedIn ? (
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className={`form-control ${errors.email ? 'error' : ''}`}
                        />
                        <p className="error-message">{errors.email?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'This field is required',
                            })}
                            className={`form-control ${errors.password ? 'error' : ''}`}
                        />
                        <p className="error-message">{errors.password?.message}</p>
                    </div>

                    <button type="submit" className="submit-button">
                        Login
                    </button>
                </form>
            ) : (
                <div className="logged-in-message">
                    <p>Successfully logged in!</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
