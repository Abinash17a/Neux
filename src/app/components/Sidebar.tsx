import Link from 'next/link';

const Sidebar = ({ topic, subtopics }: { topic: string; subtopics: any }) => {
  return (
    <div style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
      <h3>{topic}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.keys(subtopics).map((key) => (
          <li key={key}>
            <Link href={`/topics/${topic}/${key}`}>{subtopics[key].title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
