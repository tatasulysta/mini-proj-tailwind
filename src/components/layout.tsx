import React from "react";
import { Header } from "./widgets/header";
import { Footer } from "./widgets/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
