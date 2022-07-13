import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("fake");
  return search;
};

export const meta: MetaFunction = ({ data }) => ({
  title: `"${data}?"`,
  description: 'Será que é mesmo?'
});

export default function Search() {
  const search = useLoaderData();
  return (
    <div className="w-full h-full mt-8">
    </div>
  )
}
