export type Fact = {
  title: string,
  link: string,
  displayLink: string,
}

export async function getFacts(fake: string): Promise<Fact> {
  const url = new URL("https://customsearch.googleapis.com/customsearch/v1");
  url.searchParams.set("key", process.env.API_KEY!);
  url.searchParams.set("cx", process.env.SEARCH_CX!);
  url.searchParams.set("q", fake);

  return fetch(url)
    .then(res => res.json())
    .then(data => data.items);
}