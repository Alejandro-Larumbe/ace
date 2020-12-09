const fetchNames = async (id) => {
  const response = await fetch(`/api/students/all_names/${id}`, {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};

export default fetchNames;
