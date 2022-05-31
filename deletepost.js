renderPosts(){
    return (this.props.posts, post => {
        return <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
                {post.title}

            </Link>
            <button
                className="Remove"
                onClick={() => this.onDeleteClick(post.id)}
            >Delete {post.id}
            </button>
        </li>
    })
}