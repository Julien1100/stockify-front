import axios from "axios";
import { redirect } from "react-router-dom";

export const registerAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
    role: data.get("role"),
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
