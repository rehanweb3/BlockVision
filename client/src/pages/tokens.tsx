import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import blockies from "ethereum-blockies-base64";

// Navigation links data
const navLinks = [
    { label: "Blockchain" },
    { label: "Transactions" },
    { label: "Blocks" },
    { label: "Tokens" },
    { label: "Statistics" },
];

const topStats = [
    { label: "Total Transfers", value: "100,001,766" },
    { label: "24H Transfers", value: "81,153" },
    { label: "Total Tokens", value: "11,153" },
    { label: "24H New Tokens", value: "11" },
];

const activeAddressesData = [
  { day: "04-24", count: 200 },
  { day: "04-25", count: 450 },
  { day: "04-26", count: 300 },
  { day: "04-27", count: 600 },
  { day: "04-28", count: 500 },
  { day: "04-29", count: 750 },
  { day: "04-30", count: 800 },
];

const tokenTransfersData = [
  { day: "04-24", count: 25000 },
  { day: "04-25", count: 50000 },
  { day: "04-26", count: 45000 },
  { day: "04-27", count: 75000 },
  { day: "04-28", count: 60000 },
  { day: "04-29", count: 85000 },
  { day: "04-30", count: 100000 },
];

const chartConfigAddresses = { count: { label: "Addresses", color: "#45e3d0" } };
const chartConfigTransfers = { count: { label: "Transfers", color: "#45e3d0" } };

const tabs = ["Token Tracker", "Token Activity", "Watchlist"];

const tokenRows = [
    { id: 1, name: "$$$", holders: "1M", transfers: "13.16M", age: "18d ago" },
    { id: 2, name: "FOR", holders: "10.11K", transfers: "11.85M", age: "136d ago" },
    { id: 3, name: "$$$", holders: "974.25K", transfers: "10.45M", age: "18d ago" },
    { id: 4, name: "$$$", holders: "365K", transfers: "9.36M", age: "18d ago" },
    { id: 5, name: "$$$", holders: "954.82K", transfers: "8.95M", age: "18d ago" },
    { id: 6, name: "$$$", holders: "1M", transfers: "4.84M", age: "17d ago" },
    { id: 7, name: "$$$", holders: "1M", transfers: "4.84M", age: "17d ago" },
    { id: 8, name: "$$$", holders: "197.35K", transfers: "1.14M", age: "17d ago" },
    { id: 9, name: "$$$", holders: "197.24K", transfers: "1.14M", age: "17d ago" },
    { id: 10, name: "$$$", holders: "925.75K", transfers: "1.09M", age: "17d ago" },
    { id: 11, name: "$$$", holders: "925.18K", transfers: "1.08M", age: "17d ago" },
    { id: 12, name: "$$$", holders: "295.92K", transfers: "904.11K", age: "17d ago" },
    { id: 13, name: "$$$", holders: "296.5K", transfers: "904K", age: "17d ago" },
    { id: 14, name: "$$$", holders: "771.09K", transfers: "895.49K", age: "12d ago" },
    { id: 15, name: "$$$", holders: "771.07K", transfers: "895.43K", age: "12d ago" },
    { id: 16, name: "$$$", holders: "700.73K", transfers: "555.72K", age: "12d ago" },
    { id: 17, name: "$$$", holders: "700.78K", transfers: "555.38K", age: "12d ago" },
    { id: 18, name: "$$$", holders: "0", transfers: "87.78K", age: "15d ago" },
    { id: 19, name: "$$$", holders: "0", transfers: "87.78K", age: "15d ago" },
    { id: 20, name: "$$$", holders: "0", transfers: "87.78K", age: "15d ago" },
];

const TokenBadge = ({ name, id }: { name: string, id: number }) => (
    <div className="flex items-center gap-3 cursor-pointer group">
        <img
            className="w-6 h-6 flex-shrink-0 rounded-full"
            alt="token blockie"
            src={blockies(name + id)}
        />
        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-sm tracking-[0] leading-[normal] group-hover:text-[#0052ff] transition-colors">
            {name}
        </span>
    </div>
);

export const Tokens = (): JSX.Element => {
    const [activeNav, setActiveNav] = useState<string>("Tokens");
    const [activeTab, setActiveTab] = useState<string>("Token Tracker");
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
                <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <h1 className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-3xl md:text-[40px] tracking-tight leading-tight">
                        ERC20 Token
                    </h1>
                    <div className="w-full max-w-[500px] relative hidden md:block">
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
            </section>

            {/* Main content */}
            <main className="w-full min-w-0 max-w-[1440px] mx-auto px-4 lg:px-[21px] py-[24px] flex flex-col gap-6">
                
                {/* Top Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {topStats.map((stat, i) => (
                        <Card key={i} className="bg-white rounded-2xl border border-[#dee1e6] shadow-none flex flex-col items-start justify-center p-5 gap-1.5">
                            <span className="[font-family:'Inter',sans-serif] font-normal text-[#5b616e] text-xs uppercase tracking-wide">{stat.label}</span>
                            <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-lg md:text-xl">{stat.value}</span>
                        </Card>
                    ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="bg-white rounded-2xl border border-[#dee1e6] shadow-none p-0">
                        <CardContent className="p-2.5">
                            <div className="w-full h-[47px] bg-[#eef0f3] rounded-[10px] flex items-center justify-between px-6">
                                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">Daily Active Addresses</span>
                                <div className="flex items-center gap-1 cursor-pointer group">
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] group-hover:text-[#0052ff] transition-colors text-sm">View More</span>
                                    <img className="w-4 h-4" alt="Arrow" src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg" />
                                </div>
                            </div>
                            <div className="w-full mt-[14px] bg-white rounded-2xl border border-[#dee1e6] p-4 h-[300px]">
                                <ChartContainer config={chartConfigAddresses} className="h-full w-full">
                                    <AreaChart data={activeAddressesData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#eef0f3" />
                                        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} tick={{ fill: "#5b616e", fontSize: 12 }} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={0} width={60} tick={{ fill: "#5b616e", fontSize: 12 }} />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                                        <Area type="natural" dataKey="count" stroke="#45e3d0" fill="#45e3d0" fillOpacity={0.1} strokeWidth={2} />
                                    </AreaChart>
                                </ChartContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white rounded-2xl border border-[#dee1e6] shadow-none p-0">
                        <CardContent className="p-2.5">
                            <div className="w-full h-[47px] bg-[#eef0f3] rounded-[10px] flex items-center justify-between px-6">
                                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">Daily Token Transfers</span>
                                <div className="flex items-center gap-1 cursor-pointer group">
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] group-hover:text-[#0052ff] transition-colors text-sm">View More</span>
                                    <img className="w-4 h-4" alt="Arrow" src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg" />
                                </div>
                            </div>
                            <div className="w-full mt-[14px] bg-white rounded-2xl border border-[#dee1e6] p-4 h-[300px]">
                                <ChartContainer config={chartConfigTransfers} className="h-full w-full">
                                    <AreaChart data={tokenTransfersData} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#eef0f3" />
                                        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} tick={{ fill: "#5b616e", fontSize: 12 }} />
                                        <YAxis 
                                            tickLine={false} axisLine={false} tickMargin={0} width={60} 
                                            tick={{ fill: "#5b616e", fontSize: 12 }} 
                                            tickFormatter={(value) => value >= 1000 ? `${value / 1000}K` : value}
                                        />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                                        <Area type="natural" dataKey="count" stroke="#45e3d0" fill="#45e3d0" fillOpacity={0.1} strokeWidth={2} />
                                    </AreaChart>
                                </ChartContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Table Section */}
                <div className="w-full">
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

                    <Card className="w-full bg-white rounded-2xl border border-solid border-[#dee1e6] shadow-none overflow-hidden">
                        <CardContent className="p-2.5">
                            {/* Table header bar */}
                            <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] mb-[14px] flex items-center px-6">
                                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base">
                                    Token Tracker
                                </span>
                            </div>

                            <div className="w-full overflow-x-auto">
                                <div className="min-w-[800px] px-2.5">
                                    {/* Column headers */}
                                    <div className="w-full h-[30px] rounded-lg border border-solid border-[#dee1e6] grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-center px-4 mb-2">
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">#</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">NAME</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">HOLDERS</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">TRANSFERS</span>
                                        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs uppercase">AGE</span>
                                    </div>

                                    {/* Rows */}
                                    <div className="flex flex-col pb-4">
                                        {tokenRows.map((row) => (
                                            <div
                                                key={row.id}
                                                className="w-full min-h-[50px] grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-center px-4 border-b border-[#dee1e6] last:border-0 hover:bg-[#f8f9fa] transition-colors"
                                            >
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm">
                                                    {row.id}
                                                </div>
                                                <div className="flex items-center">
                                                    <TokenBadge name={row.name} id={row.id} />
                                                </div>
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm">
                                                    {row.holders}
                                                </div>
                                                <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-sm">
                                                    {row.transfers}
                                                </div>
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
