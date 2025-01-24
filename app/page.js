import Posts from './components/Posts';

const result = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await result.json();


const page = async() => {
  return (
    <div className="container mx-auto">
      <h2 className="my-6 text-2xl font-semibold">This is Our Latest Article</h2>
      <Posts posts={data}></Posts>
    </div>
  )
}

export default page