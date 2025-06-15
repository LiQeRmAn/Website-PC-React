// src/components/MainContent.js
import React from 'react';
import BuildSection from './BuildSection';
import ManufacturerSection from './ManufacturerSection';

const MainContent = () => {
  const componentsData = [
    { title: 'Процессоры', manufactors: [{domain: 'intel.com', name: 'Intel'}, {domain: 'amd.com', name: 'AMD'}]},
    { title: 'Видеокарты', manufactors: [{domain: 'nvidia.com', name: 'NVIDIA'}, {domain: 'amd.com', name: 'AMD Radeon'}]},
    { title: 'Материнские платы', manufactors: [{domain: 'asus.com', name: 'ASUS'}, {domain: 'gigabyte.com', name: 'Gigabyte'}]},
    { title: 'Оперативная память', manufactors: [{domain: 'corsair.com', name: 'Corsair'}, {domain: 'kingston.com', name: 'Kingston'}]},
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-md-3 col-lg-2 d-md-block bg-black sidebar p-1">
          <div className="p-3">
            <h5 className="text-primary mb-3">Комплектующие</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link text-light" href="/cpu">Процессоры</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-light" href="/motherboards">Материнские платы</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-light" href="/gpu">Видеокарты</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-light" href="/ram">Оперативная память</a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="col-md-9 col-lg-10 py-4 px-md-4">
          <BuildSection />
          <section>
            <h2 className="text-primary mb-4">Комплектующие по производителям</h2>
            <div className="row g-4">
              {componentsData.map((component, index) => (
                <ManufacturerSection key={index} title={component.title} manufactors={component.manufactors} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainContent;