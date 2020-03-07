module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,

        },
        username: {
            type: DataTypes.STRING,

        },
        last_login: {
            type: DataTypes.INTEGER,

        }
    });
    return Todo;
}