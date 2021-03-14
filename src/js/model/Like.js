export default class Likes {
  constructor() {
    this.readDataFromLocalStorage();
    if (!this.likes) this.likes = [];
  }

  addLike(id, title, publisher, img) {
    const like = { id, title, publisher, img };
    this.likes.push(like);

    // storagae ru hadgalna
    this.saveDataToLocalstorage();
    return like;
  }

  deleteLike(id) {
    // id гэдэг ID-тэй like-ийг индексийг массиваас хайж олно.
    const index = this.likes.findIndex((el) => el.id === id);

    // Уг индекс дээрх элементийг массиваас устгана
    this.likes.splice(index, 1);
    this.saveDataToLocalstorage();
  }

  isLiked(id) {
    //   if( this.likes.findIndex(el => el.id === id) === -1) return false;
    //   else return true;
    return this.likes.findIndex((el) => el.id === id) !== -1;
  }

  getNumberOfLikes() {
    return this.likes.length;
  }

  saveDataToLocalstorage() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }
  readDataFromLocalStorage() {
    this.likes = JSON.parse(localStorage.getItem("likes"));
  }
}
