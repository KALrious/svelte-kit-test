<script lang="ts">
  import { parseISO, format } from 'date-fns';
  export let dateString: string;
  const date = format(parseISO(dateString), 'MMM d, yyyy');
</script>

<time dateTime={dateString}>{date}</time>

