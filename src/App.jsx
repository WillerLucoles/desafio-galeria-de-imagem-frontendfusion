import { FavoritesProvider } from "./Context/FavoritesContext";
import Header from "./Components/Header";
import FavoritesSection from "./Components/FavoritesSection";
import PhotoGallery from "./Components/PhotoGallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <FavoritesProvider>
      <div className="container mx-auto p-4">
        <Header />
        <FavoritesSection />
        <PhotoGallery />
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
