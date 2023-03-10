import Button from './Button.svelte';

export default {
	component: Button,
	title: 'Design System/Button'
};

const Template = ({ ...args }) => ({
	Component: Button,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	label: 'Button'
};
