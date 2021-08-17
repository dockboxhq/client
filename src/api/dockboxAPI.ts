import axios from "axios";
import { WEBSOCKET_URL } from "utils/config";

export const createDockboxAPI = async ({ url }: { url: string }) => {
  console.log(url);
  const response = await axios.post("/dockbox", { url });
  return response;
};

export const getDockboxAPIWSURL = ({ id }: { id: string }) => {
  return `${WEBSOCKET_URL}/dockbox/ws/${id}`;
};
