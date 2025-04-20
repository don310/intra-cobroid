import blogPosts from "@/app/data/blogPosts"; 

export default function BlogPost({ params }) {
  const post = blogPosts[params.id];

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
