const object = [2, 4, 5, 12, 34, 11];
const result = object.map((item, index, ja) => {
  console.log("Item: ", item, " index of item is: ", index, ja);
  return item * 2;
});
