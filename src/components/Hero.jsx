import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Hero = () => {
  const [age, setAge] = useState(null);
  const { t } = useTranslation();
  const description = t("hero.description", { returnObjects: true });
  const info = t("hero.info", { returnObjects: true });

  useEffect(() => {
    const birthday = new Date(1996, 1, 21);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    const hasHadBirthday =
      today.getMonth() > birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() >= birthday.getDate());

    if (!hasHadBirthday) {
      age--;
    }

    setAge(age);
  }, []);

  return (
    <section className="min-h-dvh flex flex-col items-center pt-8">
      <div className="max-w-sm aspect-square rounded-full overflow-hidden border-4 border-mulberry dark:border-cotton-candy mt-20">
        <img
          src="https://placehold.co/400"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-nero dark:text-white-smoke text-center">
        <h1 className="text-4xl text-mulberry dark:text-cotton-candy font-bold mt-4">
          {t("hero.name")}
        </h1>
        <p className="text-lg sm:text-xl mt-2">
          {description[0]} ❤️ {description[1]}
        </p>
        <p className="text-lg sm:text-xl mb-4">
          📍 {info[0]} | {age} | {info[1]}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 text-center">
        <a
          href="https://instagram.com/p.laasminja"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-xl font-semibold rounded-full bg-mulberry dark:bg-cotton-candy text-white-smoke dark:text-nero inline-block transition-transform transform hover:scale-105"
        >
          {t("hero.lets-connect")} 💬
        </a>
        <a
          href="#about"
          className="px-6 py-2 text-xl font-semibold rounded-full border border-mulberry dark:border-cotton-candy text-mulberry dark:text-cotton-candy inline-block transition-transform transform hover:scale-105"
        >
          {t("hero.learn-more")} 📖
        </a>
      </div>
    </section>
  );
};

export default Hero;
