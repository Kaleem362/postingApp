import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    POST_LIST_DEFAULT
  );

  const addPost = (userid, postTitle, postBody, PostTags, postreactions) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        tags: PostTags,
        reaction: postreactions,
        userid: userid,
      },
    });

    console.log(
      `${userid} ${postTitle} ${postBody} ${PostTags} ${postreactions}`
    );
  };
  const deletePost = (postid) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: { postid },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const POST_LIST_DEFAULT = [
  {
    id: 1,
    title: "going to university",
    body: "Hello !! friends i am going to university, our new semester is about to start from today, wish me success ",
    tags: ["universityvibes", "unilife"],
    reaction: 12,
    userid: 1,
  },
  {
    id: 2,
    title: "Computer science Degree",
    body: "I am very happy that i have recieved my Degree of computer science today , very excited to see my degree, yayy..!!",
    tags: ["graudationcelebration", "happiness"],
    reaction: 102,
    userid: 2,
  },
  {
    id: 3,
    title: "Bought a luxurious Car for myself",
    body: "Hello friends  , i have bought a luxurious car for myself , i am very happy and excited to drive it",

    tags: ["carhappiness", "luxurycar"],
    reaction: 534,
    userid: 3,
  },
  {
    id: 4,
    title: "joining my new job today",
    body: "Hello dears ! i am excited to join my new job today , wish me best of luck",
    tags: ["newjob", "employmenthappiness"],
    reaction: 122,
    userid: 4,
  },
];

export default PostListProvider;
