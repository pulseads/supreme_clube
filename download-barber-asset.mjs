import fs from "node:fs/promises";

const data = JSON.parse(await fs.readFile("/home/ubuntu/supreme-clube-landing/instagram-profile-summary.json", "utf8"));
const media = data.edgeOwnerToTimelineMedia || [];
const selected = media.find((item) => /cabelo|barbearia|barbeiro|corte/i.test(item.caption || "")) || media.find((item) => item.shortcode === "DZm0f5uO6Fg");
if (!selected?.displayUrl) throw new Error("Nenhuma imagem de barbearia encontrada no material público retornado.");
const response = await fetch(selected.displayUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
if (!response.ok) throw new Error(`Falha ${response.status} ao baixar ${selected.shortcode}`);
const target = "/home/ubuntu/webdev-static-assets/supreme-clube-instagram-barber-real.jpg";
await fs.writeFile(target, Buffer.from(await response.arrayBuffer()));
await fs.writeFile("/home/ubuntu/supreme-clube-landing/barber-asset-manifest.json", JSON.stringify({ shortcode: selected.shortcode, caption: selected.caption, target }, null, 2));
console.log(JSON.stringify({ shortcode: selected.shortcode, caption: selected.caption, target }, null, 2));
