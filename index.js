function filterItems(arr1, arr2)
{
  var even=[];
  for(i = 0; i < arr1.length && arr2.length; i++)
  {
    if(arr1[i] && arr2[i] > 0)
    {
      even.push(arr1[i] + arr2[i])
    }
  }
  return even;
};

module.exports = filterItems;


 