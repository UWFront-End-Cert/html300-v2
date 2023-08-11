const main = document.getElementById("home")
main.style.display = 'block';
const links = document.querySelectorAll(".nav-link")
// set the data grid from car api
links.forEach(link => {
  link.addEventListener('click', e => {
   
    if (!e.target.href.includes('home')) {
      main.style.display = 'none';
      if (e.target.href.includes('make')) {
        const table = document.querySelector('.table');
        const rowData = document.querySelectorAll('.rowData');

        if (rowData != null) {
          rowData.forEach(e => e.innerHTML = "")
        }
        // car api is called by fetch api
        fetch('https://car-data.p.rapidapi.com/cars', { headers: { 'X-RapidAPI-Key': '4603739451msh15f9addc67ed099p1b3420jsnf01062794b43', 'X-RapidAPI-Host': 'car-data.p.rapidapi.com' } }).then(data => data.json()).then(data => {
          data.forEach(data => {
            console.log(data)
            // create row and columns dynamically
            const row = document.createElement('div')
            row.classList.add('row')
            row.classList.add('rowData')
            addElement(row, data.id, 'col-xs-2')
            addElement(row, data.year, 'col-sm-3')
            addElement(row, data.make, 'col-sm-2')
            addElement(row, data.model, 'col-md-3')
            addElement(row, data.type, 'col-md-3')
            table.appendChild(row)

          })
        })
      }

    }

    else
      main.style.display = 'block';
  })
})

//accordion section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeAccordian");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function addElement(row, value, type) {
  let col = document.createElement('div')
  col.classList.add(type)
  col.innerHTML = value
  row.appendChild(col)
}
