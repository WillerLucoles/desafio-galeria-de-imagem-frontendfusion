const BASE_URL = "https://picsum.photos/v2/list";

export const fetchImages = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error("Failed to fetch images");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
