import { MongoType } from '@/data/type/databaseType';
import './dbStyles.css';

const MongoComponent = async () => {
  const mongoData = await fetchData();
  return (
    <div className="card-item-wrapper">
      {mongoData.data?.map((v: MongoType, i: number) => {
        return (
          <section key={i + `mongoCard`}>
            <div className="card-item-bg" />
            <div className="card-item-content-box">
              <span className="front-span">Name: </span> <span>{v.name}</span>
            </div>
            <div className="card-item-content-box">
              <span className="front-span">Age: </span> <span>{v.age}</span>
            </div>
            <div className="card-item-content-box">
              <span className="front-span">Email: </span> <span>{v.email}</span>
            </div>
            <div className="card-item-content-box">
              <span className="front-span">Hobby: </span>
              <div className="hobby-wapper">
                {v.hobbies?.map((str: string, ii: number) => (
                  <span key={ii + `hobby`}>{str}</span>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MongoComponent;

async function fetchData() {
  const res = await fetch(`${process.env.SERVER_ENV}/api/db/mongo`, {
    // cache: 'no-store',
  });
  const data = await res.json();
  return data;
}
