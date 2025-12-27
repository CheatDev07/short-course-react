
// components/ErrorPage.jsx
import { useRouteError, Link } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! Something went wrong</h1>
      <p>{error?.message || "Unknown error"}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
