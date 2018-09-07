export default (posts, { text, sortBy }) => {
    return posts.filter((post) => post.title.toLowerCase().includes(text.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "date") {
                return a.publishedAt < b.publishedAt ? 1 : -1;
            } else if (sortBy === "title") {
                return a.title > b.title ? 1 : -1;
            }
        });
};