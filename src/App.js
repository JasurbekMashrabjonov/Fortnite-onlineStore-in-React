import React, { useContext } from "react";
import "./App.css";
import {useEffect} from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Cart from "./Components/Cart";
import { ContextProvider } from "./reducer/context";
import Loader from './Components/Loader';

function App(){
  const {setData,isOpen,data} = useContext(ContextProvider)

  useEffect(() => {
    fetch('https://fortniteapi.io/v2/shop?lang=en',{
      headers:{
        "Authorization":"86bfb36d-7d49023e-a34a34f9-a70906b1"
      }
    })
      .then(data=>data.json())
      .then(data=>{
          setData(data.shop)
      })
      // eslint-disable-next-line
  }, []);
 if(!data.length ){
  return <Loader></Loader>
 }
  return(

      <>

        <Navbar  />
        {isOpen ? <Cart    /> : null}
        
        <Content />
        <Footer/>
      </>
    
  );
}
export default App ;