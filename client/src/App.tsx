/*
 * Design direction: Supreme Clube — editorial neo-industrial brasileiro.
 * The app shell keeps the Supreme Clube experience immersive and conversion-led.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function AppRouter() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  // make sure to consider if you need authentication for certain routes
  return (
    <Router base={basePath}>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
