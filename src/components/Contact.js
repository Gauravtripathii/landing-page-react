import React from 'react';

function Contact () {
    return(
        <div className="Contact">
            <fieldset>
                <legend>loremipsum.com</legend>
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Prefered Pronouns' />
                    <textarea placeholder='write your message here or leave it blanck for us to contact...'></textarea>
                    <input type="button" value="submit" />
                </form>
            </fieldset>
        </div>
    );
}

export default Contact;
