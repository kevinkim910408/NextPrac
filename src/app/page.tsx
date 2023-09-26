import Card from '@/components/00_common/Card';
import { DATABASE, HOME_TITLES } from '@/data/const';

export default function Home() {
  return (
    <main>
      <Card title={HOME_TITLES[0]} data={DATABASE} />
    </main>
  );
}
