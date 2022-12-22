import HeroBlog from './hero-blog.svelte';

export default {
	component: HeroBlog,
	title: 'Design System/HeroBlog'
};

const Template = ({ ...args }) => ({
	Component: HeroBlog,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	title: 'Awsome'
};
