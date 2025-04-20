export default function BlogPostPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Blog: {id}</h1>
      {/* Render your blog content here */}
    </div>
  );
}
