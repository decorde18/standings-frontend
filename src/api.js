import axios from "axios";

const API_URL = "http://localhost:3306"; // Replace with your backend URL after deployment.

export const getTeams = async () => {
  try {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error;
  }
};