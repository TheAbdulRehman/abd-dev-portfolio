const PortfolioCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="rounded-lg p-4 border border-gray-500 bg-gray-700">
        {children}
      </div>
    </>
  );
};

export default PortfolioCard;
