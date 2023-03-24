import React, { useCallback, useEffect, useRef, useState } from "react";
import HeaderMenu from "../headerMenu/HeaderMenu.js";
import styles from "./productmenu.module.css";
import { Routes, Route } from "react-router-dom";
import Beer600 from "./productLists/Beer600"
import LongNeck from "./productLists/LongNeck.js";
import Doses from "./productLists/Doses.js";
import Drinks from "./productLists/Drinks.js";
import NoAlcool from "./productLists/NoAlcool.js";
import Combo from "./productLists/Combo.js";
import Narg from "./productLists/Narguille.js";
import Food from "./productLists/Food.js";

function ProductMenu() {
 
  return (
    <main className={styles.container}>
      <HeaderMenu />
      <div
        className={styles.menuWraper}
      >
        <Routes>
          <Route path="/beer600" element={<Beer600 />} />
          <Route path="/longneck" element={<LongNeck />} />
          <Route path="/doses" element={<Doses />} />
          <Route path="/narg" element={<Narg />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/food" element={<Food />} />
          <Route path="/noalcool" element={<NoAlcool />} />
          <Route path="/combo" element={<Combo />} />
        </Routes>
      </div>
    </main>
  );
}

export default ProductMenu;
