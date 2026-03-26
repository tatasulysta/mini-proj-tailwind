import { useTranslation } from "react-i18next";
import { Quotes } from "@phosphor-icons/react";

export function Testimoni() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F0A3E] mb-4">
          {t("main.testimoni.title")}
        </h2>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => {
            const index = i + 1;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-start transition-all hover:shadow-md"
              >
                <Quotes
                  weight="fill"
                  size={40}
                  className="mb-8 text-amber-500"
                />
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  “{t(`main.testimoni.item${index}.quote`)}”
                </p>
                <div className="mt-auto">
                  <div className="text-lg font-bold text-gray-900">
                    {t(`main.testimoni.item${index}.author`)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t(`main.testimoni.item${index}.role`)}
                  </div>
                  <div className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {t(`main.testimoni.item${index}.company`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
