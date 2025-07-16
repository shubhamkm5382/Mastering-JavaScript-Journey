





const course = {
  courseName: "Mastering-JavaScript",
  courseDuration: "6 months",
  courseFees: "$5000",
  courseDescription:
    "This course is designed to help you master the art of JavaScript. You will learn the fundamentals of JavaScript, including variables, data types, functions, and object-oriented programming.",
  courseInstructor: "John Doe",
  courseRating: 4.5,
};
console.log(course.courseInstructor);
//or
console.log(course["courseInstructor"]);
//or
const {courseInstructor} = course;
console.log(courseInstructor);
//or
const {courseInstructor : instructor} = course;
console.log(instructor);


