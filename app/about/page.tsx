import Info from "./components/Info";
import ProfilePic from "./components/ProfilePic";

export default async function Page() {
  return (
    <div className="container my-4 md:my-8 lg:my-10">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-6 lg:gap-x-12">
        <div className="col-span-12 md:col-span-8 order-2 md:order-1">
          <Info />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 order-1 md:order-2">
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}
