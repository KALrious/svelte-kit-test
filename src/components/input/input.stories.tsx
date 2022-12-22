import Input from './input.svelte';

export default {
	title: 'Design System/Input',
	component: Input
};

const Template = ({ ...args }) => ({
	Component: Input,
	props: args
});

export const Defaults = Template.bind({});

Defaults.args = {
	placeholder: 'Enter your name',
	type: 'email'
};
