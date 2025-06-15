// src/components/Header.js
import React from 'react';
import logo from './logo.png'; // Путь надо указать к лого шапки

const Header = () => {
  return (
    <header className="bg-black py-3 shadow">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand text-primary fw-bold fs-4" href="#">
              <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
              MRN
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSehKfjdkUWcIggsdbu6po-8yMZ5JRsMW6yL4RTJp4yHMvI-UQ/viewform?usp=dialog" target="_blank">Проблемы с сайтом?</a>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tab2">Сравнение</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tab3">Пользовательские сборки</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tab4">Конфигуратор</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">О сайте</a>
              </li>
            </ul>
          </nav>
          <div>
            <button className="btn btn-outline-primary me-2">
              <a className="bi bi-person" href="./profile">Профиль</a>
            </button>
            <button className="btn btn-outline-primary">
              <i className="bi bi-cart">Корзина</i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;