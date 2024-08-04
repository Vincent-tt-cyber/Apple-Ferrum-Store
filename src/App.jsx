import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import OfferBlock from "./components/OfferBlock/OfferBlock";
import React from "react";
import Drawer from "./components/Drawe/Drawer";
import axios from "axios";
function App() {
  // TODO: https://youtu.be/J22CdUt5OOs?list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&t=91
  // TODO: Удаление товаров с крзины, Итог стоимсть, схранять данные при обновлении страницы
  // https://mockapi.io/projects/66af55c7b05db47acc5991e4


  const [isOpenDrawer, setIsOpenDrawer] = React.useState(!true);
  const [iphonesData, setIphonesData] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCard = (obj) => {
    const currntProduct = cartItems.find((item) => item.id === obj.id);
    if (currntProduct === undefined) {
      setCartItems((prev) => [...prev, obj]);
    }

    // console.log(currntProduct);
  };

  const fetchData = async () => {
    const response = await axios
      .get("https://66af55c7b05db47acc5991e3.mockapi.io/iPhonesData")
      .then(({ data }) => setIphonesData(data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        {isOpenDrawer && (
          <Drawer
            isOpenDrawer={isOpenDrawer}
            setIsOpenDrawer={setIsOpenDrawer}
            productsData={cartItems}
          />
        )}
        <div className="container">
          <Header
            isOpenDrawer={isOpenDrawer}
            setIsOpenDrawer={setIsOpenDrawer}
          />
          <OfferBlock />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  data={iphonesData}
                  handleAddToCard={handleAddToCard}
                />
              }
            />
            <Route path="/cart" element={<h1>Корзина</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
