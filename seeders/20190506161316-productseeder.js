'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      Customer_Rating: "4/5",
      Image: "/images/modern_chair.jpg",
      Price: 350.00,
      Description: "Modern dining chair",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "4/5",
      Image: "/images/modern_chair2.jpg",
      Price: 450.00,
      Description: "Modern reading chair ",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/modern_chair3.jpg",
      Price: 850.00,
      Description: "Modern lounge chair",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/modern_couch.jpg",
      Price: 1500.00,
      Description: "Modern couch",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "4/5",
      Image: "/images/modern_side_table.jpg",
      Price: 250.00,
      Description: "Modern side table",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/modern-mirror.jpg",
      Price: 150.00,
      Description: "Modern mirror",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/modern-table.jpg",
      Price: 150.00,
      Description: "Modern dining table",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "4/5",
      Image: "/images/modern_desk.jpg",
      Price: 800.00,
      Description: "Modern desk",
      style: "modern",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/traditional_bedroom.jpg",
      Price: 3000.00,
      Description: "Traditional bedroom set",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/traditional_mirror.jpg",
      Price: 200.00,
      Description: "Traditional mirror",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "4/5",
      Image: "/images/traditional_chair.jpg",
      Price: 3000.00,
      Description: "Traditional wingback chair",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "4/5",
      Image: "/images/traditional_chair2.jpg",
      Price: 500.00,
      Description: "Traditional lounge chair",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/traditional_chair4.jpg",
      Price: 250.00,
      Description: "Traditional dining chair",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/traditional_couch.jpg",
      Price: 2000.00,
      Description: "Traditional couch",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "4/5",
      Image: "/images/traditional_desk.jpg",
      Price: 300.00,
      Description: "Traditional desk",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Customer_Rating: "5/5",
      Image: "/images/traditional_patio_chair.jpg",
      Price: 2000.00,
      Description: "Traditional patio set",
      style: "traditional",
      createdAt: new Date(),
      updatedAt: new Date(),

    }])

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
