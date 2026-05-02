import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import blockies from "ethereum-blockies-base64";

// Navigation links data
const navLinks = [
    { label: "Blockchain" },
    { label: "Transactions" },
    { label: "Blocks" },
    { label: "Tokens" },
    { label: "Statistics" },
];

const tabs = [
    "Transaction",
    "Activity",
    "Internal Transaction",
    "Token",
    "NFT",
    "Events",
    "Contract"
];

const topTabs = ["Info", "Token", "NFT", "Stake"];

const contractInfoData = [
    { label: "Contract Creator:", value: "0x42E4...af42" },
    { label: "Implementation:", value: "0x39F8...EFca" },
    { label: "Creation Txn:", value: "0xf5fe...fc0a" },
    { label: "Creation Time:", value: "Dec-16-2025 09:51:23 AM" },
    { label: "First Seen:", value: "136 d 22 hrs ago" },
    { label: "Last Seen:", value: "2 secs ago" },
];

const activityRows = [
    { id: 1, hash: "0xcb6f...e848", method: "0x571acfac", from: "0x2bd9...11C8", to: "0xECA4...E812", age: "7 secs ago", value: "0 MON", fee: "0.05694 MON" },
    { id: 2, hash: "0x7a66...4462", method: "0xeb48b421", from: "0xb714...a525", to: "0xECA4...E812", age: "17 secs ago", value: "0 MON", fee: "0.03781 MON" },
    { id: 3, hash: "0xd33c...70d1", method: "0x571acfac", from: "0x4573...4eef", to: "0xECA4...E812", age: "20 secs ago", value: "0 MON", fee: "0.06613 MON" },
    { id: 4, hash: "0xffef...969c", method: "0xf81dcf9c", from: "0x21e8...7E86", to: "0xECA4...E812", age: "29 secs ago", value: "0 MON", fee: "0.30381 MON" },
    { id: 5, hash: "0xdbf4...2125", method: "0xeb48b421", from: "0xBE6F...1c56", to: "0xECA4...E812", age: "31 secs ago", value: "0 MON", fee: "0.05311 MON" },
    { id: 6, hash: "0xff24...1816", method: "0x571acfac", from: "0xC10F...02f8", to: "0xECA4...E812", age: "34 secs ago", value: "0 MON", fee: "0.05547 MON" },
    { id: 7, hash: "0x1ea7...ce58", method: "0xeb48b421", from: "0x33e1...3dE4", to: "0xECA4...E812", age: "44 secs ago", value: "0 MON", fee: "0.04391 MON" },
    { id: 8, hash: "0x2646...5f3c", method: "0xf81dcf9c", from: "0xA5fD...bFC6", to: "0xECA4...E812", age: "46 secs ago", value: "0 MON", fee: "0.19797 MON" },
    { id: 9, hash: "0x9c45...4f80", method: "0x571acfac", from: "0x7FCF...0265", to: "0xECA4...E812", age: "46 secs ago", value: "0 MON", fee: "0.07207 MON" },
    { id: 10, hash: "0x24c8...f731", method: "0xf81dcf9c", from: "0xFF13...052F", to: "0xECA4...E812", age: "50 secs ago", value: "0 MON", fee: "0.21447 MON" },
    { id: 11, hash: "0x9503...548e", method: "0xf81dcf9c", from: "0x90Bf...e7C8", to: "0xECA4...E812", age: "51 secs ago", value: "0 MON", fee: "0.21461 MON" },
    { id: 12, hash: "0x3924...865c", method: "0xf81dcf9c", from: "0xc949...5138", to: "0xECA4...E812", age: "53 secs ago", value: "0 MON", fee: "0.17342 MON" },
    { id: 13, hash: "0xbde2...fc4b", method: "0xf81dcf9c", from: "0x94FC...eC96", to: "0xECA4...E812", age: "53 secs ago", value: "0 MON", fee: "0.17342 MON" },
    { id: 14, hash: "0x00df...ef6f", method: "0xeb48b421", from: "0x7Bb1...D388", to: "0xECA4...E812", age: "57 secs ago", value: "0 MON", fee: "0.03283 MON" },
    { id: 15, hash: "0x0fe5...7c85", method: "0x571acfac", from: "0xF7D9...72b4", to: "0xECA4...E812", age: "1 min 0 sec ago", value: "0 MON", fee: "0.08327 MON" },
    { id: 16, hash: "0x3077...15a9", method: "0xeb48b421", from: "0x2d40...9986", to: "0xECA4...E812", age: "1 min 9 secs ago", value: "0 MON", fee: "0.04297 MON" },
    { id: 17, hash: "0x8c88...e3fd", method: "0xeb48b421", from: "0x6ae4...A2Bc", to: "0xECA4...E812", age: "1 min 9 secs ago", value: "0 MON", fee: "0.04297 MON" },
    { id: 18, hash: "0x1d13...d73f", method: "0xf81dcf9c", from: "0x7CD5...f8f8", to: "0xECA4...E812", age: "1 min 11 secs ago", value: "0 MON", fee: "0.13242 MON" },
    { id: 19, hash: "0xf9f1...9f04", method: "0x571acfac", from: "0x118e...bc4e", to: "0xECA4...E812", age: "1 min 13 secs ago", value: "0 MON", fee: "0.08015 MON" },
    { id: 20, hash: "0x2007...dee6", method: "0xeb48b421", from: "0x49e6...8f4F", to: "0xECA4...E812", age: "1 min 23 secs ago", value: "0 MON", fee: "0.03283 MON" },
];

const AddressBadge = ({ address }: { address: string }) => {
    return (
        <div className="relative w-fit h-[26px] bg-white border border-[#dee1e6] rounded inline-flex items-center px-2 gap-2 hover:bg-[#5b616e33] transition-colors cursor-pointer shadow-sm">
            <img
                className="w-4 h-4 flex-shrink-0 rounded-full"
                alt="address blockie"
                src={blockies(address)}
            />
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[11px] tracking-[0] leading-[normal] truncate">
                {address}
            </span>
            <img
                className="w-3.5 h-3.5 flex-shrink-0 ml-1 opacity-60 hover:opacity-100"
                alt="copy"
                src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
            />
        </div>
    );
};

export const ContractDetails = (): JSX.Element => {
    const [activeNav, setActiveNav] = useState<string>("Blockchain");
    const [activeTopTab, setActiveTopTab] = useState<string>("Info");
    const [activeTab, setActiveTab] = useState<string>("Transaction");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

    return (
        <div className="bg-[#f8f9fa] w-full min-h-screen flex flex-col overflow-x-hidden [font-family:'Inter',sans-serif]">
            {/* Top Navigation Bar */}
            <header className="w-full h-16 bg-[#eef0f3] border-b border-[#dee1e6] flex items-center px-4 md:px-10 sticky top-0 z-50">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img className="h-5 w-auto object-contain cursor-pointer" alt="AtherScan Logo" src="/AtherScan.png" />
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => setActiveNav(link.label)}
                                    className={`[font-family:'Inter',sans-serif] text-sm font-medium transition-colors hover:text-[#0052ff] ${activeNav === link.label ? "text-[#0052ff]" : "text-[#0a0b0d]"}`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <Button className="h-10 px-6 bg-[#0052ff] text-white rounded-full [font-family:'Inter',sans-serif] font-semibold text-sm hover:bg-[#003ecc] transition-all border-none">
                            Connect Wallet
                        </Button>
                    </div>
                    <div className="flex md:hidden items-center gap-3">
                        <button onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)} className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#dee1e6] text-[#0a0b0d]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isMobileSearchOpen ? (
                                    <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
                                ) : (
                                    <><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></>
                                )}
                            </svg>
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#dee1e6] text-[#0a0b0d]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                {isMobileSearchOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-[#dee1e6] p-4 md:hidden shadow-md animate-fade-up" style={{ animationDuration: '0.2s' }}>
                        <div className="w-full h-12 bg-gray-50 rounded-full flex items-center pl-4 pr-2 border border-[#dee1e6] focus-within:ring-2 focus-within:ring-[#0052ff] transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search..." className="bg-transparent flex-1 outline-none text-[#0a0b0d] [font-family:'Inter',sans-serif] text-sm placeholder:text-[#5b616e]" autoFocus />
                            <button className="bg-[#0052ff] hover:bg-[#003ecc] transition-colors rounded-full px-4 h-8 flex items-center justify-center text-white [font-family:'Inter',sans-serif] font-semibold text-xs ml-2">
                                Search
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-[#eef0f3] z-[60] flex flex-col p-4 md:hidden overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                            <img className="h-5 w-auto object-contain cursor-pointer" alt="AtherScan Logo" src="/AtherScan.png" />
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#dee1e6] text-[#0a0b0d]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6 items-start w-full mt-6 px-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => {
                                    setActiveNav(link.label);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`[font-family:'Inter',sans-serif] text-2xl font-medium transition-colors hover:text-[#0052ff] ${activeNav === link.label ? "text-[#0052ff]" : "text-[#0a0b0d]"}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                    <div className="mt-auto pt-10 flex justify-center pb-4">
                        <Button className="w-full max-w-sm h-12 bg-[#0052ff] text-white rounded-full [font-family:'Inter',sans-serif] font-semibold text-base hover:bg-[#003ecc] transition-all border-none">
                            Connect Wallet
                        </Button>
                    </div>
                </div>
            )}

            {/* Page Header Area */}
            <section className="w-full bg-[#eef0f3] py-8 md:py-12 px-4 md:px-10 flex flex-col border-b border-[#dee1e6]">
                <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-6">
                    {/* Top Row: Token Info & Search */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        {/* Token Info */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <h1 className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-2xl md:text-3xl tracking-tight leading-tight flex items-center gap-2">
                                    Contract
                                </h1>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#dee1e6] rounded-md shadow-sm">
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-sm truncate">
                                        0xECA4525700aE5cD73268Dc6Ff7a2Dd5bCE7dE812
                                    </span>
                                    <img
                                        className="w-4 h-4 flex-shrink-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                                        alt="copy"
                                        src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Right: Search */}
                        <div className="w-full lg:max-w-[500px] relative hidden md:block">
                            <div className="w-full h-12 bg-white rounded-full flex items-center pl-10 pr-2 border border-[#dee1e6] group focus-within:ring-2 focus-within:ring-[#0052ff] transition-all">
                                <span className="text-[#5b616e] text-sm flex-1 text-left overflow-hidden whitespace-nowrap overflow-ellipsis mr-4 [font-family:'Inter',sans-serif]">
                                    Search by Address, Transaction, Block, Token, NFT
                                </span>
                                <button className="bg-[#0052ff] hover:bg-[#003ecc] transition-colors rounded-full px-6 h-8 flex items-center justify-center text-white [font-family:'Inter',sans-serif] font-medium text-xs">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="w-full min-w-0 max-w-[1440px] mx-auto px-4 lg:px-[21px] py-[24px] flex flex-col gap-6">
                
                {/* Top Tabs */}
                <div className="flex items-center gap-2 border-b border-[#dee1e6] pb-2 overflow-x-auto">
                    {topTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTopTab(tab)}
                            className={`h-10 px-6 rounded-full [font-family:'Inter',sans-serif] font-medium text-sm tracking-wide transition-all whitespace-nowrap ${activeTopTab === tab
                                ? "bg-[#0052ff] text-white"
                                : "bg-transparent text-[#5b616e] hover:bg-[#eef0f3] hover:text-[#0a0b0d]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Single Contract Info Card */}
                <Card className="bg-white rounded-2xl border border-[#dee1e6] shadow-none p-0">
                    <CardContent className="p-2.5">
                        <div className="w-full h-[47px] bg-[#eef0f3] rounded-[10px] flex items-center justify-between px-6">
                            <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">Contract Info</span>
                        </div>
                        <div className="w-full mt-[14px] bg-white rounded-2xl border border-[#dee1e6] px-6 py-0">
                            {contractInfoData.map((item, index) => (
                                <div key={index}>
                                    <div className="flex flex-col md:flex-row md:items-center items-start py-[18px] gap-2 md:gap-4">
                                        <span className="w-full md:w-[200px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal">
                                            {item.label}
                                        </span>
                                        <div className="flex-1 flex items-center min-w-0">
                                            {item.value.startsWith("0x") ? (
                                                <AddressBadge address={item.value} />
                                            ) : (
                                                <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal truncate">
                                                    {item.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {index < contractInfoData.length - 1 && <Separator className="bg-[#5b616e33]" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Activity Section */}
                <div className="w-full mt-2">
                    {/* Tabs */}
                    <div className="flex items-center gap-2 mb-4 border-b border-[#dee1e6] pb-2 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`h-10 px-6 rounded-full [font-family:'Inter',sans-serif] font-medium text-sm tracking-wide transition-all whitespace-nowrap ${activeTab === tab
                                    ? "bg-[#0052ff] text-white"
                                    : "bg-transparent text-[#5b616e] hover:bg-[#eef0f3] hover:text-[#0a0b0d]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <Card className="w-full bg-white rounded-2xl border border-solid border-[#dee1e6] shadow-none p-0 overflow-hidden">
                        <CardContent className="p-2.5">
                            {/* Table header bar */}
                            <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] mb-[14px] flex items-center px-6 justify-between">
                                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">
                                    2,763,131 Txns Found
                                </span>
                                <span className="px-3 py-1 bg-white border border-[#dee1e6] rounded-full [font-family:'Inter',sans-serif] font-medium text-[#0052ff] text-xs shadow-sm cursor-pointer hover:bg-gray-50">
                                    TRY API
                                </span>
                            </div>

                            <div className="w-full overflow-x-auto">
                                <div className="min-w-[1100px] px-2.5">
                                    {/* Column headers */}
                                    <div className="w-full h-[30px] rounded-lg border border-solid border-[#dee1e6] grid grid-cols-[1.5fr_1fr_1.5fr_0.5fr_1.5fr_1fr_1fr_1fr] gap-4 items-center px-4 mb-2">
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">TXN HASH</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">METHOD</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">FROM</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase"></span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">TO</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">AGE</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase text-right">VALUE</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase text-right">TXN FEE</span>
                                    </div>

                                    {/* Rows */}
                                    <div className="flex flex-col pb-4">
                                        {activityRows.map((row) => (
                                            <div
                                                key={row.id}
                                                className="w-full min-h-[50px] grid grid-cols-[1.5fr_1fr_1.5fr_0.5fr_1.5fr_1fr_1fr_1fr] gap-4 items-center px-4 py-2 border-b border-[#dee1e6] last:border-0 hover:bg-[#f8f9fa] transition-colors"
                                            >
                                                {/* TXN HASH */}
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <img
                                                        className="w-3.5 h-3.5 flex-shrink-0 opacity-60"
                                                        alt="txn icon"
                                                        src="/figmaAssets/prg5vm87r5mmrj57oo-1.svg"
                                                    />
                                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0052ff] hover:underline cursor-pointer text-sm truncate">
                                                        {row.hash}
                                                    </span>
                                                </div>

                                                {/* METHOD */}
                                                <div className="flex items-center">
                                                    <div className="relative flex items-center justify-center bg-[#eef0f3] rounded px-2 py-[2px]">
                                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[10px] leading-normal">
                                                            {row.method}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* FROM */}
                                                <div className="flex items-center min-w-0">
                                                    <AddressBadge address={row.from} />
                                                </div>

                                                {/* IN BADGE */}
                                                <div className="flex justify-center">
                                                    <span className="px-2 py-0.5 bg-[#eef0f3] text-[#5b616e] rounded text-[10px] font-semibold [font-family:'Inter',sans-serif]">
                                                        IN
                                                    </span>
                                                </div>

                                                {/* TO */}
                                                <div className="flex items-center min-w-0">
                                                    <AddressBadge address={row.to} />
                                                </div>

                                                {/* AGE */}
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm">
                                                    {row.age}
                                                </div>
                                                
                                                {/* VALUE */}
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm text-right">
                                                    {row.value}
                                                </div>
                                                
                                                {/* TXN FEE */}
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#5b616e] text-xs text-right truncate">
                                                    {row.fee}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};
