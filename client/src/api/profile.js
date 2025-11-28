import axios from "axios";

const BASE_URL = "http://localhost:3000/api/profiles";

export const createProfile = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/create`, data);
    return res.data; 
  } catch (err) {
    console.error("Error creating profile:", err.response?.data || err.message);
    throw err;
  }
};

export const getProfiles = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data; 
  } catch (err) {
    console.error("Error fetching profiles:", err.response?.data || err.message);
    throw err;
  }
};
