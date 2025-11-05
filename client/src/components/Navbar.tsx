import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/ai-prompts", label: "AI Prompts" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant={location === link.href ? "secondary" : "ghost"}
            data-testid={`link-${link.label.toLowerCase()}`}
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer" data-testid="link-logo">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">DevLearn AI</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="hidden md:flex" data-testid="button-enroll">
            Enroll Now
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <NavLinks />
                <Button className="w-full" data-testid="button-enroll-mobile">
                  Enroll Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
