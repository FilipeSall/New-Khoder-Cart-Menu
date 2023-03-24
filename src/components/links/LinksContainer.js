import React from "react";
import styles from "./links.module.css";
import Beer600 from "../../assets/imgs/beer600.svg";
import LongNeck from "../../assets/imgs/longneck.svg";
import Doses from "../../assets/imgs/dose.svg";
import Drink from "../../assets/imgs/drink.svg";
import Noalcool from "../../assets/imgs/noalcool.svg";
import Food from "../../assets/imgs/food.svg";
import Narg from "../../assets/imgs/narg.svg";
import Link from "./Link";
import combo from "../../assets/imgs/combo.svg";

function Icon({ src, width, height }) {
  return (
    <svg width={width} height={height}>
      <image xlinkHref={src} width={width} height={height} />
    </svg>
  );
}

const linksData = [
    {
      text: 'Cerveja 600ml',
      href: '/beer600',
      icon: <Icon src={Beer600} width={25} height={25} />
    },
    {
      text: 'Long neck',
      href: '/longneck',
      icon: <Icon src={LongNeck} width={25} height={25} />
    },
    {
      text: 'Combo',
      href: '/combo',
      icon: <Icon src={combo} width={25} height={25} />
    },
    {
      text: 'Doses',
      href: '/doses',
      icon: <Icon src={Doses} width={25} height={25} />
    },
    {
      text: 'Drinks',
      href: '/drinks',
      icon: <Icon src={Drink} width={25} height={25} />
    },
    {
      text: 'Sem álcool',
      href: '/noalcool',
      icon: <Icon src={Noalcool} width={25} height={25} />
    },
    {
      text: 'Comida',
      href: '/food',
      icon: <Icon src={Food} width={25} height={25} />
    },
    {
      text: 'Tabacaria',
      href: '/narg',
      icon: <Icon src={Narg} width={25} height={25} />
    }
  ];
  
  function LinksContainer() {
    return (
      <div className={styles.wrapper}>
        {linksData.map(({ text, href, icon }, i) => (
          <Link key={i} href={href} icon={icon} text={text} />
        ))}
      </div>
    );
  }
  
  export default LinksContainer;