'use client'

import { useState } from 'react'
import { topics, content } from '../data/topicsData'
import Content from './components/Content'

export default function DocsPage() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].name)
  const [selectedSubtopic, setSelectedSubtopic] = useState('intro')

  return (
    <Content
      selectedTopic={selectedTopic}
      selectedSubtopic={selectedSubtopic}
      content={content}
    />
  )
}

