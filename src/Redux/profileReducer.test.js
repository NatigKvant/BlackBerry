import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
let state = {
  
  postsData:[
      {id:1,message:'Hi, how are you?',likesCount:'15 likes'},
      {id:2,message:'Its my new post',likesCount:'20 likes'},
      {id:3,message:'Look this post',likesCount:'15 likes'},
      {id:4,message:'Looking for a job',likesCount:'8 likes'},
  ]
};

it('length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator("Hello");
  
//2. action
  let newState = profileReducer(state,action);

  //3. Expectation
  expect(newState.postsData.length).toBe(5)
})

it('message of new post should be correct', () => {
  //1. test data
  let action = addPostActionCreator("Hello");
  
//2. action
  let newState = profileReducer(state,action);

  //3. Expectation
  
  expect(newState.postsData[4].message).toBe("Hello")
})

it('after deleting length of messages should be decrement', () => {
  //1. test data
  let action = deletePost(1);
  
//2. action
  let newState = profileReducer(state,action);

  //3. Expectation
  
  expect(newState.postsData.length).toBe(3)
})

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  //1. test data
  let action = deletePost(1000);
  
//2. action
  let newState = profileReducer(state,action);

  //3. Expectation
  
  expect(newState.postsData.length).toBe(4)
})