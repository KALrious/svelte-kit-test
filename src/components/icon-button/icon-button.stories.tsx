import IconButton from './icon-button.svelte';

export default {
	component: IconButton,
	title: 'Design System/IconButton'
};

const Template = ({ ...args }) => ({
	Component: IconButton,
	props: args
});

export const Default = Template.bind({});

Default.args = {
	href: '/',
	label: '^'
};
