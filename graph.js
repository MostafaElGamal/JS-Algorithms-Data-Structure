console.clear();

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) {
      this.adjacencyList[vertexName] = [];
    }
  }
  // V = Vertex
  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertexName) {
    while (this.adjacencyList[vertexName].length) {
      const adjacentVertex = this.adjacencyList[vertexName].pop();
      this.removeEdge(vertexName, adjacentVertex);
    }
    delete this.adjacencyList[vertexName];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    console.log(result);
    return result;
  }

  depthFirstIterative(start) {
    let stack = [];
    let results = [];
    let visited = {};
    stack.push(start);
    visited[start] = true;
    while (stack.length >= 1) {
      var currentStack = stack.pop();
      results.push(currentStack);
      this.adjacencyList[currentStack].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log(results);
    return results;
  }
  breadthFirst(start) {
    let queue, results, visited, currentVertex;
    queue = [start];
    results = [];
    visited = {};
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(results);
    return results;
  }
}

var g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.breadthFirst("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
