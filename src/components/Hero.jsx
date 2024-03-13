import React from "react";
import foto_hero from "../assets/foto.jpg";
import DownloadFraud from "./DownloadFraud";
import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <div className="py-5 container mx-auto">
        <div className="w-10/12 mx-auto flex flex-wrap items-center">
          <div className="mb-14 md:mb-0 md:w-7/12">
            <h1 className="font-bold text-2xl sm:text-3xl mb-4 md:text-4xl lg:text-6xl md:mb-7">
              <Trans i18nKey="hero.title">
                Tumbuh Bersama <br /> Untuk Hidup Yang Lebih Baik
              </Trans>
            </h1>
            <p className="md:text-justify mb-8">{t("hero.description")}</p>
            <DownloadFraud />
          </div>
          <div className="md:w-5/12">
            <img
              src={foto_hero}
              alt="foto hero section"
              className="md:translate-x-8 md:w-10/12 mx-auto"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;
