const domain = import.meta.env.PUBLIC_API_WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2/`;

export const getPageInfo = async (slug: string) => {
  const response = await fetch(`${apiUrl}pages?slug=${slug}`);
  if (!response.ok) throw new Error("Failed to fetch data");

  const [data] = await response.json();

  return {
    ...data,
    title: data.title.rendered,
    content: data.content.rendered,
  };
};

export const getPosts = async (page: number) => {
  const response = await fetch(`${apiUrl}posts?page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data;
};

export const getPost = async (slug: string) => {
  const response = await fetch(`${apiUrl}posts?slug=${slug}`);
  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data;
};

export const getPostsByTag = async (tag: string, page: number) => {
  const response = await fetch(`${apiUrl}posts?tags=${tag}&page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data;
};

export const getPostsByCategory = async (category: string, page: number) => {
  const response = await fetch(
    `${apiUrl}posts?categories=${category}&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data;
};
