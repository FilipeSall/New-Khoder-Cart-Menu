import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";
import ItemCard from "../ItemCard";
import shawarma from "../../../assets/imgs/food/shawarma.webp";
import batatafrita from "../../../assets/imgs/food/batatafrita.webp";
import batatafritacheddar from "../../../assets/imgs/food/batatafritacheddar.webp";
import carnedesol from "../../../assets/imgs/food/carnedesol.webp";
import frango from "../../../assets/imgs/food/frango.webp";
import pasteldecarne from "../../../assets/imgs/food/pasteldecarne.webp";

function Food() {
  const food = [
    {
      title: "Batata frita",
      price: "$33,00",
      img:batatafrita,
    },
    {
      title: "Batata frita c/ cheddar e bacon",
      price: "$39,60",
      img:batatafritacheddar,
    },
    {
      title: "Carne de sol c/ mandioca",
      price: "$46,20",
      img:carnedesol,
    },
    {
      title: "Frango à Passarinho",
      price: "$36,96",
      img:frango,
    },
    {
      title: "Pastel de carne",
      price: "$22,44",
      img:pasteldecarne,
    },
    {
      title: "Shawarma de carne",
      price: "$33,00",
      img:shawarma,
    },
    {
      title: "Shawarma de carne desfiada",
      price: "$33,00",
      img:shawarma,
    },
    {
      title: "Shawarma de frango",
      price: "$29,04",
      img:shawarma,
    },
    {
      title: "Shawarma de  fahita",
      price: "$33,00",
      img:shawarma,
    },
    {
      title: "Shawarma filadélfia",
      price: "$36,96",
      img:shawarma,
    },
    {
      title: "Shawarma misto",
      price: "$33,00",
      img:shawarma,
    },
  ];

  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(food, searchValue);

  return (
    <>
       {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 130}
          img={product.img}
        />
      ))}
    </>
  );
}

export default Food;
