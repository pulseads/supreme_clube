import { describe, expect, it } from "vitest";
import { storageGet } from "./storage";

describe("storageGet", () => {
  it("normalizes a storage key and returns the Manus storage path", async () => {
    await expect(storageGet("/supreme/video.mp4")).resolves.toEqual({
      key: "supreme/video.mp4",
      url: "/manus-storage/supreme/video.mp4",
    });
  });
});
