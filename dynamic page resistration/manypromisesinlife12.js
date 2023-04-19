function updateLastUserActivityTime(user) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      user.lastActivityTime = new Date();

      resolve();

    }, 1000);

  });

}

async function main() {

 const user = { id: 1, lastActivityTime: null };

 const posts = [];



 // Create a post and update user's last activity time

 const createPostPromise = createPost(user, "Hello, world!")

  .then(post => {

   posts.push(post);

   return updateLastUserActivityTime(user);

  });



 // Wait for both promises to resolve and log the result

 await Promise.all([createPostPromise, fetchUserPosts(user.id)])

  .then(([_, userPosts]) => {

   console.log("All posts:", userPosts);

   console.log("Last activity time:", user.lastActivityTime);

  });



 // Delete the last post and log the new set of posts

 await deletePost(user, posts[posts.length - 1].id);

 const newPosts = await fetchUserPosts(user.id);

 console.log("New set of posts:", newPosts);

}



main();