import axios from 'axios';

async function getUserAndPosts(userId) {
  
  const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  
  return {
    id: user.data.id,
    name: user.data.name,
    username: user.data.username,
    email: user.data.email,
    address: user.data.address,
    phone: user.data.phone,
    website: user.data.website,
    company: user.data.company,
    posts: posts.data
  };
}
// in Assignment it was asked to export default if not we could just call the function here as -->   const userData = await getUserAndPosts(1); console.log(userData);
export default getUserAndPosts;


