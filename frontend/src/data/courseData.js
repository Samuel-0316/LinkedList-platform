// frontend/src/data/courseData.js

const courseData = {
    1: {
      title: "Introduction and Operations of Linked List",
      description: "Learn the basics of data structures",
      tutorials: {
        sections: [
          {
            id: 1,
            title: "Arrays and Strings",
            content: `Arrays are fundamental data structures that store elements in contiguous memory locations...`,
            videoUrl: "/api/placeholder/800/450"
          },
          {
            id: 2,
            title: "Linked Lists",
            content: `A linked list is a linear data structure where elements are stored in nodes...`,
            videoUrl: "/api/placeholder/800/450"
          },
          {
            id: 3,
            title: "Stacks and Queues",
            content: `Stacks follow LIFO (Last In First Out) principle while Queues follow FIFO...`,
            videoUrl: "/api/placeholder/800/450"
          }
        ]
      },
      quizzes: [
        {
          id: 1,
          question: "Which data structure provides O(1) access to elements?",
          options: ["Array", "Linked List", "Binary Tree", "Hash Table"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "What is the time complexity of inserting at the beginning of a linked list?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 0
        }
      ]
    },
    2: {
      title: "Algorithm Analysis",
      description: "Master algorithmic complexity and optimization",
      tutorials: {
        sections: [
          {
            id: 1,
            title: "Time Complexity",
            content: `Time complexity is a measure of how runtime grows with input size...`,
            videoUrl: "/api/placeholder/800/450"
          },
          {
            id: 2,
            title: "Space Complexity",
            content: `Space complexity measures the amount of memory an algorithm uses...`,
            videoUrl: "/api/placeholder/800/450"
          }
        ]
      },
      quizzes: [
        {
          id: 1,
          question: "What is the time complexity of binary search?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctAnswer: 1
        }
      ]
    },
    3: {
      title: "Graph Theory",
      description: "Explore graph algorithms and applications",
      tutorials: {
        sections: [
          {
            id: 1,
            title: "Graph Representation",
            content: `Graphs can be represented using adjacency matrices or adjacency lists...`,
            videoUrl: "/api/placeholder/800/450"
          }
        ]
      },
      quizzes: [
        {
          id: 1,
          question: "Which algorithm finds the shortest path in an unweighted graph?",
          options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
          correctAnswer: 1
        }
      ]
    },
    4: {
      title: "Dynamic Programming",
      description: "Learn optimization through dynamic programming",
      tutorials: {
        sections: [
          {
            id: 1,
            title: "Introduction to DP",
            content: `Dynamic Programming is an algorithmic paradigm that solves complex problems...`,
            videoUrl: "/api/placeholder/800/450"
          }
        ]
      },
      quizzes: [
        {
          id: 1,
          question: "Which problem can be solved using dynamic programming?",
          options: ["Quick Sort", "Binary Search", "Fibonacci Series", "Linear Search"],
          correctAnswer: 2
        }
      ]
    },
    5: {
      title: "Trees and BST",
      description: "Understanding tree data structures",
      tutorials: {
        sections: [
          {
            id: 1,
            title: "Tree Traversals",
            content: `Trees can be traversed in various ways: inorder, preorder, postorder...`,
            videoUrl: "/api/placeholder/800/450"
          }
        ]
      },
      quizzes: [
        {
          id: 1,
          question: "What is the height of a balanced binary search tree with n nodes?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctAnswer: 1
        }
      ]
    },
    6: {
      title: "Advanced Algorithms",
      description: "Deep dive into complex algorithms",
      tutorials: {
        sections: [
          {
            id: 1,
            title: "Divide and Conquer",
            content: `Divide and conquer is a strategy of breaking a problem into smaller subproblems...`,
            videoUrl: "/api/placeholder/800/450"
          }
        ]
      },
      quizzes: [
        {
          id: 1,
          question: "Which sorting algorithm uses divide and conquer?",
          options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
          correctAnswer: 2
        }
      ]
    }
  };
  
  export default courseData;