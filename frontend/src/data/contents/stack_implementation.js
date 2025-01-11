const contents = {
    "Introduction": 
      `
        <p><strong>Stack Implementation Using Linked List:</strong></p>
        <p>A **Stack** is a linear data structure that follows the Last In, First Out (LIFO) principle. In a stack implemented using a linked list:</p>
        <ul>
          <li>Nodes represent elements in the stack.</li>
          <li>The top node contains the most recently added element.</li>
          <li>Operations include push (adding an element), pop (removing the top element), and peek (viewing the top element).</li>
        </ul>
      `,
    
    "visualization": 
      `
        <p><strong>Detailed Examples and Visualizations:</strong></p>
        <p>Let's consider a simple example of how a stack is implemented using a linked list:</p>
        <p>Suppose we have a stack with integers.</p>

        <h4>Example: Push and Pop Operations</h4>
        <pre>
        // Define Node class
        class Node {
          constructor(data) {
            this.data = data;
            this.next = null;
          }
        }

        // Define Stack class
        class Stack {
          constructor() {
            this.top = null;
          }

          // Push operation
          push(data) {
            let newNode = new Node(data);
            newNode.next = this.top;
            this.top = newNode;
          }

          // Pop operation
          pop() {
            if (this.isEmpty()) {
              console.log("Stack Underflow");
              return;
            }
            this.top = this.top.next;
          }

          // Peek operation
          peek() {
            if (this.isEmpty()) {
              console.log("Stack is Empty");
              return;
            }
            console.log("Top element is: " + this.top.data);
          }

          // Check if stack is empty
          isEmpty() {
            return this.top === null;
          }
        }

        // Visualization
        // Initial Stack: []
        // After push(10): [10]
        // After push(20): [20, 10]
        // After pop(): [10]
        </pre>
      `,

    "Examples": 
      `
        <p><strong>Examples:</strong></p>
        <p>Consider evaluating an expression using a stack:</p>
        <p>Expression: <code>3 + 5 * (2 - 8)</code></p>
        <p>Using a stack:</p>
        <p>- Push numbers and operators onto the stack.</p>
        <p>- Resolve multiplication and division before addition and subtraction, handling parenthesis.</p>
        <p>Visualization:</p>
        <ul>
          <li><strong>Step 1:</strong> Push '3' and '5'.</li>
          <li><strong>Step 2:</strong> Push '2' and '8' for the sub-expression '2 - 8', then perform subtraction.</li>
          <li><strong>Step 3:</strong> Multiply '5 * -6' and push the result.</li>
          <li><strong>Step 4:</strong> Finally, add '3 + result' from Step 3.</li>
        </ul>
      `,

    "Structure": 
       `
        <p><strong>Structure of Stack Using Linked List:</strong></p>
        <p>A stack implemented using a linked list has the following components:</p>
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
        <p><strong>Operations in Stack Using Linked List:</strong></p>
        <ul>
          <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
          <li><strong>Pop:</strong> Removes the top element from the stack.</li>
          <li><strong>Peek:</strong> Returns the top element without removing it.</li>
          <li><strong>IsEmpty:</strong> Checks if the stack is empty.</li>
        </ul>
      `,
      "TimeComplexity": `
      <p><strong>Time Complexity:</strong></p>
      <ul>
        <li><strong>Push Operation:</strong> <code>O(1)</code> 
            (Inserting a node at the top of the stack is a constant-time operation as it involves pointer manipulation.)</li>
        <li><strong>Pop Operation:</strong> <code>O(1)</code> 
            (Removing the top node only requires updating the top pointer, which is a constant-time operation.)</li>
        <li><strong>Peek Operation:</strong> <code>O(1)</code> 
            (Accessing the top element is direct and requires no traversal.)</li>
        <li><strong>IsEmpty Operation:</strong> <code>O(1)</code> 
            (Checking if the stack is empty is a simple comparison of the top pointer to <code>null</code>.)</li>
      </ul>
    `,
    
    "Advantages":
      `
        <p><strong>Advantages of Stack Implementation Using Linked List:</strong></p>
        <ul>
          <li>Dynamically Allocated Memory: Memory is allocated dynamically as per the need.</li>
          <li>Efficient Operations: Push and pop operations are efficient as they do not require array shifting.</li>
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
          <li>Expression Evaluation: Used in evaluating arithmetic expressions and syntax parsing.</li>
          <li>Function Calls: Helps in managing function calls with a stack frame for local variables.</li>
          <li>Backtracking: Supports algorithms like depth-first search (DFS) and undo functionality.</li>
        </ul>
      `,

    "Time Complexity": 
      `
        <p><strong>Time Complexity:</strong></p>
        <ul>
          <li><strong>Push Operation:</strong> O(1)</li>
          <li><strong>Pop Operation:</strong> O(1)</li>
          <li><strong>Peek Operation:</strong> O(1)</li>
          <li><strong>IsEmpty Operation:</strong> O(1)</li>
        </ul>
      `
  }

export default contents;
