"use client";

import Header from "./components/main/header/Header";
import { store } from "./components/main/recepty/receptStore";
import { Provider } from "react-redux";
import Recepts from "./components/main/recepty/Recepts";

export default function Home() { 

  return(
    <div>
      <Provider store={store}>
        <Header/>
        <div className="mt-[50px]">
          <Recepts/>
        </div>
      </Provider>
    </div>
  )
}