import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Navigation links data
const navLinks = [
    { label: "Blockchain" },
    { label: "Transactions" },
    { label: "Blocks" },
    { label: "Tokens" },
    { label: "Statistics" },
];

// Block data
const blockRows = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    height: "10,000.000",
    hash: "0x99e4...6ae2",
    txn: "1000",
    gasUsed: "702,438 (0.35%)",
    gasLimit: "200,000,000",
    age: "26 mins 34 secs ago",
}));

const rectangleDecorations = Array.from({ length: 24 });

import blockies from "ethereum-blockies-base64";

// Address badge component
const AddressBadge = ({ address }: { address: string }) => (
    <div className="relative w-fit h-[26px] bg-white border border-[#dee1e6] rounded inline-flex items-center px-2 gap-2 hover:bg-[#5b616e33] transition-colors cursor-pointer shadow-sm">
        <img
            className="w-4 h-4 flex-shrink-0 rounded-full"
            alt="address blockie"
            src={blockies(address)}
        />
        <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] truncate uppercase">
            {address}
        </span>
        <img
            className="w-3.5 h-3.5 flex-shrink-0 ml-auto opacity-60 hover:opacity-100"
            alt="copy"
            src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
        />
    </div>
);

export const Blocks = (): JSX.Element => {
    const [activeNav, setActiveNav] = useState<string>("Blocks");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

    return (
        <div className="bg-white w-full min-h-screen flex flex-col overflow-x-hidden [font-family:'Inter',sans-serif]">
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
                        Blocks
                    </h1>

                    {/* Right: Search bar */}
                    <div className="w-full max-w-[500px] relative hidden md:block">
                        <div className="w-full h-12 bg-white rounded-full flex items-center pl-10 pr-2 border border-[#dee1e6] group focus-within:ring-2 focus-within:ring-[#0052ff] transition-all">
                            <span className="text-[#5b616e] text-sm flex-1 text-left overflow-hidden whitespace-nowrap overflow-ellipsis mr-4 [font-family:'Inter',sans-serif]">
                                Search by Address, Transaction, Block, Token
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
                {/* Table card */}
                <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33] shadow-none overflow-hidden">
                    {/* Table Container with standard padding */}
                    <CardContent className="p-2.5">
                        {/* Table header bar */}
                        <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] mb-[14px] flex items-center overflow-hidden">
                            {/* Rectangle decorations */}
                            <div className="absolute inset-0 flex flex-row overflow-hidden rounded-[10px]">
                                {rectangleDecorations.map((_, index) => (
                                    <img
                                        key={`rect-${index}`}
                                        className="w-[50px] h-[47px] flex-shrink-0"
                                        alt="Rectangle"
                                        src="/figmaAssets/rectangle-14.svg"
                                    />
                                ))}
                            </div>

                            {/* Title / Count */}
                            <span className="relative z-10 ml-6 [font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal] flex-1">
                                140,392,874 Blocks Found
                            </span>
                        </div>

                        {/* Table Content Area */}
                        <div className="w-full overflow-x-auto">
                            <div className="min-w-[1100px] px-2.5">
                                {/* Column headers */}
                                <div className="w-full h-[30px] rounded-lg border border-solid border-[#dee1e6] grid grid-cols-[1fr_1.5fr_0.8fr_1.5fr_1.2fr_1.2fr] gap-4 items-center px-4 mb-2">
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        HEIGHT
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        HASH
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase text-center">
                                        TXN
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        GAS USED
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        GAS LIMIT
                                    </span>
                                    <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] uppercase">
                                        AGE
                                    </span>
                                </div>

                                {/* Block rows with dividers */}
                                <div className="flex flex-col pb-4">
                                    {blockRows.map((row) => (
                                        <div
                                            key={row.id}
                                            className="w-full min-h-[50px] grid grid-cols-[1fr_1.5fr_0.8fr_1.5fr_1.2fr_1.2fr] gap-4 items-center px-4 border-b border-[#dee1e6] last:border-0 hover:bg-[#f8f9fa] transition-colors"
                                        >
                                            {/* HEIGHT */}
                                            <div className="flex justify-start">
                                                <div className="bg-[#eef0f3] rounded px-2 py-1">
                                                    <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                                                        {row.height}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* HASH */}
                                            <div className="flex justify-start">
                                                <AddressBadge address={row.hash} />
                                            </div>

                                            {/* TXN */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-xs tracking-[0] leading-[normal] text-center">
                                                {row.txn}
                                            </div>

                                            {/* GAS USED */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                                                {row.gasUsed}
                                            </div>

                                            {/* GAS LIMIT */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                                                {row.gasLimit}
                                            </div>

                                            {/* AGE */}
                                            <div className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                                                {row.age}
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
