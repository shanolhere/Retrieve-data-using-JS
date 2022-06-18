let data = [
  {
    name: "Sarah",
    age: "23"
  },
  {
    name: "Jonas Portilla",
    age: "29"
  },
  {
    name: "Sabiya",
    age: "23"
  },
  {
    name: "Reshma",
    age: "25"
  },
  {
    name: "Abdul",
    age: "24"
  },
  {
    name: "Shannah",
    age: "2"
  },
  {
    name: "Shonah",
    age: "2"
  },
  {
    name: "Gullu",
    age: "3"
  },
  {
    name: "Peelu",
    age: "2"
  }
];

const info = document.getElementById("info");
let details = data.map(function (item) {
  return "<div>" + item.name + " is " + item.age + " years old. </div>";
});

info.innerHTML = details.join("\n");
