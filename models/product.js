module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product",{
        Customer_Rating: {
            type: DataTypes.STRING
        },
        Image: {
            type: DataTypes.STRING
        },
        Price: {
            type: DataTypes.DECIMAL(10,2)
        },
        Description: {
            type: DataTypes.TEXT
        },
        style: {
            type: DataTypes.STRING
        }
    }); 
    return Product;
};