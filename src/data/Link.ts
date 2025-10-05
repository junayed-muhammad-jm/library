export interface DataLink {
  id: number;
  image: string;
  src: string;
  name : string
}

const LinkData: DataLink[] = [
  {
    id: 1,
    image: "/img-1.jpg",
    src : "https://bengaliebook.com/",
    name : ""
  },
  {
    id: 2,
    image: "/img-2.jpg",
    src : "https://www.freepdfhouse.com/",
     name : ""

  },
  {
    id: 3,
    image: "/img-3.jpg",
    src : "https://du.ac.bd/offices/LIB",
     name : ""
  },
  {
    id: 4,
    image: "/img-4.jpg",
    src : "https://www.noor-book.com/en/",
     name : ""
  },
  {
    id: 5,
    image: "/img-5.jpg",
    src : "https://www.ebanglalibrary.com/",
     name : ""
  },
];

export default LinkData;
