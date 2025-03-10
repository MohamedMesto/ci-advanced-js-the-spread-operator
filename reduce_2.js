
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */





const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'MMM',
    profession: 'TeamLeader',
    yrsExperience: 13
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too


// Grouping by a property, and totaling it too

// {Developer: 12, Designer: 4} <-- this is what we want!

let experienceByProfession = teamMembers.reduce((acc, curr) => {

  let key = curr.profession;

  if (!acc[key]) {

    acc[key] = curr.yrsExperience;

  } else {

    acc[key] += curr.yrsExperience;

  }

  return acc;

}, {});

console.log(experienceByProfession);