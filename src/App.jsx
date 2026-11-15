import Header from "./section/Header";
import Body from "./section/Body";
import Footer from "./section/Footer";

const App = (props) => {

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default App;
