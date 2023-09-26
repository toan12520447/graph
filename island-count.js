const islandCount = (grid) => {
    let count = 0;
    let visited = new Set();
    for (let r = 0; r < grid.length; r++){
      for (let c = 0; c < grid[0].length; c++){
        if (explore(grid,r,c,visited) === true) count = count + 1;
      }
    }
    return count;
  };
  
  const explore = (grid,r,c,visited) =>{
    const rowInBound = 0 <= r && r < grid.length;
    const columInBound = 0 <= c && c < grid[0].length;
    if (!rowInBound || !columInBound) return false;
    if (grid[r][c] === 'W') return false;
    //Case 1: r = 1,c = 23, Case 2: r = 12, c = 3. -> it doesn't have the same value.
    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);
    
    return true;
  }
  
  const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  console.log(islandCount(grid))// ->3
  
  
  module.exports = {
    islandCount,
  };
  