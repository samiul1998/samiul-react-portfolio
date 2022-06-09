import React from 'react';
import img from '../Images/samiul.png';
import './SamiulImage.css';


const SamiulImage = () => {
    return (
        <div className='img-container'>
            <img src={img} alt="Samiul-Photo" />
        </div>
    );
};

export default SamiulImage;