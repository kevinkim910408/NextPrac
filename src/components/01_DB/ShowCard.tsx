import { DBType } from '@/data/type/databaseType';
import './dbStyles.css';
import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri';
import { cache } from 'react';

type TDB = 'mongo' | 'postgres' | 'mysql';

const ShowCard = async ({ dbtype }: { dbtype: TDB }) => {
  const data = await fetchData(dbtype);
  return (
    <div className="page-content page-overflow-controll">
      {data?.map((v: DBType, i: number) => {
        return (
          <section
            key={i + `mongoCard`}
            className="card-item-wrapper db-min-height"
          >
            <div className="db-icon-bottom">
              <RiEditLine size={27} cursor="pointer" />
              <RiDeleteBin5Line size={27} cursor="pointer" />
            </div>
            <div className="card-item-bg" />
            <div className="card-item-content-box">
              <span className="front-span yellow-bold">Name: </span>
              <span className="back-span" title={v.name}>
                {v.name}
              </span>
            </div>
            <div className="card-item-content-box">
              <span className="front-span yellow-bold">Age: </span>
              <span className="back-span" title={String(v.age)}>
                {v.age}
              </span>
            </div>
            <div className="card-item-content-box">
              <span className="front-span yellow-bold">Email: </span>
              <span className="back-span" title={v.email}>
                {v.email}
              </span>
            </div>
            <div className="card-item-content-box">
              <span className="front-span yellow-bold">Hobby: </span>
              <div className="hobby-wapper">
                {v.hobbies?.map((str: string, ii: number) => (
                  <span key={ii + `hobby`} className="back-span" title={str}>
                    {str}
                  </span>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ShowCard;

async function fetchData(dbtype: TDB) {
  switch (dbtype) {
    case 'mongo':
      const res = await fetch(`${process.env.SERVER_ENV}/api/db/mongo`, {
        cache: 'no-cache',
        method: 'GET',
      });
      const data = await res.json();
      return data.data;
    case 'postgres':
      return [];
    case 'mysql':
      return [];
    default:
      throw new Error(`Unknown type of DB: ${dbtype}`);
  }
}
