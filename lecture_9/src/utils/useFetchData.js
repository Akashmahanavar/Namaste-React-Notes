import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Add url to the dependency array
  const fetchData = async () => {
    try {
      console.log(url);
      let res = await fetch(url);
      let data = await res.json();
      setResponse(data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (response) return response;
};

export default useFetchData;
