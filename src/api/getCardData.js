import axios from "axios";

export async function getCardData() {
  try {
    const response = await axios.get("/api/getCardData");
    return response.data;
  } catch (error) {
    console.error("Error fetching card data:", error);
  }
}
