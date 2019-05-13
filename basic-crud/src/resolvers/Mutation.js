const Mutation = {
  createCourse: (parent, args) => {
    const course = {
      id: (global.idCount += 1),
      author: args.author,
      name: args.name,
    };

    global.courses.push(course);

    return course;
  },

  updateCourse: (parent, args) => {
    const { id } = args;
    const course = global.courses.find(c => c.id === parseInt(id));
    course.name = args.name;
    course.author = args.author;
    return course;
  },

  deleteCourse: (parent, args) => {
    const { id } = args;
    const course = global.courses.find(c => c.id === parseInt(id));
    const index = global.courses.indexOf(course);
    global.courses.splice(index, 1);
    return course;
  },
};

module.exports = Mutation;
