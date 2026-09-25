import fs from "node:fs/promises";

const assets = [
  ["https://img.lightshot.app/cEkd7fswRaqlSOtzkokLXw.png", "supreme-barber-highlight-beard.png"],
  ["https://img.lightshot.app/A17E8JEGQ5CHcWKXHypapw.png", "supreme-barber-highlight-family.png"],
  ["https://img.lightshot.app/4CvA-4AJQeqqd3zB0z3QRA.png", "supreme-barber-highlight-agenda.png"],
];
const output = [];
for (const [url, filename] of assets) {
  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`Falha ${response.status} ao baixar ${url}`);
  const target = `/home/ubuntu/webdev-static-assets/${filename}`;
  await fs.writeFile(target, Buffer.from(await response.arrayBuffer()));
  output.push({ url, target });
}
await fs.writeFile("/home/ubuntu/supreme-clube-landing/barber-reference-assets.json", JSON.stringify(output, null, 2));
console.log(JSON.stringify(output, null, 2));
