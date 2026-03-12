

export default function Footer() {
    return (
        <footer className="relative z-10 py-12 border-t border-border/40 w-full text-center text-xs text-muted-foreground/50 bg-background/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© 2026 Digitvant Tech. All rights reserved.</p>
                <div className="flex gap-6 uppercase tracking-widest font-bold text-[10px]">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    )
}