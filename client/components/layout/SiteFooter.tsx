export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/60">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-extrabold">Y</div>
            <span className="text-lg font-semibold tracking-tight">Yarimi University</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">Learn forex trading with a clear roadmap, hands-on guidance, and a supportive community.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground/90">Navigation</p>
          <nav className="grid gap-1 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#included" className="hover:text-foreground">Included</a>
            <a href="#curriculum" className="hover:text-foreground">Curriculum</a>
            <a href="#wins" className="hover:text-foreground">Wins</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground/90">Get in touch</p>
          <p className="text-sm text-muted-foreground">support@yarimiuniversity.com</p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yarimi University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
