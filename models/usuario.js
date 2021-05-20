	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let paciente = sequelize.define('paciente',{
		idPaciente: {
			field: 'idPaciente',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf: {
			field: 'cpf',
			type: DataTypes.CHAR(11),
			allowNull: false
		},
		
		sexo: {
			field: 'sexo',
			type: DataTypes.CHAR(1),
			allowNull: false
		},
		
		grauAutismo:{
			field: 'grauAutismo',
			type: DataTypes.INTEGER,
			allowNull: false
		}

	}, 
	{
		tableName: 'paciente', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return paciente;
};
