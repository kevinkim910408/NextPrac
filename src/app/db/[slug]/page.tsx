import InputForm from '@/components/01_DB/InputForm';
import ShowCard from '@/components/01_DB/ShowCard';

const DB = ({ params }: { params: { slug: string } }) => {
  const Switcher = (type: String) => {
    switch (type) {
      case 'mongo':
        /* @ts-expect-error Async Server Component */
        return <ShowCard dbtype="mongo" />;
      case 'postgres':
        return <></>;
      case 'mysql':
        return <></>;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  };
  return (
    <div className="page-wrapper">
      <h1 className="sub-title">
        - {params.slug.toUpperCase()} (Hover to see hidden text)
      </h1>
      <>{Switcher(params.slug)}</>
      <h1 className="sub-title">
        - Send data to {params.slug.toUpperCase()} DB
      </h1>
      <InputForm />
    </div>
  );
};

export default DB;
