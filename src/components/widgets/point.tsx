import { useTranslation } from "react-i18next";
import { ListChecks, Users, ChartPie } from "@phosphor-icons/react";

export function Point() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("main.point.feature1.title"),
      description: t("main.point.feature1.description"),
      icon: <ListChecks size={24} weight="bold" className="text-indigo-600" />,
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100/50",
    },
    {
      title: t("main.point.feature2.title"),
      description: t("main.point.feature2.description"),
      icon: <Users size={24} weight="bold" className="text-pink-500" />,
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100/50",
      borderColor: "border-pink-200",
    },
    {
      title: t("main.point.feature3.title"),
      description: t("main.point.feature3.description"),
      icon: <ChartPie size={24} weight="bold" className="text-purple-500" />,
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100/50",
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-bold leading-tight tracking-tight text-gray-900">
              {t("main.point.title")}
            </h2>
            <div className="mt-8 h-1.5 w-24 bg-indigo-500 rounded-full" />
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  feature.borderColor ? `border-2 ${feature.borderColor}` : ""
                } ${feature.bgColor && index === 1 ? feature.bgColor : ""}`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
