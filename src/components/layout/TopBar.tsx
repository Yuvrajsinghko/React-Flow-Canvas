
const TopBar = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between border-zinc-800 bg-zinc-950 px-6">
      <h1 className="text-sm font-semibold text-white">
        ReactFlow Canvas
      </h1>

      <div className="flex gap-2">
        <button className="rounded-md border px-3 py-1 text-sm text-white border-zinc-700 ">
          Action
        </button>

        <button className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-white">
          Fit
        </button>
      </div>
    </header>
  )
}

export default TopBar