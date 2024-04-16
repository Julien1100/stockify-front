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
    const data = {
      email: response.data.email,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      role: response.data.role,
    };

    return data;
  } catch (error) {
    console.error("Error fecthing products data:", error.message);
    throw error;
  }
};
