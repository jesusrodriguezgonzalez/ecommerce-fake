import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContainerHome } from "./components/ContainerHome";
import { Layout } from "./components/core/Layout";
import { DetailsProducts } from "./components/products/DetailsProduct";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ContainerHome />} />
          <Route path="/details/:id" element={<DetailsProducts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
