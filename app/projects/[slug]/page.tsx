import { notFound } from "next/navigation";
import { HeadingH3, BodyText, TextBase } from "@/app/ui/Text/TextStyles";
import { projects } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import Acme from "@/public/hero-desktop.png";

export default async function Page({ params }: { params: { slug: string } }) {
  const prSlug = params.slug;

  // Function to find item by slug
  const findItemBySlug = (
    slug: string
  ):
    | {
        title: string;
        shortDescription: string;
        slug: string;
        featuredImage: string;
        tags: string[];
        role: string;
        longDescription: string;
        screenShots: string[];
        techStack: string;
        demoLink: string;
      }
    | undefined => {
    return projects.find((item) => item.slug === slug);
  };

  const selectedItem = findItemBySlug(prSlug);

  if (!selectedItem) {
    notFound();
  }
  return (
    <main className="container w-full md:w-4/5 lg:w-3/5 mt-4 md:mt-12 lg:mt-12">
      <HeadingH3 className="mb-7 md:mb-9 lg:mb-10 text-white">
        {selectedItem.title}
      </HeadingH3>
      <div className="flex justify-between items-start mb-7 md:mb-9 lg:mb-12">
        <div>
          <h6 className="font-bold text-lg text-white mb-2">Role</h6>
          <TextBase className="text-white"> {selectedItem.role}</TextBase>
        </div>
        <div>
          <h6 className="font-bold text-lg text-white mb-2">Tech Stack:</h6>
          <TextBase className="text-white ">{selectedItem.techStack}</TextBase>
        </div>
      </div>
      <div className="mb-7 md:mb-9 lg:mb-12">
        <Link
          href={selectedItem.demoLink}
          target="_blank"
          className="bg-white px-4 py-2 border text-gray-700 rounded"
        >
          Live Demo
        </Link>
      </div>
      <div className="mb-7 md:mb-9 lg:mb-10">
        <Image
          src={selectedItem.featuredImage}
          height="500"
          width="400"
          className="h-auto w-full object-cover rounded-xl mb-4 lg:mb-6"
          alt="thumbnail"
          loading="lazy"
        />
      </div>
      <div className="mb-7 md:mb-9 lg:mb-10">
        <h6 className="font-bold text-lg text-white mb-4">Project Details</h6>
        <TextBase className="text-white">
          {selectedItem.longDescription}
        </TextBase>
      </div>
      <div className="mb-7 md:mb-9 lg:mb-10">
        <Link
          href="/"
          className="bg-gray-700 px-4 py-2 border border-gray-400 text-white rounded"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
