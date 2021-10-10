// found template .. need to modify
import React from "react";
import './about.css';

export default function About() {
    return (
        <div className="about">
            <h1><span className="aboutTitle">About</span></h1>
            <main className="aboutParagraph">
                <p>
                    You can edit your Blog post at any time, as long as you're
                    logged in. If you ever feel like your post is no longer a
                    valid representation of your thoughts, you can also delete
                    it at any instant of time.
                </p>

                <br/>

                <p>
                    Planning to add a comment section as this blog evolves.
                </p>

                <br/>

                <p>
                    If you ever feel the need to provide criticism or drop a
                    suggestion, or if you just want to say "Nice job", feel free
                    to contact me using the contact page.
                   
                </p>
            </main>
        </div>
    );
};