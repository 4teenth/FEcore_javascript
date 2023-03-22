import users from './users.js';

// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => users
  .reduce((allSkills, skills) => {
    allSkills.push(...skills.skills);

    return allSkills;
  }, [])
  .filter((elem, idx, arr) => arr.indexOf(elem) === idx)
  .sort();
// -OR-
// const getSortedUniqueSkills = users => users
//   .reduce((accAllSkls, { skills }) => [...accAllSkls, ...skills], [])
//   .filter((elem, idx, arr) => arr.indexOf(elem) === idx)
//   .sort((a, b) => a.localeCompare(b, 'en'));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
