
/**
 * @returns {import("@remix-run/node").MetaDescriptor[]}
 */
export const meta = () => [
  {
    title: "Personal Finance Manager | Index Page",
  },
];

export default function Index() {
  return (
    <article className="index-page">
      <h1>Finance Manager</h1>
      <p>Let&apos;s get this done!</p>
    </article>
  );
}
