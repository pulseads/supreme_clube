import fs from "node:fs/promises";

const data = JSON.parse(await fs.readFile("/home/ubuntu/supreme-clube-landing/instagram-profile.json", "utf8"));
const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges || [];
const node = edges.map((edge) => edge.node).find((item) => item.shortcode === "DH_BT2uxMMt");
if (!node?.video_url) throw new Error("URL pública do vídeo não encontrada.");
const response = await fetch(node.video_url, { headers: { "User-Agent": "Mozilla/5.0" } });
if (!response.ok) throw new Error(`Falha ${response.status} ao baixar o vídeo.`);
const target = "/home/ubuntu/webdev-static-assets/supreme-clube-instagram-video-dh-bt2.mp4";
await fs.writeFile(target, Buffer.from(await response.arrayBuffer()));
console.log(target);
