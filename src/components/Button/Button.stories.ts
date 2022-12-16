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
