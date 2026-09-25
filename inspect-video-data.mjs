import fs from "node:fs/promises";
const data = JSON.parse(await fs.readFile("/home/ubuntu/supreme-clube-landing/instagram-profile.json", "utf8"));
const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges || [];
const node = edges.map((edge) => edge.node).find((item) => item.shortcode === "DH_BT2uxMMt");
if (!node) throw new Error("Publicação não encontrada no retorno do perfil.");
console.log(JSON.stringify({ keys: Object.keys(node), shortcode: node.shortcode, isVideo: node.is_video, videoUrl: node.video_url || null, videoVersions: node.video_versions || null, displayUrl: node.display_url }, null, 2));
