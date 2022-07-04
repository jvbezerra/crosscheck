export default function Index() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-8">
      <header className="w-full grid place-items-center gap-8">
        <h1 className="text-6xl font-bold">CrossCheck</h1>
        <form className="w-full sm:w-1/2 grid grid-cols-6 shadow-md">
          <input
            name="fake"
            className="col-span-5 p-3 px-6 border-none"
            placeholder="Pesquise a fake news do dia..."
          />
          <button className="bg-black text-white">
            Enter
          </button>
        </form>
      </header>
      <main>
      </main>
    </div>
  );
}
