const BASE_URL = "https://picsum.photos/v2/list";


 
export const fetchImages = async (page = 1, limit = 5) => {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error("Erro ao buscar imagens");
    return await response.json();
  } catch (error) {
    console.error("Erro ao consumir a API:", error);
    return [];
  }
};
