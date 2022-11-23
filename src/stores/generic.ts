import { defineStore } from 'pinia';

export const useGenericStore = defineStore({
  id: 'generic',
  state: () => ({
    genericList: [] as YoutubeResult[],
    number: 0,
    string: 'mystring'
  }),
  actions: {
    setList(list: YoutubeResult[]) {
      this.genericList = list.map(r => {
        return { ...r, added: false };
      });
    },
    resetAdditions() {
      this.genericList = this.genericList.map(r => {
        return { ...r, added: false };
      });
    },
    setAdded(item: YoutubeResult) {
      const result = this.genericList.find(i => i.id === item.id);
      if (result) {
        result.added = true;
      }
    }
  },
  getters: {
    postListStuff: state => {
      const postListStuff = state.postList.map(post => {
        return {
          id: post.id,
          img: post.img,
          profilepic: post.profilepic,
          date: post.date,
          paragraph: post.paragraph
        };
      });
      return postListStuff;
    }
  }
});
