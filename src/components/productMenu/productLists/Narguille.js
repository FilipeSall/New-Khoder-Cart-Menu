import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";
import ItemCard from "../ItemCard";
import narg from "../../../assets/imgs/tabacaria/narg.webp";
import mangueira from "../../../assets/imgs/tabacaria/mangueira.webp";
import piteira from "../../../assets/imgs/tabacaria/piteira.webp";
import tabaco from "../../../assets/imgs/tabacaria/tabaco.webp";
import isqueiro from "../../../assets/imgs/tabacaria/isqueiro.webp";

function Narg() {
  const tabacaria = [
    {
      title: "Narguillé",
      price: "$30,00",
      img:narg,
    },
    {
      title: "Narguillé premium",
      price: "$42,00",
      img:narg,
    },
    {
      title: "Mangueira descartável",
      price: "$9,60",
      img:mangueira,
    },
    {
      title: "Piteira descartável",
      price: "$1,02",
      img:piteira,
    },
    {
      title: "Tabaco unidade",
      price: "$3,00",
      img:tabaco,
    },
    {
      title: "Isqueiro",
      price: "$10,00",
      img:isqueiro,
    },
  ];

  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(tabacaria, searchValue);

  return (
    <>
       {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 120}
          img={product.img}
        />
      ))}
    </>
  );
}

export default Narg;
