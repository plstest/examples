const people = {
  "1": {
    "name": "John",
    "age": 38
  },
  "2": {
    "name": "Phillip",
    "age": 27
  },
  "3": {
    "name": "Caroline",
    "age": 35
  }
};

const el = document.querySelector(".people");

Object.entries(people).forEach(([key, value]) => {
  const li = document.createElement("li");
  const { name, age } = value;

  el.appendChild(li).innerHTML =
    `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Age:</strong> ${age}</p>
    `;
})