import { MongoType } from '@/data/type/databaseType';
import './dbStyles.css';

const MongoComponent = async () => {
  const mongoData = await fetchData();
  return (
    <div className="db-component-wrapper">
      {mongoData.data?.map((v: MongoType, i: number) => {
        return (
          <section key={i + `mongoCard`} className="db-card-wrapper">
            <div className="db-content-wrapper">
              <span className="front-span">Name: </span> <span>{v.name}</span>
            </div>
            <div className="db-content-wrapper">
              <span className="front-span">Age: </span> <span>{v.age}</span>
            </div>
            <div className="db-content-wrapper">
              <span className="front-span">Email: </span> <span>{v.email}</span>
            </div>
            <div className="db-content-wrapper">
              <span className="front-span">Hobby: </span>
              <span>
                {v.hobbies?.map((str: string, ii: number) => (
                  <div key={ii + `hobby`}>{str}</div>
                ))}
              </span>
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
