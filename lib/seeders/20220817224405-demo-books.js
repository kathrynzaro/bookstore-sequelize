'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Pretty Monsters',
        published: 2003,
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Great Gatsby',
        published: 1925,
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Priory of the Orange Tree',
        published: 2019,
        author_id: 3,
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
