// src/components/BuildSection.js
import React from 'react';

const BuildSection = () => {
  return (
    <section className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Готовые сборки</h2>
        <a href="#" className="btn btn-outline-primary">Все сборки</a>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-secondary build-card h-100">
            <img
              src="/images/Start.jpeg"
              className="card-img-top"
              alt="Сборка ПК"
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Игровая "Starter"</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i
                  >Ryzen 5 5600X
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>RTX
                  3060 12GB
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>16GB
                  DDR4
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>1TB
                  NVMe SSD
                </li>
              </ul>
            </div>
            <div className="card-footer bg-black border-top border-secondary">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <span className="h5 mb-0">85 990 ₽</span>
                <button className="btn btn-primary">
                  <a href="https://1xbet-rdda.top/"></a>Купить</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-secondary build-card h-100">
            <img
              src="/images/Pro.jpg"
              className="card-img-top"
              alt="Сборка ПК"
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Игровая "Pro"</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i
                  >Intel i7-13700K
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>RTX
                  4070 12GB
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>32GB
                  DDR5
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>2TB
                  NVMe SSD
                </li>
              </ul>
            </div>
            <div className="card-footer bg-black border-top border-secondary">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <span className="h5 mb-0">149 990 ₽</span>
                <button className="btn btn-primary">Купить</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-secondary build-card h-100">
            <img
              src="/images/Extreame.jpg"
              className="card-img-top"
              alt="Сборка ПК"
            />
            <div className="card-body">
              <h5 class="card-title text-primary">Игровая "Extreme"</h5>
              <ul class="list-unstyled">
                <li>
                  <i class="bi bi-check-circle text-success me-2"></i
                  >Ryzen 9 7950X
                </li>
                <li>
                  <i class="bi bi-check-circle text-success me-2"></i>RTX
                  4090 24GB
                </li>
                <li>
                  <i class="bi bi-check-circle text-success me-2"></i>64GB
                  DDR5
                </li>
                <li>
                  <i class="bi bi-check-circle text-success me-2"></i>4TB
                  NVMe SSD
                </li>
              </ul>
            </div>
            <div class="card-footer bg-black border-top border-secondary">
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <span class="h5 mb-0">349 990 ₽</span>
                <button class="btn btn-primary">Купить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;