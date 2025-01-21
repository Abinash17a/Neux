import { ReactNode } from 'react'
import TopicsBar from './components/TopicsBar'
import Sidebar from './components/Sidebar'
import { topics } from '../data/topicsData'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopicsBar topics={topics} />
      <div className="flex flex-1">
        <Sidebar topics={topics} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

