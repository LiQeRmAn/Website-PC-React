import React, { useState } from 'react';
import './style.module.css'; // Стили

const EditProfilePage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [firstName, setFirstName] = useState('Александр');
  const [lastName, setLastName] = useState('Сергеев');
  const [middleName, setMiddleName] = useState('Игоревич');
  const [birthDate, setBirthDate] = useState('1990-01-01');
  const [phoneNumber, setPhoneNumber] = useState('+7 (999) 123-45-67');

  const handleSubmit = event => {
    event.preventDefault();
    // Здесь можно добавить логику сохранения изменений
    console.log('Данные профиля обновлены');
  };

  return (
    <>

      {/* Основная секция редактирования профиля */}
      <div className="container my-5">
        <h2>Редактирование профиля</h2>
        <form onSubmit={handleSubmit}>
          {/* Блок смены пароля */}
          <div className="mb-3">
            <label htmlFor="currentPassword">Введите старый пароль:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              required
              placeholder="Введите старый пароль"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword">Новый пароль:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
              placeholder="Введите новый пароль"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmNewPassword">Подтверждение нового пароля:</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={e => setConfirmNewPassword(e.target.value)}
              required
              placeholder="Подтвердите новый пароль"
            />
          </div>

          {/* Блок загрузки фото */}
          <div className="mb-3">
            <label htmlFor="photoUpload">Выберите новое фото профиля:</label>
            <input type="file" id="photoUpload" name="photoUpload" accept="image/*" />
          </div>

          {/* Блок изменения ФИО */}
          <div className="mb-3">
            <label htmlFor="firstName">Имя:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Фамилия:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
              placeholder="Введите вашу фамилию"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="middleName">Отчество:</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={middleName}
              onChange={e => setMiddleName(e.target.value)}
              placeholder="Введите ваше отчество"
            />
          </div>

          {/* Дата рождения */}
          <div className="mb-3">
            <label htmlFor="birthDate">Дата рождения:</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}
              required
            />
          </div>

          {/* Номер телефона */}
          <div className="mb-3">
            <label htmlFor="phoneNumber">Номер телефона:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              pattern="^\+?[1-9]\d{1,14}$"
              required
              placeholder="Введите номер телефона"
            />
          </div>

          {/* Кнопка Сохранить */}
          <button type="submit">Сохранить изменения</button>
        </form>
      </div>
    </>
  );
};

export default EditProfilePage;