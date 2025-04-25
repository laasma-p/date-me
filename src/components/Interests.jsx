import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMusic,
  faPalette,
  faLaptopCode,
  faTv,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
  const { t } = useTranslation();
  const interests = t("interests.interests-list", { returnObjects: true });

  return (
    <section className="text-nero dark:text-white-smoke text-center max-w-4xl mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-4">
        {t("interests.interests-heading")}
      </h2>
      <div className="flex flex-wrap justify-center gap-2.5">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faDumbbell}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {interests[0]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faMusic}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {interests[1]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faPalette}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {interests[2]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {interests[3]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faTv}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {interests[4]}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mulberry dark:border-cotton-candy transition-transform transform hover:scale-105">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-lg sm:text-xl text-mulberry dark:text-cotton-candy"
          />
          <span className="text-lg sm:text-xl font-semibold">
            {interests[5]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Interests;
