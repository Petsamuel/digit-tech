import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Shadcn UI is successfully set up!&nbsp;
          <code className="font-bold">app/page.tsx</code>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Fast Performance</CardTitle>
            <CardDescription>Built with Next.js and Tailwind CSS 4.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Experience blazing fast load times and smooth interactions with our optimized architecture.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-1 border-primary/20 bg-primary/[0.02]">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <CardTitle>Shadcn components</CardTitle>
            <CardDescription>Premium UI components ready to use.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Try an Input</Label>
                <Input id="email" placeholder="hello@example.com" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Beautiful Design</CardTitle>
            <CardDescription>Aesthetics that wow your users.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Clean, modern, and fully responsive layouts that look great on any device.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">View Demo</Button>
          </CardFooter>
        </Card>
      </div>

      <footer className="mt-24 text-center text-sm text-muted-foreground">
        Built with ❤️ using Antigravity and shadcn/ui
      </footer>
    </div>
  );
}
