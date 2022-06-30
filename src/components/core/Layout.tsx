import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header></Header>
      <div className="layout">{children}</div>
      <Footer></Footer>
    </>
  );
}
