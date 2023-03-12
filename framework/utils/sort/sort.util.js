class Sort {
  isSortedByAscending(arr, property){
    for (let i = 1; i < arr.length; i++) {
      if(arr[i-1][property] > arr[i][property]) {
        return false
      }
    }
    return true
  }
}

export default new Sort()