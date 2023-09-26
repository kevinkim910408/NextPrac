import MongoComponent from '@/components/01_DB/MongoComponent';

const DB = ({ params }: { params: { slug: string } }) => {
  const Switcher = (type: String) => {
    switch (type) {
      case 'mongo':
        /* @ts-expect-error Async Server Component */
        return <MongoComponent />;
      case 'postgres':
        return <></>;
      case 'mysql':
        return <></>;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  };
  return (
    <main>
      <h1 className="sub-title">{params.slug.toUpperCase()}</h1>
      {Switcher(params.slug)}
    </main>
  );
};

export default DB;
