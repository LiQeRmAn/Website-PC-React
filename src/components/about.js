import React from 'react';
import './style.module.css'; // Стили

const AboutPage = () => {
  const copyToClipboard = (id) => {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
  };

  return (
    <>

      {/* Основная секция страницы "О сайте" */}
      <div className="container my-5">
        <h1>Информация о сайте</h1>

        <div className="info-block">
          <strong>Электронная почта владельца сайта:</strong>
          <span id="email">support@example.com</span>
          <button onClick={() => copyToClipboard('email')} className="copy-btn">
            Скопировать email
          </button>
        </div>

        <div className="info-block">
          <strong>Юридический адрес владельца сайта:</strong>
          <span id="address">ул. Ленина, д. 1, Москва, Россия, 123456</span>
          <button onClick={() => copyToClipboard('address')} className="copy-btn">
            Скопировать адрес
          </button>
        </div>

        <div className="info-block">
          <strong>Ссылка на пользовательское соглашение:</strong>
          <a href="agreement.pdf" download>
            Скачать соглашение
          </a>
        </div>

        <div className="info-block">
          <strong>Обязанности сайта по защите данных пользователей:</strong>
          <a href="privacy_policy.pdf" download>
            Скачать политику конфиденциальности
          </a>
        </div>

        <div className="info-block">
          <strong>Связь с поддержкой сайта:</strong>
          <a href="mailto:support@example.com">Напишите нам письмо</a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;