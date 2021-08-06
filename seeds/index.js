const seedTeachers = require('./teacher-seed');
const seedStudents = require('./student-seed');
const seedGrades = require('./grades-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true }):
    console.log('\n--- Database Synced ---\n');
    await seedTeachers();
    console.log('\n--- Teachers seeded ---\n');
    await seedStudents();
    console.log('\n--- Students seeded ---\n');
    await seedGrades();
    console.log('\n--- Grade seeded ---\n');

    process.exit(0);
};

seedAll();