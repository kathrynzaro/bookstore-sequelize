'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Authors', [
      {
        firstName: 'Kelly',
        lastName: 'Link',
        yearOfBirth: 1969,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'F. Scott',
        lastName: 'Fitzgerald',
        yearOfBirth: 1896,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Samantha',
        lastName: 'Shannon',
        yearOfBirth: 1991,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Carmen Maria',
        lastName: 'Machado',
        yearOfBirth: 1986,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Daphne',
        lastName: 'Du Maurier',
        yearOfBirth: 1907,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
