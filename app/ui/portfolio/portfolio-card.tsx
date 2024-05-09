const PortfolioCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="rounded-2xl group backdrop-blur-[100px] bg-gray-800 relative overflow-hidden group p-1.5 border border-[rgba(190,190,190,0.2)] ">
        <div className="p-4 h-full lg:p-6 bg-gray-700 relative z-[1] shadow-base rounded-xl">
          {children}
          <div className="box z-[2] absolute top-8 lg:top-16 rounded-full w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] bg-[#0262F1] left-[50%] -translate-x-[50%] blur-[250px] hidden group-hover:block"></div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
