import { apiInstance } from "./apiconfig";

export const apiFetchData = async (id: string) => {
  try {
    const response = await apiInstance.get(
      `/posts/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
