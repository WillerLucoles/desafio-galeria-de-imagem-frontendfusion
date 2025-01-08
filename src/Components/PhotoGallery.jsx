import { useEffect, useState } from "react";
import { fetchImages } from "../Api/Pcisum";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(1, 20);
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  return (
    <section className="mb-6">
      {loading ? (
        <p className="text-center">Carregando imagens...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
