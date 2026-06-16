let employees =
JSON.parse(localStorage.getItem("employees"))
|| [];

displayEmployees();

function addEmployee() {

    let name =
    document.getElementById("empName").value;

    let age =
    document.getElementById("empAge").value;

    let department =
    document.getElementById("empDepartment").value;

    let salary =
    document.getElementById("empSalary").value;

    if (
        name === "" ||
        age === "" ||
        department === "" ||
        salary === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let employee = {
        id: String(Date.now() % 100000).padStart(5, '0'),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    clearForm();

    displayEmployees();
}

function displayEmployees() {

    let table =
    document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(emp) {

        table.innerHTML += `
        <tr id="row-${emp.id}" data-editing="false">
            <td>${emp.id}</td>
            <td class="edit-name">${emp.name}</td>
            <td class="edit-age">${emp.age}</td>
            <td class="edit-department">${emp.department}</td>
            <td class="edit-salary">${emp.salary}</td>
            <td>
                <button
                    class="edit-btn"
                    data-editing="false"
                    onclick="editEmployee('${emp.id}')">
                    Update
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee('${emp.id}')">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteEmployee(id) {

    employees =
    employees.filter(function(emp) {
        return emp.id !== id;
    });

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    displayEmployees();
}

function editEmployee(id) {

    let row = document.getElementById("row-" + id);
    let editBtn = row.querySelector(".edit-btn");
    let isEditing = editBtn.getAttribute("data-editing");
    
    if(isEditing === "false") {
        
        let nameCell = row.querySelector(".edit-name");
        let ageCell = row.querySelector(".edit-age");
        let departmentCell = row.querySelector(".edit-department");
        let salaryCell = row.querySelector(".edit-salary");
        
        let currentName = nameCell.textContent.trim();
        let currentAge = ageCell.textContent.trim();
        let currentDept = departmentCell.textContent.trim();
        let currentSalary = salaryCell.textContent.trim();
        
        nameCell.innerHTML = `<input type="text" value="${currentName}">`;
        ageCell.innerHTML = `<input type="number" value="${currentAge}">`;
        
        departmentCell.innerHTML = `
            <select>
                <option ${currentDept === "HR" ? "selected" : ""}>HR</option>
                <option ${currentDept === "IT" ? "selected" : ""}>IT</option>
                <option ${currentDept === "Finance" ? "selected" : ""}>Finance</option>
                <option ${currentDept === "Marketing" ? "selected" : ""}>Marketing</option>
            </select>
        `;
        
        salaryCell.innerHTML = `<input type="number" value="${currentSalary}">`;
        
        editBtn.textContent = "Save";
        editBtn.setAttribute("data-editing", "true");
        
    } else if(isEditing === "true") {
        
        let nameCell = row.querySelector(".edit-name");
        let ageCell = row.querySelector(".edit-age");
        let departmentCell = row.querySelector(".edit-department");
        let salaryCell = row.querySelector(".edit-salary");
        
        let newName = nameCell.querySelector("input").value;
        let newAge = ageCell.querySelector("input").value;
        let newDepartment = departmentCell.querySelector("select").value;
        let newSalary = salaryCell.querySelector("input").value;
        
        if(newName === "" || newAge === "" || newDepartment === "" || newSalary === "") {
            alert("Please fill all fields");
            return;
        }
        
        let employee = employees.find(function(emp) {
            return emp.id === id;
        });
        
        employee.name = newName;
        employee.age = newAge;
        employee.department = newDepartment;
        employee.salary = newSalary;
        
        localStorage.setItem(
            "employees",
            JSON.stringify(employees)
        );
        
        displayEmployees();
    }
}

function searchEmployee() {

    let searchValue =
    document.getElementById("search")
    .value.toLowerCase();

    let rows =
    document.querySelectorAll("#employeeTable tr");

    rows.forEach(function(row) {

        let employeeName =
        row.children[1]
        .textContent
        .toLowerCase();

        if(employeeName.includes(searchValue)) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
}

function clearForm() {

    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empDepartment").value = "";
    document.getElementById("empSalary").value = "";
}
