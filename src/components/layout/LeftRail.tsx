import { Home, Database, Settings } from "lucide-react";

const items = [Home, Database, Settings];
const LeftRail = () => {
  return (
    <aside className="hidden w-16 border-r border-zinc-800 bg-zinc-950 md:block">
      <div className="flex h-full flex-col items-center gap-4 py-4">
        {items.map((Icon, idx) => (
          <button
            key={idx}
            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </aside>
  );
};

export default LeftRail;
