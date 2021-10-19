import React from 'react';
import { Link } from 'react-router-dom';
import './Dantists.css'

const Dentists = ({ dentist }) => {
    const { name, img, specialize, id } = dentist;
    // console.log(name);
    return (
        <div className="col-md-4 col-sm-6 g-3 h-auto p-2 rounded  bg-warning  border border-danger dentists">
            <div className="text-center">
                <img src={img} />
                <h3>{name}</h3>
                <h5 className="text-danger">{specialize}</h5>
                <Link to={`/dentistsdetails/${id}`}><button className="btn btn-primary">Learn more</button></Link>
            </div>
        </div>
    );
};

export default Dentists;