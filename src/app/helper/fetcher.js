import { getApiUrl } from "./functions";

export const callFetcher = async (endpoint, method, formData, headers) => {
  const apiUrl = getApiUrl();
    return await fetch(`${apiUrl}/${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(formData),
      });    
}  