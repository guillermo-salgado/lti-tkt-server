'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Programs',
            [
                {
                    name: 'Art History',
                    description: '',
                    createdAt: new Date().toDateString(),
                    updatedAt: new Date().toDateString()
                },
                {
                    name: 'History',
                    description: '',
                    createdAt: new Date().toDateString(),
                    updatedAt: new Date().toDateString()
                },
                {
                    name: 'Computer Science',
                    description: '',
                    createdAt: new Date().toDateString(),
                    updatedAt: new Date().toDateString()
                },
                {
                    name: 'Mathematics',
                    description: '',
                    createdAt: new Date().toDateString(),
                    updatedAt: new Date().toDateString()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Programs', null, {});
    }
};
