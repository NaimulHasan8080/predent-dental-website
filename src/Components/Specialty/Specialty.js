import React from 'react';
import './Specialty.css'

const Specialty = () => {
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-around align-items-center bg-info opacity-75">
                <div className="">
                    <h1>Specialty <i class=" fas fa-long-arrow-alt-right"></i></h1>
                </div>
                <div className="p-3">
                    <ul>
                        <li>3D Digital Dentistry</li>
                        <li>Painless Dentistry</li>
                        <li>General Dentistry</li>
                        <li>Cosmetic Dentistry</li>
                        <li>Dental Implants</li>
                        <li>Smile Make-Overs</li>
                        <li>Full Mouth Reconstruction</li>
                        <li>Dental Braces/Orthodontics
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Specialty;