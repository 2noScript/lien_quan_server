function getDay(date) {
    // const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
  function getTime(date) {
    // const date=new Date()
    return `${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`;
  }
  
  function getTimeNow() {
    const date = new Date();
    return {
      day: getDay(date),
      time: getTime(date),
    };
  }
  module.exports = getTimeNow;