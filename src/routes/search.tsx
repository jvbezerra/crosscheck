import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import FactItem from '~/components/FactItem';
import type { Fact } from '~/models/facts.server';
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
  const { facts = [] } = useLoaderData();
  return (
    <div className="w-full h-full mt-8">
      {facts.map((fact: Fact, idx: React.Key) => <FactItem key={idx} fact={fact}/>)}
    </div>
  )
}
