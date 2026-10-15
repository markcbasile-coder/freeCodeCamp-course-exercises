function chunkArrayInGroups(arr, num) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += num) {
    chunks.push(arr.slice(i, i + num));
  }
  return chunks;
}
