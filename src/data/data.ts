const DATA = {
  cards: [],
};

interface DataType {
  cards: CardType[];
}

interface CardType {
  title: string;
  desc: string;
}
