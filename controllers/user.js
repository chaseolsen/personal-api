

var user = {
  name: 'Chase',
  location: 'Provo',
  occupations: ['QA Analysis', 'Asst. System Admin', 'Web Developer'],
  hobbies: [
    {
      name: 'Playing the Guitar',
      type: 'Acoustic'
    },
    {
      name: 'Going Longboarding',
      type: 'Outdoor'
    },
    {
      name: 'Gaming',
      type: 'Indoor'
    }
  ],
  family: [
    {
      name: 'Crystal',
      relation: 'Mother',
      gender: 'Female'
    },
    {
      name: 'Troy',
      relation: 'Father',
      gender: 'Male'
    },{
      name: 'Trey',
      relation: 'Brother',
      gender: 'Male'
    }
  ],
  restaurants: [
    {
      name: 'Pizza Cart',
      type: 'Italian',
      rating: 10
    },
    {
      name: 'Sushi Burrito',
      type: 'American Chinese',
      rating: 9
    },
    {
      name: 'Ninja',
      type: 'Japanese',
      rating: 10
    }
  ]
};

module.exports = user;
