const doc = {
    empBody: document.querySelector('empBody'),
    addbutton: document.querySelector('addbutton')
}
const state = {    
    url: 'http://localhost:8000/employees'
}

doc.addbutton.addEventListener("click", () => console.log(jo) 
)


function createEmployees(){
    fetch(state.url),{
        method:'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Valaki"
            city: "Valahol"
            salary: 300
        })
    }
}



function getEmployees(){
    fetch(state.url)
    .then(response => response.json())
    .then(result => renderEmployees(result))
}
getEmployees()

function renderEmployees(employeeList){
    employeeList.forEach(emp => {
        console.log(emp.id)
        console.log(emp.name)
        console.log(emp.city)
        console.log(emp.salary)
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td>
        <button class= "btn btn-success">Szerkesztés</button>
        </td>
        <td> <button class="btn btn-danger">Törlés</button></td>
        `
        doc.empBody.appendChild(row)
    });
}