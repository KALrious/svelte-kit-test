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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	href: '/',
	label: '^'
};
