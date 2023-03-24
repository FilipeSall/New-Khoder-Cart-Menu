import React, { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';
import filterItems from '../filterFunction';
import ItemCard from '../ItemCard';
import smirnoff from "../../../assets/imgs/destilado/smirnoff.webp";
import absolut from "../../../assets/imgs/destilado/absolut.webp";
import orloff from "../../../assets/imgs/destilado/orloff.webp";
import bananinha from "../../../assets/imgs/destilado/bananinha.webp";
import licor43 from "../../../assets/imgs/destilado/licor43.webp";
import cachaca51 from "../../../assets/imgs/destilado/51.webp";
import seleta from "../../../assets/imgs/destilado/seleta.webp";
import salinas from "../../../assets/imgs/destilado/salinas.webp";
import tequila from "../../../assets/imgs/destilado/tequila.webp";
import gin from "../../../assets/imgs/destilado/seagers.webp";
import redlabel from "../../../assets/imgs/destilado/redlabel.webp";
import jackdaniels from "../../../assets/imgs/destilado/jackdaniels.webp";
import chivas from "../../../assets/imgs/destilado/chivas.webp";
import oldpar from "../../../assets/imgs/destilado/oldpar.webp";
import jagermeister from "../../../assets/imgs/destilado/jagermeister.webp";
import balantaines from "../../../assets/imgs/destilado/balantaines.webp";
import campari from "../../../assets/imgs/destilado/campari.webp";

function Doses() {

    const doses = [
        {
            title: "Dose smirnoff",
            img: smirnoff,
            price: "$18,46",
          },
          {
            title: "Dose absolut",
            img: absolut,
            price: "$19,80",
          },
          {
            title: "Dose orloff",
            img: orloff,
            price: "$13,20",
          },
          {
            title: "Dose bananinha",
            img: bananinha,
            price: "$13,20",
          },
          {
            title: "Dose licor 43",
            img: licor43,
            price: "$18,48",
          },
          {
            title: "Dose 51",
            img: cachaca51,
            price: "$9,24",
          },
          {
            title: "Dose seleta",
            img: seleta,
            price: "$10,56",
          },
          {
            title: "Dose salinas",
            img: salinas,
            price: "$10,56",
          },  
          {
            title: "Dose tequila",
            img: tequila,
            price: "$19,80",
          },
          {
            title: "Dose gin",
            img: gin,
            price: "$19,80",
          },
          {
            title: "Dose red label",
            img: redlabel,
            price: "$19,80",
          },
          {
            title: "Dose Jack Daniels",
            img: jackdaniels,
            price: "$23,76",
          },
          {
            title: "Dose chivas",
            img: chivas,
            price: "$23,76",
          },
          {
            title: "Dose Old Par",
            img: oldpar,
            price: "$23,76",
          },
          {
            title: "Dose Jagermeister",
            img: jagermeister,
            price: "$19,80",
          },
          {
            title: "Dose Balantaines",
            img: balantaines,
            price: "$19,80",
          },
          {
            title: "Dose Campari",
            img: campari,
            price: "$13,20",
          },
    ]

    const { searchValue } = useContext(GlobalContext);
    const filtredList = filterItems(doses, searchValue);

  return (
     <>
         {filtredList.map((product, i) => (
        <ItemCard
          key={i}
          text={product.title}
          price={product.price}
          num={i + 30}
          img={product.img}
        />
      ))}
     </>    
)
}

export default Doses