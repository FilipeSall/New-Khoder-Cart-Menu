import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";
import ItemCard from "../ItemCard";
import gintropical from "../../../assets/imgs/drink/gintropical.webp";
import gin7belo from "../../../assets/imgs/drink/gin7belo.webp";
import sodaamericana from "../../../assets/imgs/drink/sodaamericana.webp";
import gintonica from "../../../assets/imgs/drink/gintonica.webp";
import ginpassion from "../../../assets/imgs/drink/ginpassion.webp";
import gingranadine from "../../../assets/imgs/drink/gingranadine.webp";
import ginhibisco from "../../../assets/imgs/drink/ginhibisco.webp";
import moscowmule from "../../../assets/imgs/drink/moscowmule.webp";
import cosmopolitan from "../../../assets/imgs/drink/cosmopolitan.webp";
import negroni from "../../../assets/imgs/drink/negroni.webp";
import penicillin from "../../../assets/imgs/drink/penicillin.webp";
import ginmelancia from "../../../assets/imgs/drink/ginmelancia.webp";
import drymartini from "../../../assets/imgs/drink/drymartini.webp";
import mojito from "../../../assets/imgs/drink/mojito.webp";
import londonmule from "../../../assets/imgs/drink/londonmule.webp";
import margarita from "../../../assets/imgs/drink/margarita.webp";
import caipirinha from "../../../assets/imgs/drink/caipirinha.webp";

function Drinks() {
  
  const drinks = [
    {
      title: "Gin tropical",
      img: gintropical,
      price: "$27,00",
    },
    {
      title: "Gin 7belo",
      img: gin7belo,
      price: "$25,00",
    },
    {
      title: "Soda Americana",
      img: sodaamericana,
      price: "$25,00",
    },
    {
      title: "Gin Tonica",
      img: gintonica,
      price: "$22,00",
    },
    {
      title: "Gin Passion",
      img: ginpassion,
      price: "$25,00",
    },
    {
      title: "Gin Granadine",
      img: gingranadine,
      price: "$25,00",
    },
    {
      title: "Gin Hibisco",
      img: ginhibisco,
      price: "$27,00",
    },
    {
      title: "Moscow Mule",
      img: moscowmule,
      price: "$27,00",
    },
    {
      title: "Cosmopolitan",
      img: cosmopolitan,
      price: "$24,20",
    },
    {
      title: "Negroni",
      img: negroni,
      price: "$23,76",
    },
    {
      title: "Penicillin",
      img: penicillin,
      price: "$33,00",
    },
    {
      title: "Gin melancia",
      img: ginmelancia,
      price: "$27,00",
    },
    {
      title: "Dry martini",
      img: drymartini,
      price: "$26,40",
    },
    {
      title: "Mojito",
      img: mojito,
      price: "$19,80",
    },
    {
      title: "London mule",
      img: londonmule,
      price: "$23,76",
    },
    {
      title: "Margarita",
      img: margarita,
      price: "$23,76",
    },
    {
      title: "Caipirinha",
      img: caipirinha,
      price: "$21,12",
    },
  ];

  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(drinks, searchValue);

  return (
    <>
      {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 100}
          img={product.img}
        />
      ))}
    </>
  );
}

export default Drinks;
