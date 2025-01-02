import React, { useEffect, useState } from 'react';
import { fetchVerses } from '../../../API/fetchVerses';

const VersesComponent = ({book, chapter}) => {
  const [verses, setVerses] = useState(null);
  const [error, setError] = useState(null);
    

  useEffect(() => {
    const fetchData = async () => {
      if (book && chapter) {
        const result = await fetchVerses(book, chapter); // Await the promise
        if (result.success) {
          setVerses(result.data);
          setError(null); // Clear any previous errors
        } else {
          setError(result.error);
          setVerses(null); // Clear any previous data
        }
      }
    };

    fetchData(); // Call the async function
  }, [book, chapter]); // Add dependencies


  return (
    <div className="p-4 h-[76%] overflow-y-auto scrollbar-hide pb-3">
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {verses && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">Verses:</h3>
          <p>{verses}</p>
        </div>
      )}
    </div>
  );
};

export default VersesComponent;
