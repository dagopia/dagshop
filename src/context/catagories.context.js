import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "./ShopData.js";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/Firebase";
export const CatagoriesContext = createContext({
  CatagoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {
  const [CatagoriesMap, setCatagoriesMap] = useState({});

  useEffect(() => {
    const getCatagories = async () => {
      const CatagoryMap = await getCategoriesAndDocuments();
      console.log(CatagoryMap);
      setCatagoriesMap(CatagoryMap);
      return CatagoryMap;
    };
    getCatagories();
  }, []);

  const value = { CatagoriesMap };
  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
