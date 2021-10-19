import React, { useEffect, useState } from 'react';
import Dentists from '../Dentists/Dentists';

const Dantist = () => {
    const [dentists, setDentists] = useState([]);
    useEffect(() => {
        fetch('./dentist.json')
            .then(res => res.json())
            .then(data => setDentists(data))
    }, [])
    return (
        <div>
            <div className="row my-5">
                {
                    dentists.map(dentist => <Dentists
                        key={dentist.id}
                        dentist={dentist}></Dentists>)
                }
            </div>
        </div>
    );
};

export default Dantist;