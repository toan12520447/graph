const minimumIsland = (grid) => {
  
    let minimum = Infinity;
    
    const visited = new Set();
    
    for (let r = 0; r < grid.length; r++){
      for (let c = 0; c < grid[0].length; c++){
        const size = exploreSize(grid,r,c,visited);
        if (size > 0 && size < minimum){
          minimum = size;
        }
      }
    }
    
    return minimum;
    
  };
  
  const exploreSize = (grid,r,c,visited) =>{
    const rowInBound = 0 <= r && r < grid.length;
    const columInBound = 0 <=c && c < grid[0].length;
    if (!rowInBound || ! columInBound) return 0;
    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);
    if (grid[r][c] === 'W') return 0;
    let size = 1;
    size += exploreSize(grid,r + 1,c,visited);
    size += exploreSize(grid,r - 1,c,visited);
    size += exploreSize(grid,r,c + 1,visited);
    size += exploreSize(grid,r,c - 1,visited);
    return size;
  }
  
  const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
  console.log(minimumIsland(grid)); //2
  
  module.exports = {
    minimumIsland,
  };
  