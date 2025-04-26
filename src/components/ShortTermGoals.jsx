import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBanSmoking,
  faSwatchbook,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const ShortTermGoals = () => {
  const { t } = useTranslation();
  const shortTermGoals = t("short-term-goals.short-term-goals-list", {
    returnObjects: true,
  });

  return (
    <section className="text-nero dark:text-white-smoke text-center max-w-4xl mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-4">
        {t("short-term-goals.short-term-goals-heading")}
      </h2>
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faBanSmoking}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {shortTermGoals[0]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faSwatchbook}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {shortTermGoals[1]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faBrain}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {shortTermGoals[2]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ShortTermGoals;
