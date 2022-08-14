function allUsers(parent,args,context) {
    return context.prisma.user.findMany();
}
module.exports = {
   allUsers 
}