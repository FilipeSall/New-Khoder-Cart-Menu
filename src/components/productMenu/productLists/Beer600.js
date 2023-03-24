import React, { useContext } from "react";
import ItemCard from "../ItemCard";
import heineken from "../../../assets/imgs/beer/heineken.webp";
import original from "../../../assets/imgs/beer/original.webp";
import brama from "../../../assets/imgs/beer/brama.webp";
import bohemia from "../../../assets/imgs/beer/bohemia.webp";
import eisenbahn from "../../../assets/imgs/beer/eisenbahn.webp";
import stella from "../../../assets/imgs/beer/stella.webp";
import spaten from "../../../assets/imgs/beer/spaten.webp";
import budweiser from "../../../assets/imgs/beer/budweiser.webp";
import serramalte from "../../../assets/imgs/beer/serramalte.webp";
import becks from "../../../assets/imgs/beer/becks.webp";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";

const beer600 = [
  {
    title: "Heineken",
    img: heineken,
    price: "$19,00",
  },
  {
    title: "Original",
    img: original,
    price: "$15,00",
  },
  {
    title: "Brahma duplo malte",
    img: brama,
    price: "$13,20",
  },
  {
    title: "Bohemia",
    img: bohemia,
    price: "$13,20",
  },
  {
    title: "Eisenbahn",
    img: eisenbahn,
    price: "$15,00",
  },
  {
    title: "Spaten",
    img: spaten,
    price: "$16,00",
  },
  {
    title: "Stella Artois",
    img: stella,
    price: "$16,00",
  },
  {
    title: "Serra Malte",
    img: serramalte,
    price: "$15,84",
  },
  {
    title: "Budweiser",
    img: budweiser,
    price: "$15,84",
  },
  {
    title: "Becks",
    img: becks,
    price: "$17,00",
  },
];

function Beer600() {
  
  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(beer600, searchValue);

  return (
    <>
      {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 1}
          img={product.img}
        />
      ))}
    </>
  );
}

export default Beer600;
