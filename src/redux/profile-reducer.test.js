import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
  posts: [
    {
      id: 1,
      maseege: "hi, how are you?",
      likesCount: 15,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 2,
      maseege: "it's my first post!!",
      likesCount: 101,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 3,
      maseege: "Have a goog day!!",
      likesCount: 17,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 4,
      maseege: "Yo",
      likesCount: 13,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 5,
      maseege: "Yo",
      likesCount: 104,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
  ],
  date: {
    foto:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1e94b089-414e-4ee9-a40a-2f05a8957568/220x330",
    name: "Alexander Danilin",
    dob: "02.12.1983",
    city: "Mogilev",
    education: "speciaal",
    webSite: "https://www.instagram.com/sasha_al4i/.com/sasha_al4i",
  },
  profileFoto:
    "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
  profile: null,
  status: "hello",
};

test("length of posts should be incremented", () => {
  // 1 test date 
  let action = addPost("newPost"); 
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts.length).toBe(6);  
});

test("message of new post should be correct", () => {
  // 1 test date  
  let action = addPost("newPost"); 
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation  
  expect(newState.posts[5].maseege).toBe("newPost");  
  });

test("after deleting length of messages should be decrement", () => {
  // 1 test date  
  let action = deletePost(1); 
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation  
  expect(newState.posts.length).toBe(5);
  });

test("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1 test date  
  let action = deletePost(1000); 
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation  
  expect(newState.posts.length).toBe(5);
    });



