


const post = async ({params}) => {
    const {id} = params
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const post = await result.json();
    return (
        <div className="my-10 container mx-auto">
            <h3 className="text-center text-3xl text-amber-700 w-1-/12 mx-auto font-semibold mb-6">{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default post;