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
        title: 'The Beautiful and the Damned',
        published: 1922,
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
      {
        title: 'In the Dream House: A Memoir',
        published: 2019,
        author_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Her Body and Other Parties: Stories',
        published: 2017,
        author_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Rebecca',
        published: 1938,
        author_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Get in Trouble',
        published: 2015,
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stranger Things Happen',
        published: 2001,
        author_id: 1,
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
