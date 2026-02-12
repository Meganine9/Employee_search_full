const employees = [
  {
    id: 101,
    name: "Sarah Johnson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "JavaScript",
    salary: 95000,
    yearsOfExperience: 6,
    isRemote: true,
    email: "sarah.johnson@company.com"
  },
  {
    id: 102,
    name: "Michael Chen",
    department: "Engineering",
    position: "Junior Developer",
    primarySkill: "Python",
    salary: 65000,
    yearsOfExperience: 2,
    isRemote: false,
    email: "michael.chen@company.com"
  },
  {
    id: 103,
    name: "Emily Rodriguez",
    department: "Marketing",
    position: "Marketing Manager",
    primarySkill: "SEO",
    salary: 78000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "emily.rodriguez@company.com"
  },
  {
    id: 104,
    name: "David Kim",
    department: "Engineering",
    position: "DevOps Engineer",
    primarySkill: "Docker",
    salary: 92000,
    yearsOfExperience: 7,
    isRemote: true,
    email: "david.kim@company.com"
  },
  {
    id: 105,
    name: "Lisa Anderson",
    department: "Sales",
    position: "Sales Representative",
    primarySkill: "Negotiation",
    salary: 72000,
    yearsOfExperience: 4,
    isRemote: false,
    email: "lisa.anderson@company.com"
  },
  {
    id: 106,
    name: "James Wilson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "Java",
    salary: 98000,
    yearsOfExperience: 8,
    isRemote: true,
    email: "james.wilson@company.com"
  },
  {
    id: 107,
    name: "Rachel Green",
    department: "Engineering",
    position: "Frontend Developer",
    primarySkill: "JavaScript",
    salary: 88000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "rachel.green@company.com"
  }
];


let departments = employees.map(emp => emp.department);

let names = employees.map(emp=>emp.name)

let firstMark = employees.find(e => e.department = "Marketing")
  
let emp = employees.findIndex(e=> e.id===104);

let exp = employees.some( e => e.yearsOfExperience > 7);

let eng = employees.filter(e => e.department === "Engineering");
let remote = eng.every(e => e.isRemote)




let nm = employees.map(e => "name: " + e.name + ", email: " + e.email);






function question1(){
    let result = departments.includes('Marketing');
    if(result===true){
      result='Yes'
    }
    else{
      result='No'
    }
     let grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q1: includes()</h2>
                    <p>Does 'Marketing' department exist? <strong>${result}</strong></p>
                    <p style="font-size: 1em; margin-top: 15px; color: #ccc;">
                        Departments list: ${departments.join(", ")}
                    </p>
                </div>
            `;
}


function question2(){
  let result = emp
  let grid = document.getElementById('employeesGrid')
  grid.innerHTML=`
    <div class="result-box">
      <h2>Q2: indexOf()</h2>
      <p> Index of David Kim: <strong>${result}</strong></p>
    </div>
  `
}


function question3(){
let result = firstMark
let grid = document.getElementById('employeesGrid')
grid.innerHTML = `
  <div class = "result-box">
    <h2>Q3: find()</h2>
    <p> First Marketing Employee found: ${result.name}
  </div>
`
}

function question4(){
let result = emp
let grid = document.getElementById('employeesGrid')
grid.innerHTML=`
  <div class= "result-box">
    <h2>Q4: findIndex()</h2>
    <p> Index of employe 104: ${result}</p>
  </div>
`
}

function question5(){
let result = exp
if(result===true){
  result="Yes"
}
let grid = document.getElementById('employeesGrid')
grid.innerHTML =`
  <div class="result-box">
    <h2>Q5: some()</h2>
    <p> Are there any employees with over 7 years of experience?: ${result}</p>
  </div>
`
}

function question6(){
  let result = remote
  if(result===true){
    result="Yes"
  }
  else{
    result ="No"
  }
  let grid = document.getElementById('employeesGrid')
  grid.innerHTML= `
    <div class="result-box">
     <h2>Q6: every()</h2>
     <p> Is everyone in Engineering a remote worker?: ${result}</p>
    </div>
`
}

function question7(){

let ri = employees.filter(e => e.isRemote && e.salary > 80000);
let result = ri.map(e => e.name)
  let grid = document.getElementById('employeesGrid')
  grid.innerHTML=`
    <div class="result-box">
      <h2>Q7: filter()</h2>
      <p> Employees that work remotely and make over $80,000: ${result}
    </div>
  `
}

function question8(){
  
  let result = employees.map(e => "name: " + e.name + ", email: " + e.email);
  let grid = document.getElementById('employeesGrid')
  grid.innerHTML='';
  grid.innerHTML += `
    <div class="result-box">
        <h2>Q8: map()</h2>
        <p> Employe's name and email: ${result}
    </div> 
  `
}


function question9(){
  let uniqueDepartments = ["Engineering", "Marketing", "Sales"]
  let result = uniqueDepartments.join(",")
  let grid = document.getElementById('employeesGrid')
  grid.innerHTML=`
    <div class="result-box">
        <h2>Q9: join()</h2>
        <p> Our departments: ${result}
    </div>  
  `
}


function question10(){

let newHires = [
    {
        id: 108,
        name: "Anna Taylor",
        department: "HR",
        position: "HR Specialest",
        primarySkill: "Recructment",
        salary: 68000,
        yearsOfExperience: 3,
        isRemote: false,
        email: "anna.taylor@company.com"
    },

    {
        id:109,
        name: "Tom Brooks",
        department: "Engineering",
        position: "Backend Developer",
        primarySkill: "Node.js",
        salary: 85000,
        yearsOfExperience: 4,
        isRemote: true,
        email: "tom.brooks@company.com"
    }
]

let addingNewbes = employees.concat(newHires)
let result = addingNewbes.map(e => e.name)
let grid = document.getElementById('employeesGrid')
grid.innerHTML=`
  <div class="result-box">
        <h2>Q10: concat()</h2>
        <p> New list of Employees: ${result}
    </div>  
`
}

function bonus1(){
let js = employees.filter(e => e.primarySkill="JavaScript");
let name2 = js.map(n => n.name);
let result = name2.join();
let grid = document.getElementById('employeesGrid')
grid.innerHTML=`
  <div class="result-box">
        <h2>B1: Multi</h2>
        <p> Our JavaScript Devs: ${result}
    </div>  
`
}


function bonus2(){
  let remote = employees.filter(e => e.isRemote=true)
  
  let result = remote.every(e => e.yearsOfExperience >= 4)
   if(result===true){
      result='Yes'
    }
    else{
      result='No'
    }
  let grid = document.getElementById('employeesGrid')
  grid.innerHTML=`
    <div class="result-box">
        <h2>B2: Multi</h2>
        <p> Do all our remote workers have 4 or more years of experiance?: ${result}
    </div>  
  
  `
}


function bonus3(){
  let uniqueSkills = ['JavaScript','Python','SEO','Docker','Negotiation','Java',]
  let grid=document.getElementById('employeesGrid')
  grid.innerHTML=`
    <div class="result-box">
      <h2>B3: Multi</h2>
      <p>All our unique skills: ${uniqueSkills}
    </div>
  `
}

let total=0;
function bonus4(){
let allEngi = employees.filter(e=> e.department="Engineering")
let engiSal = allEngi.map(e=>e.salary)
for(let i=0;i<engiSal.length;i++){
  total = total + engiSal[i]
  console.log(total)
}
 let grid=document.getElementById('employeesGrid')
grid.innerHTML =`
 <div class="result-box">
      <h2>B4: Multi</h2>
      <p>The total salary of our Engineering department: $${total}
    </div>
` 
}