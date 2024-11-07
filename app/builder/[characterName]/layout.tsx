import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deadlock Character Builder",
    description: "Build and customize your Deadlock character loadout",
};

export default function BuilderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
    );
}