import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blockies from "ethereum-blockies-base64";

// Navigation links data
const navLinks = [
    { label: "Blockchain" },
    { label: "Transactions" },
    { label: "Blocks" },
    { label: "Tokens" },
    { label: "Statistics" },
];

// Top Contracts data
const topContractsRows = [
    { id: "🥇", address: "0xECA4...E812", accounts: "320", transactions: "20,397", gas: "1,934.77 MON" },
    { id: "🥈", address: "Fortytwo", accounts: "117", transactions: "521", gas: "3.52675 MON" },
    { id: "🥉", address: "0xa336...9eD7", accounts: "49", transactions: "272", gas: "9.20289 MON" },
    { id: "4", address: "Monad: Staking", accounts: "26", transactions: "210,284", gas: "16.36792 MON" },
    { id: "5", address: "0x5Dc4...cc00", accounts: "16", transactions: "168", gas: "4.43088 MON" },
    { id: "6", address: "0x0000...a032", accounts: "15", transactions: "215", gas: "9.58093 MON" },
    { id: "7", address: "0x5FF1...2789", accounts: "14", transactions: "171", gas: "21.52129 MON" },
    { id: "8", address: "USDC", accounts: "9", transactions: "42", gas: "0.57884 MON" },
    { id: "9", address: "0x760A...5701", accounts: "7", transactions: "14", gas: "0.06915 MON" },
    { id: "10", address: "0x4337...f108", accounts: "6", transactions: "24", gas: "0.63692 MON" },
    { id: "11", address: "0x16F4...705a", accounts: "6", transactions: "331", gas: "7.2425 MON" },
    { id: "12", address: "0x1964...80cc", accounts: "6", transactions: "209,185", gas: "14,876 MON" },
    { id: "13", address: "0x4B53...Be89", accounts: "5", transactions: "24", gas: "0.57814 MON" },
    { id: "14", address: "0x2af3...5269", accounts: "5", transactions: "40", gas: "9.90753 MON" },
    { id: "15", address: "Wrapped MON", accounts: "4", transactions: "8", gas: "0.0832 MON" },
    { id: "16", address: "0xcA11...CA11", accounts: "4", transactions: "1,581", gas: "11.55292 MON" },
];

const timeTabs = ["1D", "3D", "7D"];
const rectangleDecorations = Array.from({ length: 30 });

const isNamedContract = (address: string) => {
    return !address.startsWith("0x");
};

// Address badge component
const AddressBadge = ({ address }: { address: string }) => {
    const named = isNamedContract(address);
    return (
        <div className={`relative w-fit h-[26px] bg-white border border-[#dee1e6] rounded inline-flex items-center px-2 gap-2 hover:bg-[#5b616e33] transition-colors cursor-pointer shadow-sm ${named ? "bg-gray-50" : ""}`}>
            {!named && (
                <img
                    className="w-4 h-4 flex-shrink-0 rounded-full"
                    alt="address blockie"
                    src={blockies(address)}
                />
            )}
            {named && (
                <img
                    className="w-4 h-4 flex-shrink-0"
                    alt="document icon"
                    src="/figmaAssets/prg5vm87r5mmrj57oo-1.svg" 
                />
            )}
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] truncate uppercase">
                {address}
            </span>
            {!named && (
                <img
                    className="w-3.5 h-3.5 flex-shrink-0 ml-auto opacity-60 hover:opacity-100"
                    alt="copy"
                    src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
                />
            )}
        </div>
    );
};

export const TopContracts = (): JSX.Element => {
    const [activeNav, setActiveNav] = useState<string>("Blockchain");
    const [activeTimeTab, setActiveTimeTab] = useState<string>("1D");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

    return (
        <div className="bg-[#f8f9fa] w-full min-h-screen flex flex-col overflow-x-hidden [font-family:'Inter',sans-serif]">
            {/* Top Navigation Bar */}
            <header className="w-full h-16 bg-[#eef0f3] border-b border-[#dee1e6] flex items-center px-4 md:px-10 sticky top-0 z-50">
                <div className="w-full flex items-center justify-between">
                {/* Left Side: Logo + Navigation */}
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2 cursor-pointer">
                    <img className="h-5 w-auto object-contain cursor-pointer" alt="AtherScan Logo" src="/AtherScan.png" />
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                        key={link.label}
                        onClick={() => setActiveNav(link.label)}
                        className={`[font-family:'Inter',sans-serif] text-sm font-medium transition-colors hover:text-[#0052ff] ${activeNav === link.label ? "text-[#0052ff]" : "text-[#0a0b0d]"
                            }`}
                        >
                        {link.label}
                        </button>
                    ))}
                    </nav>
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                    className="h-10 px-6 bg-[#0052ff] text-white rounded-full [font-family:'Inter',sans-serif] font-semibold text-sm hover:bg-[#003ecc] transition-all border-none"
                    >
                    Connect Wallet
                    </Button>
                </div>

                {/* Mobile Actions */}
                <div className="flex md:hidden items-center gap-3">
                    <button 
                    onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#dee1e6] text-[#0a0b0d]"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMobileSearchOpen ? (
                        <>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </>
                        ) : (
                        <>
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </>
                        )}
                    </svg>
                    </button>
                    <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#dee1e6] text-[#0a0b0d]"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                    </button>
                </div>
                </div>

                {/* Mobile Search Overlay */}
                {isMobileSearchOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-[#dee1e6] p-4 md:hidden shadow-md animate-fade-up" style={{ animationDuration: '0.2s' }}>
                    <div className="w-full h-12 bg-gray-50 rounded-full flex items-center pl-4 pr-2 border border-[#dee1e6] focus-within:ring-2 focus-within:ring-[#0052ff] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent flex-1 outline-none text-[#0a0b0d] [font-family:'Inter',sans-serif] text-sm placeholder:text-[#5b616e]" 
                        autoFocus
                    />
                    <button className="bg-[#0052ff] hover:bg-[#003ecc] transition-colors rounded-full px-4 h-8 flex items-center justify-center text-white [font-family:'Inter',sans-serif] font-semibold text-xs ml-2">
                        Search
                    </button>
                    </div>
                </div>
                )}
            </header>

            {/* Mobile Full Screen Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-[#eef0f3] z-[60] flex flex-col p-4 md:hidden overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                    <img className="h-5 w-auto object-contain cursor-pointer" alt="AtherScan Logo" src="/AtherScan.png" />
                    </div>
                    <button 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#dee1e6] text-[#0a0b0d]"
                    >
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
                        className={`[font-family:'Inter',sans-serif] text-2xl font-medium transition-colors hover:text-[#0052ff] ${activeNav === link.label ? "text-[#0052ff]" : "text-[#0a0b0d]"
                        }`}
                    >
                        {link.label}
                    </button>
                    ))}
                </nav>
                
                <div className="mt-auto pt-10 flex justify-center pb-4">
                    <Button
                    className="w-full max-w-sm h-12 bg-[#0052ff] text-white rounded-full [font-family:'Inter',sans-serif] font-semibold text-base hover:bg-[#003ecc] transition-all border-none"
                    >
                    Connect Wallet
                    </Button>
                </div>
                </div>
            )}

            {/* Page Header Area */}
            <section className="w-full bg-[#eef0f3] py-8 md:py-12 px-4 md:px-10 flex flex-col border-b border-[#dee1e6]">
                <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    {/* Left: Title */}
                    <h1 className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-3xl md:text-[40px] tracking-tight leading-tight">
                        Top Contracts
                    </h1>

                    {/* Right: Search bar */}
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
            </section>

            {/* Main content */}
            <main className="w-full min-w-0 max-w-[1440px] mx-auto px-4 lg:px-[21px] py-[24px]">
                
                {/* Time Tabs */}
                <div className="flex items-center gap-2 mb-4 border-b border-[#dee1e6] pb-2 overflow-x-auto">
                    {timeTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTimeTab(tab)}
                            className={`h-10 px-6 rounded-full [font-family:'Inter',sans-serif] font-medium text-sm tracking-wide transition-all whitespace-nowrap ${activeTimeTab === tab
                                ? "bg-[#0052ff] text-white"
                                : "bg-transparent text-[#5b616e] hover:bg-[#eef0f3] hover:text-[#0a0b0d]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Table card */}
                <Card className="w-full bg-white rounded-2xl border border-solid border-[#dee1e6] shadow-none overflow-hidden">
                    <CardContent className="p-2.5">
                        {/* Table header bar */}
                        <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] mb-[14px] flex items-center overflow-hidden">
                            {/* Rectangle decorations */}
                            <div className="absolute inset-0 flex flex-row overflow-hidden rounded-[10px]">
                                {rectangleDecorations.map((_, index) => (
                                    <img
                                        key={`rect-${index}`}
                                        className="w-[50px] h-[47px] flex-shrink-0 opacity-40"
                                        alt="Rectangle"
                                        src="/figmaAssets/rectangle-14.svg"
                                    />
                                ))}
                            </div>

                            {/* Title / Count */}
                            <span className="relative z-10 ml-6 [font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal] flex-1">
                                100 Top Contracts
                            </span>
                        </div>

                        {/* Table Content Area */}
                        <div className="w-full overflow-x-auto">
                            <div className="min-w-[1000px] px-2.5">
                                {/* Column headers */}
                                <div className="w-full h-[30px] rounded-lg border border-solid border-[#dee1e6] grid grid-cols-[0.5fr_2fr_1.5fr_1.5fr_1.5fr] gap-4 items-center px-4 mb-2">
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase text-center">
                                        #
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        CONTRACTS
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        ACCOUNTS
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        TRANSACTIONS
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        GAS CONSUMPTION
                                    </span>
                                </div>

                                {/* Rows */}
                                <div className="flex flex-col pb-4">
                                    {topContractsRows.map((row) => (
                                        <div
                                            key={row.id}
                                            className="w-full min-h-[50px] grid grid-cols-[0.5fr_2fr_1.5fr_1.5fr_1.5fr] gap-4 items-center px-4 py-2 border-b border-[#dee1e6] last:border-0 hover:bg-[#f8f9fa] transition-colors"
                                        >
                                            {/* # */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[15px] tracking-[0] leading-[normal] text-center">
                                                {row.id}
                                            </div>

                                            {/* CONTRACTS */}
                                            <div className="flex justify-start">
                                                <AddressBadge address={row.address} />
                                            </div>

                                            {/* ACCOUNTS */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                                                {row.accounts}
                                            </div>

                                            {/* TRANSACTIONS */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                                                {row.transactions}
                                            </div>

                                            {/* GAS CONSUMPTION */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                                                {row.gas}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};
