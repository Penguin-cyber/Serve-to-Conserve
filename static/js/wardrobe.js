const clothes_container = document.getElementById('clothes-grid');
const rows = 3;
const cols = 3;

const entry = {
  name: "testname",
  clothing_type: "testclothing"
}

let entries = localStorage.getItem('entries') || [];
entries.push(entry);
for (let i=0; i<entries.length; ++i) {
  if (entries[i])
  console.log(entries[i]);
}


for (let i=0; i<rows; ++i) {
  for (let j=0; j<cols; ++j) {
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.textContent = `Row ${i+1}, Col ${j+1}`;
    clothes_container.appendChild(div);
  }
}

