import axios from "axios";

export const userLoader = async () => {
  try {
    // Récupérer le token et le userId
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");

    if (!token) {
      throw new Error("Token not found");
    }

    if (!id) {
      throw new Error("User not found");
    }

    // Configurer les headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Requête GET
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/user/${id}`,
      config
    );

    // Renvoie des données
    return response.data;
  } catch (error) {
    console.error("Error fecthing products data:", error.message);
    throw error;
  }
};
