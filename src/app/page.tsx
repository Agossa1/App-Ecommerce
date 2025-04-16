import ThemeToggle from "../components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-4">
        <nav className="flex justify-end">
          <ThemeToggle />
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-6xl font-barlow font-bold mb-6">
            Welcome to Our Marketplace
          </h1>
          <p className="text-xl mb-8">
            Discover amazing products and services
          </p>
          <Button variant="default" size="lg">
            Start Exploring
          </Button>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-barlow font-semibold mb-4">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder for product cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card text-card-foreground p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Product {i}</h3>
                <p>Description for product {i}</p>
                <Button variant="outline" className="mt-4">View Details</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}