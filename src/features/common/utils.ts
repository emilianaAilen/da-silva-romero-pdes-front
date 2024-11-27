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

export const poster = async (url: string, { arg }: { arg: any}) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(arg),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }

    return res.body;
  } catch (error: any) {
    throw new Error(error.message || 'Post failed');
  }
};