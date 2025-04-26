import { useTranslation } from "react-i18next";

const Favorites = () => {
  const { t } = useTranslation();
  const favorites = t("favorites.favorites-list", { returnObjects: true });

  return (
    <section className="text-nero dark:text-white-smoke text-center max-w-4xl mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-2">
        {t("favorites.favorites-heading")}
      </h2>
      <p className="text-lg sm:text-xl mb-4">
        {t("favorites.favorites-description")}
      </p>
      <div className="grid sm:grid-cols-2 gap-2.5">
        {favorites.map(([category, item], index) => {
          return (
            <div
              key={index}
              className="text-left text-lg sm:text-xl gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105"
            >
              <span className="font-semibold">{category}:</span>{" "}
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
