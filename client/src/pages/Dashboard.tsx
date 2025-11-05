import { Navbar } from "@/components/Navbar";
import { UserDashboard } from "@/components/UserDashboard";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <UserDashboard />
        </div>
      </main>
    </div>
  );
}
