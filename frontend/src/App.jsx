import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Allroutes from "./routes/Allroutes";

function App() {
  const location = useLocation();

  // Function to check if the current route is the signIn route
  const isSignInRoute =
    location.pathname === "/signup" || location.pathname === "/";

  console.log(location.pathname, isSignInRoute, "cj");

  return (
    <>
      {!isSignInRoute && <Navbar />}
      <div style={{ padding: "0px 100px" }}>
        {!isSignInRoute && <Header />}
        <Allroutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
