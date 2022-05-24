import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {

    const { _id, name, img, description } = part;

    const navigate = useNavigate();



    const handlePurchase = id => {
        navigate(`/parts/${id}`)
    }
    return (
        <div className="card card-compact w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;