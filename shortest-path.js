const shortestPath = (edges, nodeA, nodeB) => {
  
    let graph = buildGraph(edges);
    let visited = new Set( [ nodeA ] );
    let queue = [ [nodeA,0] ];
    while(queue.length > 0){
      const [node,distance] = queue.shift();
      if (node === nodeB) return distance;
      for (let neighber of graph[node]){
        if (!visited.has(neighber)){
          visited.add(neighber);
          queue.push([neighber, distance + 1]);
        }
      }
    }
    return -1;
  };
  
  const buildGraph = (edges) =>{
    let graph = {};
    for (let edge of edges){
      const [a, b] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph;
  }
  
  const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
  console.log(shortestPath(edges, 'w', 'z'));//2
  
  module.exports = {
    shortestPath,
  };
  