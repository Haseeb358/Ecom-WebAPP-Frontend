import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import ProductsContext from "./Context/ProductsContext.jsx";
import CartContext from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartContext>
        <ProductsContext>
          <App />
        </ProductsContext>
      </CartContext>
    </ThemeProvider>
  </StrictMode>
);
