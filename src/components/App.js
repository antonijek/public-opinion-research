import "../styles/app.css";
import BasicInformation from "./basicInformation";
import Header from "./header";
import Footer from "./footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BasicInformation />
      <Footer />
    </div>
  );
};

export default App;
