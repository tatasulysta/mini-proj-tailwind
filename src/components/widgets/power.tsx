import React from "react";
import { useTranslation } from "react-i18next";
import {
  Lightning,
  Rocket,
  Users,
  ChartPie,
  ShieldCheck,
  DeviceMobile,
  Sparkle,
} from "@phosphor-icons/react";

const POINTS = [
  {
    key: "point1",
    icon: <Lightning size={24} weight="bold" className="text-amber-500" />,
    bgColor: "bg-amber-50",
  },
  {
    key: "point2",
    icon: <Rocket size={24} weight="bold" className="text-blue-500" />,
    bgColor: "bg-blue-50",
  },
  {
    key: "point3",
    icon: <Users size={24} weight="bold" className="text-indigo-500" />,
    bgColor: "bg-indigo-50",
  },
  {
    key: "point4",
    icon: <ChartPie size={24} weight="bold" className="text-purple-500" />,
    bgColor: "bg-purple-50",
  },
  {
    key: "point5",
    icon: <ShieldCheck size={24} weight="bold" className="text-green-500" />,
    bgColor: "bg-green-50",
  },
  {
    key: "point6",
    icon: <DeviceMobile size={24} weight="bold" className="text-pink-500" />,
    bgColor: "bg-pink-50",
  },
];

export function Power() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#FAFAFC]">
      <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F0A3E] mb-6">
          {t("main.power.title")}
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {t("main.power.subtitle")}
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {POINTS.map((point) => (
            <div
              key={point.key}
              className="group relative bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div
                  className={`w-12 h-12 ${point.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F0A3E] mb-3">
                  {t(`main.power.${point.key}.title`)}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base">
                  {t(`main.power.${point.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-8 py-3 text-base font-bold text-indigo-600 shadow-sm border border-indigo-100 animate-pulse">
            <Sparkle size={20} weight="bold" />
            <span>{t("main.power.comparison")}</span>
            <Sparkle size={20} weight="bold" />
          </div>
        </div>
      </div>
    </section>
  );
}
