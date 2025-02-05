import axios from "axios";

export const createFAQ = async (data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/faqs`, data);
};

export const getFAQs = async (lang = "en") => {
  return axios.get(`${process.env.REACT_APP_API_URL}/faqs`, {
    params: { lang },
  });
};
