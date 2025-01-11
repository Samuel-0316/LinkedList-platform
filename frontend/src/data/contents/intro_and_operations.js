const contents = {
    "Linked_list_ds": `
      <p><strong>Linked List Data Structure:</strong></p>
      <p>A Linked List is a linear data structure where elements are stored in nodes, and each node contains:</p>
      <ul>
        <li>Data: The actual value or information.</li>
        <li>Next Pointer: A reference (or pointer) to the next node in the sequence.</li>
      </ul>
      <p>Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node is dynamically linked using pointers, allowing for efficient memory usage and dynamic resizing as nodes are created or removed.</p>
      <p><strong>Types of Linked Lists:</strong></p>
      <ul>
        <li><strong>Singly Linked List:</strong> Each node points only to the next node, forming a linear chain. It allows traversal in one direction from the head to the tail.</li>
        <li><strong>Doubly Linked List:</strong> Each node points to both the previous and next nodes, allowing bidirectional traversal (both forward and backward).</li>
        <li><strong>Circular Linked List:</strong> The last node points back to the first node, forming a circular chain. Useful for scenarios like round-robin scheduling and managing a repeating sequence.</li>
      </ul>
    `,
    
    "Terminologies": `
      <p><strong>Basic Terminologies of Linked List:</strong></p>
      <ul>
        <li><strong>Node:</strong> The fundamental unit of a linked list that contains both data and a reference (or pointer) to the next node.</li>
        <li><strong>Head:</strong> The starting node of the linked list, which points to the first element in the sequence.</li>
        <li><strong>Tail:</strong> The last node in a linked list, which has a null reference, indicating the end of the list.</li>
        <li><strong>Next Pointer:</strong> A pointer that points from one node to the next, facilitating traversal through the list.</li>
        <li><strong>Null:</strong> A special value used to signify the end of the linked list (i.e., the absence of the next node).</li>
      </ul>
    `,
    
    "ApplicationsAdvantagesDisadvantages": `
      <p><strong>Applications, Advantages, and Disadvantages of Linked List:</strong></p>
      <ul>
        <li><strong>Applications:</strong> Linked lists are used extensively in real-world applications such as memory management, undo mechanisms in text editors, managing dynamic data sets, and in scenarios where sequential access is required.</li>
        <li><strong>Advantages:</strong> 
          <ul>
            <li>Dynamic size: Unlike arrays, linked lists can easily grow or shrink in size, making them more flexible in handling a variable number of elements.</li>
            <li>Efficient insertion/deletion: Operations on linked lists are faster as there is no need to shift elements to maintain order, unlike arrays where shifting occurs during insertions or deletions.</li>
            <li>Memory Efficiency: Linked lists use dynamic memory allocation, minimizing unused memory usage and optimizing space for large datasets.</li>
          </ul>
        </li>
        <li><strong>Disadvantages:</strong>
          <ul>
            <li>Memory Overhead: Each node requires extra memory for the pointer/reference, which might lead to inefficient memory usage compared to arrays.</li>
            <li>Traversal Complexity: Accessing elements in linked lists is slower as traversal from the head is required, unlike arrays where elements can be accessed directly using indices.</li>
            <li>Not Suitable for Random Access: Unlike arrays, linked lists do not provide random access to elements, making certain operations slower.</li>
          </ul>
        </li>
      </ul>
    `,
    
    "LinkedListVsArray": `
      <p><strong>Linked List vs Array:</strong></p>
      <ul>
        <li><strong>Memory Storage:</strong> Arrays store elements in contiguous memory locations while linked lists store elements in nodes linked dynamically through pointers.</li>
        <li><strong>Access Time:</strong> Arrays provide fast, constant-time access using indices, whereas linked lists require traversal from the head, making access slower.</li>
        <li><strong>Insertion/Deletion:</strong> Linked lists excel in operations like insertion and deletion because no shifting is required. Arrays need shifting of elements to maintain order, making these operations more time-consuming.</li>
      </ul>
    `,
  
    "TypesOfLinkedList": `
      <p><strong>Types of Linked List:</strong></p>
      <ul>
        <li><strong>Singly Linked List:</strong> Each node points only to the next node, forming a linear chain. It allows traversal in one direction from the head to the tail.</li>
        <li><strong>Doubly Linked List:</strong> Each node points to both the previous and next nodes, allowing bidirectional traversal (both forward and backward).</li>
        <li><strong>Circular Linked List:</strong> The last node points back to the first node, forming a circular chain. Useful for scenarios like round-robin scheduling and managing a repeating sequence.</li>
      </ul>
      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Singly Linked List Example:</strong> 
          <code>Head -> [1] -> [2] -> [3] -> [4] -> NULL</code>
        </li>
        <li><strong>Doubly Linked List Example:</strong> 
          <code>NULL <- [1] <-> [2] <-> [3] <-> [4] -> NULL</code>
        </li>
        <li><strong>Circular Linked List Example:</strong> 
          <code>[1] -> [2] -> [3] -> [4] -> [1]</code> (Circular connection at the end)
        </li>
      </ul>
`,
      "Time_Complexity": `
      <p><strong>Time Complexity of Linked List Operations:</strong></p>
      <ul>
        <li><strong>Insertions:</strong> O(1) for both Singly and Doubly Linked Lists.</li>
        <li><strong>Deletions:</strong> O(1) for both Singly and Doubly Linked Lists.</li>
        <li><strong>Search (Traversal):</strong> O(n), as the entire list must be traversed to find an element.</li>
        <li><strong>Space Complexity:</strong> O(n), where n is the number of elements in the list.</li>
      </ul>
    `
    
  };
  
  export default contents;
  