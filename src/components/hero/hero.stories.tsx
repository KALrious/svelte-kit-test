import Hero from './hero.svelte';

export default {
	component: Hero,
	title: 'Pages/Hero'
};

const Template = ({ ...args }) => ({
	Component: Hero,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
	headline: 'Awsome',
	subHeadline: 'story',
	scrollAnchorId: 'id'
};
