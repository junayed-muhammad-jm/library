export interface IslamicBooksData {
  id: number;
  image: string;
  name: string;
  writer: string;
  src: string;
}

const IslamicBooks: IslamicBooksData[] = [
  {
    id: 11,
    image: "public/i-11.jpg",
    writer: " ইয়াহইয়া সিনওয়ার",
    name: "কাঁটা ও",
    src: "https://www.rokomari.com/book/435679/kata-o-ful",
  },
  {
    id: 12,
    image: "public/i-12.jpg",
    writer: "মানিক বন্দ্যপাধ্যায়",
    name: "পদ্মা নদীর মাঝি",
    src: "https://www.rokomari.com/book/99337/padma-nodir-majhi",
  },

  {
    id: 13,
    image: "public/i-13.jpg",
    writer: "মানিক বন্দ্যপাধ্যায়",
    name: " পুতুল নাচের ইতিকথা ",
    src: "https://www.rokomari.com/book/22497/putulnacher-etikhota",
  },

  {
    id: 14,
    image: "public/i-14.jpg",
    writer: "আবুল হাসান আলী নদভী ",
    name: "সংগ্রামি সাধকদের ইতিহাস ",
    src: "https://www.wafilife.com/shongrami-shadhoker-itihash/dp/22931",
  },

  {
    id: 15,
    image: "public/i-15.jpg",
    writer: "আবু তাহের মেসবাহ",
    name: "বাইতুল্লার মুসাফির",
    src: "https://www.wafilife.com/baitullahor-musafir/dp/22264",
  },

  {
    id: 16,
    image: "public/i-16.jpg",
    writer: "মাওলানা লিয়াকত আলী ",
    name: "ফিলিস্তিন সমস্যা ও ইহুদি চক্রান্ত",
    src: "https://www.rokomari.com/book/212475/filastin-somossa-o-ihudi-chokranto",
  },

  {
    id: 17,
    image: "public/i-17.jpg",
    writer:
      "কালিমাতুন আন সিরাতিল মুহাদ্দিস ওয়াল ফকিহ আশ শায়খ মুহাম্মাদ আবদুল মালেক আল-কুমিল্লায়ী",
    name: "মুহাম্মদ আবু সায়েম ",
    src: "https://www.rokomari.com/book/255242/kalimat-aan-akhbarikh-shaikh-muhammad-abdul-malek",
  },

  {
    id: 18,
    image: "public/i-18.jpg",
    writer: "সাবের চৌধুরি",
    name: "কোথাও নিঝুম হয়েছে কেউ",
    src: "https://www.rokomari.com/book/432939/kothao-nijum-hoyeche-keu",
  },

  {
    id: 19,
    image: "public/i-19.jpg",
    writer: "জুবায়ের রশীদ",
    name: "বুনোগন্ধের জীবন",
    src: "https://www.rokomari.com/book/478254/bunogondher-jibon",
  },
  {
    id: 20,
    image: "public/i-20.jpg",
    writer: "জাস্টিস ত্বাকী উসমানি হাফিঃ",
    name: "আমার স্মৃতি কিছু সুখের কিছু দুঃখের",
    src: "https://www.rokomari.com/book/223266/amar-smriti-kichu-sukher-kichu-dukher",
  },
];

export default IslamicBooks;
