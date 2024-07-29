import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import OfferBlock from "./components/OfferBlock/OfferBlock";

function App() {
  const iPhoneData = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      color: "Желтый Титан",
      imageURL:
        "https://signal-crimea.ru/uploads/product/8900/8941/thumbs/30_d33150c5546b11eebe58f46d04dcc54c_d33150c6546b11eebe58f46d04dcc54c.jpg",
      price: 70000,
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      imageURL:
        "https://signal-crimea.ru/uploads/product/8900/8944/thumbs/30_d33150dd546b11eebe58f46d04dcc54c_d33150de546b11eebe58f46d04dcc54c.jpg",
      color: "Черный Титан",
      price: 40000,
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      imageURL:
        "https://signal-crimea.ru/uploads/product/8900/8947/thumbs/30_d33150f2546b11eebe58f46d04dcc54c_d33150f3546b11eebe58f46d04dcc54c.jpg",
      color: "Белый Титан",
      price: 50000,
    },
    {
      id: 4,
      name: "iPhone 15 Pro Max",
      imageURL:
        "https://signal-crimea.ru/uploads/product/8900/8950/thumbs/30_2df09bc7547011eebe58f46d04dcc54c_2df09bc8547011eebe58f46d04dcc54c.jpg",
      color: "Зеленый Титан",
      price: 60000,
    },
    {
      id: 5,
      name: "iPhone 15 Pro Max",
      imageURL:
        "https://signal-crimea.ru/uploads/product/8900/8950/thumbs/30_2df09bc7547011eebe58f46d04dcc54c_2df09bc8547011eebe58f46d04dcc54c.jpg",
      color: "Зеленый Титан",
      price: 60000,
    },
  ];
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <OfferBlock />
          <Routes>
            <Route path="/" element={<MainPage data={iPhoneData} />} />
            <Route path="/cart" element={<h1>Cart pafe</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
