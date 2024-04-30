import Info from "./components/Info";
import ProfilePic from "./components/ProfilePic";

export default async function Page() {
  return (
    <main className="container pt-2 md:pt-6 pb-8 md:p-12 lg:pb-24 lg:pt-24">
      <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12">
        <div className="md:col-span-4">
          <ProfilePic />
        </div>
        <div className="md:col-span-8">
          <Info />
        </div>
      </div>
    </main>
  );
}
