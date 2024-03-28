import axios from "axios";

export const productDetailsLoader = async (id) => {
  try {
    // Récupérer le token
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }

    // Configurer les headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Requête GET
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${id}`,
      config
    );

    // Renvoie des données
    return response.data;
  } catch (error) {
    console.error("Error fecthing products data:", error.message);
    throw error;
  }
};

export const productDelete = async ({ product }) => {
  try {
    // Récupérer le token
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }

    // Configurer les headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/products/${product._id}`,
      config
    );
  } catch (error) {
    console.error("Error deleting product: ", error);
    throw error;
  }
};

export const productUpdate = async ({ product }) => {
  try {
    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }

    // Configurer les headers avec le token d'authentification
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Effectuer la requête PATCH avec Axios pour mettre à jour le produit
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/products/update/${product._id}`,
      product,
      config
    );

    // Vérifier la réponse et retourner les données mises à jour
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Failed to update product");
    }
  } catch (error) {
    // Gérer les erreurs
    console.error("Error updating product:", error);
    throw error;
  }
};
