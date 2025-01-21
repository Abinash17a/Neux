export const topics = [
  {
    name: 'DSA',
    subtopics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'],
  },
  {
    name: 'Algorithms',
    subtopics: ['Sorting', 'Searching', 'Dynamic Programming', 'Greedy'],
  },
  // Add more topics as needed
]

export const content = {
  'DSA': {
    intro: 'Data Structures and Algorithms (DSA) form the building blocks of efficient software development...',
    'Arrays': 'Arrays are a fundamental data structure that store elements in contiguous memory locations...',
    'Linked Lists': 'Linked Lists are linear data structures where elements are stored in nodes...',
    'Trees': 'Trees are hierarchical data structures with a root node and child nodes...',
    'Graphs': 'Graphs are non-linear data structures consisting of nodes and edges...'
  },
  'Algorithms': {
    intro: 'Algorithms are step-by-step procedures or formulas for solving problems...',
    'Sorting': 'Sorting algorithms are used to rearrange a given array or list of elements...',
    'Searching': 'Searching algorithms are designed to check for an element or retrieve an element...',
    'Dynamic Programming': 'Dynamic Programming is a method for solving complex problems by breaking them down...',
    'Greedy': 'Greedy algorithms make the locally optimal choice at each step...'
  },
  // Add content for more topics and subtopics
}

// You can also export both as a single object if preferred
export const topicsData = { topics, content }

