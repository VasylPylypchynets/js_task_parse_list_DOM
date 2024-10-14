'use strict';

// write code here

const employees = document.querySelectorAll('li');
const listEmployees = document.querySelector('ul');

function getSalary(element) {
  const salary = element.dataset.salary;

  if (salary) {
    let cleanedSalary = salary.slice(1);

    cleanedSalary = cleanedSalary.split(',').join('');

    return Number(cleanedSalary);
  }

  return 0;
}

function sortList(list) {
  const listItem = [...list];

  return listItem.sort((a, b) => getSalary(b) - getSalary(a));
}

listEmployees.innerHTML = '';

const sortedList = sortList(employees);

sortedList.forEach((element) => {
  listEmployees.appendChild(element);
});

function getEmployees(employeesList) {
  const emplArr = [...employeesList];

  return emplArr.map((element) => {
    const nameElement = element.textContent.trim();
    const salary = element.dataset.salary;
    const position = element.dataset.position;
    const age = element.dataset.age;

    return {
      name: nameElement,
      position,
      salary,
      age,
    };
  });
}

getEmployees(employees);
