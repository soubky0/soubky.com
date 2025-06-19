"use server";

import { GalleryImage } from "../app/gallery/types";

interface UploadThingResponse {
  files: Array<{
    key: string;
    name: string;
  }>;
}

export async function getUploadThingFiles(): Promise<GalleryImage[]> {
  try {
    const response = await fetch("https://api.uploadthing.com/v6/listFiles", {
      method: "POST",
      headers: {
        "x-uploadthing-api-key": process.env.UPLOADTHING_TOKEN || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      console.error("Error fetching files:", await response.text());
      return [];
    }

    const data = (await response.json()) as UploadThingResponse;

    return data.files.map((file) => ({
      alt: file.name,
      src: `https://bxs3wxozcj.ufs.sh/f/${file.key}`,
      key: file.key,
    }));
  } catch (error) {
    console.error("Error fetching files:", error);
    return [];
  }
}
