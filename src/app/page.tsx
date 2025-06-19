import { BlogPosts } from "@/components/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const generateStaticParams = async () => {
  return [];
};

export default function Page() {
  return (
    <section>
      <Avatar className="mb-4 h-24 w-24">
        <AvatarImage
          src="https://github.com/soubky0.png"
          alt="Omar Soubky Avatar"
        />
        <AvatarFallback>OS</AvatarFallback>
      </Avatar>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Omar Soubky
      </h1>
      <p className="mb-4">
        {`I specialize in crafting seamless user experiences using React, TypeScript, and AI-first tools. Currently, I’m building at Blended, where we’re reimagining how schools operate with AI. I'm passionate about creating products people love, and I care deeply about performance, aesthetics, and impact.
Whether it’s coding, debugging, or designing systems, I thrive on shipping thoughtful, fast interfaces—and always learning what’s next.
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
