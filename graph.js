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
}

var g = new Graph();

g.addVertex("Egypt");
g.addVertex("US");
g.addVertex("Tokyo");

g.addEdge("Egypt", "US");
g.addEdge("Egypt", "Tokyo");

// g.removeEdge("Egypt", "US");
g.removeVertex("US");

console.log(g.adjacencyList);
