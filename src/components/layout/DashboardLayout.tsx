import LeftRail from "./LeftRail";
import TopBar from "./TopBar";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-black text-white">
  <TopBar />

  <div className="flex h-[calc(100vh-64px)]">
    <LeftRail />

    <main className="flex-1">
      Canvas Area
    </main>

    <aside className="hidden w-64 border-l lg:block">
      Right Panel
    </aside>
  </div>
</div>
  )
}

export default DashboardLayout