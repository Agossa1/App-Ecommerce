import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "../components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/40">
        <div className="container mx-auto py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:text-primary transition-colors">
              Marketplace
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-barlow font-bold mb-6">
            Welcome to Our Marketplace
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Discover amazing products and services
          </p>
          <Button variant="default" size="lg" className="font-semibold">
            Start Exploring
          </Button>
        </section>

        <section>
          <h2 className="text-3xl font-barlow font-semibold mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Product {i}</h3>
                <p className="text-muted-foreground mb-4">This is a brief description for product {i}. It's amazing!</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-barlow font-semibold mb-4">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {['Quality Products', 'Fast Delivery', 'Customer Support'].map((feature, index) => (
              <div key={index} className="p-4">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">&copy; 2024 Our Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}