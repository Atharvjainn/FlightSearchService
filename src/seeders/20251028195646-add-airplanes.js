'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:"Airbus A380",
        capacity: 250 ,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber:"Boeing 747",
        capacity: 400 ,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber:"Boeing 757",
        capacity: 239 ,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber:"Ilyushin Il-96",
        capacity: 436 ,
        createdAt : new Date(),
        updatedAt: new Date()
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
