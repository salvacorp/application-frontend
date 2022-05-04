import { useEffect, useState } from 'react';

const useForms = ({ defaultData }: any) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(defaultData);
  }, [defaultData])

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setData((prevForms) => ({
      ...prevForms,
      [field]: value,
    }));
  }

  return { handleInputChange, data }
}

export { useForms }