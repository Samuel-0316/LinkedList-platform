// frontend/src/data/courseData.js

const courseData = {
  1: {
    title: "Introduction and Operations of Linked List",
    description: "Explore the fundamentals of linked lists, their types, and common operations like insertion, deletion, and traversal.",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Arrays and Strings",
          content: "Arrays are fundamental data structures that store elements in contiguous memory locations...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 2,
          title: "Linked Lists",
          content: "A linked list is a linear data structure where elements are stored in nodes...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 3,
          title: "Stacks and Queues",
          content: "Stacks follow LIFO (Last In First Out) principle while Queues follow FIFO...",
          videoUrl: "/api/placeholder/800/450"
        }
      ]
    },
    quizzes: [
      {
        id: 1,
        question: "What is a key advantage of linked lists over arrays?",
        options: [
          "Constant-time access to elements by index",
          "Dynamic size and ease of insertion/deletion",
          "Lower memory usage compared to arrays",
          "Faster traversal of elements"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which operation is most efficient in a singly linked list?",
        options: [
          "Accessing an element by index",
          "Inserting an element at the head",
          "Deleting an element in the middle",
          "Sorting the list"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the primary disadvantage of a singly linked list?",
        options: [
          "It cannot store multiple data types",
          "Insertion and deletion are inefficient",
          "It does not allow reverse traversal",
          "It requires contiguous memory"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "In a doubly linked list, how many pointers does each node have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What happens when you delete the head node in a singly linked list?",
        options: [
          "The tail node becomes the new head",
          "The second node becomes the new head",
          "The entire list is deleted",
          "Nothing happens"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which linked list variation supports efficient insertion and deletion from both ends?",
        options: [
          "Singly Linked List",
          "Doubly Linked List",
          "Circular Linked List",
          "Deque (Doubly Ended Queue)"
        ],
        correctAnswer: 3
      }
    ]
  },
  2: {
    title: "Single Linked List",
    description: "Learn the structure and operations of a single linked list, including insertion, deletion, and traversal techniques.",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Basics of Single Linked List",
          content: "A singly linked list is a type of linked list where each node points to the next node in the sequence...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 2,
          title: "Common Operations in Single Linked List",
          content: "Common operations include inserting nodes at the head, tail, or any position, as well as deleting nodes...",
          videoUrl: "/api/placeholder/800/450"
        }
      ]
    },
    quizzes: [
      {
        id: 1,
        question: "In a singly linked list, how is each node connected?",
        options: [
          "Each node points to the next node",
          "Each node points to the previous node",
          "Each node points to both next and previous nodes",
          "Nodes are connected in a circular manner"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is the time complexity of traversing a singly linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which operation is not possible in a singly linked list?",
        options: [
          "Reversing the list",
          "Deleting a node by value",
          "Accessing a node by index",
          "Traversing backwards"
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: "What is the time complexity of inserting a node at the end of a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "How can the tail node of a singly linked list be identified?",
        options: [
          "It points to the head node",
          "It has a null pointer",
          "It has the largest value",
          "It has no connections"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What happens when a node in the middle of a singly linked list is deleted?",
        options: [
          "The entire list is deleted",
          "The previous node points to the next node",
          "The next node points to the previous node",
          "The node values are rearranged"
        ],
        correctAnswer: 1
      }
    ]
  },
  3: {
    title: "Double Linked List",
    description: "Understand the structure and operations of a doubly linked list, where nodes are connected both forward and backward.",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Basics of Double Linked List",
          content: "A doubly linked list is a type of linked list in which each node has two pointers: one pointing to the next node and another to the previous node...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 2,
          title: "Common Operations in Double Linked List",
          content: "Operations include insertion, deletion, and traversal in both forward and backward directions...",
          videoUrl: "/api/placeholder/800/450"
        }
      ]
    },
    quizzes: [
      {
        id: 1,
        question: "How many pointers does each node in a doubly linked list contain?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which operation is easier in a doubly linked list compared to a singly linked list?",
        options: [
          "Inserting at the head",
          "Deleting a node with a known value",
          "Traversing the list",
          "Accessing a node by index"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the primary advantage of a doubly linked list over a singly linked list?",
        options: [
          "Consumes less memory",
          "Allows traversal in both directions",
          "Simpler implementation",
          "Requires fewer pointers"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What is the time complexity of deleting a node from a doubly linked list if the node pointer is given?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What happens when the head node is deleted in a doubly linked list?",
        options: [
          "The tail node becomes the new head",
          "The previous node is set to null",
          "The second node becomes the new head",
          "The entire list is deleted"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "In a doubly linked list, what is the key step when inserting a new node in the middle of the list?",
        options: [
          "Update the previous pointer of the new node",
          "Update the next pointer of the new node",
          "Update both previous and next pointers of adjacent nodes",
          "Only update the head pointer"
        ],
        correctAnswer: 2
      }
    ]
  },
  4: {
    title: "Circular Linked List",
    description: "Learn about circular linked lists, their structure, and how to perform various operations effectively.",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Basics of Circular Linked List",
          content: "A circular linked list is a linked list where the last node points back to the head, forming a loop...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 2,
          title: "Operations in Circular Linked List",
          content: "Common operations include insertion, deletion, and traversal with special handling for circular connections...",
          videoUrl: "/api/placeholder/800/450"
        }
      ]
    },
    quizzes: [
      {
        id: 1,
        question: "What is a key feature of a circular linked list?",
        options: [
          "Each node has two pointers",
          "The last node points back to the head",
          "It does not allow insertion",
          "Traversal is not possible"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the time complexity of inserting a node at the end of a circular linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "How can the end of a circular linked list be identified during traversal?",
        options: [
          "When a node points to null",
          "When the next node is the head",
          "When the previous node is the head",
          "When there are no more nodes"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which application is best suited for a circular linked list?",
        options: [
          "Binary Search Tree",
          "Memory Management",
          "Implementation of Queues",
          "Fibonacci Series"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "What happens when the head node is deleted in a circular linked list?",
        options: [
          "The entire list is deleted",
          "The second node becomes the new head, and the last node points to it",
          "The tail node becomes the new head",
          "The circular link is broken"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What is the primary advantage of a circular linked list over a singly linked list?",
        options: [
          "Simpler implementation",
          "Efficient memory usage",
          "Allows continuous traversal",
          "Requires fewer pointers"
        ],
        correctAnswer: 2
      }
    ]
  },
  5: {
    title: "Stack Implementation Using Linked List",
    description: "Learn how to implement stacks using linked lists, covering basic operations like push, pop, and peek, along with their applications.",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to Stack Data Structure",
          content: "A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Learn the basics and applications of stacks...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 2,
          title: "Stack Implementation Using Linked List",
          content: "Understand how to implement a stack using linked lists, where each node contains data and a pointer to the next node...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 3,
          title: "Operations on Stack Using Linked List",
          content: "Explore key stack operations like push (insertion), pop (deletion), and peek (viewing the top element) implemented via linked lists...",
          videoUrl: "/api/placeholder/800/450"
        }
      ]
    },
    quizzes: [
      {
        id: 1,
        question: "What principle does a stack follow?",
        options: [
          "FIFO (First In, First Out)",
          "LIFO (Last In, First Out)",
          "LILO (Last In, Last Out)",
          "FILO (First In, Last Out)"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the time complexity of the push operation in a stack implemented using a linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "How is the top of the stack represented in a stack implemented using a linked list?",
        options: [
          "By the head pointer of the linked list",
          "By the tail pointer of the linked list",
          "By the middle element of the linked list",
          "By a separate top pointer not linked to the list"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "What happens during the pop operation in a stack implemented using a linked list?",
        options: [
          "The top node is removed, and the pointer is updated to the next node",
          "The last node is removed",
          "The first node is removed",
          "The stack is reversed"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What is a primary advantage of using a linked list to implement a stack?",
        options: [
          "Simpler implementation",
          "Fixed size allocation",
          "Dynamic memory allocation with no overflow",
          "Better performance in all cases"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Which of the following is not a stack operation?",
        options: ["Push", "Pop", "Peek", "Traverse"],
        correctAnswer: 3
      }
    ]
  },
  6: {
    title: "Queue Implementation Using Linked List",
    description: "Learn how to implement queues using linked lists, focusing on operations like enqueue, dequeue, and their applications in real-world scenarios.",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to Queue Data Structure",
          content: "A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Understand its basic operations and applications...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 2,
          title: "Queue Implementation Using Linked List",
          content: "Explore the implementation of queues using linked lists, where elements are dynamically allocated and pointers manage the front and rear...",
          videoUrl: "/api/placeholder/800/450"
        },
        {
          id: 3,
          title: "Operations on Queue Using Linked List",
          content: "Learn how to perform enqueue (insertion), dequeue (deletion), and peek (viewing the front element) operations using linked lists...",
          videoUrl: "/api/placeholder/800/450"
        }
      ]
    },
    quizzes: [
      {
        id: 1,
        question: "What principle does a queue follow?",
        options: [
          "FIFO (First In, First Out)",
          "LIFO (Last In, First Out)",
          "LILO (Last In, Last Out)",
          "FILO (First In, Last Out)"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is the time complexity of the enqueue operation in a queue implemented using a linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "How is the rear of the queue represented in a queue implemented using a linked list?",
        options: [
          "By the head pointer of the linked list",
          "By the tail pointer of the linked list",
          "By the middle element of the linked list",
          "By a separate rear pointer not linked to the list"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What happens during the dequeue operation in a queue implemented using a linked list?",
        options: [
          "The front node is removed, and the pointer is updated to the next node",
          "The last node is removed",
          "The first node is removed without updating the pointer",
          "The queue is reversed"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What is a primary advantage of using a linked list to implement a queue?",
        options: [
          "Simpler implementation",
          "Fixed size allocation",
          "Dynamic memory allocation with no overflow",
          "Better performance in all cases"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Which of the following is not a queue operation?",
        options: ["Enqueue", "Dequeue", "Peek", "Traverse"],
        correctAnswer: 3
      }
    ]
  }
  };
  
  export default courseData;