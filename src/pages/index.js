import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(".netlify/functions/hello");
      const details = await response.json();
      setData(details);
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Hello World From Gatsby</h1>
      <h1>{data.message}</h1>
    </div>
  );
};

export default HomePage;
