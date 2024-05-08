import Header from "@/app/ui/Header";
import Portfolio from "@/app/ui/portfolio/portfolio";

export default function Page() {
  return (
    <>
      <Header />
      <div className="mb-8 md:mb-12 lg:mb-16">
        <Portfolio />
      </div>
    </>
  );
}
