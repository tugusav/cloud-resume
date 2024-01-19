const API_BASE_URL = "https://1axuswlz1h.execute-api.ap-southeast-1.amazonaws.com/prd";

export const getPageViews = async (): Promise<number> => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-page-views`);
    const data = await response.json();
    const views = parseInt(data.body); 

    return views;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const updatePageViews = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/update-page-views`, {
      method: "POST",
    });
  } catch (error) {
    console.log(error);
  }
};
