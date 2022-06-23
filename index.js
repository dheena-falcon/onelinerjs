const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);


const getUnique = (arr) => [...new Set(arr)];


const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

  
export default {shuffleArray,getUnique,generateRandomHexColor}
