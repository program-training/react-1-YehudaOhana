import { useState } from "react";

interface Card {
  title: string;
  img: string;
  text: string;
}

export const NewCard = (): JSX.Element => {
  const CardState: Card = { title: "", img: "", text: "" };
  const [card, _setCard] = useState<Card | null>(CardState);
  return (
    <div className="card">
      {card?.title && <h1>{card.title}</h1>}
      {card?.img && <img src={card.img} width={200} />}
      {card?.text && <p>{card.text}</p>}
    </div>
  );
};
