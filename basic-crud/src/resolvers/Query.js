const Query = {
  info: () => 'I am invoked when info query is requested from client',
  courses: () => global.courses,
  course: (parent, args) => {
    const { id } = args;
    const course = global.courses.find(c => c.id === parseInt(id));
    return course;
  },
};

module.exports = Query;
