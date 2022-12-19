import CategoryLink from './category-link.svelte';

export default {
	component: CategoryLink,
	title: 'Design System/CategoryLink'
};

const Template = ({ ...args }) => ({
	Component: CategoryLink,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	href: '/',
	name: 'Category'
};
