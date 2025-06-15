import React from 'react';
import './style.module.css'; // Стили

const ProfilePage = () => {
  const handleImageChange = event => {
    if (event.target.files && event.target.files.length > 0) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setAvatar(imageUrl);
    }
  };

  const [avatar, setAvatar] = React.useState('avatar.jpg');

  return (
    <>

      {/* Основная секция страницы профиля */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={avatar} alt="Фото профиля" className="profile-picture"/>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <label htmlFor="upload-file" className="edit-profile-btn">Загрузить новое фото</label>
          </div>
          <div className="col-md-8">
            <h2>Иван Иванов</h2>
            <p>ivanivanov@mail.ru</p>
            <p>Регистрация: 20 марта 2023 г.</p>
            <p>Дата рождения: 1 января 1990 г.</p>
            <p>Телефон: +7 (999) 123-45-67</p>
            <a href="/profileedit" className="edit-profile-btn">Редактировать профиль</a>
          </div>
        </div>

        <h3 className="mt-5">Мои сборки</h3>
        <div className="row">
          <div className="col-md-12">
            <div className="build-item">
              <img src="path_to_build_image_1.jpg" alt="Сборка №1" className="build-image"/>
              <div className="build-info">
                <h4>Моя первая сборка</h4>
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Комплектующая</th>
                      <th>Модель</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Процессор</td>
                      <td>Intel Core i7-12700KF</td>
                    </tr>
                    <tr>
                      <td>Материнская плата</td>
                      <td>ASUS ROG STRIX Z690-E Gaming Wi-Fi</td>
                    </tr>
                    <tr>
                      <td>Видеокарта</td>
                      <td>NVIDIA GeForce RTX 3080 Ti</td>
                    </tr>
                    <tr>
                      <td>Память</td>
                      <td>Corsair Vengeance RGB Pro 32GB DDR5</td>
                    </tr>
                    <tr>
                      <td>Накопитель SSD</td>
                      <td>Samsung 980 PRO NVMe SSD 1TB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="build-item">
              <img src="path_to_build_image_2.jpg" alt="Сборка №2" className="build-image"/>
              <div className="build-info">
                <h4>Рабочий ПК</h4>
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Комплектующая</th>
                      <th>Модель</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Процессор</td>
                      <td>AMD Ryzen 7 5800X</td>
                    </tr>
                    <tr>
                      <td>Материнская плата</td>
                      <td>MSI B550-A PRO</td>
                    </tr>
                    <tr>
                      <td>Видеокарта</td>
                      <td>AMD Radeon RX 6800 XT</td>
                    </tr>
                    <tr>
                      <td>Память</td>
                      <td>HyperX Fury DDR4 32GB Kit</td>
                    </tr>
                    <tr>
                      <td>SSD-накопитель</td>
                      <td>Crucial P5 Plus 1TB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;