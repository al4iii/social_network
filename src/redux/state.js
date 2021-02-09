import { rerenderEntireTree } from "../render";

let state = {
  prolifePage: {
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
      name: "Alexander Danilin",
      dob: "02.12.1983",
      city: "Mogilev",
      education: "speciaal",
      webSite: "https://www.instagram.com/sasha_al4i/.com/sasha_al4i",
    },
  },
  dialogsPage: {
    maseeges: [
      { id: 1, maseege: "Hi?" },
      { id: 2, maseege: "How are you?" },
      { id: 3, maseege: "Have a goog day!!" },
      { id: 4, maseege: "Yo" },
      { id: 5, maseege: "Yo" },
    ],
    dialog: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Alina" },
      { id: 4, name: "Zora" },
      { id: 5, name: "Kon'" },
    ],
  },
  navbarPage: {
    avatar: [
      {
        name: "ilich",
        avatarforo:
          "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
      },
      {
        name: "albert",
        avatarforo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2f03P_CydoVTsypLTSdNSHgbkyQqjIQZWQ&usqp=CAU",
      },
      {
        name: "victor",
        avatarforo: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/225/986/5.jpg",
      },
    ],
  },
};

export let addPost = (postMassege) => {
  
  let newPost = {
    id: 5,
    maseege: postMassege,
    likesCount: 1,
    avatarforo:
      "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
  };
  state.prolifePage.posts.push(newPost);
  rerenderEntireTree(state);
};
export default state;
