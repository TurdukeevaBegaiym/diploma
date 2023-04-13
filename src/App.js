import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Delivery from "./pages/Delivery"
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, cteateContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "./firebase";

export const AppContext = createContext ( {
  categories: [],
})


function App() { 
  const [categories, setCategories] = useState ([]);
  
  useEffect(()=> {  //вsполнить только однажды
    return getDocs( categoryCollection) //получить категории
    .then(({docs}) => {// когда категории загрузились
      setCategories( //  обновить состояние
        docs.map(doc => ({//  новый массив
          ...doc.data(), //из свойств нейм
          id: doc.id // и свойство айди
        }))
      )
    });

  },[]);



  return (
    <div className="App">
      <AppContext.Provider value={{categories}}>
      <Layout>
      <Routes>
        <Route path="/" element= {<Home/>} exact />
        <Route path="/about" element= {<About/>}/>
        <Route path="/contacts" element= {<Contacts/>}/>
        <Route path="/delivery" element= {<Delivery/>}/>
        <Route path="/categories/:slug" element={<Category/>}/>
        
        <Route path="*" element= {<NotFound/>}/>
      </Routes>
      
    
      </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
