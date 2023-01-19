import { getDataFromAPI } from "./model";

export const getData = async () => {
	const data = await getDataFromAPI();
	return data;
};
