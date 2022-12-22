import Input from './input.svelte';

export default {
	title: 'Design System/Input',
	component: Input
};

const Template = ({ ...args }) => ({
	Component: Input,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	placeholder: 'Enter your name',
	type: 'email'
};
