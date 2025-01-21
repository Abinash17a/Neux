'use client'

import { useState } from 'react'
import Link from 'next/link'

interface TopicsBarProps {
  topics: Array<{ name: string }>
}

const TopicsBar: React.FC<TopicsBarProps> = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].name)

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          {topics.map((topic) => (
            <li key={topic.name}>
              <Link
                href={`/docs/${topic.name.toLowerCase()}`}
                onClick={() => setSelectedTopic(topic.name)}
                className={`hover:text-gray-300 ${selectedTopic === topic.name ? 'font-bold' : ''}`}
              >
                {topic.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default TopicsBar

