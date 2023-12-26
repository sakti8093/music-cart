import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0px 100px" }}>
        <Header />
        <Allroutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
