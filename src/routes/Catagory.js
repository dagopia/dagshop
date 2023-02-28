import { Grid } from "@mui/material";
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
    <Grid container spacing={2} sx={{ m: 2 }}>
      {products &&
        products.map((product) => (
          <Grid xs={12} md={3} lg={3}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Catagory;
