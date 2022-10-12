import { Configuration } from "./config.util";
import mysql from 'mysql';

export class Database {
	private _pool: any;

	constructor(){}

	static get pool(){
		const appConfig = new Configuration().credentials;
		return mysql.createPool({
			connectionLimit : 10,
			debug: false,
			password: process.env.DB_PSSWD,
			host: appConfig.HOST,
			user: appConfig.USER,
			port: appConfig.PORT,
			database: appConfig.DATABASE,
		})
	}
}