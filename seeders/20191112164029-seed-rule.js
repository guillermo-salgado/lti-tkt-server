'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Rules',
            [
                {
                    name: 'Art History',
                    template: 'certificate.pdf',
                    type: 'Diploma',
                    language: 'English',
                    programId: 1,
                    includeDynamicDate: false,
                    description: '',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Rules', null, {});
    }
};
