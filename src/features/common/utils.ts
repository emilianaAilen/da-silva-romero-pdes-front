export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url, { credentials: 'include' });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Fetch failed');
  }
};