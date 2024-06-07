const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            validate: {
                // RegExr to allwo below syntax
                // Also allows spaces between words only, a space on it's own should not be accepted.
                is: '^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$'
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8],
            },
        },
    },
    {
        hooks: {
          beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(
              updatedUserData.password,
              10
            );
            return updatedUserData;
          },
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'users',
      },
)

module.exports = User;