import { ReactNode } from 'react'
import { notFound } from 'next/navigation'

const validTopics = ['data-structures', 'algorithms'] // Add more as needed

export default function TopicLayout({ children, params }: { children: ReactNode; params: { topic: string } }) {
  if (!validTopics.includes(params.topic)) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{params.topic.replace('-', ' ')}</h1>
      {children}
    </div>
  )
}

