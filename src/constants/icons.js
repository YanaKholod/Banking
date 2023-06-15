// xlinkHref = "http://www.w3.org/1999/xlink";
// width = { width }
// height = { height }

export const ICONS = {
  RIGHT_ARROW:
    "https://icons.veryicon.com/png/o/miscellaneous/8atour/arrow-right-50.png",
  UKRAINE: "https://cdn.privat24.ua/icons/file/UA.svg",
  DOLLAR: "https://cdn.privat24.ua/icons/file/US.svg",
  EUR: "https://cdn.privat24.ua/icons/file/EU.svg",
  PAYMENTS: "https://cdn.privat24.ua/icons/file/ServicePayments.svg",
  CARD_TRANSFER: "https://cdn.privat24.ua/icons/file/ServiceP2P.svg",
  MOBILE_RENEVAL: "https://cdn.privat24.ua/icons/file/ServiceMobile.svg",
  CARD_REPAIR: "https://cdn.privat24.ua/icons/file/ServiceWallet.svg",
  AVTOCIVILKA: "https://cdn.privat24.ua/icons/file/ServiceAutoInsurance.svg",
  CREDIT_SERVICE: "https://cdn.privat24.ua/icons/file/ServiceCredit.svg",
  CONVERTER: "https://cdn.privat24.ua/icons/file/ServiceCurrency.svg",
};
export const RightArrowIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"
          fill="#FFF"
          fillRule="nonzero"
        ></path>
        <path d="M0 0h24v24H0z"></path>
      </g>
    </svg>
  );
};
export const BottomArrowIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"
          fill="#FFF"
          fillRule="nonzero"
        ></path>
        <path d="M0 0h24v24H0z"></path>
      </g>
    </svg>
  );
};
export const UkraineIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 28 20"
    >
      <defs>
        <rect id="UA_svg__a" width="28" height="20" rx="2" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="UA_svg__b" fill="#fff">
          <use xlinkHref="#UA_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#UA_svg__a" />
        <path fill="#156DD1" d="M0 0h28v10.667H0z" mask="url(#UA_svg__b)" />
        <path fill="#FFD948" d="M0 10.667h28V20H0z" mask="url(#UA_svg__b)" />
      </g>
    </svg>
  );
};
export const DollarIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 28 20"
    >
      <defs>
        <linearGradient id="US_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <filter
          id="US_svg__c"
          width="110.7%"
          height="130%"
          x="-5.4%"
          y="-7.5%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <rect id="US_svg__a" width="28" height="20" rx="2" />
        <path
          id="US_svg__d"
          d="M2 2.667a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zm2.666 0a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zM3.333 4a.667.667 0 110-1.333.667.667 0 010 1.333zM6 4a.667.667 0 110-1.333A.667.667 0 016 4zm2.667 0a.667.667 0 110-1.333.667.667 0 010 1.333zM10 5.333A.667.667 0 1110 4a.667.667 0 010 1.333zm-2.667 0a.667.667 0 110-1.333.667.667 0 010 1.333zm-2.666 0a.667.667 0 110-1.333.667.667 0 010 1.333zM2 5.333A.667.667 0 112 4a.667.667 0 010 1.333zm1.333 1.334a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zM10 8a.667.667 0 110-1.333A.667.667 0 0110 8zM7.333 8a.667.667 0 110-1.333.667.667 0 010 1.333zM4.667 8a.667.667 0 110-1.333.667.667 0 010 1.333zM2 8a.667.667 0 110-1.333A.667.667 0 012 8z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="US_svg__b" fill="#fff">
          <use xlinkHref="#US_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#US_svg__a" />
        <path
          fill="#D02F44"
          d="M0 0h28v1.333H0V0zm0 2.667h28V4H0V2.667zm0 2.666h28v1.334H0V5.333zM0 8h28v1.333H0V8zm0 2.667h28V12H0v-1.333zm0 2.666h28v1.334H0v-1.334zM0 16h28v1.333H0V16zm0 2.667h28V20H0v-1.333z"
          mask="url(#US_svg__b)"
        />
        <path fill="#46467F" d="M0 0h12v9.333H0z" mask="url(#US_svg__b)" />
        <g mask="url(#US_svg__b)">
          <use fill="#000" filter="url(#US_svg__c)" xlinkHref="#US_svg__d" />
          <use fill="url(#US_svg__e)" xlinkHref="#US_svg__d" />
        </g>
      </g>
    </svg>
  );
};
export const EuroIcon = ({ width, height }) => {};
export const PaymentsIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="servicePayments_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="servicePayments_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g strokeWidth="1">
          <use fill="#FF6400" xlinkHref="#servicePayments_svg__a" />
          <use
            fill="url(#servicePayments_svg__b)"
            xlinkHref="#servicePayments_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          d="M17 22.015h8.826c.203-.122.355-.22.482-.317.76-.609 1.167-1.315 1.167-2.119 0-.974-.305-1.68-.863-2.168-.583-.487-1.445-.73-2.561-.73-2.181 0-3.45 1.12-3.754 3.36H18.32c.203-1.68.811-2.946 1.826-3.799.964-.828 2.257-1.242 3.906-1.242 1.674 0 3.018.39 3.982 1.17 1.014.803 1.521 1.948 1.521 3.434 0 .876-.279 1.68-.837 2.41H31v1.219h-3.627c-.634.39-1.724.95-3.272 1.68l-.659.317H31v1.218h-9.51c-.762.584-1.117 1.242-1.117 1.948 0 .902.28 1.608.863 2.12.583.535 1.445.803 2.561.803 2.156 0 3.399-1.12 3.754-3.337h2.003c-.228 1.657-.837 2.923-1.826 3.8-.964.804-2.282 1.218-3.93 1.218-1.776 0-3.12-.39-4.034-1.17-.963-.803-1.445-1.948-1.445-3.41 0-.73.152-1.388.507-1.972H17V25.23h2.891l.051-.049c.482-.39 1.623-1.023 3.424-1.875.05-.049.101-.073.152-.073H17v-1.218z"
        />
      </g>
    </svg>
  );
};
export const DepositsIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceDeposit_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="serviceDeposit_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <use fill="#99CF37" xlinkHref="#serviceDeposit_svg__a" />
          <use
            fill="url(#serviceDeposit_svg__b)"
            xlinkHref="#serviceDeposit_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M29.497 17.313a1.015 1.015 0 011.436 1.436L18.75 30.933a1.015 1.015 0 01-1.436-1.436l12.184-12.184zm-.805 14.933a3.554 3.554 0 110-7.108 3.554 3.554 0 010 7.108zm0-2.03a1.523 1.523 0 100-3.047 1.523 1.523 0 000 3.046zm-9.138-7.108a3.554 3.554 0 110-7.108 3.554 3.554 0 010 7.108zm0-2.031a1.523 1.523 0 100-3.046 1.523 1.523 0 000 3.046z"
        />
      </g>
    </svg>
  );
};
export const CardTransferIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceP2P_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="serviceP2P_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <use fill="#4CD964" xlinkHref="#serviceP2P_svg__a" />
          <use fill="url(#serviceP2P_svg__b)" xlinkHref="#serviceP2P_svg__a" />
        </g>
        <path
          fill="#FFF"
          d="M33.2 20.165H14v-1.017c0-1.186.952-2.148 2.147-2.148h14.906c1.186 0 2.147.97 2.147 2.148v1.017zm0 2.11v7.347a2.141 2.141 0 01-2.147 2.147H16.147A2.152 2.152 0 0114 29.622v-7.347h19.2zm-5.333 5.989v.681c0 .385.318.714.71.714h1.78c.391 0 .71-.32.71-.714v-.681a.719.719 0 00-.71-.715h-1.78c-.392 0-.71.32-.71.715z"
        />
      </g>
    </svg>
  );
};
export const MobileRenevalIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceMobile_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="serviceMobile_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <use fill="#007AFF" xlinkHref="#serviceMobile_svg__a" />
          <use
            fill="url(#serviceMobile_svg__b)"
            xlinkHref="#serviceMobile_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          d="M17 15.441c0-.796.654-1.441 1.45-1.441h10.653c.801 0 1.45.643 1.45 1.441v17.847c0 .796-.653 1.441-1.45 1.441H18.45c-.8 0-1.45-.643-1.45-1.44V15.44zm2.259 2.014v12.668h9.036V17.455h-9.036zm4.518 16.123a1.14 1.14 0 001.13-1.152 1.14 1.14 0 00-1.13-1.151 1.14 1.14 0 00-1.13 1.151 1.14 1.14 0 001.13 1.152z"
        />
      </g>
    </svg>
  );
};
export const CommunicationIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceCommunication_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="serviceCommunication_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <use fill="#007AFF" xlinkHref="#serviceCommunication_svg__a" />
          <use
            fill="url(#serviceCommunication_svg__b)"
            xlinkHref="#serviceCommunication_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          d="M15 28.546c0-.553.439-1 1.004-1h.648c.555 0 1.004.446 1.004 1V32c0 .552-.438 1-1.004 1h-.648A1.001 1.001 0 0115 32v-3.454zm4.781-3.826a.991.991 0 011.004-.993h.648a1 1 0 011.005.993v7.288a.991.991 0 01-1.005.992h-.648a1 1 0 01-1.004-.992V24.72zm4.782-4.354a.997.997 0 011.004-1.002h.648c.554 0 1.004.453 1.004 1.002v11.631A.997.997 0 0126.215 33h-.648a1.007 1.007 0 01-1.005-1.003v-11.63zm4.78-4.373A.992.992 0 0130.349 15h.648a.999.999 0 011.004.993v16.014a.992.992 0 01-1.004.993h-.648a.999.999 0 01-1.004-.993V15.993z"
        />
      </g>
    </svg>
  );
};
export const MoneyboxIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <rect width="48" height="48" fill="#fff" rx="10" />
      <mask
        id="serviceMoneybox_svg__a"
        width="48"
        height="48"
        x="0"
        y="0"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
      >
        <rect width="48" height="48" fill="#fff" rx="10" />
      </mask>
      <g mask="url(#serviceMoneybox_svg__a)">
        <path
          fill="url(#serviceMoneybox_svg__paint0_linear)"
          fillRule="evenodd"
          d="M36.689 7.164c.15.046.296.1.44.162a3.146 3.146 0 011.041 5.042c-.48.51-.84.933-1.079 1.268-.115.16-.234.346-.358.556a15.243 15.243 0 015.813 11.99c0 8.435-6.838 15.273-15.273 15.273h-6.546c-8.435 0-15.272-6.838-15.272-15.273 0-4.862 2.271-9.193 5.81-11.99a7.238 7.238 0 00-.356-.556c-.24-.335-.6-.758-1.08-1.268a3.146 3.146 0 011.043-5.042 4.218 4.218 0 015.638 2.43l.069.206.43 1.403a15.303 15.303 0 013.718-.456h6.546c1.282 0 2.528.158 3.718.456l.43-1.403a4.217 4.217 0 015.268-2.798z"
          clipRule="evenodd"
        />
        <path
          fill="url(#serviceMoneybox_svg__paint1_radial)"
          fillRule="evenodd"
          d="M36.689 7.164c.15.046.296.1.44.162a3.146 3.146 0 011.041 5.042c-.48.51-.84.933-1.079 1.268-.115.16-.234.346-.358.556a15.243 15.243 0 015.813 11.99c0 8.435-6.838 15.273-15.273 15.273h-6.546c-8.435 0-15.272-6.838-15.272-15.273 0-4.862 2.271-9.193 5.81-11.99a7.238 7.238 0 00-.356-.556c-.24-.335-.6-.758-1.08-1.268a3.146 3.146 0 011.043-5.042 4.218 4.218 0 015.638 2.43l.069.206.43 1.403a15.303 15.303 0 013.718-.456h6.546c1.282 0 2.528.158 3.718.456l.43-1.403a4.217 4.217 0 015.268-2.798z"
          clipRule="evenodd"
        />
        <path
          fill="#212121"
          d="M15.374 23.99c.441-3.082 3.38-3.9 5.427-1.473a.546.546 0 01-.833.704c-1.445-1.711-3.207-1.221-3.514.923a.545.545 0 01-1.08-.154zM32.63 23.99c-.44-3.082-3.379-3.9-5.427-1.473a.546.546 0 00.834.704c1.444-1.711 3.207-1.221 3.514.923a.545.545 0 001.08-.154z"
        />
        <rect
          width="15.273"
          height="9.818"
          x="16.363"
          y="26.182"
          fill="#FCBEBE"
          rx="4.5"
        />
        <ellipse cx="20.727" cy="31.091" fill="#FF5B5C" rx="1.091" ry="1.636" />
        <ellipse cx="27.273" cy="31.091" fill="#FF5B5C" rx="1.091" ry="1.636" />
      </g>
      <defs>
        <radialGradient
          id="serviceMoneybox_svg__paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(137.092 19.902 11.849) scale(50.6395 50.5045)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".382" />
          <stop offset="1" stopColor="#fff" stopOpacity=".01" />
        </radialGradient>
        <linearGradient
          id="serviceMoneybox_svg__paint0_linear"
          x1="24.334"
          x2="-19.345"
          y1="-23.77"
          y2="22.767"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9495" />
          <stop offset="1" stopColor="#FF5B5C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TransportIcon = ({ width, height }) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    version="1.1"
    viewBox="0 0 48 48"
  >
    <defs>
      <radialGradient
        id="serviceTickets_svg__b"
        cx="100%"
        cy="0%"
        r="141.421%"
        fx="100%"
        fy="0%"
      >
        <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
        <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
      </radialGradient>
      <path
        id="serviceTickets_svg__a"
        d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g>
        <use fill="#5856D6" xlinkHref="#serviceTickets_svg__a" />
        <use
          fill="url(#serviceTickets_svg__b)"
          xlinkHref="#serviceTickets_svg__a"
        />
      </g>
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M32.107 24.473c-.008-.003-.017-.004-.025-.008l-1.704-2.411 1.564.687a.848.848 0 00.433 1.112c.035.016.071.025.107.035l-.277.64c-.032-.019-.063-.04-.098-.055zm-18.673.458A.847.847 0 0013 23.82l.268-.62a.834.834 0 001.104-.437.847.847 0 00-.433-1.112l.268-.62a.834.834 0 001.104-.436.847.847 0 00-.434-1.113l.268-.62a.834.834 0 001.104-.436.847.847 0 00-.433-1.113l.268-.62a.834.834 0 001.104-.436l2.688 1.181-.005.004-.547.393-.301.216.215.304a.47.47 0 01-.11.658.469.469 0 01-.653-.11l-.214-.304-.302.216-.547.393-.301.216.215.305c.15.211.1.507-.11.658l-.302.216.215.304 5.792 8.195-9.487-4.17zm5.909-5.614a.849.849 0 00.196-1.178l.547-.392a.834.834 0 00.683.354c.13 0 .259-.04.38-.104.035-.018.072-.03.106-.053a.827.827 0 00.206-.217.845.845 0 00-.01-.962l.547-.392a.834.834 0 001.169.198.85.85 0 00.196-1.179l.546-.392a.834.834 0 001.17.198l3.802 5.384.418.59.417.591 1.883 2.664.26.367.493.698.018.026.132.187 1.913 2.707a.85.85 0 00-.196 1.178c.022.032.049.058.074.085l-.564.406c-.018-.033-.034-.067-.056-.098a.834.834 0 00-1.169-.198.85.85 0 00-.196 1.178c.022.032.048.058.074.085l-.565.406c-.017-.033-.033-.067-.055-.098a.834.834 0 00-1.17-.198.85.85 0 00-.195 1.178c.022.031.048.058.074.085l-.565.406c-.017-.034-.033-.067-.055-.098a.834.834 0 00-1.17-.198.85.85 0 00-.196 1.178c.022.032.049.058.074.085l-.564.406c-.018-.033-.033-.067-.056-.098a.834.834 0 00-1.169-.198l-2.354-3.331-.417-.59-.418-.592-6.15-8.702a.85.85 0 00.196-1.178l.547-.392a.834.834 0 001.169.198z"
      />
    </g>
  </svg>;
};
export const CharityIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceCharity_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="serviceCharity_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <use fill="#FF76CD" xlinkHref="#serviceCharity_svg__a" />
          <use
            fill="url(#serviceCharity_svg__b)"
            xlinkHref="#serviceCharity_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M24 34.5l-1.595-1.403C16.74 28.135 13 24.851 13 20.845 13 17.56 15.662 15 19.05 15c1.914 0 3.751.86 4.95 2.21 1.199-1.35 3.036-2.21 4.95-2.21 3.388 0 6.05 2.561 6.05 5.845 0 4.006-3.74 7.29-9.405 12.252L24 34.5z"
        />
      </g>
    </svg>
  );
};
export const CreditServicesIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceCredit_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".382" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </radialGradient>
        <path
          id="serviceCredit_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <use fill="#FC0" xlinkHref="#serviceCredit_svg__a" />
          <use
            fill="url(#serviceCredit_svg__b)"
            xlinkHref="#serviceCredit_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          d="M26.347 20.274l-.002.012c3.22 1.688 5.559 6.398 5.559 8.508 0 2.595.359 6.226-7.904 6.226s-7.904-3.112-7.904-6.226c0-2.5 2.28-6.866 5.438-8.491a4.776 4.776 0 01-.004-.03h4.817zm.325-1.21h-5.467a16.105 16.105 0 00-1.052-2.21c-.97-1.72-.19-2.769 1.29-2.707 1.482.062 1.29-1.127 2.496-1.127 1.205 0 1.013 1.189 2.494 1.127 1.481-.062 2.261.987 1.292 2.707-.5.887-.838 1.636-1.053 2.21zm-2.915 4.232c-.809 0-1.448.189-1.907.59-.495.4-.797 1.025-.893 1.861h1.267c.12-.919.628-1.378 1.533-1.378.47 0 .833.082 1.074.27.218.19.338.496.338.943 0 .354-.169.672-.507.931a.931.931 0 00-.157.106H20.33v.731h2.776c-.7.33-1.17.601-1.388.79a.211.211 0 00-.06.047h-1.328v.73h.797c-.121.26-.17.543-.17.849 0 .754.23 1.332.713 1.709.459.377 1.122.565 2.016.565.808 0 1.448-.2 1.907-.589.483-.412.784-1.037.881-1.862h-1.267c-.121.92-.628 1.379-1.521 1.379-.483 0-.833-.118-1.075-.33-.241-.2-.35-.495-.35-.884 0-.294.145-.577.447-.837h4.406v-.73H23.95c.821-.377 1.352-.66 1.594-.837h1.569v-.73h-.893c.169-.307.265-.649.265-1.026 0-.778-.253-1.355-.76-1.744-.483-.377-1.135-.554-1.968-.554z"
        />
      </g>
    </svg>
  );
};
export const ConverterIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill="#FFF"
          stroke="#000"
          strokeOpacity=".24"
          strokeWidth=".5"
          d="M14.77.25C6.75.25.25 6.75.25 14.77v18.46c0 8.02 6.5 14.52 14.52 14.52h18.46c8.02 0 14.52-6.5 14.52-14.52V14.77c0-8.02-6.5-14.52-14.52-14.52H14.77z"
        />
        <path
          fill="#8BC34A"
          d="M32.56 25.067c1.326 0 2.324.993 2.33 2.323.005 1.364.004 2.728-.001 4.093-.001.514.024 1.035-.041 1.542-.137 1.059-1.06 1.889-2.126 1.9-1.847.022-3.695.025-5.542 0-1.181-.014-2.135-1.024-2.159-2.221l-.009-.675-.003-.675v-1.35h.011c0-.86-.002-1.721.001-2.582.004-1.375.984-2.353 2.354-2.353 1.729-.001 3.457-.003 5.185-.002zm-12.015 0c1.323 0 2.33.999 2.331 2.319.002 1.383-.001 2.767-.004 4.15-.001.454.018.909-.019 1.36a2.239 2.239 0 01-2.155 2.032c-.613.013-1.227.01-1.84.007l-.92-.003c-.86.004-1.721.006-2.581.003-1.37-.005-2.352-.988-2.353-2.357-.002-1.726-.004-3.451 0-5.177.003-1.203.803-2.133 1.982-2.312a2.1 2.1 0 01.317-.02l5.242-.002zm-2.97 1.368c-1.146.209-1.802 1.08-1.685 2.238.017.164.046.328.078.499l.047.265h-.675v1.125h.972c.05.835-.375 1.387-.995 1.83l.534 1.216.203-.123c.456-.28.941-.377 1.465-.24.204.053.408.116.616.15.416.069.833.157 1.252.168.409.01.801-.128 1.175-.344l-.533-1.173c-.027-.005-.034-.01-.039-.007-.044.017-.087.033-.129.052-.463.215-.937.267-1.428.104a1.688 1.688 0 00-.347-.084c-.308-.03-.618-.047-.935-.07.325-.372.548-.796.556-1.313l-.006-.176h1.23V29.43c-.451 0-.881.005-1.31-.005-.066-.001-.176-.058-.189-.108-.077-.307-.161-.617-.185-.93a.78.78 0 01.655-.843c.419-.076.769.124.926.537.049.127.08.26.121.398l1.296-.196c.027-.683-.433-1.405-1.074-1.69-.513-.226-1.051-.257-1.596-.158zm10.917.254l-.102.003c-.384.029-.772.007-1.185.007l.981 1.94.493.974h-1.203v1.098h1.741v.469H27.47v.665c0 .108.003.215.007.322.001.04.092.105.146.11.11.009.22.008.33.006l.166-.002h1.115v1.245h1.424v-1.243h1.764v-1.108h-1.756v-.47h1.756V29.6h-1.213l1.488-2.901c-.473 0-.903.01-1.332-.005-.182-.007-.264.057-.34.216-.354.746-.722 1.484-1.084 2.225-.337-.7-.69-1.393-1.006-2.103-.088-.198-.188-.303-.355-.334l-.088-.009zm.237-13.63h3.941c1.305 0 2.313.98 2.321 2.287a383.4 383.4 0 010 5.254c-.008 1.36-1.003 2.329-2.362 2.33h-5.143c-1.377-.001-2.365-.986-2.369-2.367-.004-1.483-.005-2.965.003-4.448.003-.428-.011-.866.071-1.282.206-1.044 1.132-1.768 2.197-1.772l1.34-.002zm-12.127-.001l1.35.002h2.601c1.304 0 2.314.983 2.321 2.288.011 1.758.009 3.516-.003 5.274-.009 1.324-1.003 2.303-2.324 2.306-1.741.004-3.481.004-5.222 0-1.317-.003-2.312-.993-2.32-2.312-.007-1.344-.003-2.687-.001-4.031.001-.487-.018-.977.019-1.462a2.245 2.245 0 012.229-2.062l1.35-.003zm1.75 1.04h-.799v.429c-.106.02-.196.039-.285.058-.823.176-1.407.755-1.522 1.508-.131.858.24 1.616 1.007 2.028.203.109.42.197.638.268.133.043.171.105.169.239-.007.47-.002.94-.004 1.41 0 .049-.011.098-.026.218-.172-.185-.324-.313-.431-.473-.107-.16-.169-.351-.252-.532-.436.044-.869.088-1.299.13-.007.925.6 1.596 1.797 1.993l.217.068v.445h.79c0-.082.01-.155-.002-.224-.037-.206.048-.278.251-.321.735-.152 1.304-.536 1.604-1.252.424-1.012.024-2.033-.972-2.482a4.851 4.851 0 00-.425-.165c-.42-.144-.453-.154-.456-.532V15.66c.316.146.421.406.505.687l1.306-.16c-.184-.958-.761-1.449-1.633-1.623l-.178-.03v-.436zm10.816.794c-.676.423-1.082 1.058-1.281 1.824-.037.14-.093.2-.241.184-.122-.013-.247-.003-.374-.003l-.108.547-.055.28h.604v.526h-.437c-.031.142-.061.27-.086.399-.026.134-.049.268-.076.42.197 0 .376.008.553-.001.113-.005.157.036.191.145.078.25.162.504.275.74.687 1.447 2.738 2.126 4.15 1.379.046-.025.096-.095.097-.145.002-.159.004-.317.004-.477v-.981c-.727.588-1.478.752-2.121.469-.428-.189-.696-.509-.835-.956l-.047-.173h2.117l.17-.828h-2.403v-.52h2.516l.084-.41.084-.415h-2.58c.135-.491.384-.87.826-1.067.683-.304 1.336-.22 1.934.252.089-.417.169-.826.266-1.231.031-.131.004-.192-.121-.235-1.079-.383-2.124-.337-3.106.277zm-10.806 3.795c.461.099.724.403.71.807a.826.826 0 01-.71.785zm-.748-3.028V17c-.248-.032-.48-.304-.505-.592a.72.72 0 01.505-.75z"
        />
      </g>
    </svg>
  );
};

export const PercentIcon = ({ width, height }) => {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          d="M17.497 5.313a1.015 1.015 0 0 1 1.436 1.436L6.75 18.933a1.015 1.015 0 0 1-1.436-1.436L17.497 5.313zm-.805 14.933a3.554 3.554 0 1 1 0-7.108 3.554 3.554 0 0 1 0 7.108zm0-2.03a1.523 1.523 0 1 0 0-3.047 1.523 1.523 0 0 0 0 3.046zm-9.138-7.108a3.554 3.554 0 1 1 0-7.108 3.554 3.554 0 0 1 0 7.108zm0-2.031a1.523 1.523 0 1 0 0-3.046 1.523 1.523 0 0 0 0 3.046z"
          fill="#FFF"
        ></path>
      </g>
    </svg>
  );
};
export const QuestionIcon = ({ width, height }) => {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 21h3v-3h-3v3zM12 3a6 6 0 0 0-6 6h3a3 3 0 1 1 6 0c0 3-4.5 2.625-4.5 7.5h3c0-3.375 4.5-3.75 4.5-7.5a6 6 0 0 0-6-6z"
        fill="#FFF"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      ></path>
    </svg>
  );
};
export const CalculatorIcon = ({ width, height }) => {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path d="M0 0h24v24H0z"></path>
        <path
          d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v4h10V4H7zm0 6v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
          fill="#FFF"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};
export const GramophoneIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#speaker_svg__clip0)">
        <path
          d="M14.963 2.586a.586.586 0 1 1 1.172 0v1.172a.586.586 0 1 1-1.172 0V2.586zm5.282 7.718l-7.8-7.802a1.176 1.176 0 0 0-1.659 0 1.175 1.175 0 0 0 0 1.658l7.802 7.801a1.173 1.173 0 0 0 1.657-1.657zM10.208 5.238l-.06.295C9.736 7.6 8.73 9.567 7.372 11.16l4.244 4.244c1.593-1.36 3.53-2.392 5.6-2.806l.294-.058-7.301-7.301zm-6.516 9.7l2.9-2.9 4.144 4.144-2.9 2.9c-.689.688-1.801.685-2.487 0l-1.657-1.657a1.758 1.758 0 0 1 0-2.487zm2.487 1.658c.228.23.6.23.828 0l.829-.828a.586.586 0 1 0-.829-.829l-.828.829a.586.586 0 0 0 0 .828zm7.003 2.798l.797-.797c.689-.689.686-1.801 0-2.486l-.592-.592c-.327.22-.64.458-.943.713l.707.708a.584.584 0 0 1 0 .828l-.81.81-1.191-1.153-1.657 1.657 2.658 2.576A1.173 1.173 0 0 0 13.808 20l-.626-.606zm7.055-12.706h-1.172a.586.586 0 1 0 0 1.171h1.172a.586.586 0 1 0 0-1.171zM18.65 3.344a.586.586 0 1 1 .828.828l-1.172 1.172a.586.586 0 1 1-.828-.829l1.172-1.171z"
          fill="#8dc641"
          fillRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="speaker_svg__clip0">
          <path d="M0 0h20v20H0z" transform="translate(2 2)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
export const BusinessICon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="48"
      height="48"
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <radialGradient
          id="serviceBusiness_svg__b"
          cx="100%"
          cy="0%"
          r="141.421%"
          fx="100%"
          fy="0%"
        >
          <stop offset="0%" stop-color="#FFF" stop-opacity=".382" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </radialGradient>
        <path
          id="serviceBusiness_svg__a"
          d="M14.77 0h18.46C41.389 0 48 6.612 48 14.77v18.46C48 41.389 41.388 48 33.23 48H14.77C6.611 48 0 41.388 0 33.23V14.77C0 6.611 6.612 0 14.77 0z"
        />
      </defs>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g>
          <use fill="#15B6D2" xlink:href="#serviceBusiness_svg__a" />
          <use
            fill="url(#serviceBusiness_svg__b)"
            xlink:href="#serviceBusiness_svg__a"
          />
        </g>
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M22 14h4a2 2 0 012 2v2h4a2 2 0 012 2v11a2 2 0 01-2 2H16a2 2 0 01-2-2V20c0-1.11.89-2 2-2h4v-2c0-1.11.89-2 2-2zm4 4v-2h-4v2h4z"
        />
      </g>
    </svg>
  );
};
