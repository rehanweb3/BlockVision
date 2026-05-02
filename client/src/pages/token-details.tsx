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
    "Holders (50.85K)",
    "Contract",
    "Token Activity"
];

const activityRows = [
    { id: 1, hash: "0xf12d...08d8", value: "10,100", method: "Transfer", from: "PoolManager", to: "0x19F0...1d56", age: "1m 5s ago" },
    { id: 2, hash: "0xf12d...08d8", value: "10,210", method: "Transfer", from: "0x19F0...1d56", to: "PoolManager", age: "1m 5s ago" },
    { id: 3, hash: "0x23d2...ab8d", value: "149.7547", method: "Transfer", from: "0xe1Aa...43fe", to: "0x63e4...53F2", age: "1m 5s ago" },
    { id: 4, hash: "0x1209...6ec4", value: "1,096.91", method: "Transfer", from: "0xCEe4...0959", to: "0x63e4...53F2", age: "1m 5s ago" },
    { id: 5, hash: "0x1282...67f6", value: "290.6101", method: "Transfer", from: "0xC3c2...820f", to: "PoolManager", age: "1m 8s ago" },
    { id: 6, hash: "0x5a5a...2a3c", value: "290.6101", method: "Transfer", from: "PoolManager", to: "0xC3c2...820f", age: "1m 10s ago" },
    { id: 7, hash: "0x7757...007a", value: "162.2161", method: "Transfer", from: "0xC3c2...820f", to: "PoolManager", age: "1m 15s ago" },
    { id: 8, hash: "0x310b...cb7c", value: "374.2967", method: "Transfer", from: "0x0783...A7Ef", to: "PoolManager", age: "1m 18s ago" },
    { id: 9, hash: "0x1c1c...c65c", value: "149.7035", method: "Transfer", from: "0xe1Aa...43fe", to: "0x63e4...53F2", age: "1m 18s ago" },
    { id: 10, hash: "0xc945...37fa", value: "499.8975", method: "Transfer", from: "0xccD7...9E9c", to: "0x5AFD...7620", age: "1m 19s ago" },
    { id: 11, hash: "0x50f3...da7d", value: "9,987.32", method: "Transfer", from: "PoolManager", to: "0x19F0...1d56", age: "1m 19s ago" },
    { id: 12, hash: "0x50f3...da7d", value: "10,213", method: "Transfer", from: "0x19F0...1d56", to: "PoolManager", age: "1m 19s ago" },
    { id: 13, hash: "0xa686...6613", value: "162.0067", method: "Transfer", from: "PoolManager", to: "0xC3c2...820f", age: "1m 19s ago" },
    { id: 14, hash: "0xd883...4a4a", value: "374.1985", method: "Transfer", from: "0x0783...A7Ef", to: "PoolManager", age: "1m 19s ago" },
    { id: 15, hash: "0x1708...2f0c", value: "149.6974", method: "Transfer", from: "0xe1Aa...43fe", to: "0x63e4...53F2", age: "1m 19s ago" },
    { id: 16, hash: "0xcbee...5a49", value: "548.4569", method: "Transfer", from: "0xCEe4...0959", to: "0x63e4...53F2", age: "1m 19s ago" },
    { id: 17, hash: "0xfffc...42d8", value: "576.2299", method: "Transfer", from: "0x34b1...65C6", to: "0x63e4...53F2", age: "1m 19s ago" },
    { id: 18, hash: "0x5ba7...1511", value: "0.036", method: "Transfer", from: "0x63bF...de56", to: "0x63e4...53F2", age: "1m 21s ago" },
    { id: 19, hash: "0x6851...d67d", value: "0.036", method: "Approval", from: "0x63bF...de56", to: "SmartRouter", age: "1m 21s ago" },
    { id: 20, hash: "0x08b6...52fd", value: "0.18869", method: "Transfer", from: "PoolManager", to: "0xC3c2...820f", age: "1m 24s ago" },
];

const overviewData = [
    { label: "Total Holders:", value: "50,851" },
    { label: "Total Transfers:", value: "63,564,495" },
    { label: "Max Total Supply:", value: "243,847,370.705191" },
];

const AddressBadge = ({ address }: { address: string }) => {
    const isSpecial = address === "PoolManager" || address === "SmartRouter";
    return (
        <div className={`relative w-fit h-[26px] bg-white border border-[#dee1e6] rounded inline-flex items-center px-2 gap-2 hover:bg-[#5b616e33] transition-colors cursor-pointer shadow-sm ${isSpecial ? "bg-gray-50" : ""}`}>
            {!isSpecial && (
                <img
                    className="w-4 h-4 flex-shrink-0 rounded-full"
                    alt="address blockie"
                    src={blockies(address)}
                />
            )}
            {isSpecial && (
                <img
                    className="w-4 h-4 flex-shrink-0"
                    alt="document icon"
                    src="/figmaAssets/prg5vm87r5mmrj57oo-1.svg" 
                />
            )}
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[11px] tracking-[0] leading-[normal] truncate">
                {address}
            </span>
            {!isSpecial && (
                <img
                    className="w-3.5 h-3.5 flex-shrink-0 ml-1 opacity-60 hover:opacity-100"
                    alt="copy"
                    src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
                />
            )}
        </div>
    );
};

export const TokenDetails = (): JSX.Element => {
    const [activeNav, setActiveNav] = useState<string>("Tokens");
    const [activeTab, setActiveTab] = useState<string>("Token Activity");
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
                                <img className="w-10 h-10 rounded-full" alt="token logo" src={blockies("USDC")} />
                                <h1 className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-2xl md:text-3xl tracking-tight leading-tight flex items-center gap-2">
                                    USDC <span className="text-[#5b616e] font-normal text-xl md:text-2xl">(USDC)</span>
                                </h1>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="px-2 py-0.5 bg-white border border-[#dee1e6] rounded-[4px] shadow-sm">
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[10px]">ERC20</span>
                                </div>
                                <AddressBadge address="0x7547...b603" />
                            </div>
                        </div>
                        {/* Right: Search */}
                        <div className="w-full lg:max-w-[500px] relative hidden md:block">
                            <div className="w-full h-12 bg-white rounded-full flex items-center pl-10 pr-2 border border-[#dee1e6] group focus-within:ring-2 focus-within:ring-[#0052ff] transition-all">
                                <span className="text-[#5b616e] text-sm flex-1 text-left overflow-hidden whitespace-nowrap overflow-ellipsis mr-4 [font-family:'Inter',sans-serif]">
                                    Search by Address, Project, Watchlist, Transaction, Block, Token, NFT
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
                
                {/* Side-by-side Overview Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Overview Card */}
                    <Card className="bg-white rounded-2xl border border-[#dee1e6] shadow-none p-0">
                        <CardContent className="p-2.5">
                            <div className="w-full h-[47px] bg-[#eef0f3] rounded-[10px] flex items-center justify-between px-6">
                                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">Overview</span>
                            </div>
                            <div className="w-full mt-[14px] bg-white rounded-2xl border border-[#dee1e6] px-6 py-0">
                                {overviewData.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex flex-col md:flex-row md:items-center items-start py-[18px] gap-2 md:gap-4">
                                            <span className="w-full md:w-[200px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal">
                                                {item.label}
                                            </span>
                                            <span className="flex-1 [font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal">
                                                {item.value}
                                            </span>
                                        </div>
                                        {index < overviewData.length - 1 && <Separator className="bg-[#5b616e33]" />}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* More Info Card */}
                    <Card className="bg-white rounded-2xl border border-[#dee1e6] shadow-none p-0">
                        <CardContent className="p-2.5">
                            <div className="w-full h-[47px] bg-[#eef0f3] rounded-[10px] flex items-center justify-between px-6">
                                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">More Info</span>
                            </div>
                            <div className="w-full mt-[14px] bg-white rounded-2xl border border-[#dee1e6] px-6 py-0">
                                {/* Contract */}
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center items-start py-[18px] gap-2 md:gap-4">
                                        <span className="w-full md:w-[150px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal">
                                            Contract:
                                        </span>
                                        <div className="flex-1 flex items-center min-w-0">
                                            <AddressBadge address="0x7547...b603" />
                                        </div>
                                    </div>
                                    <Separator className="bg-[#5b616e33]" />
                                </div>
                                {/* Decimals */}
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center items-start py-[18px] gap-2 md:gap-4">
                                        <span className="w-full md:w-[150px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal">
                                            Decimals:
                                        </span>
                                        <span className="flex-1 [font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal">
                                            6
                                        </span>
                                    </div>
                                    <Separator className="bg-[#5b616e33]" />
                                </div>
                                {/* Official Site */}
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center items-start py-[18px] gap-2 md:gap-4">
                                        <span className="w-full md:w-[150px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal">
                                            Official Site:
                                        </span>
                                        <span className="flex-1 [font-family:'Inter',sans-serif] font-normal text-[#0052ff] hover:underline cursor-pointer text-[13px] leading-normal truncate">
                                            https://www.circle.com/
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

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
                                    Activity
                                </span>
                            </div>

                            <div className="w-full overflow-x-auto">
                                <div className="min-w-[1000px] px-2.5">
                                    {/* Column headers */}
                                    <div className="w-full h-[30px] rounded-lg border border-solid border-[#dee1e6] grid grid-cols-[1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] gap-4 items-center px-4 mb-2">
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">TXN HASH</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">VALUE</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">METHOD</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">FROM</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">TO</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">AGE</span>
                                    </div>

                                    {/* Rows */}
                                    <div className="flex flex-col pb-4">
                                        {activityRows.map((row) => (
                                            <div
                                                key={row.id}
                                                className="w-full min-h-[50px] grid grid-cols-[1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] gap-4 items-center px-4 py-2 border-b border-[#dee1e6] last:border-0 hover:bg-[#f8f9fa] transition-colors"
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
                                                
                                                {/* VALUE */}
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm">
                                                    {row.value}
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

                                                {/* TO */}
                                                <div className="flex items-center min-w-0">
                                                    <AddressBadge address={row.to} />
                                                </div>

                                                {/* AGE */}
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm">
                                                    {row.age}
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
