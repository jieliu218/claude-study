import { SidebarNav } from "@/components/layout/SidebarNav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 max-w-6xl mx-auto w-full px-4">
      {/* Left sidebar */}
      <aside className="hidden md:block w-60 shrink-0 border-r sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
        <SidebarNav />
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 py-8 max-w-3xl">
        {children}
      </main>
    </div>
  );
}
