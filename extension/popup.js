let change_color = document.getElementById('change_color');

chrome.storage.sync.get('color', (data) => {
  change_color.style.backgroundColor = data.color;
  change_color.setAttribute('value', data.color);
});

change_color.onclick = (element) => {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'}
    );
  });
};