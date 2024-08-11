document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');

    fetch('posts.json') // Assuming posts.json is in the same directory as blog.html
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post'); // Add a class for styling
                
                // Create and append the title
                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;
                postElement.appendChild(titleElement);
                
                // Create and append the date
                const dateElement = document.createElement('p');
                dateElement.classList.add('post-date');
                dateElement.textContent = `Posted on ${post.date} by ${post.author}`;
                postElement.appendChild(dateElement);
                
                // Create and append the content
                const contentElement = document.createElement('p');
                contentElement.classList.add('post-content');
                contentElement.textContent = post.content;
                postElement.appendChild(contentElement);
                
                // Append the post to the blog list
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});

