import { MongoType } from '@/data/type/databaseType';
import './dbStyles.css';

const MongoComponent = async () => {
  const mongoData = await fetchData();
  return (
    <>
      {mongoData.data?.map((v: MongoType, i: number) => {
        return (
          <section
            key={i + `mongoCard`}
            className="card-item-wrapper db-min-height"
          >
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
    </>
  );
};

export default MongoComponent;

async function fetchData() {
  const res = await fetch(`${process.env.SERVER_ENV}/api/db/mongo`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}
