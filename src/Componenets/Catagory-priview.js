import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import ProductCard from "../Componenets/card";

import "./category-preview.styles.scss";

const CatagoryPriview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Box className='title' to={title} component={NavLink}>
          {title.toUpperCase()}
        </Box>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CatagoryPriview;
