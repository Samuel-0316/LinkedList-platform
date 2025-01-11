const contents = {
    "Definition": `
      <p><strong>Double Linked List:</strong></p>
      <p>A **Double Linked List** is a linear data structure consisting of nodes where each node contains:</p>
      <ul>
        <li>Data: The actual value or information.</li>
        <li>Next Pointer: A reference (or pointer) to the next node in the sequence.</li>
        <li>Previous Pointer: A reference (or pointer) to the previous node in the sequence.</li>
      </ul>
      <p>Each node points both to its next and previous nodes, forming a bi-directional chain, allowing traversal in both directions from the head and tail.</p>
    `,
    
    "Structure": `
      <p><strong>Structure of Double Linked List:</strong></p>
      <p>A double linked list consists of nodes connected via two pointers: <strong>Next</strong> and <strong>Previous</strong>. Each node has:</p>
      <ul>
        <li><strong>Data:</strong> The information or value stored in the node.</li>
        <li><strong>Next:</strong> A pointer/reference to the next node in the sequence.</li>
        <li><strong>Previous:</strong> A pointer/reference to the previous node in the sequence.</li>
      </ul>
      <p>The first node (head) has its 'Previous' pointer set to 'null', and the last node (tail) has its 'Next' pointer set to 'null', indicating the end of the list.</p>
    `,
    
    "Operations": `
      <p><strong>Operations in Double Linked List:</strong></p>
      <ul>
        <li><strong>Insertion:</strong> Adding a node at the beginning, end, or a specific position. 
          <ul>
            <li>Example: 
              <code>insertAtBeginning(1) -> Head -> [1] <-> NULL</code></li>
            <li>Inserting at the end:
              <code>insertAtEnd(5) -> Head -> [1] <-> [2] <-> [3] <-> [4] <-> [5] <-> NULL</code></li>
          </ul>
        </li>
        <li><strong>Deletion:</strong> Removing nodes from any position (beginning, end, or middle).
          <ul>
            <li>Example: 
              <code>deleteAtPosition(2) -> Head -> [1] <-> [3] <-> [4] <-> NULL</code></li>
          </ul>
        </li>
        <li><strong>Traversal:</strong> Navigating from the head to the tail and vice versa to access all elements.
          <ul>
            <li>Example (forward): 
              <code>traverseForward() -> 1 <-> 2 <-> 3 <-> 4 <-> NULL</code></li>
            <li>Example (backward): 
              <code>traverseBackward() -> 4 <-> 3 <-> 2 <-> 1 <-> NULL</code></li>
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
      <p><strong>Time Complexity of Doubly Linked List Operations:</strong></p>
      <ul>
        <li><strong>Insertion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code></li>
            <li>At the end: <code>O(1)</code> (If tail pointer is maintained, insertion at the end is constant time)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Deletion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code></li>
            <li>At the end: <code>O(1)</code> (If tail pointer is maintained)</li>
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
        <li><strong>Bi-directional Traversal:</strong> Unlike a singly linked list, a double linked list allows traversal in both directions (forward and backward), providing more flexibility.</li>
        <li><strong>Efficient Insertions/Deletions:</strong> Insertions and deletions can be performed at both ends and anywhere in between efficiently.</li>
        <li><strong>More Space Utilization:</strong> Double linked lists can navigate backwards efficiently, which can be useful in certain applications like undo functionality or history tracking.</li>
      </ul>
    `,
    
    "Disadvantages": `
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li><strong>Increased Memory Usage:</strong> Double linked lists require extra memory for the additional pointer (Previous), making them less memory efficient compared to singly linked lists.</li>
        <li><strong>Complex Implementation:</strong> Implementing double linked lists involves managing two pointers per node (Next and Previous), which can complicate the code.</li>
        <li><strong>More Complexity in Traversals:</strong> Although traversal is possible in both directions, maintaining two pointers increases the complexity of handling edge cases.</li>
      </ul>
    `,
    
    "Applications": `
      <p><strong>Applications:</strong></p>
      <ul>
        <li><strong>Undo Mechanisms:</strong> Used in text editors or systems where users require the ability to undo or redo actions, maintaining a history list.</li>
        <li><strong>Double-ended Queues (Deque):</strong> Double linked lists are used in implementing deques where elements are inserted and removed from both ends.</li>
        <li><strong>History Tracking:</strong> Utilized in web browsers or systems maintaining history logs, where both backward and forward navigation is required.</li>
        <li><strong>Memory Management:</strong> Used for managing memory in applications requiring bi-directional traversal of memory addresses.</li>
      </ul>
    `
  }

  export default contents;
  