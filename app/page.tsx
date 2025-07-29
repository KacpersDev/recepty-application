"use client";

import { useEffect } from "react";

import Header from "./components/header/Header";

export default function Home() { 

  useEffect(() => {
    fetch("https://private-anon-96e21c7737-cookbook3.apiary-mock.com/api/v1/recipes", {
      method: "GET",
    }).then(response => response.json().then(body => {
      console.log(body);
    }));
  }, []);

  return(
    <div>
      <Header/>
    </div>
  )
}