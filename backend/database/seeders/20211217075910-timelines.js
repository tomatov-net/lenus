'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                id: 1,
                title: 'One test',
                date: '2021-12-13',
                weight: 70,
                happiness : 3,
                comment: 'Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut ' +
                    'nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.' +
                    'nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.' +
                    'nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                id: 2,
                weight: 98,
                happiness : 7,
                title: 'Test two',
                date: '2021-12-13',
                comment: 'Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ];
        await queryInterface.bulkInsert('timelines', data);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('timelines', null, {});
    }
};
