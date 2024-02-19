import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import VariantsProvider from "./provider/VariantsProvider";

export default function App() {
  return (
    <VariantsProvider>
      <div className="container ">
        <Header />
        <Body />
      </div>
    </VariantsProvider>
  );
}
