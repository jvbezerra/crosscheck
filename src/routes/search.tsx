import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getFacts } from '~/models/facts.server';

export const loader: LoaderFunction = async ({request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("fake");
  const facts = await getFacts(search!);
  return { search, facts };
};

export const meta: MetaFunction = ({ data }) => ({
  title: `"${data.search}?"`,
  description: 'Será que é mesmo?'
});

export default function Search() {
  const { facts } = useLoaderData();
  return (
    <div className="w-full h-full mt-8">
    </div>
  )
}
