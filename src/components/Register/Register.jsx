import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import zxcvbn from 'zxcvbn';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [registered, setRegistered] = useState(false);

    const onSubmit = (data) => {
        // Check if the email is already registered
        const existingUsers = JSON.parse(localStorage.getItem("registered-users")) || [];
        const isEmailRegistered = existingUsers.some(user => user.email === data.email);

        if (isEmailRegistered) {
            alert('Email is already registered. Please use a different email.');
        } else {
            // Store registration details in local storage
            const newUser = {
                email: data.email,
                password: data.password,
            };
            localStorage.setItem('registered-users', JSON.stringify([...existingUsers, newUser]));

            // Display the "Registered" message
            setRegistered(true);
        }
    };

    const password = watch('password', '');

    return (
        <div className="registration-form-container">
            <h2>Registration Form</h2>
            {!registered ? (
                <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
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
                                minLength: {
                                    value: 6,
                                    message: 'Password must have at least 6 characters',
                                },
                            })}
                            className={`form-control ${errors.password ? 'error' : ''}`}
                        />
                        <p className="error-message">{errors.password?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            {...register('confirmPassword', {
                                validate: (value) =>
                                    value === password || 'Passwords do not match',
                            })}
                            className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                        />
                        <p className="error-message">{errors.confirmPassword?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Password Strength:</label>
                        <progress
                            value={zxcvbn(password).score}
                            max="4"
                            className={`password-strength ${password && password.length > 0 ? 'visible' : ''}`}
                        ></progress>
                    </div>

                    <button type="submit" className="submit-button">
                        Register
                    </button>
                </form>
            ) : (
                <div className="registered-message">
                    <p>Successfully registered!</p>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
