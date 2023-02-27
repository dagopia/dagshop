import { CatagoriesContext } from "../context/catagories.context";
import { useContext } from "react";

import "../Componenets/category-preview.styles.scss";

import CatagoryPriview from "../Componenets/Catagory-priview";

const CatagoryPreviewRoutes = () => {
  const { CatagoriesMap } = useContext(CatagoriesContext);

  return (
    <div className='category-preview-container'>
      {Object.keys(CatagoriesMap).map((title) => {
        const products = CatagoriesMap[title];
        return (
          <CatagoryPriview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CatagoryPreviewRoutes;
