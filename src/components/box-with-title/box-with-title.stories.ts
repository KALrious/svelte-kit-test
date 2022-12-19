import BoxWithTitle from './box-with-title.svelte';

export default {
	component: BoxWithTitle,
	title: 'Design System/BoxWithTitle'
};

const Template = ({...args}) => ({
	Component: BoxWithTitle,
	props: args
});

export const Defaults = Template.bind({});
