import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import filterItems from "../filterFunction";
import ItemCard from "../ItemCard";
import smirnoff from "../../../assets/imgs/destilado/smirnoff.webp";
import absolut from "../../../assets/imgs/destilado/absolut.webp";
import bananinha from "../../../assets/imgs/destilado/bananinha.webp";
import licor43 from "../../../assets/imgs/destilado/licor43.webp";
import tequila from "../../../assets/imgs/destilado/tequila.webp";
import seagers from "../../../assets/imgs/destilado/seagers.webp";
import redlabel from "../../../assets/imgs/destilado/redlabel.webp";
import jackdaniels from "../../../assets/imgs/destilado/jackdaniels.webp";
import chivas from "../../../assets/imgs/destilado/chivas.webp";
import oldpar from "../../../assets/imgs/destilado/oldpar.webp";
import balantaines from "../../../assets/imgs/destilado/balantaines.webp";
import elyx from "../../../assets/imgs/destilado/elyx.webp";
import cirok from "../../../assets/imgs/destilado/cirok.webp";
import greygoose from "../../../assets/imgs/destilado/greygoose.webp";
import blackLabel from "../../../assets/imgs/destilado/blacklabel.webp";
import tanqueray from "../../../assets/imgs/destilado/tanqueray.webp";
import beefeater from "../../../assets/imgs/destilado/beefeater.webp";
import bombey from "../../../assets/imgs/destilado/bombey.webp";
import langley from "../../../assets/imgs/destilado/langley.webp";
import pravda from "../../../assets/imgs/destilado/pravda.webp";
import stanislav from "../../../assets/imgs/destilado/stanislav.webp";
import hiddengarden from "../../../assets/imgs/destilado/hiddengarden.webp";
import viking from "../../../assets/imgs/destilado/viking.webp";
import chandonbrut from "../../../assets/imgs/destilado/chandonbrut.webp";
import chandonrose from "../../../assets/imgs/destilado/chandonrose.webp";
import chandonpassion from "../../../assets/imgs/destilado/chandonpassion.webp";
import doubleblack from "../../../assets/imgs/destilado/doubleblack.webp";
import casaperinichamat from "../../../assets/imgs/destilado/casaperinichamat.webp";
import casaperinibrutrose from "../../../assets/imgs/destilado/casaperinibrutrose.webp";

function Combo() {
  const combos = [
    {
      title: "Smirnoff",
      img: smirnoff,
      price: "$230,00",
    },
    {
      title: "Absolut",
      img: absolut,
      price: "$350,00",
    },
    {
      title: "Absolut Elyx",
      img: elyx,
      price: "$390,00",
    },
    {
      title: "Absolut Cirok",
      img: cirok,
      price: "$400,00",
    },
    {
      title: "Grey Goose",
      img: greygoose,
      price: "$430,00",
    },
    {
      title: "Jack Daniels",
      img: jackdaniels,
      price: "$382,82",
    },
    {
      title: "Chivas",
      img: chivas,
      price: "$382,82",
    },
    {
      title: "Red label",
      img: redlabel,
      price: "$310,00",
    },
    {
      title: "Old parr",
      img: oldpar,
      price: "$382,80",
    },
    {
      title: "Black label",
      img: blackLabel,
      price: "$462,00",
    },
    {
      title: "Double Black",
      img: doubleblack,
      price: "$480,00",
    },
    {
      title: "Ballantines",
      img: balantaines,
      price: "$277,20",
    },
    {
      title: "Tanqueray",
      img: tanqueray,
      price: "$330,00",
    },
    {
      title: "Beefeater",
      img: beefeater,
      price: "$330,00",
    },
    {
      title: "Bombey",
      img: bombey,
      price: "$330,00",
    },
    {
      title: "Seagers",
      img: seagers,
      price: "$224,40",
    },
    {
      title: "Langleys",
      img: langley,
      price: "$320,00",
    },
    {
      title: "Pravda 1750ml",
      img: pravda,
      price: "$700,00",
    },
    {
      title: "Pravda 750ml",
      img: pravda,
      price: "$370,00",
    },
    {
      title: "Stanislav",
      img: stanislav,
      price: "$340,00",
    },
    {
      title: "Hidden Garden",
      img: hiddengarden,
      price: "$215,00",
    },
    {
      title: "Viking",
      img: viking,
      price: "$220,00",
    },
    {
      title: "Tequila",
      img: tequila,
      price: "$280,00",
    },
    {
      title: "Chandon Brut",
      img: chandonbrut,
      price: "$230,00",
    },
    {
      title: "Chandon Rose",
      img: chandonrose,
      price: "$230,00",
    },
    {
      title: "Chandon Passion",
      img: chandonpassion,
      price: "$230,00",
    },
    {
      title: "Casa Perini Chamat",
      img: casaperinichamat,
      price: "$150,00",
    },
    {
      title: "Casa Perini Brut Rose",
      img: casaperinibrutrose,
      price: "$150,00",
    },
    {
      title: "Licor 43",
      img: licor43,
      price: "$280,00",
    },
    {
      title: "Bananinha",
      img: bananinha,
      price: "$95,00",
    },
  ];

  const { searchValue } = useContext(GlobalContext);
  const filtredList = filterItems(combos, searchValue);

  return (
    <>
      {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 70}
          img={product.img}
        />
      ))}
    </>
  );
}

export default Combo;
