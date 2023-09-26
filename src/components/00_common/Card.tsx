import React from 'react';
import Link from 'next/link';
import './card.css';

interface DataType {
  title: string;
  date: string;
  link: string;
}

interface Props {
  title: string;
  data: DataType[];
}

const Card: React.FC<Props> = ({ title, data }) => {
  return (
    <main className="card-wrapper">
      <h1 className="sub-title"> - {title}</h1>
      <div className="card-content">
        {data.map((item: DataType, index: number) => (
          <CardItem key={index} data={item} />
        ))}
      </div>
    </main>
  );
};

export default Card;

const CardItem: React.FC<{ data: DataType }> = ({ data }) => {
  return (
    <div className="card-item">
      <Link href={`${data.link}`} className="card-item-link">
        <div className="card-item-bg"></div>
        <div className="card-item-title">{data.title}</div>
        <div className="card-item-date-box">
          <span>Date: </span>
          <span className="card-item-date">{data.date}</span>
        </div>
      </Link>
    </div>
  );
};
