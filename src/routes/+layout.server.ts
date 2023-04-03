import { SECRET_BUTTER_CMS_API_KEY } from '$env/static/private';

import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;
const previewSetting = 'true';
// make preview mode by default
const preview = previewSetting === 'true' || previewSetting === undefined ? true : false;

type Menu = {
	url: string;
	label: string;
};

type MainMenu = {
	menu_items: Menu;
};

try {
	butter = Butter(SECRET_BUTTER_CMS_API_KEY, preview);
} catch (e) {
	console.log(e);
}

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	try {
		const response = await butter.content.retrieve(['navigation_menu']);

		const mainMenu: MainMenu = response?.data?.data?.navigation_menu.find(
			(menu: { name: string }) => menu.name == 'Main menu'
		);

		return { mainMenu: mainMenu ? mainMenu.menu_items : [] };
	} catch (e) {
		return { mainMenu: [] };
	}
}
