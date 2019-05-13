const Mutation = {
  createCourse: (parent, args, context, info) =>
    context.prisma.createCourse({
      ...args,
    }),

  updateCourse: (parent, args, context, info) => {
    const updates = { ...args };
    delete updates.id;
    const updatedCourse = context.prisma.updateCourse({
      data: updates,
      where: {
        id: args.id,
      },
    });
    return updatedCourse;
  },

  deleteCourse: (parent, args, context, info) => {
    const course = context.prisma.deleteCourse({
      id: args.id,
    });
    return course;
  },
};

module.exports = Mutation;
