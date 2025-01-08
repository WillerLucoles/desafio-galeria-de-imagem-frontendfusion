import { useEffect, useState } from "react";
import { fetchImages } from "./Api/Pcisum";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(1, 5);
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  return (
    <div>
      {loading ? <p>Carregando...</p> : <p>{images.length} imagens carregadas!</p>}
    </div>
  );
}

export default App;
