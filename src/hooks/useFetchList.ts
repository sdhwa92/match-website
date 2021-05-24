import { useEffect, useState } from "react";

export default function useFetchList(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(val => {
      setData(val);
    });
  }, [url]);

  return data;
}