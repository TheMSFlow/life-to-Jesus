import axios from 'axios';

export const fetchVerses = async (book, chapter) => {
    const key = '2d6d924b-e3e8-429f-be53-97bf5a507575';
    const baseUrl = 'https://api.nlt.to/api/passages';
    const ref = `${book}.${chapter}`;
    const query = `?ref=${encodeURIComponent(ref)}&key=${encodeURIComponent(key)}&version=NLT`;

  try {
    const response = await axios.get(baseUrl + query);

    // Check if the API responded with data
    if (response.status === 200 && response.data) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: 'No data returned from the API.' };
    }
  } catch (error) {
    // Handle various error scenarios
    let errorMessage = 'An error occurred while fetching the verses.';
    if (error.response) {
      errorMessage = `API responded with status ${error.response.status}: ${error.response.data?.message || 'Unknown error'}`;
    } else if (error.request) {
      errorMessage = 'No response received from the API.';
    } else {
      errorMessage = `Request error: ${error.message}`;
    }
    return { success: false, error: errorMessage };
  }
};
