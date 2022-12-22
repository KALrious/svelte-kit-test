import Search from './search.svelte';

export default {
	title: 'Design System/Search',
	component: Search
};

const Template = ({ ...args }) => ({
	Component: Search,
	props: args
});

export const Defaults = Template.bind({});

Defaults.args = {};
