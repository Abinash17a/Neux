import Link from 'next/link';
import { topicsData } from '../data/topicsData';

const HorizontalNavBar = () => {
  return (
    <div style={{ display: 'flex', padding: '10px', background: '#333', color: '#fff' }}>
      {Object.keys(topicsData).map((key) => (
        <Link key={key} href={`/topics/${key}`} style={{ margin: '0 15px', color: '#fff' }}>
          {topicsData[key].name}
        </Link>
      ))}
    </div>
  );
};

export default HorizontalNavBar;
