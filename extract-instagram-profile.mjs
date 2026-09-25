import fs from "node:fs";

const profile = JSON.parse(fs.readFileSync("/home/ubuntu/supreme-clube-landing/instagram-profile.json", "utf8"));
const user = profile?.data?.user ?? {};
const output = {
  username: user.username,
  fullName: user.full_name,
  biography: user.biography,
  profilePicture: user.profile_pic_url_hd || user.profile_pic_url,
  externalLinks: user.bio_links || [],
  edgeOwnerToTimelineMedia: (user.edge_owner_to_timeline_media?.edges || []).slice(0, 12).map(({ node }) => ({
    id: node.id,
    shortcode: node.shortcode,
    typename: node.__typename,
    caption: node.edge_media_to_caption?.edges?.[0]?.node?.text || "",
    displayUrl: node.display_url,
    thumbnailUrl: node.thumbnail_src,
    isVideo: node.is_video,
    dimensions: node.dimensions,
  })),
};
fs.writeFileSync("/home/ubuntu/supreme-clube-landing/instagram-profile-summary.json", JSON.stringify(output, null, 2));
console.log(JSON.stringify(output, null, 2));
