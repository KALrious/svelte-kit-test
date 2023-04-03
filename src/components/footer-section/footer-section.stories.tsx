import FooterSection from './footer-section.svelte';
import { MainMenu } from './types/footer-section.type';

export default {
	component: FooterSection,
	title: 'Design System/FooterSection'
};

const Template = ({ ...args }) => ({
	Component: FooterSection,
	props: args
});

const mainMenu: MainMenu[] = [
	{
		label: 'toto',
		url: '/'
	},
	{
		label: 'tutu',
		url: '/'
	}
];

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	mainMenu
};
