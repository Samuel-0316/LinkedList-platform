const contents = {
    "Definition": `
      <p><strong>Singly Linked List:</strong></p>
      <p>A **Singly Linked List** is a linear data structure consisting of nodes where each node contains:</p>
      <ul>
        <li>Data: The actual value or information.</li>
        <li>Next Pointer: A reference (or pointer) to the next node in the sequence.</li>
      </ul>
      <p>Each node points only to the next node, forming a linear chain, allowing traversal in one direction from the head to the tail.</p>
    `,
    
    "Structure": `
      <p><strong>Structure of Singly Linked List:</strong></p>
      <p>A singly linked list consists of nodes connected via pointers. Each node has:</p>
      <ul>
        <li><strong>Data:</strong> The information or value stored in the node.</li>
        <li><strong>Next:</strong> A pointer/reference to the next node in the sequence.</li>
      </ul>
      <p>The last node in the list has its 'Next' pointer set to 'null', indicating the end of the list.</p>
    `,
    
    "Operations": `
      <p><strong>Operations in Singly Linked List:</strong></p>
      <ul>
        <li><strong>Insertion:</strong> Adding a node at the beginning, end, or a specific position. 
          <ul>
            <li>Example: 
              <code>insertAtBeginning(1) -> Head -> [1] -> NULL</code></li>
            <li>Inserting at the end:
              <code>insertAtEnd(5) -> Head -> [1] -> [2] -> [3] -> [4] -> [5] -> NULL</code></li>
          </ul>
        </li>
        <li><strong>Deletion:</strong> Removing nodes from any position (beginning, end, or middle).
          <ul>
            <li>Example: 
              <code>deleteAtPosition(2) -> Head -> [1] -> [3] -> [4] -> NULL</code></li>
          </ul>
        </li>
        <li><strong>Traversal:</strong> Navigating from the head to the tail to access all elements.
          <ul>
            <li>Example: 
              <code>traverse() -> 1 -> 2 -> 3 -> 4 -> NULL</code></li>
          </ul>
        </li>
        <li><strong>Search:</strong> Finding elements by traversing the list.
          <ul>
            <li>Example: 
              <code>search(3) -> Node containing 3</code></li>
          </ul>
        </li>
      </ul>
    `,
    
    "TimeComplexity": `
      <p><strong>Time Complexity of Singly Linked List Operations:</strong></p>
      <ul>
        <li><strong>Insertion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code></li>
            <li>At the end: <code>O(n)</code> (Traversal required to find the last node)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Deletion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code></li>
            <li>At the end: <code>O(n)</code> (Traversal required to find the second-to-last node)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Traversal:</strong> <code>O(n)</code> (All nodes must be visited)</li>
        <li><strong>Search:</strong> <code>O(n)</code> (All nodes might need to be checked)</li>
      </ul>
    `,
    
    "Advantages": `
      <p><strong>Advantages:</strong></p>
      <ul>
        <li><strong>Dynamic size:</strong> Unlike arrays, linked lists can easily grow or shrink in size, making them more flexible in handling a variable number of elements.</li>
        <li><strong>Efficient insertion/deletion:</strong> Operations on linked lists are faster as there is no need to shift elements to maintain order, unlike arrays where shifting occurs during insertions or deletions.</li>
        <li><strong>Memory Efficiency:</strong> Linked lists use dynamic memory allocation, minimizing unused memory usage and optimizing space for large datasets.</li>
      </ul>
    `,
    
    "Disadvantages": `
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li><strong>Memory Overhead:</strong> Each node requires extra memory for the pointer/reference, which might lead to inefficient memory usage compared to arrays.</li>
        <li><strong>Traversal Complexity:</strong> Accessing elements in linked lists is slower as traversal from the head is required, unlike arrays where elements can be accessed directly using indices.</li>
        <li><strong>Not Suitable for Random Access:</strong> Unlike arrays, linked lists do not provide random access to elements, making certain operations slower.</li>
      </ul>
    `,
    
    "Applications": `
      <p><strong>Applications:</strong></p>
      <ul>
        <li><strong>Dynamic Memory Management:</strong> Manages memory efficiently, especially for dynamic data.</li>
        <li><strong>Undo Mechanisms:</strong> Used in text editors for handling undo functionality. For instance, a text editor can use a linked list to maintain a history of text edits, allowing the user to undo previous changes.</li>
        <li><strong>Stacks and Queues:</strong> Commonly used in implementing stacks and queues for data processing. Example:
          <ul>
            <li>Stack: LIFO (Last In, First Out) structure where operations are performed at the top of the stack.</li>
            <li>Queue: FIFO (First In, First Out) structure where elements are added at the rear and removed from the front.</li>
          </ul>
        </li>
        <li><strong>Real-time Systems:</strong> Employed in real-time applications requiring continuous monitoring and sequential data management, such as sensor data collection in IoT systems.</li>
      </ul>
    `
  }

  export default contents;
  