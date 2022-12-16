<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import Button from './Button.svelte';

</script>

<Meta
  title="Design System/Button"
  component={Button}
/>

<Template let:args>
  <Button {...args} />
</Template>
