import type { Card } from '../types/card'

export const mockCards: Card[] = [
  {
    id: 'c1',
    type: 'concept',
    topicId: 'caching',
    topicLabel: 'Caching',
    category: 'system-design',
    title: 'Why Redis uses single-threaded I/O',
    difficulty: 'intermediate',
    explanation: 'Redis is single-threaded because memory operations are so fast that the CPU is rarely the bottleneck — network I/O is. A single thread avoids lock contention and context switching overhead, giving predictable sub-millisecond latency.',
    diagramSvg: `<svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="80" width="80" height="40" rx="8" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="1.5"/>
      <text x="50" y="105" text-anchor="middle" fill="#a5b4fc" font-size="12" font-family="monospace">Client</text>
      <rect x="120" y="60" width="80" height="80" rx="8" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
      <text x="160" y="95" text-anchor="middle" fill="#c7d2fe" font-size="11" font-family="monospace">Redis</text>
      <text x="160" y="115" text-anchor="middle" fill="#818cf8" font-size="9" font-family="monospace">Single Thread</text>
      <rect x="230" y="80" width="80" height="40" rx="8" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="1.5"/>
      <text x="270" y="105" text-anchor="middle" fill="#a5b4fc" font-size="12" font-family="monospace">Memory</text>
      <line x1="90" y1="100" x2="120" y2="100" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="4 2"/>
      <line x1="200" y1="100" x2="230" y2="100" stroke="#818cf8" stroke-width="1.5"/>
      <text x="160" y="30" text-anchor="middle" fill="#94a3b8" font-size="10">No locks needed = predictable latency</text>
    </svg>`,
  },
  {
    id: 'c2',
    type: 'flow',
    topicId: 'load-balancing',
    topicLabel: 'Load Balancing',
    category: 'system-design',
    title: 'How a load balancer distributes traffic',
    difficulty: 'beginner',
    explanation: 'A load balancer sits between clients and servers, distributing incoming requests using algorithms like round-robin, least connections, or IP hash to prevent any single server from becoming overwhelmed.',
    flowSteps: [
      { label: 'Client Request', description: 'User sends HTTP request' },
      { label: 'Load Balancer', description: 'Picks server using round-robin' },
      { label: 'Server A/B/C', description: 'Processes request' },
      { label: 'Response', description: 'Returns to client via LB' },
    ],
  },
  {
    id: 'c3',
    type: 'code',
    topicId: 'hash-maps',
    topicLabel: 'Hash Maps',
    category: 'dsa',
    title: 'Two Sum in O(n) with a hash map',
    difficulty: 'beginner',
    explanation: 'Instead of brute-force O(n²), store each number\'s complement in a hash map. For each element, check if its complement already exists — if so, you found the pair.',
    codeBlock: {
      language: 'javascript',
      code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      highlights: [3, 4, 5],
      annotations: {
        3: 'Calculate what we need',
        4: 'Already seen it?',
        7: 'Remember this number',
      },
    },
  },
  {
    id: 'c4',
    type: 'compare',
    topicId: 'sql-vs-nosql',
    topicLabel: 'SQL vs NoSQL',
    category: 'databases',
    title: 'SQL vs NoSQL: when to pick which',
    difficulty: 'beginner',
    explanation: 'SQL excels at complex queries and ACID compliance. NoSQL wins when you need horizontal scaling, flexible schemas, or high write throughput. Most production systems use both.',
    compareItems: [
      {
        title: 'SQL',
        points: [
          'Structured schema (tables)',
          'ACID transactions',
          'Complex JOINs',
          'Vertical scaling',
          'Best for: relational data',
        ],
      },
      {
        title: 'NoSQL',
        points: [
          'Flexible schema (documents)',
          'BASE consistency',
          'Denormalized reads',
          'Horizontal scaling',
          'Best for: unstructured data',
        ],
      },
    ],
  },
  {
    id: 'c5',
    type: 'quiz',
    topicId: 'hash-maps',
    topicLabel: 'Hash Maps',
    category: 'dsa',
    title: 'HashMap worst-case complexity',
    difficulty: 'intermediate',
    quizQuestion: 'What is the time complexity of HashMap.get() in the worst case?',
    quizAnswer: 'O(n) — when all keys hash to the same bucket, it degrades to a linked list traversal. Java 8+ mitigates this by converting long chains to balanced trees (O(log n)).',
    explanation: 'While average-case is O(1), hash collisions can degrade performance. Good hash functions and resizing strategies minimize this in practice.',
  },
  {
    id: 'c6',
    type: 'concept',
    topicId: 'cap-theorem',
    topicLabel: 'CAP Theorem',
    category: 'system-design',
    title: 'You can only pick two: CAP theorem',
    difficulty: 'intermediate',
    explanation: 'In a distributed system, you can guarantee at most two of: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition Tolerance (system works despite network splits).',
    diagramSvg: `<svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="160,20 40,190 280,190" fill="none" stroke="#6366f1" stroke-width="1.5" opacity="0.4"/>
      <circle cx="160" cy="20" r="24" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="1.5"/>
      <text x="160" y="25" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="bold">C</text>
      <circle cx="40" cy="190" r="24" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="40" y="195" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="bold">A</text>
      <circle cx="280" cy="190" r="24" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="1.5"/>
      <text x="280" y="195" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="bold">P</text>
      <text x="95" y="95" text-anchor="middle" fill="#94a3b8" font-size="9">CA: RDBMS</text>
      <text x="225" y="95" text-anchor="middle" fill="#94a3b8" font-size="9">CP: MongoDB</text>
      <text x="160" y="208" text-anchor="middle" fill="#94a3b8" font-size="9">AP: Cassandra</text>
    </svg>`,
  },
  {
    id: 'c7',
    type: 'code',
    topicId: 'trees',
    topicLabel: 'Trees',
    category: 'dsa',
    title: 'BFS traversal in 10 lines',
    difficulty: 'beginner',
    explanation: 'Breadth-first search uses a queue to visit nodes level by level. It\'s the go-to for shortest path in unweighted graphs and level-order tree traversal.',
    codeBlock: {
      language: 'javascript',
      code: `function bfs(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}`,
      highlights: [4, 5, 6],
      annotations: {
        4: 'Process level by level',
        6: 'Visit current node',
        8: 'Enqueue children',
      },
    },
  },
  {
    id: 'c8',
    type: 'flow',
    topicId: 'cdn',
    topicLabel: 'CDN',
    category: 'system-design',
    title: 'How a CDN serves your images',
    difficulty: 'beginner',
    explanation: 'When a user requests an image, the CDN checks its nearest edge server. On a cache hit, it serves instantly. On a miss, it fetches from the origin server, caches it, then serves — future requests are fast.',
    flowSteps: [
      { label: 'User Request', description: 'Browser requests image.png' },
      { label: 'Edge Server', description: 'Nearest PoP checks cache' },
      { label: 'Cache Hit?', description: 'Serve from edge (2ms)' },
      { label: 'Origin Fetch', description: 'Cache miss → fetch from origin' },
      { label: 'Cache + Serve', description: 'Store at edge, return to user' },
    ],
  },
  {
    id: 'c9',
    type: 'concept',
    topicId: 'indexing',
    topicLabel: 'Indexing',
    category: 'databases',
    title: 'B-Trees: why databases love them',
    difficulty: 'intermediate',
    explanation: 'B-Trees keep data sorted and allow searches, insertions, and deletions in O(log n). Each node holds multiple keys and has many children, minimizing disk reads — critical when data lives on spinning disks.',
    diagramSvg: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="110" y="10" width="100" height="30" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="1.5"/>
      <text x="160" y="30" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="monospace">10 | 20 | 30</text>
      <rect x="20" y="70" width="80" height="26" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="60" y="88" text-anchor="middle" fill="#6ee7b7" font-size="10" font-family="monospace">3 | 7</text>
      <rect x="120" y="70" width="80" height="26" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="160" y="88" text-anchor="middle" fill="#6ee7b7" font-size="10" font-family="monospace">14 | 17</text>
      <rect x="220" y="70" width="80" height="26" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="260" y="88" text-anchor="middle" fill="#6ee7b7" font-size="10" font-family="monospace">25 | 28</text>
      <line x1="130" y1="40" x2="60" y2="70" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <line x1="160" y1="40" x2="160" y2="70" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <line x1="190" y1="40" x2="260" y2="70" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <text x="160" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">Each node = one disk read</text>
      <text x="160" y="150" text-anchor="middle" fill="#94a3b8" font-size="10">Fan-out reduces tree height</text>
    </svg>`,
  },
  {
    id: 'c10',
    type: 'compare',
    topicId: 'message-queues',
    topicLabel: 'Message Queues',
    category: 'system-design',
    title: 'Kafka vs RabbitMQ: different beasts',
    difficulty: 'advanced',
    explanation: 'Kafka is a distributed log optimized for throughput and replay. RabbitMQ is a traditional message broker optimized for routing flexibility. Choose based on whether you need event streaming or task distribution.',
    compareItems: [
      {
        title: 'Kafka',
        points: [
          'Append-only log',
          'Consumer pulls messages',
          'Messages persist by default',
          'Millions msgs/sec throughput',
          'Best for: event streaming',
        ],
      },
      {
        title: 'RabbitMQ',
        points: [
          'Message queue model',
          'Broker pushes to consumers',
          'Messages deleted after ack',
          'Lower latency per message',
          'Best for: task distribution',
        ],
      },
    ],
  },
  {
    id: 'c11',
    type: 'quiz',
    topicId: 'sorting',
    topicLabel: 'Sorting',
    category: 'dsa',
    title: 'The fastest comparison sort',
    difficulty: 'intermediate',
    quizQuestion: 'What is the theoretical lower bound for comparison-based sorting?',
    quizAnswer: 'Ω(n log n) — proven via decision tree argument. Any comparison sort must make at least log₂(n!) comparisons, which is Ω(n log n) by Stirling\'s approximation. Merge sort and heapsort achieve this bound.',
    explanation: 'Non-comparison sorts like counting sort and radix sort can beat this bound by exploiting properties of the input (bounded integers, fixed-length keys).',
  },
  {
    id: 'c12',
    type: 'code',
    topicId: 'dp',
    topicLabel: 'Dynamic Programming',
    category: 'dsa',
    title: 'Climbing stairs: classic DP',
    difficulty: 'beginner',
    explanation: 'To reach step n, you can come from step n-1 or n-2. So ways(n) = ways(n-1) + ways(n-2). It\'s literally Fibonacci — and the gateway drug to dynamic programming.',
    codeBlock: {
      language: 'javascript',
      code: `function climbStairs(n) {
  if (n <= 2) return n;
  let prev = 1, curr = 2;
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}`,
      highlights: [3, 5],
      annotations: {
        3: 'Base cases: Fibonacci seeds',
        5: 'Roll forward: O(1) space',
      },
    },
  },
  {
    id: 'c13',
    type: 'concept',
    topicId: 'rate-limiting',
    topicLabel: 'Rate Limiting',
    category: 'system-design',
    title: 'Token bucket: rate limiting explained',
    difficulty: 'intermediate',
    explanation: 'A token bucket fills at a steady rate. Each request costs one token. If the bucket is empty, the request is rejected. This allows short bursts while enforcing a long-term average rate.',
    diagramSvg: `<svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="30" width="80" height="120" rx="10" fill="none" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="140" cy="120" r="6" fill="#818cf8" opacity="0.8"/>
      <circle cx="160" cy="120" r="6" fill="#818cf8" opacity="0.8"/>
      <circle cx="180" cy="120" r="6" fill="#818cf8" opacity="0.8"/>
      <circle cx="150" cy="100" r="6" fill="#818cf8" opacity="0.5"/>
      <circle cx="170" cy="100" r="6" fill="#818cf8" opacity="0.5"/>
      <circle cx="160" cy="80" r="6" fill="#818cf8" opacity="0.3"/>
      <text x="160" y="20" text-anchor="middle" fill="#c7d2fe" font-size="10">Tokens added at fixed rate</text>
      <line x1="160" y1="25" x2="160" y2="30" stroke="#818cf8" stroke-width="1" stroke-dasharray="3"/>
      <line x1="200" y1="90" x2="260" y2="90" stroke="#818cf8" stroke-width="1.5"/>
      <text x="230" y="80" text-anchor="middle" fill="#6ee7b7" font-size="9">Request</text>
      <text x="260" y="95" text-anchor="start" fill="#6ee7b7" font-size="9">✓</text>
      <line x1="200" y1="130" x2="260" y2="130" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="4 2"/>
      <text x="230" y="120" text-anchor="middle" fill="#f87171" font-size="9">Request</text>
      <text x="260" y="135" text-anchor="start" fill="#f87171" font-size="9">✗</text>
      <text x="160" y="175" text-anchor="middle" fill="#94a3b8" font-size="9">Empty bucket = rate limited</text>
    </svg>`,
  },
  {
    id: 'c14',
    type: 'flow',
    topicId: 'transactions',
    topicLabel: 'Transactions',
    category: 'databases',
    title: 'ACID: what makes a transaction safe',
    difficulty: 'beginner',
    explanation: 'ACID properties ensure database transactions are reliable: Atomicity (all or nothing), Consistency (valid state transitions), Isolation (concurrent transactions don\'t interfere), Durability (committed data survives crashes).',
    flowSteps: [
      { label: 'BEGIN', description: 'Start transaction' },
      { label: 'Atomicity', description: 'All operations succeed or all roll back' },
      { label: 'Consistency', description: 'Data remains valid after commit' },
      { label: 'Isolation', description: 'Other transactions can\'t see mid-state' },
      { label: 'COMMIT', description: 'Durable — written to disk permanently' },
    ],
  },
  {
    id: 'c15',
    type: 'quiz',
    topicId: 'graphs',
    topicLabel: 'Graphs',
    category: 'dsa',
    title: 'DFS vs BFS: which finds shortest path?',
    difficulty: 'beginner',
    quizQuestion: 'Which algorithm finds the shortest path in an unweighted graph?',
    quizAnswer: 'BFS — it explores all nodes at distance d before any at distance d+1, guaranteeing the first time it reaches a node is via the shortest path. DFS may find a path first but it won\'t necessarily be shortest.',
    explanation: 'For weighted graphs, you need Dijkstra\'s (non-negative weights) or Bellman-Ford (negative weights allowed).',
  },
  {
    id: 'c16',
    type: 'concept',
    topicId: 'consistent-hashing',
    topicLabel: 'Consistent Hashing',
    category: 'system-design',
    title: 'Consistent hashing minimizes rehashing',
    difficulty: 'advanced',
    explanation: 'In consistent hashing, both keys and servers are placed on a ring. A key maps to the first server clockwise from its position. When a server is added or removed, only 1/n of keys need to move — not all of them.',
    diagramSvg: `<svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="110" r="80" fill="none" stroke="#6366f1" stroke-width="1" opacity="0.3"/>
      <circle cx="160" cy="30" r="10" fill="#6366f1" opacity="0.4" stroke="#6366f1" stroke-width="1.5"/>
      <text x="160" y="34" text-anchor="middle" fill="#c7d2fe" font-size="9" font-weight="bold">S1</text>
      <circle cx="233" cy="143" r="10" fill="#6366f1" opacity="0.4" stroke="#6366f1" stroke-width="1.5"/>
      <text x="233" y="147" text-anchor="middle" fill="#c7d2fe" font-size="9" font-weight="bold">S2</text>
      <circle cx="87" cy="143" r="10" fill="#6366f1" opacity="0.4" stroke="#6366f1" stroke-width="1.5"/>
      <text x="87" y="147" text-anchor="middle" fill="#c7d2fe" font-size="9" font-weight="bold">S3</text>
      <circle cx="200" cy="50" r="5" fill="#f59e0b"/>
      <text x="215" y="50" fill="#fde68a" font-size="8">key1 → S1</text>
      <circle cx="240" cy="100" r="5" fill="#f59e0b"/>
      <text x="255" y="100" fill="#fde68a" font-size="8">key2 → S2</text>
      <circle cx="120" cy="180" r="5" fill="#f59e0b"/>
      <text x="70" y="195" fill="#fde68a" font-size="8">key3 → S3</text>
      <text x="160" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">Add/remove server → only ~1/n keys move</text>
    </svg>`,
  },
  {
    id: 'c17',
    type: 'code',
    topicId: 'linked-lists',
    topicLabel: 'Linked Lists',
    category: 'dsa',
    title: 'Reverse a linked list in-place',
    difficulty: 'beginner',
    explanation: 'Use three pointers: prev, curr, next. At each step, reverse the current node\'s pointer, then advance all three. When curr becomes null, prev is the new head.',
    codeBlock: {
      language: 'javascript',
      code: `function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
      highlights: [5, 6],
      annotations: {
        5: 'Save next before breaking link',
        6: 'Reverse the pointer',
      },
    },
  },
  {
    id: 'c18',
    type: 'concept',
    topicId: 'sharding',
    topicLabel: 'Sharding',
    category: 'databases',
    title: 'Database sharding: horizontal scaling',
    difficulty: 'advanced',
    explanation: 'Sharding splits data across multiple database instances by a shard key (e.g., user_id % N). Each shard holds a subset of rows. This enables horizontal scaling but makes cross-shard queries and transactions harder.',
    diagramSvg: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="110" y="10" width="100" height="30" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="1.5"/>
      <text x="160" y="30" text-anchor="middle" fill="#6ee7b7" font-size="11">App Server</text>
      <rect x="10" y="90" width="90" height="40" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="55" y="112" text-anchor="middle" fill="#6ee7b7" font-size="10">Shard 1</text>
      <text x="55" y="125" text-anchor="middle" fill="#94a3b8" font-size="8">users 0-999</text>
      <rect x="115" y="90" width="90" height="40" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="160" y="112" text-anchor="middle" fill="#6ee7b7" font-size="10">Shard 2</text>
      <text x="160" y="125" text-anchor="middle" fill="#94a3b8" font-size="8">users 1k-1999</text>
      <rect x="220" y="90" width="90" height="40" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="265" y="112" text-anchor="middle" fill="#6ee7b7" font-size="10">Shard 3</text>
      <text x="265" y="125" text-anchor="middle" fill="#94a3b8" font-size="8">users 2k-2999</text>
      <line x1="135" y1="40" x2="55" y2="90" stroke="#10b981" stroke-width="1" opacity="0.4"/>
      <line x1="160" y1="40" x2="160" y2="90" stroke="#10b981" stroke-width="1" opacity="0.4"/>
      <line x1="185" y1="40" x2="265" y2="90" stroke="#10b981" stroke-width="1" opacity="0.4"/>
      <text x="160" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">user_id % 3 determines shard</text>
    </svg>`,
  },
  {
    id: 'c19',
    type: 'compare',
    topicId: 'api-design',
    topicLabel: 'API Design',
    category: 'system-design',
    title: 'REST vs GraphQL: different tradeoffs',
    difficulty: 'intermediate',
    explanation: 'REST uses resource-based URLs with fixed response shapes. GraphQL lets clients request exactly the data they need in a single query. REST is simpler to cache; GraphQL eliminates over-fetching.',
    compareItems: [
      {
        title: 'REST',
        points: [
          'One endpoint per resource',
          'Fixed response shape',
          'Easy HTTP caching',
          'Multiple roundtrips',
          'Best for: simple CRUD APIs',
        ],
      },
      {
        title: 'GraphQL',
        points: [
          'Single endpoint',
          'Client defines response shape',
          'Harder to cache',
          'One request for nested data',
          'Best for: complex UIs',
        ],
      },
    ],
  },
  {
    id: 'c20',
    type: 'quiz',
    topicId: 'arrays',
    topicLabel: 'Arrays & Strings',
    category: 'dsa',
    title: 'Sliding window maximum trick',
    difficulty: 'advanced',
    quizQuestion: 'How do you find the maximum in every sliding window of size k in O(n) time?',
    quizAnswer: 'Use a monotonic deque (double-ended queue). Maintain elements in decreasing order. Remove elements that fall outside the window from the front, and remove smaller elements from the back before adding new ones.',
    explanation: 'Each element enters and exits the deque at most once, giving O(n) total despite the inner operations. This pattern is a favorite in coding interviews.',
  },
  {
    id: 'c21',
    type: 'flow',
    topicId: 'microservices',
    topicLabel: 'Microservices',
    category: 'system-design',
    title: 'Saga pattern for distributed transactions',
    difficulty: 'advanced',
    explanation: 'In microservices, you can\'t use a single DB transaction across services. The Saga pattern breaks a transaction into local transactions, each with a compensating action. If step 3 fails, steps 1 and 2 are rolled back via compensations.',
    flowSteps: [
      { label: 'Order Service', description: 'Create order (T1)' },
      { label: 'Payment Service', description: 'Charge payment (T2)' },
      { label: 'Inventory Service', description: 'Reserve stock (T3)' },
      { label: 'Failure?', description: 'If T3 fails → compensate' },
      { label: 'Rollback', description: 'Refund (C2) → Cancel order (C1)' },
    ],
  },
  {
    id: 'c22',
    type: 'code',
    topicId: 'stacks-queues',
    topicLabel: 'Stacks & Queues',
    category: 'dsa',
    title: 'Valid parentheses in 7 lines',
    difficulty: 'beginner',
    explanation: 'Push opening brackets onto a stack. When you see a closing bracket, check if the stack\'s top is its match. If the stack is empty at the end, all brackets were matched.',
    codeBlock: {
      language: 'javascript',
      code: `function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };
  for (const ch of s) {
    if (!pairs[ch]) stack.push(ch);
    else if (stack.pop() !== pairs[ch]) return false;
  }
  return stack.length === 0;
}`,
      highlights: [5, 6],
      annotations: {
        3: 'Map closers to openers',
        5: 'Opening bracket → push',
        6: 'Closing bracket → check match',
      },
    },
  },
  {
    id: 'c23',
    type: 'concept',
    topicId: 'replication',
    topicLabel: 'Replication',
    category: 'databases',
    title: 'Leader-follower replication explained',
    difficulty: 'intermediate',
    explanation: 'One leader handles all writes and streams changes to follower replicas. Followers serve read queries, distributing load. If the leader fails, a follower is promoted. The tradeoff: followers may serve slightly stale data (replication lag).',
    diagramSvg: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="115" y="10" width="90" height="35" rx="8" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
      <text x="160" y="25" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="bold">Leader</text>
      <text x="160" y="38" text-anchor="middle" fill="#94a3b8" font-size="8">Reads + Writes</text>
      <rect x="20" y="100" width="80" height="30" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="60" y="120" text-anchor="middle" fill="#6ee7b7" font-size="10">Follower 1</text>
      <rect x="120" y="100" width="80" height="30" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="160" y="120" text-anchor="middle" fill="#6ee7b7" font-size="10">Follower 2</text>
      <rect x="220" y="100" width="80" height="30" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1"/>
      <text x="260" y="120" text-anchor="middle" fill="#6ee7b7" font-size="10">Follower 3</text>
      <line x1="135" y1="45" x2="60" y2="100" stroke="#10b981" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
      <line x1="160" y1="45" x2="160" y2="100" stroke="#10b981" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
      <line x1="185" y1="45" x2="260" y2="100" stroke="#10b981" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
      <text x="160" y="70" text-anchor="middle" fill="#94a3b8" font-size="8">WAL stream (async replication)</text>
      <text x="160" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">Followers handle read queries, reducing leader load</text>
    </svg>`,
  },
  {
    id: 'c24',
    type: 'quiz',
    topicId: 'dp',
    topicLabel: 'Dynamic Programming',
    category: 'dsa',
    title: 'Memoization vs tabulation',
    difficulty: 'intermediate',
    quizQuestion: 'What is the key difference between memoization (top-down) and tabulation (bottom-up) in DP?',
    quizAnswer: 'Memoization solves subproblems lazily via recursion + cache (only computes what\'s needed). Tabulation solves all subproblems iteratively in order (no recursion stack). Tabulation is usually faster in practice; memoization is easier to write.',
    explanation: 'Both achieve the same O(n) time complexity for most problems, but tabulation avoids recursion stack overflow for large inputs and has better cache locality.',
  },
]
