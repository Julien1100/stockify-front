import axios from "axios";

export const productsLoader = async () => {
  try {
    // Récupérer le token
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }

    // Configuerer les headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Requête GET
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/all`,
      config
    );

    // Renvoie des données
    return response.data;
  } catch (error) {
    console.error("Error fecthing products data:", error.message);
    throw error;
  }
};
