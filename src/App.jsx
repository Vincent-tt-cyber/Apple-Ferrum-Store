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
  const [iphonesData, setIphonesData] = React.useState([
    {
      name: "Apple iPhone 14 Pro",
      price: 114990,
      color: "color 1",
      imageURL:
        "https://trustereo.ru/upload/resize_cache/iblock/582/bzilgzy9b91wbdsr765up0awc7cc4dku/1000_1000_0/image-1.jpg",
      storage: 128,
      id: "1",
    },
    {
      name: "Apple iPhone 13 Pro",
      price: 89990,
      color: "color 2",
      imageURL:
        "https://trustereo.ru/upload/resize_cache/iblock/e2a/9fxr0kmzymzdakqckrjfapx6d10bpayd/1000_1000_0/image-1.jpg",
      storage: 128,
      id: "2",
    },
    {
      name: "Apple iPhone 14",
      price: 79990,
      color: "color 3",
      imageURL:
        "https://trustereo.ru/upload/resize_cache/iblock/5af/jxvqaaiopxtaw98la1hhgyub3wdvaoa7/1000_1000_0/image-1.jpg",
      storage: 256,
      id: "3",
    },
    {
      name: "Apple iPhone 13",
      price: 71990,
      color: "color 4",
      imageURL:
        "https://trustereo.ru/upload/resize_cache/iblock/f50/p94luhfix8mibf0remph3ggl2gjal5if/1000_1000_0/image-1.jpg",
      storage: 256,
      id: "4",
    },
    {
      name: "Apple iPhone 12",
      price: 60990,
      color: "color 5",
      imageURL:
        "https://trustereo.ru/upload/resize_cache/iblock/c50/jphk2qs14hji5hjpia5twrdkfxi59h9o/1000_1000_0/image-1.jpg",
      storage: 64,
      id: "5",
    },
    {
      name: "Apple iPhone 12 Pro Max",
      price: 92990,
      color: "color 5",
      imageURL:
        "https://trustereo.ru/upload/iblock/82b/iacimopswutmgstdc2i3cniwq3zllfcr/image-1.jpeg",
      storage: 128,
      id: "6",
    },
  ]);
  const [cartItems, setCartItems] = React.useState([]);

  // Добавление/Удаления из корзины
  const handleAddToCard = async (obj) => {
    const currentItem = cartItems.find((cartItem) => cartItem.id === obj.id);
    const removeItem = cartItems.filter((cartItem) => cartItem.id !== obj.id);
    if (currentItem) {
      setCartItems(removeItem);
      localStorage.setItem("cart", JSON.stringify(removeItem));
    } else {
      setCartItems([...cartItems, obj]);
      localStorage.setItem("cart", JSON.stringify([...cartItems, obj]));
    }
  };

  const deleteItemFromCart = async (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cartItems.filter((item) => item.id !== id)));
  };

  // Запрос на товары в корзине
  const fetchCartData = async () => {
    if (localStorage.getItem("cart")) {
      // console.log("cart => ", JSON.parse(localStorage.getItem("cart")));
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
  };

  React.useEffect(() => {
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
                  fetchCartData={fetchCartData}
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
