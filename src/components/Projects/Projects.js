import React from "react";
import project1 from '../../Images/project1.png';
import project2 from '../../Images/project2.png';
import project3 from '../../Images/project3.png';
import { FaExternalLinkAlt, FaCode, FaFileCode } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="mx-5">
      <div class="card-group m-5">
        <div class="card mx-lg-3">
          <img src={project1} class="card-img-top" alt="project demo" />
          <div class="card-body">
            <h5 class="card-title">Parts Station</h5>
            <p class="card-text">
              A Manufacturing Company that provides products to buy online.Users
              can also pay for their products.
              <h6>Top Features</h6>
              <ul>
                <li>User Login</li>
                <li>Admin Role</li>
                <li>Payment</li>
                <li>JWT Verified</li>
              </ul>
            </p>
            <a href="https://parts-station.web.app/" className="m-4">
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </a>
            <a
              href="https://github.com/samiul1998/parts-station-client"
              className="m-4"
            >
              <FaCode />
            </a>
            <a
              href="https://github.com/samiul1998/parts-station-server"
              className="m-4"
            >
              <FaFileCode />
            </a>
          </div>
        </div>
        <div class="card mx-lg-3">
          <img src={project2} class="card-img-top" alt="project demo" />
          <div class="card-body">
            <h5 class="card-title">Royal Truckings BD LTD.</h5>
            <p class="card-text">
              A Warehouse Management Website allows you to register you as a
              user and add your item listings to the warehouse.
              <h6>Top Features</h6>
              <ul>
                <li>User Registration/Login</li>
                <li>Add new Items</li>
                <li>Storing at MongoDB Cloud Storage</li>
              </ul>
            </p>

            <a href="https://royal-truckings.web.app/" className="m-4">
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </a>
            <a
              href="https://github.com/samiul1998/royal-truckings-client/"
              className="m-4"
            >
              <FaCode />
            </a>
            <a
              href="https://github.com/samiul1998/royal-truckings-server"
              className="m-4"
            >
              <FaFileCode />
            </a>
          </div>
        </div>
        <div class="card mx-lg-3">
          <img src={project3} class="card-img-top" alt="project demo" />
          <div class="card-body">
            <h5 class="card-title">The Doctor Lounge</h5>
            <p class="card-text">
              A web app for the patients,that allows to select service from
              doctor and Portal Log in.
              <h6>Top Features</h6>
              <ul>
                <li>Login With Email Password and Google Login</li>
                <li>Responsive UI</li>
                <li>Email Verification</li>
                <li>Service Add to Cart</li>
              </ul>
            </p>
            <a href="https://the-doctor-lounge.web.app/" className="m-4">
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </a>
            <a
              href="https://github.com/samiul1998/the-doctor-lounge"
              className="m-4"
            >
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
