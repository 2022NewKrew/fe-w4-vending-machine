function makeDebouncer() {
  let timeoutID;
  return function debounce(callback, timeout) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      callback();
      timeoutID = undefined;
    }, timeout);
  }
}

async function fetchJSONData(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (e) {
    console.error(`Fetch JSON Data Fail: e.message`);
    return;
  }
}

export { makeDebouncer, fetchJSONData };
