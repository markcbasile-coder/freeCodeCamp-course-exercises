function findElement(arr, funct) {
  for (let i = 0; i < arr.length; i++) {
    if (funct(arr[i]) == true) {
      return arr[i];
    }
  }
}
