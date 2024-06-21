import { Fragment } from "react";

const ShareButton = () => {
  return (
    <Fragment>
      <div className="flex gap-3 py-4">
        <span className="text-[14px] font-semibold">Share </span>
        <a href="#">
          <img
            src="/images/sosmed/icon-facebook.png"
            alt="facebook"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a href="#">
          <img
            src="/images/sosmed/icon-twitter.png"
            alt="twitter"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a href="#">
          <img
            src="/images/sosmed/icon-whatsapp.png"
            alt="whatsapp"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a href="#">
          <img
            src="/images/sosmed/icon-telegram.png"
            alt="telegram"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a
          id="share-link"
          href="#/"
          data-tooltip-target="tooltip-animation"
          data-tooltip-trigger="click"
          data-tooltip-placement="bottom"
        >
          <img
            src="/images/sosmed/icon-tautan.png"
            alt="tautan"
            className="w-[20px] h-[20px]"
          />
        </a>
        <div
          id="tooltip-animation"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Tautan telah disalin
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShareButton;
