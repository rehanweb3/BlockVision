// Data for each stat card
const statCards = [
  {
    icon: (
      <svg width="18" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256,281.6c-77.6,0-140.8-63.2-140.8-140.8S178.4,0,256,0s140.8,63.2,140.8,140.8S333.6,281.6,256,281.6z M256,25.6 c-63.5,0-115.2,51.7-115.2,115.2S192.5,256,256,256s115.2-51.7,115.2-115.2S319.5,25.6,256,25.6z" fill="currentColor" />
        <path d="M460.8,512H51.2c-21.2,0-38.4-17.2-38.4-38.4c0-1.7,0.4-43.1,31.4-84.5c18.1-24.1,42.8-43.2,73.5-56.8 c37.5-16.7,84-25.1,138.4-25.1s100.9,8.4,138.4,25.1c30.7,13.6,55.4,32.7,73.4,56.8c31,41.3,31.4,82.7,31.4,84.5 C499.2,494.8,482,512,460.8,512z M256,332.8c-89.3,0-155.1,24.4-190.5,70.6c-26.5,34.6-27.1,69.9-27.1,70.3c0,7,5.7,12.8,12.8,12.8 h409.6c7.1,0,12.8-5.7,12.8-12.8c0-0.3-0.6-35.7-27.1-70.3C411.1,357.2,345.2,332.8,256,332.8z" fill="currentColor" />
      </svg>
    ),
    headerLabel: "Total Accounts",
    headerValue: "207,376,894",
    trendIcon: "/figmaAssets/ezf7ozgk36cmmq0en9r-1.svg",
    trendValue: "1,586,901",
    stat1Label: "Total Accounts",
    stat1Value: "2,458,390",
    stat2Label: "24Hour New Account",
    stat2Value: "735",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0002 12L12.0002 20.5M12.0002 12L4.5 7.78124M12.0002 12L19.2627 7.91473M12 2.71875L3.75 7.35938L3.75 16.6406L12 21.2812L20.25 16.6406L20.25 7.35937L12 2.71875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    headerLabel: "Current Block",
    headerValue: "400",
    trendIcon: null,
    trendValue: null,
    stat1Label: "Avg Block Time",
    stat1Value: "2sec",
    stat2Label: "Gas Fee",
    stat2Value: "100GWei",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.75 20.75L3.75 16.75L7.75 12.75M16.25 11.25L20.25 7.25L16.25 3.25M5 16.75L20.25 16.75M3.75 7.25L19.25 7.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    headerLabel: "Total Transactions",
    headerValue: "207,376,894",
    trendIcon: "/figmaAssets/ezf7ozgk36cmmq0en9r-1.svg",
    trendValue: "1,586,901",
    stat1Label: "Total Transactions",
    stat1Value: "2,458,390",
    stat2Label: "24Hour New Transactions",
    stat2Value: "735",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 2.75L4.75 2.75L4.75 21.25L19.25 21.25L19.25 9.25M12.75 2.75L19.25 9.25M12.75 2.75L12.75 9.25L19.25 9.25M8.75 13.25H12.25M8.75 17.25H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    headerLabel: "Total Contracts",
    headerValue: "39,784",
    trendIcon: null,
    trendValue: null,
    stat1Label: "24H New Contracts",
    stat1Value: "95",
    stat2Label: "Total Tokens",
    stat2Value: "7,446",
  },
];

export const SummaryStatsSection = (): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {statCards.map((card, index) => (
        <div key={index} className="w-full h-[227px] relative">
          {/* Card background */}
          <div className="absolute inset-0 bg-white rounded-2xl border border-solid border-[#5b616e33] shadow-[0px_0px_2px_#00000026,0px_2px_5px_#0000000d,0px_8px_40px_#0000000a]" />

          {/* Bottom darker section */}
          <div className="absolute top-[88px] left-1 right-1 bottom-1 bg-[#eef0f3] rounded-2xl" />

          {/* Header section: icon + label + value + optional trend */}
          <div className="absolute top-6 left-[30px] flex items-center gap-0">
            <div className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center">
              {typeof card.icon === "string" ? (
                <img
                  className="w-[50px] h-[50px]"
                  alt="Icon"
                  src={card.icon}
                />
              ) : (
                <div className="w-[50px] h-[50px] bg-[#eef0f3] rounded-full flex items-center justify-center text-[#5b616e]">
                  {card.icon}
                </div>
              )}
            </div>
            <div className="ml-2 flex flex-col justify-center">
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-secondary-text text-base tracking-[0] leading-[normal]">
                {card.headerLabel}
              </span>
              <div className="flex items-center gap-2">
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-main-text text-base tracking-[0] leading-[normal]">
                  {card.headerValue}
                </span>
                {/* Trend indicator */}
                {card.trendIcon && card.trendValue && (
                  <div className="flex items-center gap-[3px]">
                    <img
                      className="mt-px w-4 h-4"
                      alt="trend"
                      src={card.trendIcon}
                    />
                    <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#45e3d0] text-xs tracking-[0] leading-[normal]">
                      {card.trendValue}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stat 1 */}
          <div className="absolute top-[103px] left-[27px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-secondary-text text-base tracking-[0] leading-[normal]">
              {card.stat1Label}
            </span>
          </div>
          <div className="absolute top-[127px] left-[30px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
              {card.stat1Value}
            </span>
          </div>

          {/* Stat 2 */}
          <div className="absolute top-[163px] left-[27px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-secondary-text text-base tracking-[0] leading-[normal]">
              {card.stat2Label}
            </span>
          </div>
          <div className="absolute top-[187px] left-[27px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
              {card.stat2Value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
