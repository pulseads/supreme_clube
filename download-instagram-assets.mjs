import fs from "node:fs/promises";
import path from "node:path";

const baseDir = "/home/ubuntu/webdev-static-assets";
await fs.mkdir(baseDir, { recursive: true });
const data = JSON.parse(await fs.readFile("/home/ubuntu/supreme-clube-landing/instagram-profile-summary.json", "utf8"));
const media = data.edgeOwnerToTimelineMedia || [];
const selected = [];
const keywords = ["higienização", "polimento", "vitrificação", "ppf", "lavagem", "cabelo", "troca vidro"];
for (const item of media) {
  const text = `${item.caption} ${item.shortcode}`.toLowerCase();
  if (keywords.some((keyword) => text.includes(keyword)) && item.displayUrl) selected.push(item);
  if (selected.length >= 5) break;
}
if (data.profilePicture) selected.unshift({ shortcode: "profile-picture", displayUrl: data.profilePicture });
const manifest = [];
for (let index = 0; index < selected.length; index += 1) {
  const item = selected[index];
  const filename = `supreme-clube-instagram-${index}-${item.shortcode}.jpg`;
  const target = path.join(baseDir, filename);
  const response = await fetch(item.displayUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!response.ok) {
    console.error(`Falha ${response.status}: ${item.shortcode}`);
    continue;
  }
  await fs.writeFile(target, Buffer.from(await response.arrayBuffer()));
  manifest.push({ filename, shortcode: item.shortcode, caption: item.caption || "", sourceUrl: item.displayUrl });
  console.log(`${filename}\t${item.shortcode}`);
}
await fs.writeFile("/home/ubuntu/supreme-clube-landing/instagram-assets-manifest.json", JSON.stringify(manifest, null, 2));
