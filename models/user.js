module.exports = function(sequelize,DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING
    });
    User.Associate = function(models) {
        User.hasMany(models.Post, {
        });
    };
    return User;
};