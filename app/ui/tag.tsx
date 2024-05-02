const Tag = ({ text }: { text: string }) => {
  return (
    <>
      <span className="px-3 py-1.5 border text-sm bg-gray-500 border-[#76767680] text-white rounded-md text-center inline-block">
        {text}
      </span>
    </>
  );
};

export default Tag;
