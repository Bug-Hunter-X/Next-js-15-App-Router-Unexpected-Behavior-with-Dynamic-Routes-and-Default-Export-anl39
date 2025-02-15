```javascript
// app/[...slug]/page.js

function Page({ params }) {
  const { slug } = params;
  if (slug) {
    return (
      <div>Dynamic route content with slug: {slug.join('/')}</div>
    );
  } else {
    return (
      <div>No Slug Provided</div>
    );
  }
}

export default Page; 
```