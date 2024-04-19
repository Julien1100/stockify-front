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

export const passwordUpdate = async (password) => {
  try {
    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");

    if (!token) {
      throw new Error("Token not found");
    }

    // Configurer les headers avec le token d'authentification
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    };

    // Effectuer la requête PUT avec Axios pour mettre à jour le mot de passe
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/user/update/password/${id}`,
      { password: password },
      config
    );

    // Vérifier la réponse et retourner les données mises à jour
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Failed to update password");
    }
  } catch (error) {
    // Gérer les erreurs
    console.error("Error updating password:", error);
    throw error;
  }
};
