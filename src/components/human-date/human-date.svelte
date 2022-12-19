<script>
  import { parseISO, format } from 'date-fns';
  export let dateString;
  const date = format(parseISO(dateString), 'MMM d, yyyy');
</script>

<time dateTime={dateString}>{date}</time>

