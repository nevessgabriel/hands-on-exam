let consultants = [
    { name: 'Peyton Turner', company: 'Walker Inc' },
    { name: 'Isaias Fritsch', company: 'Walker Inc' },
    { name: 'Susana Wilderman', company: 'Nolan Inc' }
  ];
  
  let groupConsultants = {};
  
  for (let consultant of consultants) {
      if (!groupConsultants[consultant.company]) {
          groupConsultants[consultant.company] = [];
      }
      groupConsultants[consultant.company].push({
          name: consultant.name,
          company: consultant.company
      });
  }
  
  console.log(JSON.stringify(groupConsultants, null, 2));
  