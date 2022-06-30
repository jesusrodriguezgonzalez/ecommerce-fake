import { Product } from "./products/Product";

export function ContainerHome() {
  const arr = [0, 1, 2, 3, 4];
  return (
    <>
      <div className="container-home">
        {arr.map((product) => (
          <Product></Product>
        ))}
      </div>
    </>
  );
}
