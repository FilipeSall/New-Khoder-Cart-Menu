import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";
import ItemCard from "../ItemCard";
import aguatonica from "../../../assets/imgs/noalcool/aguatonica.webp";
import redbull from "../../../assets/imgs/noalcool/redbull.webp";
import aguacoco1l from "../../../assets/imgs/noalcool/aguacoco1l.webp";
import aguacomgas from "../../../assets/imgs/noalcool/aguacomgas.webp";
import aguamineral from "../../../assets/imgs/noalcool/aguamineral.webp";
import h20 from "../../../assets/imgs/noalcool/h20.webp";
import cocacola from "../../../assets/imgs/noalcool/cocacola.webp";
import cocacola0 from "../../../assets/imgs/noalcool/cocacola0.webp";
import guarana from "../../../assets/imgs/noalcool/guarana.webp";
import guarana0 from "../../../assets/imgs/noalcool/guarana0.webp";
import fantauva from "../../../assets/imgs/noalcool/fantauva.webp";
import fantalaranja from "../../../assets/imgs/noalcool/fantalaranja.webp";
import sprite from "../../../assets/imgs/noalcool/sprite.webp";
import sucos from "../../../assets/imgs/noalcool/sucos.webp";
import shotlimao from "../../../assets/imgs/noalcool/shotlimao.webp";

function NoAlcool() {
  const noAlcool = [
    {
      title: "Red bull",
      price: "$15,84",
      img:redbull
    },
    {
      title: "Agua de coco 1L",
      price: "$19,80",
      img:aguacoco1l
    },
    {
      title: "Agua tônica",
      price: "$6,60",
      img:aguatonica,
    },
    {
      title: "Agua com gás",
      price: "$6,60",
      img:aguacomgas,
    },
    {
      title: "Agua mineral",
      price: "$5,94",
      img:aguamineral,
    },
    {
      title: "H2O",
      price: "$5,94",
      img:h20,
    },
    {
      title: "Coca-cola",
      price: "$6,50",
      img:cocacola,
    },
    {
      title: "Coca-cola zero",
      price: "$6,50",
      img:cocacola0,
    },
    {
      title: "Guaraná",
      price: "$6,50",
      img:guarana,
    },
    {
      title: "Guaraná zero",
      price: "$6,50",
      img:guarana0,
    },
    {
      title: "Fanta-uva",
      price: "$6,50",
      img:fantauva,
    },
    {
      title: "Fanta-laranja",
      price: "$6,50",
      img:fantalaranja,
    },
    {
      title: "Sprite",
      price: "$6,50",
      img:sprite,
    },
    {
      title: "Suco de caju",
      price: "$6,50",
      img:sucos,
    },
    {
      title: "Suco de manga",
      price: "$6,50",
      img:sucos,
    },
    {
      title: "Suco de uva",
      price: "$6,50",
      img:sucos,
    },
    {
      title: "Suco de maracujá",
      price: "$6,50",
      img:sucos,
    },
    {
      title: "Suco de pêssego",
      price: "$6,50",
      img:sucos,
    },
    {
      title: "Shot de limão",
      price: "$6,50",
      img:shotlimao,
    },
  ];

  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(noAlcool, searchValue);

  return (
    <>
     {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 50}
          img={product.img}
        />
      ))}
    </>
  );
}

export default NoAlcool;
