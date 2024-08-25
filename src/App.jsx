import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import OfferBlock from "./components/OfferBlock/OfferBlock";
import React from "react";
import Drawer from "./components/Drawe/Drawer";
import axios from "axios";
import CartPage from "./pages/CartPage/CartPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import PoductPage from "./pages/ProductPage/PoductPage";
import ProductPage from "./pages/ProductPage/PoductPage";

export const AppContext = React.createContext({});

function App() {
  // FIXME: https://youtu.be/2jLFTiytfgg?list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&t=6402
  // TODO: адаптировать проект под телефоны

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(!true);
  const [iphonesData, setIphonesData] = React.useState([
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 79990,
      color: "Голубой",
      imageURL: [
        "https://trustereo.ru/upload/resize_cache/iblock/5af/jxvqaaiopxtaw98la1hhgyub3wdvaoa7/1000_1000_0/image-1.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/d3a/os8gb6n2tkhzl41ihrls9gcl2r2ff7yq/1000_1000_0/image-2.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/691/4adavpueoguobupsi31qgomphcwvnedz/1000_1000_0/image-3.jpg",
      ],
      storage: 128,
    },
    {
      id: 2,
      name: "Apple iPhone 14",
      price: 79990,
      color: "Фиолетовый",
      imageURL: [
        "https://trustereo.ru/upload/resize_cache/iblock/210/7dpelqydmpbd534excagwcvd2zetu5zd/1000_1000_0/image-1.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/d53/j30mfc14tzt1mbtnf2qghntacve2x6w2/1000_1000_0/image-2.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/4d5/x581xwdutcw56gmcxwn5eltz871an1kp/1000_1000_0/image-3.jpg",
      ],
      storage: 256,
    },
    {
      id: 3,
      name: "Apple iPhone 14",
      price: 79990,
      color: "Темная ночь",
      imageURL: [
        "https://trustereo.ru/upload/resize_cache/iblock/748/gi4fgbhky19w4wi5ydc8xtw98ngu1rxm/1000_1000_0/image-1.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/ae9/o2y17v389wvnks86e4ub9kdvrizeomim/1000_1000_0/image-2.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/b2f/ppkn51jwzcazgmne6dajl5mhypr28qxy/1000_1000_0/image-3.jpg",
      ],
      storage: 512,
    },
    {
      id: 4,
      name: "Apple iPhone 13",
      price: 71990,
      color: "Сияющая звезда",
      imageURL: [
        "https://trustereo.ru/upload/resize_cache/iblock/b1d/jfwrdvn3703hwapd97822lsnzmebpj4x/1000_1000_0/image-1.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/281/8vc9lbgu18g7y6wwqnim59x4yrt7k2pv/1000_1000_0/image-2.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/2db/lwvsj3x8ke7umdazhf2hrt3oe836v7c8/1000_1000_0/image-3.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/7ee/1frl3220af7m94vgn5xj26pih24qbyqa/1000_1000_0/image-4.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/c5a/pt21w40nni5v36vcz8pyscs1qfcgtx73/1000_1000_0/image-5.jpg",
      ],
      storage: 128,
    },
    {
      id: 5,
      name: "Apple iPhone 13",
      price: 71990,
      color: "Product RED",
      imageURL: [
        "https://trustereo.ru/upload/resize_cache/iblock/58f/o2xw4wc90ksvsn0ckyu9ttvom78caca4/1000_1000_0/image-1.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/95e/bl1oda3j1t3iwfm2wbayviq77c3zonur/1000_1000_0/image-2.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/b4a/6yw1hdj4u1mizm13vl2i1dsqpcy3ui93/1000_1000_0/image-3.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/9bf/8ijje05fq7yo7vukt1sj1gurqe7vx4sx/1000_1000_0/image-4.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/c98/ig37f0s4jkdgqu1m22ra3pfgu507xcin/1000_1000_0/image-5.jpg",
      ],
      storage: 128,
    },
    {
      id: 6,
      name: "Apple iPhone 13",
      price: 76990.99,
      color: "Зеленый",
      imageURL: [
        "https://trustereo.ru/upload/resize_cache/iblock/464/p2rjwh4i2tyejoo6qyv3ngjieaay6cc7/1000_1000_0/image-1.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/fe0/bawp9188ww96cc99pp6foqryrokmx9eb/1000_1000_0/image-2.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/846/8pkdwtsbkddy5typk8ad71wa7qj26htg/1000_1000_0/image-3.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/8e4/li1z11ii6p3qcrh5fb5d8m3sjal105fr/1000_1000_0/image-4.jpg",
        "https://trustereo.ru/upload/resize_cache/iblock/913/h1ec8t9j31qusy8d01pocdzd9wop1z51/1000_1000_0/image-5.jpg",
      ],
      storage: 512,
    },
  ]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // Добавление/Удаления из корзины
  const handleAddToCard = async (obj) => {
    const currentItem = cartItems.find((cartItem) => cartItem.id === obj.id);
    const removeItem = cartItems.filter((cartItem) => cartItem.id !== obj.id);

    if (currentItem) {
      setCartItems(removeItem);
      await localStorage.setItem("cart", JSON.stringify(removeItem));
    } else {
      setCartItems([...cartItems, obj]);
      await localStorage.setItem("cart", JSON.stringify([...cartItems, obj]));
    }
  };

  const deleteItemFromCart = async (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    await localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((item) => item.id !== id))
    );
  };

  // Запрос на товары в корзине
  const fetchCartData = async () => {
    if (localStorage.getItem("cart")) {
      await setCartItems(JSON.parse(localStorage.getItem("cart")));
      setIsLoading(false);
    }
  };

  // FIXME: Логика добавления в избранное

  const handleAddToFavourite = async (obj) => {
    const currentItem = favouriteItems.find(
      (favouriteItem) => favouriteItem.id === obj.id
    );
    const removeItem = favouriteItems.filter((item) => item.id !== obj.id);
    if (currentItem) {
      setFavouriteItems(removeItem);
      await localStorage.setItem("favourite", JSON.stringify(removeItem));
    } else {
      setFavouriteItems([...favouriteItems, obj]);
      await localStorage.setItem(
        "favourite",
        JSON.stringify([...favouriteItems, obj])
      );
    }
  };

  const fetchFavouriteData = async () => {
    if (localStorage.getItem("favourite")) {
      await setFavouriteItems(JSON.parse(localStorage.getItem("favourite")));
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetchCartData();
    fetchFavouriteData();

    if (isOpenDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenDrawer]);

  return (
    <>
      <AppContext.Provider value={{ iphonesData, cartItems, favouriteItems }}>
        <div className="wrapper">
          {isOpenDrawer && (
            <Drawer
              isOpenDrawer={isOpenDrawer}
              setIsOpenDrawer={setIsOpenDrawer}
              deleteItemFromCart={deleteItemFromCart}
            />
          )}
          <div className="container">
            <Header
              isOpenDrawer={isOpenDrawer}
              setIsOpenDrawer={setIsOpenDrawer}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    handleAddToCard={handleAddToCard}
                    handleAddToFavourite={handleAddToFavourite}
                    fetchCartData={fetchCartData}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="/favourite"
                element={
                  <FavouritePage
                    // favouriteItems={favouriteItems}
                    handleAddToFavourite={handleAddToFavourite}
                    handleAddToCard={handleAddToCard}
                  />
                }
              />
              {/* <Route
                path="/cart"
                element={
                  <CartPage
                    handleAddToCard={handleAddToCard}
                    fetchCartData={fetchCartData}
                    fetchFavouriteData={fetchFavouriteData}
                    handleAddToFavourite={handleAddToFavourite}
                    // cartItems={cartItems}
                  />
                }
              /> */}
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
