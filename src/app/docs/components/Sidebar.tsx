'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  topics: Array<{ name: string; subtopics: string[] }>
}

const Sidebar: React.FC<SidebarProps> = ({ topics }) => {
  const pathname = usePathname()
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedSubtopic, setSelectedSubtopic] = useState('')

  useEffect(() => {
    const pathParts = pathname.split('/')
    if (pathParts.length > 2) {
      setSelectedTopic(pathParts[2])
      setSelectedSubtopic(pathParts[3] || 'intro')
    }
  }, [pathname])

  const currentTopic = topics.find(topic => topic.name.toLowerCase() === selectedTopic)

  return (
    <nav className="w-64 bg-gray-100 p-4">
      <h2 className="font-bold mb-2">{currentTopic?.name || 'Select a Topic'}</h2>
      <ul>
        <li key="intro" className="mb-1">
          <Link
            href={`/docs/${selectedTopic}`}
            className={`block w-full text-left p-2 rounded ${
              selectedSubtopic === 'intro' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
          >
            Introduction
          </Link>
        </li>
        {currentTopic?.subtopics.map((subtopic) => (
          <li key={subtopic} className="mb-1">
            <Link
              href={`/docs/${selectedTopic}/${subtopic.toLowerCase().replace(' ', '-')}`}
              className={`block w-full text-left p-2 rounded ${
                selectedSubtopic === subtopic.toLowerCase().replace(' ', '-') ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {subtopic}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar

