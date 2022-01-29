import api from "./apiConfig";

export const getCreators = async () => {
  try {
    const response = await api.get("/creators/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCreator = async (id) => {
  try {
    const response = await api.get(`/creators/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCreator = async (creator) => {
  try {
    const response = await api.post("/creators", creator);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCreator = async (id, creator) => {
  try {
    const response = await api.put(`/creators/${id}`, creator);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCreator = async (id) => {
  try {
    const response = await api.delete(`/creators/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
