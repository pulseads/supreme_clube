import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }
  render() {
    if (!this.state.hasError) return this.props.children;
    return <main className="min-h-screen flex items-center justify-center bg-[#071421] p-8 text-[#F5F6F3]"><div className="max-w-md text-center"><AlertTriangle size={46} className="mx-auto mb-6 text-[#2F98D1]" /><h1 className="mb-4 text-3xl font-semibold">Algo não saiu como esperado.</h1><p className="mb-7 text-white/70">Atualize a página para tentar novamente. Se o problema continuar, fale com a equipe pelo WhatsApp.</p><button onClick={() => window.location.reload()} className="inline-flex items-center gap-2 bg-[#0B6F9F] px-5 py-3 font-bold text-white hover:bg-[#075579]"><RotateCcw size={16} /> Tentar novamente</button></div></main>;
  }
}
