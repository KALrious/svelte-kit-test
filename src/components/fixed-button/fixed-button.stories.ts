import FixedButton from './fixed-button.svelte';

export default {
	component: FixedButton,
	title: 'Design System/FixedButton'
};

const Template = ({ ...args }) => ({
	Component: FixedButton,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	href: '/',
	label: '^'
};
