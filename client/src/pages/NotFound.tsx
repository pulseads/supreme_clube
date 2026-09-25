import { Home, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();
  return <main className="min-h-screen flex items-center justify-center bg-[#071421] p-8 text-[#F5F6F3]"><div className="max-w-md text-center"><MapPin size={42} className="mx-auto mb-6 text-[#2F98D1]" /><p className="mb-3 font-mono text-sm tracking-[.2em] text-[#2F98D1]">SUPREME CLUBE / 404</p><h1 className="mb-4 text-6xl font-bold">Página não encontrada</h1><p className="mb-8 text-white/70">O endereço acessado não existe ou foi movido.</p><button onClick={() => setLocation("/")} className="inline-flex items-center gap-2 bg-[#0B6F9F] px-5 py-3 font-bold text-white hover:bg-[#075579]"><Home size={16} /> Voltar ao início</button></div></main>;
}
