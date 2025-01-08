import { useEffect, useState } from "react";
import { fetchImages } from "../Api/Pcisum";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(1, 30);
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  return (
    <section className="mb-6 mx-auto items-center">
      {loading ? (
        <p className="text-center">Carregando imagens...</p>
      ) : (
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
