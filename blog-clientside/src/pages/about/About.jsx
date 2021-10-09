// found template .. need to modify
import React from "react";
import './about.css';

export default function About() {
    return (
        <div className="about">
            <h1>
                About<span className="aboutTitle">.</span>
            </h1>
            <main>
                <p>
                    add text here
                </p>
                <p>
                    add text here
                </p>
                <p>
                    You can edit your Blog post at any time, as long as you're
                    logged in. If you ever feel like your post is no longer a
                    valid representation of your thoughts, you can also delete
                    it at any instant of time.
                </p>
                <p>
                    You can also provide your opinions about any post, in the
                    comments' section of every post, anonymously!
                    <br />
                    Your comment will always have a unique icon accompanying it.
                </p>
                <hr className="gold-hr" />
                <p>
                    If you ever feel the need to provide criticism or drop a
                    suggestion, or if you just want to say "Nice job", feel free
                    to contact me using the links in the footer
                    <span className="full-stop">.</span>
                </p>
            </main>
        </div>
    );
};