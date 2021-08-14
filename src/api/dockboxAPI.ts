import axios from "axios";

export const createDockboxAPI = async ({ url }: { url: string }) => {
  console.log(url);
  const response = await axios.post("/dockbox", { url });
  return response;
};
