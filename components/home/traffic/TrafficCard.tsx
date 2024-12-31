

const TrafficCard = () => {
  const bars = [
    { value: 70, color: 'bg-[#DEF4FE]',text:"text-[#2F8EAA]" },
    { value: 85, color: 'bg-[#2F8EAA]' ,text:"text-[#FFFFFF]" },
    { value: 100, color: 'bg-[#5927E5]',text:"text-[#FFFFFF]" }
  ];

  return (
    <div className="flex bg-black-texture bg-cover rounded-2xl pt-8 pl-8 text-white">
      <div>
        <p className="text-gray-400 text-sm font-medium">Drive More Traffic and Sales</p>
        <h3 className="text-2xl font-bold mt-2 mb-8">
          Drive more traffic<br />& product sales
        </h3>
      </div>
      <div className="flex mr items-end justify-between px-4">
        {bars.map(({ value, color,text }) => (
          <div key={value} className="text-center">
            <div 
              className={`mx-1 w-16 rounded-t-full transition-all duration-500 ${color} ${text} flex items-center justify-center`}
              style={{ height: `${value * 1.5}px` }}
            >
              <div className="transform -rotate-90 text-lg font-semibold whitespace-nowrap">
              {value}
              <span className="text-xs">%</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficCard;

