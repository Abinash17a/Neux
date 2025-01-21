import React from 'react'

interface ContentProps {
  selectedTopic: string
  selectedSubtopic: string
  content: {
    [key: string]: {
      [key: string]: string
      intro: string
    }
  }
}

const Content: React.FC<ContentProps> = ({ selectedTopic, selectedSubtopic, content }) => {
  const topicContent = content[selectedTopic]
  const subtopicContent = selectedSubtopic === 'intro' ? topicContent.intro : topicContent[selectedSubtopic]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        {selectedTopic}: {selectedSubtopic === 'intro' ? 'Introduction' : selectedSubtopic}
      </h1>
      <p>{subtopicContent}</p>
    </div>
  )
}

export default Content

