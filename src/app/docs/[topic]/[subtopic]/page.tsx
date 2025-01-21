import { topics, content } from '../../../data/topicsData';

export default function SubtopicPage({ params }: { params: { topic: string; subtopic: string } }) {
  const { topic, subtopic } = params;

  const topicContent = content[topic as keyof typeof content];
  const subtopicContent = topicContent?.[subtopic as keyof typeof topicContent] || topicContent?.intro;

  if (!subtopicContent) {
    return <div>Subtopic not found</div>;
  }

  const topicInfo = topics.find(t => t.name.toLowerCase() === topic.toLowerCase());

  return (
    <div style={{ flex: 1, padding: '20px' }}>
      <h1>{topicInfo?.name}: {subtopic === 'intro' ? 'Introduction' : subtopic}</h1>
      <p>{subtopicContent}</p>
    </div>
  );
}

