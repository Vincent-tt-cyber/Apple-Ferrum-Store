import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import OfferBlock from "./components/OfferBlock/OfferBlock";
import React from "react";
import Drawer from "./components/Drawe/Drawer";
import axios from "axios";
function App() {
  // TODO: https://youtu.be/J22CdUt5OOs?list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&t=91
  // TODO: Баг с корзиной ID, Роутинг(корзина, закладки)
  // https://mockapi.io/projects/66af55c7b05db47acc5991e4

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(!true);
  const [iphonesData, setIphonesData] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  // Добавление/Удаления из корзины
  const handleAddToCard = async (obj) => {
    const currentItem = cartItems.find((item) => item.id === obj.id);
    // console.log(currentItem);
    
    if (currentItem) {
      await axios.delete(
        `https://66af55c7b05db47acc5991e3.mockapi.io/Cart/${currentItem.id}`
      );
      setCartItems((prev) => prev.filter((obj) => obj.id !== currentItem.id));
    } else {
      await axios.post("https://66af55c7b05db47acc5991e3.mockapi.io/Cart", obj);
      setCartItems([...cartItems, obj]);
    }
  };

  const deleteItemFromCart = async (id) => {
    await axios.delete(
      `https://66af55c7b05db47acc5991e3.mockapi.io/Cart/${id}`
    );
    setCartItems((prev) => prev.filter((obj) => obj.id !== id));
  };

  // Главный запрос на продукты
  const fetchData = async () => {
    const response = await axios
      .get("https://66af55c7b05db47acc5991e3.mockapi.io/iPhonesData")
      .then(({ data }) => setIphonesData(data))
      .catch((err) => console.log(err));
  };

  // Запрос на товары в корзине
  const fetchCartData = async () => {
    await axios
      .get("https://66af55c7b05db47acc5991e3.mockapi.io/Cart")
      .then((res) => {
        setCartItems(res.data);
      });
  };

  React.useEffect(() => {
    fetchData();
    fetchCartData();
  }, []);

  return (
    <>
      <div className="wrapper">
        {isOpenDrawer && (
          <Drawer
            isOpenDrawer={isOpenDrawer}
            setIsOpenDrawer={setIsOpenDrawer}
            productsData={cartItems}
            deleteItemFromCart={deleteItemFromCart}
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
