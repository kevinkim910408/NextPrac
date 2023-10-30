import InputFormComponent from '@/components/01_DB/InputFormComponent';
import ShowCard from '@/components/01_DB/ShowCard';

const DB = ({ params }: { params: { slug: string } }) => {
  const ShowCardSwitcher = (type: String) => {
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
      <>{ShowCardSwitcher(params.slug)}</>
      <h1 className="sub-title">
        - Send data to {params.slug.toUpperCase()} DB
      </h1>
      <InputFormComponent dbtype={params.slug} />
    </div>
  );
};

export default DB;
