import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Create() {
    document.title = "Create a Blog";

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setimage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [iimage, setImage] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!title || !description || !Author || !category || !image) {
            alert('Please fill in all required fields including the image');
            return;
        }

        // Form submission logic
        const savedBlogs = JSON.parse(localStorage.getItem("saved-blogs")) || [];
        const newSavedBlogs = [
            ...savedBlogs,
            {
                id: new Date().getTime(),
                title,
                category,
                subCategory: ['skill', 'design', 'passion'],
                description,
                Author,
                authorAvatar: '/assets/images/author.jpg',
                createdAt: new Date().toDateString(),
                cover: image,
            },
        ];
        localStorage.setItem('saved-blogs', JSON.stringify(newSavedBlogs));

        // Set form-submitted state to true
        setFormSubmitted(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setimage(URL.createObjectURL(file));
            setImage(file);
        }
    };

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const formGroupStyle = {
        marginBottom: '20px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const labelStyle = {
        fontWeight: 'bold',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            {!formSubmitted ? (
                <form onSubmit={handleFormSubmit}>
                    <div style={formGroupStyle}>
                        <label htmlFor="title" style={labelStyle}>Title:</label>
                        <input
                            type="text"
                            style={inputStyle}
                            placeholder="Enter title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="author" style={labelStyle}>Author:</label>
                        <input
                            type="text"
                            style={inputStyle}
                            placeholder="Enter Author"
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="category" style={labelStyle}>Category:</label>
                        <input
                            type="text"
                            style={inputStyle}
                            placeholder="Enter Category"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="image" style={labelStyle}>Image:</label>
                        <input
                            type="file"
                            style={inputStyle}
                            onChange={handleImageChange}
                        />
                        {image && (
                            <img src={image} alt="Selected" style={{ maxWidth: '100%', marginTop: '10px' }} />
                        )}
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="description" style={labelStyle}>Description:</label>
                        <ReactQuill
                            value={description}
                            onChange={(value) => setDescription(value)}
                            modules={{
                                toolbar: [
                                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image', 'video'],
                                    ['clean'],
                                ],
                            }}
                            formats={[
                                'header',
                                'bold', 'italic', 'underline', 'strike',
                                'list', 'bullet',
                                'link', 'image', 'video',
                            ]}
                        />
                    </div>
                    <button className="submit-button" type="submit" style={buttonStyle}>
                        Submit
                    </button>
                </form>
            ) : (
                <div>
                    <p>Successfully posted!</p>
                </div>
            )}
        </div>
    );
}
