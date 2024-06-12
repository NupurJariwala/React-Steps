import AllRoutes from "./AllRoutes";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/" element={<h1>HomePage</h1>}></Route> */}
      {/* <Route path="/" element={<HomePage />}></Route> */}
      {/* <Route path="/about" element={<h1>AboutPage</h1>}></Route> */}
      {/* <Route path="/about" element={<AboutPage />}></Route> */}
      {/* <Route path="/contact" element={<h1>Contact Page</h1>}></Route> */}
      {/* <Route path="/contact" element={<ContactPage />}></Route>
      </Routes> */}
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
