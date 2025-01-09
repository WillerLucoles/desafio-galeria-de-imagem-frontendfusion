import { useEffect, useState } from "react";
import { fetchImages } from "../Api/Pcisum";
import ImageCard from "./ImageCard";

const PhotoGallery = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(1, 20);
      setImages(data);
      setFilteredImages(data);


      const uniqueAuthors = [...new Set(data.map((image) => image.author))];
      setAuthors(uniqueAuthors);

      setLoading(false);
    };
    loadImages();
  }, []);


  useEffect(() => {
    let updatedImages = images;

    if (selectedAuthor) {
      updatedImages = images.filter((image) => image.author === selectedAuthor);
    }


    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      updatedImages = updatedImages.filter((image) => {
        const dimensions = `${image.width}x${image.height}`; // Formato de dimensões
        return (
          image.author.toLowerCase().includes(lowerQuery) ||
          image.id.toString().includes(lowerQuery) ||
          dimensions.includes(lowerQuery)
        );
      });
    }

    setFilteredImages(updatedImages);
  }, [selectedAuthor, searchQuery, images]);

  return (
    <section className="mb-6 mx-auto items-center">
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Galeria de Fotos</h2>
          <div className="border-b border-gray-300 mt-1 w-full"></div>
        </div>

        <div className="ml-4">
          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-700"
          >
            <option value="">Todos os Autores</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </div>


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
