import { MongoType } from '@/data/type/databaseType';
import './dbStyles.css';

const MongoComponent = async () => {
  const mongoData = await fetchData();
  return (
    <main className="db-component-wrapper">
      <input type="text" />
      <div>
        {mongoData.data?.map((v: MongoType, i: number) => {
          return (
            <section key={i + `mongoCard`}>
              <div>
                <span>Name: </span> <span>{v.name}</span>
              </div>
              <div>
                <span>Age: </span> <span>{v.age}</span>
              </div>
              <div>
                <span>Email: </span> <span>{v.email}</span>
              </div>
              <div>
                <span>Hobby: </span>
                <span>
                  {v.hobbies?.map((str: string, ii: number) => (
                    <div key={ii + `hobby`}> {str}</div>
                  ))}
                </span>
              </div>
            </section>
          );
        })}
      </div>
    </main>
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
