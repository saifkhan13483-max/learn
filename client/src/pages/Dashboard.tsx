import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No course data to display.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}