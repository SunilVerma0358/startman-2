import "./App.css";
import Charts from "./components/Charts";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="bg-[url(../src/assets/images/png/body-bg.png)] bg-cover bg-center bg-no-repeat max-w-[1200px] mx-auto pt-12">
        <Features />
        <Charts />
        <Footer />
      </div>{" "}
      <div className="border-t border-t-dark-gray !max-w-[1920px] mx-auto">
        <div className="bg-[url(../src/assets/images/png/body-bg.png)] bg-cover bg-center bg-no-repeat max-w-[1200px] mx-auto  pb-[21px] pt-[22px]">
          <p className=" font-open font-normal text-base text-dark-gray leading-normal text-center">
            {" "}
            © {new Date().getFullYear()} {""}
            Stratman AI.All Rights Reserved{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
