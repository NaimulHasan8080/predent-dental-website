import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, description } = (props.service)
    return (
        <div>
            <div className="service text-center m-3">
                <img className="mt-3" src={img} />
                <h3 className="text-danger mt-3">{name}</h3>
                <h4 className="">{description.slice(1, 600)}</h4>
            </div>
        </div>
    );
};

export default Service;