class s{
    constructor(lastname, firstname,  age) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
    }


    getLastname() {
        return this.lastname;
    }

    getFirstname() {
        return this.firstname;
    }

    getAge() {
        return this.age;
    }
}

const tab = {};


let tabList;
const submitStudent = () => {
    if (submit()) {
        const tab = print();
        if (tabList == null)
            addStudent(tab);
        else
            updateStudent(tab);
        resetStudent();
    }
}

const print = () =>  {

    tab["firstname"] = document.getElementById("firstname").value;
    tab["lastname"] = document.getElementById("lastname").value;
    tab["age"] = document.getElementById("age").value;
    return tab;
}

let tabFix = [];

const addStudent = () => {
    let inputLN = document.getElementById('lastname').value;
    let inputFN = document.getElementById('firstname').value;
    let inputA = document.getElementById('age').value;
    let inputALl = new s(inputLN, inputFN, inputA);

    const thead = document.getElementById('thead');
    const tr = document.createElement('tr');
    const f  = document.createElement('th');
    const l  = document.createElement('th');
    const a  = document.createElement('th');
    const btn  = document.createElement('th');

    thead.appendChild(tr);
    tr.appendChild(f);
    tr.appendChild(l);
    tr.appendChild(a);
    tr.appendChild(btn);

    f.innerText = inputALl.getFirstname();
    l.innerText = inputALl.getLastname();
    a.innerText = inputALl.getAge();


    tabFix.push(inputALl);


    btn.innerHTML = `   <button class="btn btn-secondary" onClick="editStudent(this)">Edit</button>
                        <button class="btn btn-secondary" onClick="removeStudent(this)">Delete</button>
                        <button class="btn btn-danger" onClick="Absent(this)">Absent</button>
                        <button class="btn btn-success" onClick="Present(this)">Present</button>`;

}

const Present = (student)  =>{
    let row;
    let row1;
    if (confirm('Is the student present ?')) {
        row = student.parentElement.parentElement;
        row1 = student.parentElement;
        row1.style.backgroundColor = "#FFFFFF"
        row.style.backgroundColor = "#92ee23";
    }
}

const Absent = (student) => {
    let row;
    let row1;
    if (confirm('Is the student absent ?')) {
        row = student.parentElement.parentElement;
        row1 = student.parentElement;
        row1.style.backgroundColor = "#FFFFFF"
        row.style.backgroundColor="#fc786b";
    }
}

const resetStudent = () => {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";
    tabList = null;
}

const editStudent = (student)  =>{
    tabList = student.parentElement.parentElement;
    document.getElementById("firstname").value = tabList.cells[0].innerHTML;
    document.getElementById("lastname").value = tabList.cells[1].innerHTML;
    document.getElementById("age").value = tabList.cells[2].innerHTML;
}
const updateStudent = (tab) =>{
    tabList.cells[0].innerHTML = tab.firstname;
    tabList.cells[1].innerHTML = tab.lastname;
    tabList.cells[2].innerHTML = tab.age;
}

const removeStudent = (student) => {
    let row;
    if (confirm('Delete the student ?')) {
        row = student.parentElement.parentElement;
        document.getElementById("StudentList").deleteRow(row.rowIndex);
        resetStudent();
    }
}

const submit = () => {
    let isValid;
    isValid = document.getElementById("firstname").value !== "";
    return isValid;
}

function searchBar(){
    if (this.value === "") {
        console.log("any student to print");
        printSearch([]);
    } else {
        let tabFix1 = tabFix.filter(tabFix =>
            tabFix.firstname.toLowerCase().includes(this.value.toLowerCase()));
        console.log(tabFix1);
        const ul = document.getElementsByTagName("ul")[0];
        const data = document.createElement('a');
        ul.appendChild(data);
        tabFix1.forEach(element => console.log(element.firstname));
        printSearch(tabFix1);
    }
}

function printSearch(array) {
    const nTab = document.getElementsByTagName("ul")[0];
    nTab.innerHTML = "";
    let data = "";
    array.forEach(elements => {data +=`<ul><li> ${elements.firstname +" " + elements.lastname} </li></ul>`;

    });
    nTab.innerHTML = data;

}

document
    .querySelectorAll("input[type=search]")[0]
    .addEventListener("input", searchBar);


searchBar();

const form = document.querySelector("form");
form.addEventListener('submit', function(event) {event.preventDefault(); submitStudent() }, false);

//---------------------




