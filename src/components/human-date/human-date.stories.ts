import HumanDate from './human-date.svelte';

export default {
	component: HumanDate,
	title: 'Design System/HumanDate'
};

const Template = ({ ...args }) => ({
	Component: HumanDate,
	props: args
});

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
  dateString: '2016-01-01' 
};
