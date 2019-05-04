module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product",{
        Customer_Rating: {
            type: DataTypes.STRING
        },
        Image: {
            type: DataTypes.STRING
        },
        Price: {
            type: DataTypes.INTEGER
        },
        Description: {
            type: DataTypes.TEXT
        }
    }); 
    Product.associate = function(models) {
        Product.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Product;
};