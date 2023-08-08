window.onload = function() {
        
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        
        link.addEventListener('click', async(e)=>{
            const target = e.target.href;
            let targetId = target.substring(target.indexOf('#'));
          
            const allShows = document.querySelectorAll('.show');
            allShows.forEach(e=>{
                e.classList.add('hide')
            })
            const targetElement = document.querySelector(targetId);
            if(targetId === '#user') {
                const table = document.querySelector('.table');
                
                const rows = document.querySelectorAll('.row')
                if(rows != null) {
                    rows.forEach(row => row.innerHTML="")
                }                    
                
                fetch('https://car-data.p.rapidapi.com/cars', {headers:{'X-RapidAPI-Key':'4603739451msh15f9addc67ed099p1b3420jsnf01062794b43', 'X-RapidAPI-Host':'car-data.p.rapidapi.com'}}).then(data => data.json()).then(data => {
                    data.forEach(data => {
                        
                        const row = document.createElement('div')   
                        row.classList.add('row')
                        addElement(row, data.id)
                        addElement(row, data.year)
                        addElement(row, data.make)
                        addElement(row, data.model)
                        addElement(row, data.type)
                        table.appendChild(row) 
                    })
                })
            }
            targetElement.classList.remove("hide")
            targetElement.classList.add("show")
        });
    });

    function addElement(row, value) {        
        let data = document.createElement('div')
        data.classList.add('column')
        data.innerHTML = value
        row.appendChild(data)               
    }
}