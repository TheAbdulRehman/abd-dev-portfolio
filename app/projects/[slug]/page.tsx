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
      <div className="mb-8 md:mb-10 lg:mb-12">
        <Link
          href="#"
          className="bg-gray-700 px-4 py-2 border text-white rounded"
        >
          back
        </Link>
      </div>
      <HeadingH3 className="mb-8 md:mb-10 lg:mb-12 text-white">
        {selectedItem.title}
      </HeadingH3>
      <div className="flex justify-between items-start mb-8 md:mb-10 lg:mb-12">
        <div>
          <h6 className="font-bold text-lg text-white mb-2">Role</h6>
          <TextBase className="text-white"> {selectedItem.role}</TextBase>
        </div>
        <div>
          <h6 className="font-bold text-lg text-white mb-2">Tech Stack:</h6>
          <TextBase className="text-white ">{selectedItem.techStack}</TextBase>
        </div>
      </div>
      <div className="mb-8 md:mb-10 lg:mb-12">
        <Link
          href={selectedItem.demoLink}
          target="_blank"
          className="bg-white px-4 py-2 border text-gray-700 rounded"
        >
          Live Demo
        </Link>
      </div>
      <div className="mb-8 md:mb-10 lg:mb-12">
        <Image
          src={Acme}
          height="1000"
          width="1000"
          className="h-[320px] md:h-[400px] w-full object-cover rounded-xl shadow-baseLight mb-4 lg:mb-6"
          alt="thumbnail"
          loading="lazy"
        />
      </div>
      <div className="mb-8 md:mb-10 lg:mb-12">
        <BodyText className="font-bold text-white mb-4">
          Project Details
        </BodyText>
        <TextBase className="text-white">
          {selectedItem.longDescription}
        </TextBase>
      </div>
      <div className="mb-8 md:mb-10 lg:mb-12">
        <Link
          href="#"
          className="bg-gray-700 px-4 py-2 border text-white rounded"
        >
          back
        </Link>
      </div>
    </main>
  );
}