import type { MetaFunction } from "@remix-run/node";
import {
  Form,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css"

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' }
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "CrossCheck",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col items-center justify-center px-4 py-8 bg-stone-50">
        <header className="w-full grid place-items-center gap-8">
          <h1 className="text-6xl font-bold">CrossCheck</h1>
          <Form method="get" action="/search" className="w-full sm:w-1/2 grid grid-cols-6 shadow-md">
            <input
              name="fake"
              className="col-span-5 p-3 px-6 border-none"
              placeholder="Pesquise a fake news do dia..."
            />
            <button className="bg-black text-white grid place-items-center">
              <span className="material-symbols-outlined">
                search
              </span>
            </button>
          </Form>
        </header>
        <main>
          <Outlet/>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
