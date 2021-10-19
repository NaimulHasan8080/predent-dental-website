import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark p-4 my-4">
                <h2 className="text-white text-center">Subscribe</h2>
                <div class="input-group mx-auto my-3 w-50 ">
                    <input type="text" class="form-control" placeholder="Enter your E-mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </div>
                <div>
                    <p className="text-white text-center">TermsFeed and copy right law © 2012 - 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;