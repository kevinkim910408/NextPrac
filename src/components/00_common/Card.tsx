import React from 'react';
import Link from 'next/link';

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
    <main className="page-wrapper">
      <h1 className="sub-title"> - {title}</h1>
      <div className="page-content">
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
    <div className="card-item-wrapper">
      <Link href={`${data.link}`}>
        <div className="card-item-bg" />
        <div className="card-item-title">{data.title}</div>
        <div className="card-item-content-box">
          <span>Date: </span>
          <span className="yellow-bold">{data.date}</span>
        </div>
      </Link>
    </div>
  );
};
