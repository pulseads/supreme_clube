import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("/home/ubuntu/supreme-clube-landing/instagram-profile-summary.json", "utf8"));
for (const [index, item] of data.edgeOwnerToTimelineMedia.entries()) {
  console.log(`ITEM ${index + 1} | ${item.shortcode} | video=${item.isVideo}`);
  console.log(item.caption.replaceAll("\\n", " ").replaceAll("\n", " ").trim());
  console.log(item.displayUrl);
  console.log("---");
}
console.log("PROFILE_PICTURE");
console.log(data.profilePicture);
