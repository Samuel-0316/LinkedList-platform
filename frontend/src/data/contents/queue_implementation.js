const contents = {
    "Introduction": 
      `
        <p><strong>Queue Implementation Using Linked List:</strong></p>
        <p>A **Queue** is a linear data structure that follows the First In, First Out (FIFO) principle. In a queue implemented using a linked list:</p>
        <ul>
          <li>Nodes represent elements in the queue.</li>
          <li>The front node contains the least recently added element, and the rear node contains the most recently added element.</li>
          <li>Operations include enqueue (adding an element), dequeue (removing the front element), and peek (viewing the front element).</li>
        </ul>
      `,
    
    "Visualization": 
      `
        <p><strong>Detailed Examples and Visualizations:</strong></p>
        <p>Let's consider a simple example of how a queue is implemented using a linked list:</p>
        <p>Suppose we have a queue with integers.</p>

        <h4>Example: Enqueue and Dequeue Operations</h4>
        <pre>
        // Define Node class
        class Node {
          constructor(data) {
            this.data = data;
            this.next = null;
          }
        }

        // Define Queue class
        class Queue {
          constructor() {
            this.front = null;
            this.rear = null;
          }

          // Enqueue operation
          enqueue(data) {
            let newNode = new Node(data);
            if (this.rear) {
              this.rear.next = newNode;
            }
            this.rear = newNode;
            if (!this.front) {
              this.front = newNode;
            }
          }

          // Dequeue operation
          dequeue() {
            if (this.isEmpty()) {
              console.log("Queue Underflow");
              return;
            }
            this.front = this.front.next;
            if (!this.front) {
              this.rear = null;
            }
          }

          // Peek operation
          peek() {
            if (this.isEmpty()) {
              console.log("Queue is Empty");
              return;
            }
            console.log("Front element is: " + this.front.data);
          }

          // Check if queue is empty
          isEmpty() {
            return this.front === null;
          }
        }

        // Visualization
        // Initial Queue: []
        // After enqueue(10): [10]
        // After enqueue(20): [10, 20]
        // After dequeue(): [20]
        </pre>
      `,

    "Structure": 
       `
        <p><strong>Structure of Queue Using Linked List:</strong></p>
        <p>A queue implemented using a linked list has the following components:</p>
        <ul>
          <li><strong>Node:</strong> Each node contains:</li>
          <ul>
            <li><strong>Data:</strong> Stores the element's value.</li>
            <li><strong>Next:</strong> Points to the next node (or NULL if it's the last node).</li>
          </ul>
        </ul>
      `,
    
    "Operations": 
      `
        <p><strong>Operations in Queue Using Linked List:</strong></p>
        <ul>
          <li><strong>Enqueue:</strong> Adds an element to the rear of the queue.</li>
          <li><strong>Dequeue:</strong> Removes the front element from the queue.</li>
          <li><strong>Peek:</strong> Returns the front element without removing it.</li>
          <li><strong>IsEmpty:</strong> Checks if the queue is empty.</li>
        </ul>
      `,
    
    "Advantages":
      `
        <p><strong>Advantages of Queue Implementation Using Linked List:</strong></p>
        <ul>
          <li>Dynamically Allocated Memory: Memory is allocated dynamically as per the need.</li>
          <li>Efficient Operations: Enqueue and dequeue operations are efficient with no shifting required.</li>
        </ul>
      `,
    
    "Disadvantages": 
       `
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Extra Memory Usage: Due to additional pointers for the 'Next' reference in each node.</li>
          <li>Complex Implementation: Managing pointers requires careful handling of memory allocation and deallocation.</li>
        </ul>
      `,

    "Applications": 
     `
        <p><strong>Applications:</strong></p>
        <ul>
          <li>Scheduling: Used in task scheduling and fair resource allocation.</li>
          <li>Print Queues: Manages print jobs in printers.</li>
          <li>Browser History: Manages a browsing history using a queue mechanism.</li>
        </ul>
      `,

    "Time_Complexity": 
      `
        <p><strong>Time Complexity:</strong></p>
        <ul>
          <li><strong>Enqueue Operation:</strong> O(1)</li>
          <li><strong>Dequeue Operation:</strong> O(1)</li>
          <li><strong>Peek Operation:</strong> O(1)</li>
          <li><strong>IsEmpty Operation:</strong> O(1)</li>
        </ul>
      `
  }

export default contents;
