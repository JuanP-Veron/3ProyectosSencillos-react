import { useEffect, useState } from "react";
import { fetchdata } from "../hooks/fetchdata";

export const useFetchData = ({endPoint}) => {

  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
 const getData = async () => {
  const { data, isLoading } =await fetchdata(endPoint)
  setdata(data)
  setIsLoading(isLoading)
 }

  useEffect(() => { 
    getData()
  }, [endPoint]);

  
  return {
    data,
    isLoading
  }
}


