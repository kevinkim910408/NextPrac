import { DBType } from '@/data/type/databaseType';
import { RiEditLine } from 'react-icons/ri';
import DeleteIcon from './DeleteIcon';
import './dbStyles.css';

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
              <DeleteIcon id={v._id} dbtype={dbtype} />
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
  const res = await fetch(`${process.env.SERVER_ENV}/api/db/${dbtype}`, {
    cache: 'no-cache',
    method: 'GET',
  });
  const data = await res.json();
  return data.data;
}
