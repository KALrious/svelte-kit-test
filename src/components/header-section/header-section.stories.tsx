import HeaderSection from './header-section.svelte';

export default {
	title: 'Pages/Header',
	component: HeaderSection
};

const Template = ({ ...args }) => ({
	Component: HeaderSection,
	props: args
});

export const Defaults = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Defaults.args = {
	mainMenuLinks: [
		{ label: 'Home', url: 'home' },
		{ label: 'Blog', url: 'blog' }
	]
};
