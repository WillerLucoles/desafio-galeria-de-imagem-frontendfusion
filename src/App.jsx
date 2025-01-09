import { FavoritesProvider } from "./Context/FavoritesContext";
import Header from "./Components/Header";
import FavoritesSection from "./Components/FavoritesSection";
import PhotoGallery from "./Components/PhotoGallery";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <FavoritesProvider>
      <Header onSearch={setSearchQuery}/>
      <div className="max-w-6xl mx-auto p-4">
        <FavoritesSection />
        <PhotoGallery searchQuery={searchQuery}/>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
