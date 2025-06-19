import Image from "next/image";
import { Metadata } from "next";
import { getUploadThingFiles } from "@/app/actions";
import { GalleryImage } from "./types";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery showcasing my favorite images",
};

export const generateStaticParams = async () => {
  return [];
};

export default async function GalleryPage() {
  const galleryImages = await getUploadThingFiles();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((image: GalleryImage, index: number) => (
          <Image
            key={image.key || index}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}
