import { instance } from "./instance";

export const getRandomQuote = async (): Promise<Quote> => {
  const res = await instance.get("/random");

  const data: Quote = res.data;
  return data;
};
