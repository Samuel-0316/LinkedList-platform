const contents = {
    "Definition": 
      `
        <p><strong>Circular Linked List:</strong></p>
        <p>A **Circular Linked List** is a linear data structure consisting of nodes where each node contains:</p>
        <ul>
          <li>Data: The actual value or information.</li>
          <li>Next Pointer: A reference (or pointer) to the next node in the sequence.</li>
        </ul>
        <p>Unlike linear linked lists, the last node in a circular linked list points back to the first node, creating a circular connection.</p>
      
        <p><strong>Singly Circular Linked List:</strong></p>
        <p>A **Singly Circular Linked List** is a variant of the singly linked list where the last node points back to the first node, forming a circular structure. It contains:</p>
        <ul>
          <li>Data: Stores the actual information.</li>
          <li>Next Pointer: Points to the next node in the sequence, looping back to the head node.</li>
        </ul>
     
        <p><strong>Doubly Circular Linked List:</strong></p>
        <p>A **Doubly Circular Linked List** is a variant of the doubly linked list where both the first and last nodes point to each other, forming a circular loop:</p>
        <ul>
          <li>Data: Stores the actual information.</li>
          <li>Next Pointer: Points to the next node in the sequence.</li>
          <li>Previous Pointer: Points to the previous node in the sequence.</li>
        </ul>
      `,
    
    "Structure": 
       `
        <p><strong>Structure of Circular Linked List:</strong></p>
        <p>A circular linked list consists of nodes connected via pointers, with the last node pointing back to the head, creating a cycle:</p>
        <ul>
          <li><strong>Data:</strong> Stores the actual information or value in the node.</li>
          <li><strong>Next:</strong> Points to the next node in the sequence, looping back to the head node.</li>
        </ul>
      
        <p><strong>Structure of Singly Circular Linked List:</strong></p>
        <p>In a singly circular linked list:</p>
        <ul>
          <li>Each node has:</li>
          <ul>
            <li><strong>Data:</strong> Stores the node’s value.</li>
            <li><strong>Next:</strong> Points to the next node in the sequence, looping back to the head.</li>
          </ul>
        </ul>
      
        <p><strong>Structure of Doubly Circular Linked List:</strong></p>
        <p>In a doubly circular linked list:</p>
        <ul>
          <li>Each node consists of:</li>
          <ul>
            <li><strong>Data:</strong> Stores the node's value.</li>
            <li><strong>Next:</strong> Points to the next node.</li>
            <li><strong>Previous:</strong> Points to the previous node.</li>
          </ul>
        </ul>
        <p><strong>Representation of Circular Linked List:</strong></p>
        <p>Consider a Circular Linked List with 3 nodes:</p>
        <pre>
        +------+    +------+    +------+
        | Data | →  | Data | →  | Data |  
        +------+    +------+    +------+
          ↑                              ↓
          |                              |
          +------------------------------+
        </pre>

        <p><strong>Representation of Singly Circular Linked List:</strong></p>
        <p>Example with 4 nodes:</p>
        <pre>
        +------+    +------+    +------+    +------+
        | Data | →  | Data | →  | Data | →  | Data |  
        +------+    +------+    +------+    +------+
          ↑                                        ↓
          |                                        |
          +----------------------------------------+
        </pre>

        <p><strong>Representation of Doubly Circular Linked List:</strong></p>
        <p>Example with 5 nodes:</p>
        <pre>
        +------+      +------+      +------+      +------+      +------+
        | Data | <--> | Data | <--> | Data | <--> | Data | <--> | Data |  
        +------+      +------+      +------+      +------+      +------+
          ↑                                                ↓
          |                                                |
          +------------------------------------------------+
        </pre>
      `,
    
    "Operations": 
      `
        <p><strong>Operations in Circular Linked List:</strong></p>
        <ul>
          <li><strong>Insertion:</strong> Adding a node at the beginning, end, or a specific position, ensuring that the list remains circular.</li>
          <li><strong>Deletion:</strong> Removing nodes from any position (beginning, end, or middle).</li>
          <li><strong>Traversal:</strong> Navigating in a circular manner, starting from the head, looping back to the first node.</li>
          <li><strong>Search:</strong> Finding elements by traversing through the circular nodes.</li>
        </ul>
      
      
        <p><strong>Operations in Singly Circular Linked List:</strong></p>
        <ul>
          <li><strong>Insertion:</strong> Adding a node at the beginning, end, or a specific position. The last node points back to the head.</li>
          <li><strong>Deletion:</strong> Removing nodes from the beginning, end, or a specified position.</li>
          <li><strong>Traversal:</strong> Navigating from the head, looping back to the head after reaching the last node.</li>
          <li><strong>Search:</strong> Searching for elements by traversing the circular list.</li>
        </ul>
     
        <p><strong>Operations in Doubly Circular Linked List:</strong></p>
        <ul>
          <li><strong>Insertion:</strong> Adding a node at the beginning, end, or at any position while maintaining the circular connection.</li>
          <li><strong>Deletion:</strong> Removing nodes from the beginning, end, or any specified position, while handling both 'Next' and 'Previous' pointers.</li>
          <li><strong>Traversal:</strong> Navigating forward and backward in a circular manner.</li>
          <li><strong>Search:</strong> Searching for nodes using both 'Next' and 'Previous' pointers in a circular manner.</li>
        </ul>
      `,

      "TimeComplexity": `
      <p><strong>Time Complexity of Circular Linked List Operations:</strong></p>
      
      <p><strong>Singly Circular Linked List:</strong></p>
      <ul>
        <li><strong>Insertion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code> (Update the head and adjust the last node's next pointer)</li>
            <li>At the end: <code>O(n)</code> (Traversal required to find the last node unless a tail pointer is maintained)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Deletion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code> (Update the head and adjust the last node's next pointer)</li>
            <li>At the end: <code>O(n)</code> (Traversal required to find the second-to-last node)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Traversal:</strong> <code>O(n)</code> (All nodes must be visited)</li>
        <li><strong>Search:</strong> <code>O(n)</code> (All nodes might need to be checked)</li>
      </ul>
      
      <p><strong>Doubly Circular Linked List:</strong></p>
      <ul>
        <li><strong>Insertion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code> (Update head, tail, and adjust next/prev pointers)</li>
            <li>At the end: <code>O(1)</code> (If tail pointer is maintained, update tail and next/prev pointers directly)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Deletion:</strong> 
          <ul>
            <li>At the beginning: <code>O(1)</code> (Update head, tail, and adjust next/prev pointers)</li>
            <li>At the end: <code>O(1)</code> (If tail pointer is maintained, update tail and next/prev pointers directly)</li>
            <li>At a specific position: <code>O(n)</code> (Traversal required to locate the position)</li>
          </ul>
        </li>
        <li><strong>Traversal:</strong> <code>O(n)</code> (All nodes must be visited)</li>
        <li><strong>Search:</strong> <code>O(n)</code> (All nodes might need to be checked)</li>
      </ul>
    `,

    
    "Advantages":
      `
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Efficient Space Utilization: Circular linked lists do not require a NULL pointer at the end, making them more space-efficient.</li>
          <li>Endless Traversal: Can be traversed endlessly in a loop without having to worry about stopping at a null pointer.</li>
          <li>Flexibility: Supports bi-directional traversal in the case of doubly circular linked lists.</li>
        </ul>
      
        <p><strong>Advantages of single circular linked list:</strong></p>
        <ul>
          <li>Efficient Space Usage: Eliminates the use of NULL pointers at the end, optimizing memory usage.</li>
          <li>Simple Implementation: Easier to implement compared to doubly circular linked lists as it only requires one pointer.</li>
        </ul>
      
        <p><strong>Advantages of double circular linked list:</strong></p>
        <ul>
          <li>Bi-directional Traversal: Allows traversing both forward and backward through nodes.</li>
          <li>Efficient Insertions/Deletions: Easier handling of both ends of the list due to the use of both 'Next' and 'Previous' pointers.</li>
        </ul>
      `,
    
    "Disadvantages": 
       `
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Complex Implementation: Managing circular connections adds complexity to the implementation, especially in insertion and deletion operations.</li>
          <li>Memory Overhead: Extra memory usage is needed to store both 'Next' and possibly 'Previous' pointers in doubly circular linked lists.</li>
        </ul>
      
        <p><strong>Disadvantages of single circular linked list:</strong></p>
        <ul>
          <li>No Backward Traversal: Limited to forward traversal as it only uses a single pointer to form the circular connection.</li>
        </ul>
      
        <p><strong>Disadvantages of double circular linked list:</strong></p>
        <ul>
          <li>Increased Memory Usage: Requires two pointers per node for both 'Next' and 'Previous' references, leading to more memory usage.</li>
          <li>Complex Code: Managing both pointers makes the implementation and traversal operations more complex.</li>
        </ul>
      `,
    
    "Applications": 
     `
        <p><strong>Applications:</strong></p>
        <ul>
          <li>Real-time Systems: Efficiently handles continuous data streaming where loops are necessary.</li>
          <li>Network Routing: Used in network protocols where cyclic navigation is needed.</li>
          <li>Buffers: Circular lists are employed in scenarios where fixed-size data needs to be reused.</li>
        </ul>
      
        <p><strong>Applications of single circular linked list:</strong></p>
        <ul>
          <li>Scheduling Algorithms: Often used in Round Robin scheduling where processes are executed in a cyclic manner.</li>
          <li>Music Players: Implemented in applications to provide continuous playback by looping through the playlist.</li>
        </ul>
     
        <p><strong>Applications of double circular linked list:</strong></p>
        <ul>
          <li>Undo/Redo Systems: Used in applications requiring navigation through history with bidirectional traversals.</li>
          <li>Simulations: Employed in simulations requiring continuous processing and looping back.</li>
        </ul>
      `
  }

  export default contents
