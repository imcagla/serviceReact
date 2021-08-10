import axios from "axios"; 


async function getData(userID) {
    const {data: userid } = await axios (
        `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    const {data: posts } = await axios (
        `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
    );
    console.log("user id: ",userid);
    console.log("posts:", posts[0]);
};

export default getData;