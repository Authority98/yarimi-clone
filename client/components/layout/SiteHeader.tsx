import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-extrabold">
            Y
          </div>
          <span className="text-lg font-semibold tracking-tight">Yarimi University</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
          <a href="#included" className="text-sm text-muted-foreground hover:text-foreground">Included</a>
          <a href="#curriculum" className="text-sm text-muted-foreground hover:text-foreground">Curriculum</a>
          <a href="#wins" className="text-sm text-muted-foreground hover:text-foreground">Wins</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg">
            <a href="#pricing">Enroll Now</a>
          </Button>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <Menu className="size-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 md:hidden">
          <nav className="container grid gap-2 py-4">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
            <a href="#included" className="text-sm text-muted-foreground hover:text-foreground">Included</a>
            <a href="#curriculum" className="text-sm text-muted-foreground hover:text-foreground">Curriculum</a>
            <a href="#wins" className="text-sm text-muted-foreground hover:text-foreground">Wins</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a>
            <Button asChild className="mt-2">
              <a href="#pricing">Enroll Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
