export const getResponseError = (error: any): any => {
  if (!error) return null;
  if (error.response) {
    if (error.response.data.error) {
      return error.response.data.error;
    }
    if (error.response.data.message) {
      return error.response.data.message;
    }

    return error.response.data;
  }

  return error.message;
};
