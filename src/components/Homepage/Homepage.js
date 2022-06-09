import React from 'react';
import Typewriter from "typewriter-effect";
import Button from '../Button/Button';

const Homepage = () => {
    return (
      <div>
        <h1 className="display-1 text-center text-warning mt-5">
          {" "}
          <strong> Samiul Islam Talukdar</strong>
        </h1>
        <h1 className="display-4 text-center text-danger ">
          {" "}
          <strong>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Frontend Developer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </strong>
          <a href="https://drive.google.com/file/d/1rv_Ptfg-xFPyFddhzgQcpgaJOY_UAyLU/view?usp=sharing">
            <Button title="Download Resume"></Button>
          </a>
        </h1>
      </div>
    );
};

export default Homepage;