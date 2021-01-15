// this function changes the structure of data fetched from URL 
// so that it can be passed to the Chart
export const fitData = ({ data, newCases }) => {
  let dataArray = [];

  // convert object to array
  for (let field in data) {
    // change the format of date from MM/DD/YY to DD/MM/YY
    let newDate = String(field).split('/');
    [newDate[0], newDate[1]] = [newDate[1], newDate[0]];
    newDate = newDate.join('/');

    dataArray.push({
      date: newDate,
      value: data[field]
    });
  }

  let categoriesArray = [];
  let seriesArray = [];

  // show every n-th day
  const EVERY = 7;

  dataArray.forEach((item, index) => {
    // if we are calculating new cases
    // we skip the first element because we do not know the previous element
    if (newCases && index === 0) return;

    // show last 5 days and every n-th day
    if (index % EVERY === 0 || dataArray.length - index < 5) {
      categoriesArray.push(item.date);

      if (newCases) {
        // new cases = current value - previous value
        seriesArray.push(item.value - dataArray[index - 1].value);
      } else {
        seriesArray.push(item.value);
      }
    }
  });

  return { categoriesArray, seriesArray };
};