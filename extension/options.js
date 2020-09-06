let page = document.getElementById('button_div');
const k_button_colors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

const construct_options = (k_button_colors) => {
  for (let item of k_button_colors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', () => {
      chrome.storage.sync.set({color: item}, () => {
        console.log(`color is ${item}`);
      });
    });
    page.appendChild(button);
  };
};

construct_options(k_button_colors);