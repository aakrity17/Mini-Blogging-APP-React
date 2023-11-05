import React, { useState } from 'react'

export default function Create() {
    const [title, setTitle] = useState("");
    return (<div>
        <h1>Create</h1>
        <input placeholder='Enter title' onChange={(e) => {
            setTitle(e.target.value)
        }} />
        <button onClick={() => {
            const savedBlogs = JSON.parse(localStorage.getItem("saved-blogs")) || [];
            const newSavedBlogs = [...savedBlogs, {
                id: new Date().getTime(),
                title,
                category: 'art',
                subCategory: ['skill', 'design', 'passion'],
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                authorName: 'John Doe',
                authorAvatar: '/assets/images/author.jpg',
                createdAt: new Date().toDateString(),

                cover: '/assets/images/Synthwave-Postmodern.jpg',
            }]
            localStorage.setItem('saved-blogs', JSON.stringify(newSavedBlogs))
        }} >submit</button>
    </div>
    )
}
