import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery showcasing various images",
};

export const generateStaticParams = async () => {
  return [];
};

// Sample image data - replace with your actual images
const galleryImages = [
  {
    src: "https://picsum.photos/600/400",
    alt: "Gallery image 1",
    width: 600,
    height: 400,
  },
  {
    src: "https://picsum.photos/600/400",
    alt: "Gallery image 2",
    width: 600,
    height: 400,
  },
  {
    src: "https://picsum.photos/600/400",
    alt: "Gallery image 3",
    width: 600,
    height: 400,
  },
  {
    src: "https://picsum.photos/600/400",
    alt: "Gallery image 4",
    width: 600,
    height: 400,
  },
  {
    src: "https://picsum.photos/600/400",
    alt: "Gallery image 5",
    width: 600,
    height: 400,
  },
  {
    src: "https://picsum.photos/600/400",
    alt: "Gallery image 6",
    width: 600,
    height: 400,
  },
];

export default function GalleryPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
