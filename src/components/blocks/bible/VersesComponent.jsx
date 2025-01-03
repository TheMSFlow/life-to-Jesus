import React, { useEffect, useState } from "react";
import { fetchVerses } from "../../../API/fetchVerses";

const VersesComponent = ({ book, chapter }) => {
  const [verses, setVerses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (chapter) {
        const result = await fetchVerses(book, chapter);
        if (result.success) {
          setVerses(result.data); // Assuming API returns HTML
          setError(null);
        } else {
          setError(result.error);
          setVerses(null);
        }
      }
    };
    fetchData();
  }, [chapter]);

  return (
    <div className="p-4 h-[76%] overflow-y-auto scrollbar-hide pb-3 prose max-w-none">
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {verses && (
        <div
          dangerouslySetInnerHTML={{ __html: verses }}
          className="text-xl"
        />
      )}
    </div>
  );
};

export default VersesComponent;
