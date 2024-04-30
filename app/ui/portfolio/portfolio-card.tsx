const PortfolioCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="rounded-2xl relative overflow-hidden group p-4 lg:p-6 border border-[#6b6b6b33] bg-gray-800">
        {children}
      </div>
    </>
  );
};

export default PortfolioCard;
