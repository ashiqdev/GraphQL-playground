const Query = {
  courses: (parent, args, context, info) => context.prisma.courses(),
  course: (parent, args, context, info) => {
    const course = context.prisma.course({
      id: args.id,
    });
    return course;
  },
};

module.exports = Query;
