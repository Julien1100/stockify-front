import axios from "axios";
import { redirect } from "react-router-dom";

export const registerAction = async (formData) => {
  const submission = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/register`,
      submission
    );
    if (response.status === 201) {
      // Ajouter une alerte
      return redirect("/login");
    }
  } catch (error) {
    if (error.response.status === 400) {
      return { error: error.response.data };
    }
  }
  return null;
};
