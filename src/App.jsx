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
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const AppContext = React.createContext({});

function App() {
  // FIXME: https://youtu.be/2jLFTiytfgg?list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&t=6402
  // TODO: адаптировать проект под телефоны
  const [sortType, setSortType] = React.useState("all");
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
    {
      id: 7,
      name: "Apple iPhone 15 Pro Max",
      price: 83900,
      color: "Титановый белый",
      imageURL: [
        "https://trustereo.ru/upload/iblock/18e/4g5wdd6f4mkntw5bj0nkt50j1azdondl/roz.png",
        "https://trustereo.ru/upload/resize_cache/iblock/53c/yk06bqw5qlh2rupjpl2pn6rn39mkyi7d/1000_1000_0/dsq.png",
        "https://trustereo.ru/upload/resize_cache/iblock/838/brfl8cmh64f55rj1212o9qb687qgvrkt/1000_1000_0/vgm.png",
        "https://trustereo.ru/upload/resize_cache/iblock/b4f/wzl03lo7m18s7neihhedw8dykpkzxeh4/1000_1000_0/ongs.png",
        "https://trustereo.ru/upload/resize_cache/iblock/59f/z1hhijiqn9dnjy2mbsma6jitmfdqz27l/1000_1000_0/sy.png",
      ],
      storage: 256,
    },
    {
      id: 8,
      name: "Apple iPhone 15 Pro Max",
      price: 99900,
      color: "Титановый синий",
      imageURL: [
        "https://trustereo.ru/upload/iblock/436/aa5fer7t1148trmetfmii2qz3b0z0xib/n0riox3i0t7vnp8b4puk943l8y138mwx.png",
        "https://trustereo.ru/upload/resize_cache/iblock/d8e/pj3vklfraiqgbk50hpres4c3zcn9d927/1000_1000_0/irsdiiy88fskl5nu241jo41yibujp3qe.png",
        "https://trustereo.ru/upload/resize_cache/iblock/ac4/eme8yxxc0cbkmbl91cyaq7hikhqug6qs/1000_1000_0/odd99jlw1jrw0yysr4fnc14nhq7m4pq0.png",
        "https://trustereo.ru/upload/resize_cache/iblock/247/x5c77jqy76rhdggeuj0rof76o01bq4au/1000_1000_0/sav36cjquw4jlsxmtesciccpg73132jb.png",
        "https://trustereo.ru/upload/resize_cache/iblock/59f/z1hhijiqn9dnjy2mbsma6jitmfdqz27l/1000_1000_0/sy.png",
      ],
      storage: 512,
    },
    {
      id: 9,
      name: "Apple iPhone 15 Pro Max",
      price: 99900,
      color: "Титановый бежевый",
      imageURL: [
        "https://trustereo.ru/upload/iblock/76a/hoqd9dyoe2ktlilt1kkr10ua6e2bnfj8/kmghepd0m3xl1yj1o86it2wjunied78b.png",
        "https://trustereo.ru/upload/resize_cache/iblock/678/g0uc5ueskm18drbqtwkbvjch6qgec1qe/1000_1000_0/aidkrwp2c5t02zjnzjnqzvli4t0civhi.png",
        "https://trustereo.ru/upload/resize_cache/iblock/4b4/1x2aw1ol6o508ikyv7yl14mxs1l506fn/1000_1000_0/kttesbwxuzzzydiq706mx56mdvbf34lx.png",
        "https://trustereo.ru/upload/resize_cache/iblock/781/b1naqyu8fmy5wq2nr8n4p5q8282bdbdf/1000_1000_0/l9fyrft2s31afc9xv3n7gdcteh1gmq8d.png",
        "https://trustereo.ru/upload/resize_cache/iblock/59f/z1hhijiqn9dnjy2mbsma6jitmfdqz27l/1000_1000_0/sy.png",
      ],
      storage: 512,
    },
    {
      id: 10,
      name: "Apple iPhone 15 Pro Max",
      price: 83900,
      color: "Титановый черный",
      imageURL: [
        "https://trustereo.ru/upload/iblock/970/49b18vav9usjpmlyvib4yrstle4ka7yh/t0agv6uu9z3rkemicunwuxv0343kki0i.jpg",
        "https://trustereo.ru/upload/iblock/747/9xp035s2dtrt7q0of1l6gi2feled7p3g/xupi5qma5iv3ud55fps02px1pdik3yho.jpg",
        "https://trustereo.ru/upload/iblock/4db/ujjpfrmx9jmkp17as07ocalr02z36vp4/dwdvxs0ox4cc8xaxr3gsgyg5j825k73g.jpg",
        "https://trustereo.ru/upload/iblock/2f3/0r5onq0rub2lk7zafy40oc35672zzzxt/vimbzgvv31g3zor82l36ghtoj7yko2e0.jpg",
        "https://trustereo.ru/upload/iblock/3bd/c1k0hdiqj9v2bwzc4s9djnh03e7g7ina/sy1k7wfq8lpgysqg58plstkd9yx8mn50.jpg",
      ],
      storage: 256,
    },
    {
      id: 11,
      name: "Apple iPhone 12 Pro Max",
      price: 44990,
      color: "Титановый черный",
      imageURL: [
        "https://trustereo.ru/upload/iblock/82b/iacimopswutmgstdc2i3cniwq3zllfcr/image-1.jpeg",
        "https://trustereo.ru/upload/iblock/57d/npsvwazvswp865ytfdq6iqay5nz399b4/image-2.jpeg",
        "https://trustereo.ru/upload/iblock/e3b/707v0ngqowwoxdmg0j87kqju7f8c51aa/image-3.jpeg",
        "https://trustereo.ru/upload/iblock/33c/v2qqi4cvlj582qvrbvbmftwvwj0oeljg/image-4.jpeg",
      ],
      storage: 128,
    },
  ]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // Сортровка товаров
  const handleSort = (type) => {
    const sortFunctions = {
      all: () => [...iphonesData].sort((a, b) => a.id - b.id),
      cheap: () => [...iphonesData].sort((a, b) => a.price - b.price),
      expensive: () => [...iphonesData].sort((a, b) => b.price - a.price),
    };

    setSortType(type);
    setIphonesData(sortFunctions[type]());

    // if (type == "all") {
    //   setSortType(type);
    //   setIphonesData([...iphonesData].sort((a, b) => a.id - b.id));
    // } else if (type == "cheap") {
    //   setSortType(type);
    //   setIphonesData([...iphonesData].sort((a, b) => a.price - b.price));
    // } else if (type == "expensive") {
    //   setSortType(type);
    //   setIphonesData([...iphonesData].sort((a, b) => b.price - a.price));
    // }
  };

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
    }
  };


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
    }
  };

  React.useEffect(() => {
    fetchCartData();
    fetchFavouriteData();

    if (isOpenDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenDrawer, sortType]);

  return (
    <>
      <AppContext.Provider
        value={{
          iphonesData,
          cartItems,
          favouriteItems,
          handleAddToCard,
          handleAddToFavourite,
          sortType,
          handleSort
        }}
      >
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
            {/* <select
              // className={styles.}
              onChange={(e) => handleSort(e.target.value)}
              value={sortType}
            >
              <option value="all">Все</option>
              <option value="cheap">Дешевле</option>
              <option value="expensive">Дороже</option>
            </select> */}
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
