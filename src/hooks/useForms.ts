import { useState } from 'react';

const useForms = () => {
  const [data, setData] = useState({});

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