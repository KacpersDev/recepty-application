"use client";

import { useEffect } from "react";
import Header from "./components/header/Header";
import { RootState, store } from "./components/recepty/receptStore";
import { addRecept } from "./components/recepty/receptSlice";
import Recept from "./components/recepty/Recept";
import { Provider, useDispatch, useSelector } from "react-redux";
import Recepts from "./components/recepty/Recepts";

export default function Home() { 

  return(
    <div>
      <Provider store={store}>
        <Header/>
        <Recepts/>
      </Provider>
    </div>
  )
}