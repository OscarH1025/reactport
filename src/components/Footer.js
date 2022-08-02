import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div id="iconLink">
                <a href="https://github.com/OscarH1025">
                    <img src={require(`../assets/images/github.webp`)} alt="Github"  />
                </a>
            </div>
        </footer>
    )
}

export default Footer;