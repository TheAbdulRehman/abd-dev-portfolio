import Image from "next/image";
import Profile from "@/public/abdul-rehman.jpeg";

const ProfilePic = () => {
  return (
    <>
      <div className="rounded-2xl bg-gray-800 p-4">
        <Image
          src={Profile}
          height="1000"
          width="1000"
          className="h-[360px]  sm:h-[460px] md:h-[360px] w-full object-cover object-top rounded-xl shadow-[0_0_9px_rgba(255,255,255,0.12)]"
          alt="A picture of Abdul Rehman, Front End Developer"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ProfilePic;
