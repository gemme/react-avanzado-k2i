// Dumb components
// statelss component
export function FormatTitle(props: { title: string }) {
  return (
    <h1
      style={{
        color: 'blue',
      }}
    >
      {'Hello ' + props.title}
    </h1>
  );
}
