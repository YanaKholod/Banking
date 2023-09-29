export const services = [
  { id: 0, name: "Rate", description: "12%" },
  { id: 1, name: "Term", description: "12 months" },
  { id: 2, name: "Payout %", description: "When returning" },
  { id: 3, name: "Early withdrawal", description: "Yes" },
];

export const howToStart = [
  {
    id: 1,
    name: "Connect the accumulation conditions to the card or several cards. You can connect one or more conditions. Choose as you like.",
    img: "https://next.privat24.ua/assets/6d6258cca8d756803106.svg",
  },
  {
    id: 2,
    name: "Use the card as usual. Buy in stores, order goods via the Internet, receive wages and other credits on the card.",
    img: "https://next.privat24.ua/assets/79df09d8b96ee441ccb1.svg",
  },
  {
    id: 3,
    name: `During the transfer of funds and spending on the card, the selected part of the funds is automatically sent to the "Treasury".`,
    img: "https://next.privat24.ua/assets/a30ad3bc1d700eb02619.svg",
  },
];

export const conditions = [
  {
    id: 0,
    name: "From income",
    description1: `During the receipt of funds to the card, the selected amount or percentage will be automatically transferred to the "Treasury". `,
    description2:
      "You can save 50 hryvnias or 10% of the amount received each time money is received on the card.",
  },
  {
    id: 1,
    name: "Regular replenishment",
    description1: `You determine the amount that the bank will automatically transfer to the "Treasury" every month.`,
    description2: "For example, you can save UAH 300 every month on the 5th.",
  },

  {
    id: 2,
    name: "From expenses",
    description1: `During card payments (purchases in stores, payment of services) "rounding up to UAH 10" will be automatically recalculated.`,
    description2: `Let's say if you made a purchase for 26.7 UAH, then 3.3 UAH will be transferred to "Treasury".`,
  },
  {
    id: 3,
    name: "Rounding off the remainder",
    description1: `At the end of each day, the balance of the card is rounded up to UAH 10, and small change is automatically sent to the "Treasury".`,
    description2: `If the balance of the card will be UAH 120, and UAH 4.5 will be transferred to the "Treasury".`,
  },
];

export const questions = [
  {
    id: 0,
    title: "What is the purpose of accumulation?",
    description:
      "This is a feature that allows you to set a specific savings goal, term, and amount.",
  },
  {
    id: 1,
    title: "Is it possible to change the storage conditions?",
    description:
      "Of course! You can change the conditions of accumulation an unlimited number of times during the entire period of accumulation.",
  },
  {
    id: 2,
    title: `What amount can be added to the "Treasury" during the month?`,
    description:
      "The total amount of deposit replenishment during each calendar month should not exceed UAH 5,000 (regardless of the connected accumulation conditions).",
  },
  {
    id: 3,
    title: "How is interest calculated?",
    description:
      "At the end of each term of the deposit, interest is credited to the deposit. Then interest is charged on the increased amount.",
  },
  {
    id: 4,
    title: "When is interest paid?",
    description:
      "Interest is paid during the return of the deposit or partial withdrawal of money from the deposit.",
  },
];
