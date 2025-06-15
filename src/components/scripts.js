import React, { useEffect } from 'react';
import './style.module.css'; // Убедитесь, что стили подключены

const App = () => {
  // Массив с данными процессоров
  const processors = [
    {
      name: "Процессор AMD A6-7480 OEM",
      socket: "FM2+",
      cores: 2,
      frequency: "3.5 ГГц",
      cache: "1 МБ",
      graphics: "AMD Radeon R5",
      price: "4 290 ₽",
    },
    {
      name: "Процессор AMD Athlon X4 950 OEM",
      socket: "AM4",
      cores: 4,
      frequency: "3.5 ГГц",
      cache: "2 МБ",
      tdp: "65 Вт",
      price: "5 490 ₽",
    },
    {
      name: "Процессор AMD A6-9500E OEM",
      socket: "AM4",
      cores: 2,
      frequency: "3 ГГц",
      cache: "1 МБ",
      price: "3 990 ₽",
    },
  ];

  // Массив с данными материнских плат
  const motherboards = [
    {
      name: "Материнская плата ASUS PRIME A320M-K",
      socket: "AM4",
      formFactor: "Micro ATX",
      ramSlots: 2,
      maxRam: "32 ГБ",
      price: "4 990 ₽",
    },
    {
      name: "Материнская плата MSI B450M PRO-VDH MAX",
      socket: "AM4",
      formFactor: "Micro ATX",
      ramSlots: 4,
      maxRam: "64 ГБ",
      price: "5 490 ₽",
    },
    {
      name: "Материнская плата Gigabyte B450 AORUS M",
      socket: "AM4",
      formFactor: "Micro ATX",
      ramSlots: 4,
      maxRam: "64 ГБ",
      price: "5 990 ₽",
    },
  ];

  // Массив с данными видеокарт
  const graphicsCards = [
    {
      name: "Видеокарта NVIDIA GeForce GTX 1650",
      memory: "4 ГБ GDDR5",
      coreClock: "1485 МГц",
      memoryClock: "8000 МГц",
      tdp: "75 Вт",
      price: "14 990 ₽",
    },
    {
      name: "Видеокарта AMD Radeon RX 5500 XT",
      memory: "8 ГБ GDDR6",
      coreClock: "1607 МГц",
      memoryClock: "14000 МГц",
      tdp: "130 Вт",
      price: "19 990 ₽",
    },
    {
      name: "Видеокарта NVIDIA GeForce RTX 3080",
      memory: "12 ГБ GDDR6",
      coreClock: "1320 МГц",
      memoryClock: "15000 МГц",
      tdp: "170 Вт",
      price: "34 990 ₽",
    },
  ];

  // Функция для создания карточек процессоров
  const createProcessorCards = () => {
    return processors.map((processor, index) => (
      <div key={index} className="col">
        <div className="card product-card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">{processor.name}</h5>
            <ul className="specs-list mb-3">
              <li><strong>Сокет:</strong> {processor.socket}</li>
              <li><strong>Количество ядер:</strong> {processor.cores}</li>
              <li><strong>Базовая частота:</strong> {processor.frequency}</li>
              <li><strong>Кэш L2:</strong> {processor.cache}</li>
              {processor.graphics && <li><strong>Графика:</strong> {processor.graphics}</li>}
              {processor.tdp && <li><strong>Тепловыделение:</strong> {processor.tdp}</li>}
            </ul>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <button className="btn btn-sm btn-outline-primary">Добавить</button>
              <div>
                <h5 className="mb-0 text-primary">{processor.price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Функция для создания карточек материнских плат
  const createMotherboardCards = () => {
    return motherboards.map((motherboard, index) => (
      <div key={index} className="col">
        <div className="card product-card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">{motherboard.name}</h5>
            <ul className="specs-list mb-3">
              <li><strong>Сокет:</strong> {motherboard.socket}</li>
              <li><strong>Форм-фактор:</strong> {motherboard.formFactor}</li>
              <li><strong>Количество слотов для ОЗУ:</strong> {motherboard.ramSlots}</li>
              <li><strong>Максимальный объём ОЗУ:</strong> {motherboard.maxRam}</li>
            </ul>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <button className="btn btn-sm btn-outline-primary">Добавить</button>
              <div>
                <h5 className="mb-0 text-primary">{motherboard.price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Функция для создания карточек видеокарт
  const createGraphicsCardCards = () => {
    return graphicsCards.map((graphicsCard, index) => (
      <div key={index} className="col">
        <div className="card product-card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">{graphicsCard.name}</h5>
            <ul className="specs-list mb-3">
              <li><strong>Память:</strong> {graphicsCard.memory}</li>
              <li><strong>Частота ядра:</strong> {graphicsCard.coreClock}</li>
              <li><strong>Частота памяти:</strong> {graphicsCard.memoryClock}</li>
              <li><strong>Тепловыделение:</strong> {graphicsCard.tdp}</li>
            </ul>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <button className="btn btn-sm btn-outline-primary">Добавить</button>
              <div>
                <h5 className="mb-0 text-primary">{graphicsCard.price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const links = document.querySelectorAll("nav ul li a");
 links.forEach(link => {
      link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="container">
      <h1>Каталог товаров</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Процессоры</h2>
          <div id="processors-container" className="row">
            {createProcessorCards()}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Материнские платы</h2>
          <div id="motherboards-container" className="row">
            {createMotherboardCards()}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Видеокарты</h2>
          <div id="graphics-cards-container" className="row">
            {createGraphicsCardCards()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;