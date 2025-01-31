import { useEffect, useState } from "react";
import { fetchdata } from "../helpers/fetchData.js";

export const useFetchData = (endPoint) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  
 const getData = async () => {
  const { data, isLoading } = await fetchdata(endPoint)
  setdata(data)
  setisLoading(isLoading)
 }

  useEffect(() => {
    getData()
  },[endPoint]) ;

  
  return {
    data,
    isLoading
  }
}


