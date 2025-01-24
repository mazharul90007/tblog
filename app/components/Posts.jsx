"use client"

import Link from "next/link";

const Posts = ({posts}) => {
    return (
        <div>
            <ul>
                {
                    posts.map((post, index) =>
                        <li key={post.id} >
                            <Link href={`/post/${post.id}`}>
                                <span className="text-amber-700">{index + 1}.</span>
                                <span> {post.title}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Posts;