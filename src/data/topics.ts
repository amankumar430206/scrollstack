import type { Topic } from '../types/card'

export const topics: Topic[] = [
  { id: 'caching', label: 'Caching', category: 'system-design', icon: 'database' },
  { id: 'load-balancing', label: 'Load Balancing', category: 'system-design', icon: 'network' },
  { id: 'message-queues', label: 'Message Queues', category: 'system-design', icon: 'mail' },
  { id: 'cdn', label: 'CDN', category: 'system-design', icon: 'globe' },
  { id: 'rate-limiting', label: 'Rate Limiting', category: 'system-design', icon: 'shield' },
  { id: 'consistent-hashing', label: 'Consistent Hashing', category: 'system-design', icon: 'hash' },
  { id: 'cap-theorem', label: 'CAP Theorem', category: 'system-design', icon: 'triangle' },
  { id: 'microservices', label: 'Microservices', category: 'system-design', icon: 'boxes' },
  { id: 'api-design', label: 'API Design', category: 'system-design', icon: 'plug' },

  { id: 'arrays', label: 'Arrays & Strings', category: 'dsa', icon: 'list' },
  { id: 'trees', label: 'Trees', category: 'dsa', icon: 'git-branch' },
  { id: 'graphs', label: 'Graphs', category: 'dsa', icon: 'share-2' },
  { id: 'dp', label: 'Dynamic Programming', category: 'dsa', icon: 'grid' },
  { id: 'sorting', label: 'Sorting', category: 'dsa', icon: 'arrow-up-down' },
  { id: 'linked-lists', label: 'Linked Lists', category: 'dsa', icon: 'link' },
  { id: 'stacks-queues', label: 'Stacks & Queues', category: 'dsa', icon: 'layers' },
  { id: 'hash-maps', label: 'Hash Maps', category: 'dsa', icon: 'map' },

  { id: 'indexing', label: 'Indexing', category: 'databases', icon: 'search' },
  { id: 'transactions', label: 'Transactions', category: 'databases', icon: 'repeat' },
  { id: 'sharding', label: 'Sharding', category: 'databases', icon: 'scissors' },
  { id: 'replication', label: 'Replication', category: 'databases', icon: 'copy' },
  { id: 'sql-vs-nosql', label: 'SQL vs NoSQL', category: 'databases', icon: 'database' },
  { id: 'normalization', label: 'Normalization', category: 'databases', icon: 'table' },
  { id: 'query-optimization', label: 'Query Optimization', category: 'databases', icon: 'zap' },
]

export const categories = [
  { id: 'system-design' as const, label: 'System Design', color: '#6366f1' },
  { id: 'dsa' as const, label: 'DSA', color: '#f59e0b' },
  { id: 'databases' as const, label: 'Databases', color: '#10b981' },
]
