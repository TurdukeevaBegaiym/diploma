import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, productsCollection } from "./firebase";
import Product from "./pages/Product";

export const AppContext = createContext({
  categories: [],
  products: []
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //вsполнить только однажды
    getDocs(categoryCollection) //получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setCategories(
          //  обновить состояние
          docs.map((doc) => ({
            //  новый массив
            ...doc.data(), //из свойств нейм
            id: doc.id, // и свойство айди
          }))
        );
      });

      getDocs(productsCollection) //получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          //  обновить состояние
          docs.map((doc) => ({
            //  новый массив
            ...doc.data(), //из свойств нейм
            id: doc.id, // и свойство айди
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />

            <Route path="/products/:slug" element={<Product/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
