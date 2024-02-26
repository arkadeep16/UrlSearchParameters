const color = document.getElementById('color');
const size = document.getElementById('size');
const myKeyValues = window.location.search;
// console.log(myKeyValues);
const newUrlparams = new URLSearchParams(myKeyValues);
// console.log(newUrlparams);

const updateDropDowns = () => {
  const colorParam = newUrlparams.get('color');
  if (colorParam) {
    color.value = colorParam;
  }
  const sizeParam = newUrlparams.get('size');
  if (sizeParam) {
    size.value = sizeParam;
  }
  console.log(colorParam, sizeParam);
};
const updateUrl = () => {
  const baseUrl = 'http://127.0.0.1:5500/index.html?';
  window.location.href = baseUrl + `color=${color.value}&size=${size.value}`;
};

const onChange = (e) => {
  // console.log(e.target.value);
  updateUrl();
};
color.addEventListener('change', onChange);
size.addEventListener('change', onChange);

updateDropDowns();
