import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";
import ItemCard from "../ItemCard";
import corona from "../../../assets/imgs/beer/corona.webp";
import eisenbahn from "../../../assets/imgs/beer/eisenbahn.webp";
import budweiser from "../../../assets/imgs/beer/budweiser.webp";
import stella from "../../../assets/imgs/beer/stella.webp";
import becks from "../../../assets/imgs/beer/becks.webp";
import heineken from "../../../assets/imgs/beer/heineken.webp";
import heinekenZero from "../../../assets/imgs/beer/heinekenzero.webp";
import spaten from "../../../assets/imgs/beer/spaten.webp";
import skolbeatssense from "../../../assets/imgs/beer/skolbeatssense.webp";
import skolbeatsgt from "../../../assets/imgs/beer/skolbeatsgt.webp";

const longNeckImages = [
  { name: "Corona", src: corona },
  { name: "Eisenbahn", src: eisenbahn },
  { name: "Budweiser", src: budweiser },
  { name: "Stella Artois", src: stella },
  { name: "Becks", src: becks },
  { name: "Heineken", src: heineken },
  { name: "Heineken zero", src: heinekenZero },
  { name: "Spaten", src: spaten },
  { name: "Skoll beats sense", src: skolbeatssense },
  { name: "Skoll beats GT", src: skolbeatsgt },
];

function LongNeck() {
  const longNeck = [
    {
      title: "Corona",
      price: "$12,00",
    },
    {
      title: "Eisenbahn",
      price: "$10,00",
    },
    {
      title: "Budweiser",
      price: "$10,00",
    },
    {
      title: "Stella Artois",
      price: "$10,00",
    },
    {
      title: "Becks",
      rice: "$12,24",
    },
    {
      title: "Heineken",
      price: "$13,20",
    },
    {
      title: "Heineken zero",
      price: "$13,20",
    },
    {
      title: "Spaten",
      price: "$10,00",
    },
    {
      title: "Skoll beats sense",
      price: "$12,00",
    },
    {
      title: "Skoll beats GT",
      price: "$12,00",
    },
  ];

  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(longNeck, searchValue);

  return (
    <>
     {filtredList.map((product, i) => {
        const image = longNeckImages.find((img) => img.name === product.title);
        return (
          <ItemCard
            key={i}
            text={product.title}
            price={product.price}
            num={i + 11}
            img={image.src}
          />
        );
      })}
    </>
  );
}

export default LongNeck;
