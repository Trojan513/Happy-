var studentprofile = {
    name: "Serena Van Der Woodsen",
    age: 19,
    id: "LT00999",
    contactDetails: {
      email: "serenaloveschuck@gmail.com",
      phone: "09BS9012345",
      address: {
        street: "42nd and 3rd Street",
        city: "New York City",
        state: "New York State",
        zipCode: "10165"
      }
    },
    courses: [
      {
        courseName: "Mathematics",
        courseCode: "MAT201",
        instructor: "Dr. Aloysius",
        grades: {
          midterm: 25,
          final: 95
        }
      },
      {
        courseName: "Physics",
        courseCode: "PHY201",
        instructor: "Dr. Octopoculus",
        grades: {
          midterm: 35,
          final: 100
        }
      }
    ],
    attendance: {
      totalDays: 180,
      daysPresent: 180,
    }
  };
  
  console.log("Student Name:", studentprofile.name);
  console.log("Email:", studentprofile.contactDetails.email);
  console.log("City:", studentprofile.contactDetails.address.city);
  console.log("First Course Name:", studentprofile.courses[0].courseName);