import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const DentistsDetails = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);


    // console.log(items);

    useEffect(() => {
        fetch('/dentist.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id]);

    const singleDentist = items?.filter(item => item.id == id)
    console.log(singleDentist);
    return (
        <div>
            <h3>{singleDentist[0]?.name}</h3>
            <img src={singleDentist[0]?.img} />
            <p>naimul</p>
        </div>
    );
};

export default DentistsDetails;