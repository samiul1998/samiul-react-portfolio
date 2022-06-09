import React from 'react';
import './Button.css';

const Button = ({title}) => {
    return (
      <div>
        <button style={{ fontSize: "20px" }}>
          {" "}
          <h5 className='text-white'>{title}</h5>
        </button>
      </div>
    );
};

export default Button;