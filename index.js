const filterItems = (arr1, arr2) => {
  const positive = (n) => n > 0,
        pos_arr1 = arr1.filter( positive ),
        pos_arr2 = arr2.filter( positive );
 
  return pos_arr1.concat(pos_arr2);
};

module.exports = filterItems;


 