const groceryShopping = async () => {
    try {
      const butter = await getButter();
      console.log(butter); // Butter is purchased!
      
      const coldDrinks = await getColdDrinks(butter);
      console.log(coldDrinks); // Got cold drinks!
    } catch (error) {
      console.log(error);
    }
  };
  getButter()
  .then((butter) => {
    console.log(butter); // Butter is purchased!
    
    return getColdDrinks(butter);
  })
  .then((coldDrinks) => {
    console.log(coldDrinks); // Got cold drinks!
  })
  .catch((error) => {
    console.log(error);
  });
  const createPost = (post) => {
    return fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  const deletePost = (postId) => {
    return fetch(`/posts/${postId}`, {
      method: 'DELETE'
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  };
  