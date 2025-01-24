

const GetPost = async (id) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return result.json();
}

export default GetPost;