import axiosClient from "../config/axios";

const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}

export async function authenticateUser({credentials, cancelToken}) {
	const url =  `/sign_in`
	let result = await axiosClient.post(url, {user: credentials}, {
		headers, cancelToken
	})
	return result;
}