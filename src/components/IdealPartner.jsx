import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaugh,
  faVenusMars,
  faPaw,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const IdealPartner = () => {
  const { t } = useTranslation();
  const requirements = t("ideal-partner.requirements-list", {
    returnObjects: true,
  });

  return (
    <section className="text-nero dark:text-white-smoke text-center max-w-4xl mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-4">
        {t("ideal-partner.ideal-partner-heading")}
      </h2>
      <div className="grid sm:grid-cols-2 gap-2.5">
        <div className="text-left flex items-center gap-4 py-3 px-5 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faFaceLaugh}
            className="text-lg sm:text-2xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {requirements[0]} 😀
          </span>
        </div>
        <div className="text-left flex items-center gap-4 py-3 px-5 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faVenusMars}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {requirements[1]}
          </span>
        </div>
        <div className="text-left flex items-center gap-4 py-3 px-5 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faPaw}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {requirements[2]}
          </span>
        </div>
        <div className="text-left flex items-center gap-4 py-3 px-5 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {requirements[3]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default IdealPartner;
