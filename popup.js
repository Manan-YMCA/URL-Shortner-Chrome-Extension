function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.log(url);
    callback(url);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    console.log(url);
    var urlify = document.getElementById('demo');
    urlify.innerHTML=url;
  });
});
