// frontend/src/data/courseData.js
import contents from './contents/intro_and_operations'
import contents2 from './contents/single_linked_list'
import contents3 from './contents/double_linked_list'
import contents4 from './contents/circular_linked_list'
import contents5 from './contents/stack_implementation'
import contents6 from './contents/queue_implementation'

const courseData = {
  1: {
    title: "Introduction and Operations of Linked List",
    description: "Explore the fundamentals of linked lists, their types, and common operations like insertion, deletion, and traversal.",
    videoUrl:"https://www.youtube.com/embed/dmb1i4oN5oE?si=x0kDhml3koBbPFDn",
    gameUrl:"/games/Intro_to_linkedlist.html",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Linked List Data Structure",
          content: contents.Linked_list_ds,
        },
        {
          id: 2,
          title: "Basic Terminologies of Linked List",
          content: contents.Terminologies,
        },
        {
          id: 3,
          title: "Applications, Advantages and Disadvantages",
          content: contents.ApplicationsAdvantagesDisadvantages,
        },
        {
          id: 4,
          title: "Linked List vs Array",
          content: contents.LinkedListVsArray,
        },
        {
          id: 5,
          title: "Types of Linked List",
          content: contents.TypesOfLinkedList,
        },
        {
          id: 6,
          title: "Time Complexity",
          content: contents.Time_Complexity,
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
    videoUrl:"https://www.youtube.com/embed/6wXZ_m3SbEs?si=oksOb0EbJfObsulU",
    gameUrl:"/games/single_linkedlist.html",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to Single Linked List",
          content: contents2.Definition
        },
        {
          id: 2,
          title: "Structure of Single Linked List",
          content:contents2.Structure
        },
        {
          id: 3,
          title: "Common Operations in Single Linked List",
          content:contents2.Operations
        },
        {
          id: 4,
          title: "Time Complexity",
          content:contents2.TimeComplexity
        },
        {
          id: 5,
          title: "Advantages of Single Linked List",
          content:contents2.Advantages
        },
        {
          id: 6,
          title: "Disadvantages of Single Linked List",
          content:contents2.Disadvantages
        },
        {
          id: 7,
          title: "Applications Single Linked List",
          content:contents2.Applications
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
    videoUrl:"https://www.youtube.com/embed/0eKMU10uEDI?si=A3q0-1meBSmZj9V3",
    gameUrl:"/games/double_linked_list.html",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to Double Linked List",
          content: contents3.Definition
        },
        {
          id: 2,
          title: "Structure of Double Linked List",
          content:contents3.Structure
        },
        {
          id: 3,
          title: "Common Operations in Double Linked List",
          content:contents3.Operations
        },
        {
          id: 4,
          title: "Time Complexity",
          content:contents3.TimeComplexity
        },
        {
          id: 5,
          title: "Advantages of Double Linked List",
          content:contents3.Advantages
        },
        {
          id: 6,
          title: "Disadvantages of Double Linked List",
          content:contents3.Disadvantages
        },
        {
          id: 7,
          title: "Applications Double Linked List",
          content:contents3.Applications
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
    videoUrl:"https://www.youtube.com/embed/6wXZ_m3SbEs?si=myRvJyqV3_FauW6J",
    gameUrl:"/games/circularLinkedList.html",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to Circular Linked List",
          content: contents4.Definition
        },
        {
          id: 2,
          title: "Structure of Circular Linked List",
          content:contents4.Structure
        },
        {
          id: 3,
          title: "Common Operations in Circular Linked List",
          content:contents4.Operations
        },
        {
          id: 4,
          title: "Time Complexity",
          content:contents4.TimeComplexity
        },
        {
          id: 5,
          title: "Advantages of Circular Linked List",
          content:contents4.Advantages
        },
        {
          id: 6,
          title: "Disadvantages of Circular Linked List",
          content:contents4.Disadvantages
        },
        {
          id: 7,
          title: "Applications Circular Linked List",
          content:contents4.Applications
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
    videoUrl:"https://www.youtube.com/embed/6wXZ_m3SbEs?si=myRvJyqV3_FauW6J",
    gameUrl:"/games/Stack_implementaion_LL.html",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to stack",
          content: contents5.Introduction
        },
        {
          id: 2,
          title: "Structure of Stack using linked list",
          content:contents5.Structure
        },
        {
          id: 3,
          title: "Common Operations in Stack",
          content:contents5.Operations
        },
        {
          id: 4,
          title: "Visualization of stack",
          content: contents5.visualization
        },
        {
          id: 5,
          title: "Examples",
          content: contents5.Examples
        },
        {
          id: 6,
          title: "Time Complexity",
          content:contents5.TimeComplexity
        },
        {
          id: 7,
          title: "Advantages of Stack",
          content:contents5.Advantages
        },
        {
          id: 8,
          title: "Disadvantages of Stack",
          content:contents5.Disadvantages
        },
        {
          id: 9,
          title: "Applications Stack",
          content:contents5.Applications
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
    videoUrl:"https://www.youtube.com/embed/0HyIda5eub8?si=HqyenpnTrMeXBbOt",
    gameUrl:"/games/queue_link-1.html",
    tutorials: {
      sections: [
        {
          id: 1,
          title: "Introduction to Queue",
          content: contents6.Introduction
        },
        {
          id: 2,
          title: "Structure of Queue using linked list",
          content:contents6.Structure
        },
        {
          id: 3,
          title: "Common Operations in Queue",
          content:contents6.Operations
        },
        {
          id: 4,
          title: "Time Complexity",
          content: contents6.Time_Complexity
        },
        {
          id: 5,
          title: "Visualization of Queue",
          content: contents6.Visualization
        },
        {
          id: 6,
          title: "Advantages of Queue",
          content:contents6.Advantages
        },
        {
          id: 7,
          title: "Disadvantages of Queue",
          content:contents6.Disadvantages
        },
        {
          id: 8,
          title: "Applications Queue",
          content:contents6.Applications
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