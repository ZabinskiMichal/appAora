import { useState, useEffect } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await fn();
      setData(response)

    }catch {
      Alert.alert('Error', error.message)

    }finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []) //when array is empty, we only fetch data at the start

  const refetch = () => fetchData();

  return { data, isLoading, refetch }
}

export default useAppwrite