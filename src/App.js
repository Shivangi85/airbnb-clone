import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="">

      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <Filters />
      {/* Rentals */}
      <Rentals />
      {/* Footers */}
      <Footer />

    </div>
  );
}

export default App;
