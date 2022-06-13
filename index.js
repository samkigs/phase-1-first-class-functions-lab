const returnFirstTwoDrivers = function (arr) {
    return [arr[0], arr[1]]
  }
  
  const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
  function createFareMultiplier(fareMulti) {
    return (fare) => fare * fareMulti
  }
  
  const fareDoubler = createFareMultiplier(2)
  const fareTripler = createFareMultiplier(3)
  
  function selectDifferentDrivers(arr, selectDrivers) {
    return selectDrivers(arr)}