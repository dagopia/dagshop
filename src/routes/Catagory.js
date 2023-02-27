import { Box } from "@mui/system";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Componenets/card";
import { CatagoriesContext } from "../context/catagories.context";

export const Catagory = () => {
  const { catagory } = useParams();
  const { CatagoriesMap } = useContext(CatagoriesContext);
  const [products, setProducts] = useState(CatagoriesMap[catagory]);

  console.log("Params val : " + catagory);

  useEffect(() => {
    setProducts(CatagoriesMap[catagory]);
  }, [catagory, CatagoriesMap]);

  return (
    <Box sx={{}}>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Box>
  );
};

export default Catagory;
