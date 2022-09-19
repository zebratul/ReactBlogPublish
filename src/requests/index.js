export const fetchData = async(resource) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}/`);
  const data = await response.json();
  return data;
}
