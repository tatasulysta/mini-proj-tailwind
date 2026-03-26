import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../elements/button";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-indigo-50/50 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-gradient-to-b from-white to-transparent -z-10" />

      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0A3E] mb-6 leading-tight">
          {t("main.cta.title")}
        </h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          {t("main.cta.subHeadline")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            tag="a"
            href="/get-started"
            className="w-full sm:w-auto px-10 py-4 text-lg font-bold shadow-xl shadow-indigo-200"
          >
            {t("main.cta.button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
