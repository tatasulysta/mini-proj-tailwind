import React from "react";
import { useTranslation } from "react-i18next";
import {
  TriangleIcon,
  StarIcon,
  UnderlineStrike,
  CheckIcon,
} from "@/assets/icons";

const TAG_COLORS = {
  green: "bg-green-50 text-green-700 border-green-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
};
function HeroTag(props: {
  children: React.ReactNode;
  color: "green" | "blue" | "orange";
  icon: React.ReactNode;
}) {
  const { children, color, icon } = props;

  return (
    <div
      className={`flex items-center space-x-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition-all hover:scale-105 ${TAG_COLORS[color]}`}
    >
      <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-32 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-[10%] opacity-40">
          <TriangleIcon stroke="#223DAE" />
        </div>
        <div className="absolute top-20 right-[15%] opacity-50">
          <div className="h-4 w-4 rounded-full border-4 border-[#4ADE80]" />
        </div>
        <div className="absolute top-60 left-[5%] opacity-40 animate-pulse">
          <StarIcon stroke="#F87171" />
        </div>
        <div className="absolute top-80 right-[8%] h-6 w-6 rounded-full bg-[#3B82F6] opacity-60" />
      </div>

      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          {t("main.hero.headlinePrefix")}
          <span className="relative inline-block text-[#111827]">
            {t("main.hero.headlineHighlight")}
            <UnderlineStrike
              className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
              stroke="#3B82F6"
            />
          </span>
          {t("main.hero.headlineSuffix")}
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-lg text-gray-500 sm:text-xl">
          {t("main.hero.subHeadline")}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="animate-bounce">
            <HeroTag
              color="green"
              icon={<CheckIcon className="text-green-500" />}
            >
              {t("main.hero.smartTaskManagement")}
            </HeroTag>
          </div>
          <div className="animate-bounce">
            <HeroTag
              color="blue"
              icon={<CheckIcon className="text-blue-500" />}
            >
              {t("main.hero.realTimeCollaboration")}
            </HeroTag>
          </div>

          <div className="animate-bounce">
            <HeroTag
              color="orange"
              icon={<CheckIcon className="text-orange-500" />}
            >
              {t("main.hero.progressInsights")}
            </HeroTag>
          </div>
        </div>
      </div>
    </section>
  );
}
