import { useTranslation } from "react-i18next";

const Favorites = () => {
  const { t } = useTranslation();
  const favorites = t("favorites.favorites-list", { returnObjects: true });

  return (
    <section>
      <h2>{t("favorites.favorites-heading")}</h2>
      <p>{t("favorites.favorites-description")}</p>
      <div>
        {favorites.map(([category, item], index) => {
          return (
            <div key={index}>
              <span>{category}:</span> <span>{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
