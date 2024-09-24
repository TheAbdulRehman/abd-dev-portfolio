import Image from "next/image";
import Profile from "@/public/abdul-rehman.jpeg";

const ProfilePic = () => {
  return (
    <>
      <div className="rounded-2xl bg-gray-800 md:p-1.5 lg:p-3">
        <Image
          src={Profile}
          height="500"
          width="500"
          className="h-[340px] md:h-[240px] lg:h-[310px] xl:h-[380px] w-full object-cover object-top rounded-xl shadow-[0_0_9px_rgba(255,255,255,0.12)]"
          alt="A picture of Abdul Rehman, Front End Developer"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ProfilePic;
