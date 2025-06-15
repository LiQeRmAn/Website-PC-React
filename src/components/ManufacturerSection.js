// src/components/ManufacturerSection.js
import React from 'react';

const ManufacturerSection = ( {title, manufactors} ) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card bg-dark border-secondary h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <ul className="list-group list-group-flush">
            {manufactors.map((item, index) => (
              <li key={index} className="list-group-item bg-dark text-light border-secondary d-flex align-items-center">
                <a href="#" target="_blank" className="d-flex align-items-center text-decoration-none text-light w-100">
                  <img src={`https://logo.clearbit.com/${item.domain}`} className="brand-logo" />
                  <span className="ms-2">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerSection;