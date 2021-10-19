import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DentistsDetails.css'



const DentistsDetails = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/dentist.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id]);

    const singleDentist = items?.filter(item => item.id == id)
    console.log(singleDentist);
    return (
        <div className="text-center mt-5">

            <div className="card" >
                <img className="rounded mx-auto w-50 doctor" src={singleDentist[0]?.img} className="card-img-top" alt="..." />
                <h2 className="card-title fw-bold mt-4 text-danger">{singleDentist[0]?.name}</h2>
                <div className="card-body">
                    <h4 className="text-info">Specialized : {singleDentist[0]?.specialize} </h4>
                    <p className="card-text">{singleDentist[0]?.biography}</p>
                </div>
            </div>
        </div>
    );
};

export default DentistsDetails;