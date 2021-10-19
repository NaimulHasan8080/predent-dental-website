import React from 'react';
import './Header.css';
import img from './download (6).jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="row header">
                <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center text-white ">
                    <div >
                        <h2 className="title">Always Smile <br /> like twinkle</h2>
                        <p> Dental care is the maintenance of healthy teeth and <br /> the practice of keeping the mouth and teeth clean.</p>
                        <Link to="/contacts" className=" fw-bold font-monospace ">Contacts us</Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center text-white ">
                    <img src={img} className="mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Header;