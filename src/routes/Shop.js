import CatagoryPreviewRoutes from "../routes/Catagory-preview-route";
import Catagory from "./Catagory";
import { Route, Routes } from "react-router";
const Shop = () => {
  // const { CatagoriesMap } = useContext(CatagoriesContext);
  return (
    <Routes>
      <Route index element={<CatagoryPreviewRoutes />} />
      {/* catagory */}
      <Route path=':catagory' element={<Catagory />} />
    </Routes>
  );
};

export default Shop;
