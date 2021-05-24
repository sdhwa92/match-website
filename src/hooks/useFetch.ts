import { IMatch } from './../models/IMatch';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        // console.log(res);
        setData(res.data);
      });
  }, [url]);

  return data;
}

