import api from "./apiConfig";

export const getAnimes = async () => {
  try {
    const response = await api.get("/animes");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnime = async (id) => {
  try {
    const response = await api.get(`/animes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAnime = async (anime) => {
  try {
    const response = await api.post("/animes", anime);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAnime = async (id, anime) => {
  try {
    const response = await api.put(`/animes/${id}`, anime);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAnime = async (id) => {
  try {
    const response = await api.delete(`/animes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
