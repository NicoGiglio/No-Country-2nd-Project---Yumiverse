import { UserModel } from "../models/index.js";
import bcrypt from "bcryptjs";

const UserService = {
	async createUser(body) {
		const { password } = body;

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		body.password = hash;
		const user = await UserModel.create(body);

		console.log("SERVICE CREATE USER:", user);
		return user;
	},
	async updateUser(body) {
		const {	id } = body;

		const user = await UserModel.findOneAndUpdate({ _id: id }, { $set: body }, { new: true });

		console.log("SERVICE UPDATE USER:", user);
		return user;
	},
	async createRestaurant(body) {
		const { userId, restaurants } = body;

		const user = await UserModel.findById(userId);

		for (let i = 0; i < restaurants.length; i++) {
			const restaurant = restaurants[i]; // valor de la iteracion

			const index = user.restaurants.findIndex(item => item === restaurant);
			if (index === -1) {
				user.restaurants.push(restaurant);
			}
		}

		const response = await user.save();

		console.log("SERVICE CREATE RESTAURANT:", response.restaurants);
		return response.restaurants;
	},
};

export default UserService;
