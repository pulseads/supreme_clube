import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { defineConfig } from "vite";

// The public landing uses WhatsApp and an embedded map, not the Manus backend.
// Keep the original full-stack configuration available for other environments.
export default defineConfig({
  base: "/",
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client/public"),
  envDir: import.meta.dirname,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "supreme-vercel-entry",
      transformIndexHtml: {
        order: "pre",
        handler(html) {
        // Never publish GitHub Pages as the canonical URL of a Vercel deploy.
        const clean = html
          .replace('src="/src/main.tsx"', 'src="/src/main.vercel.tsx"')
          .replace(/\s*<link rel="canonical"[^>]*>/, "")
          .replace(/\s*<meta property="og:url"[^>]*>/, "");
        const configuredUrl = process.env.SITE_URL;
        if (!configuredUrl) return clean;
        const url = new URL(configuredUrl);
        if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) {
          throw new Error("SITE_URL deve ser o endereço HTTPS público definitivo.");
        }
        url.pathname = url.pathname.replace(/\/?$/, "/");
        const safeUrl = url.href.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
        const image = new URL("assets/profile-picture.jpg", url).href;
        return clean
          .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`)
          .replace("</head>", `<link rel="canonical" href="${safeUrl}" /><meta property="og:url" content="${safeUrl}" /></head>`);
        },
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client/src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  build: { outDir: path.resolve(import.meta.dirname, "dist/public"), emptyOutDir: true },
});
