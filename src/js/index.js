require("@babel/polyfill");
import Search from "./model/Search";

// web app status
// hailt query ur dun
// uzuulj baiga jor
// liked jor
// ordered joriin nairlaga

const state = {};

const controlSearch = async () => {
  //   1 => webees hailtynh tulhur ug gargaj awna
  const query = "pizza";

  if (query) {
    //  2 => shine hailtyn object uusgej ogno
    state.search = new Search(query);

    // 3 => hailt hihihed zoruilj delgetsiin UI beltgene

    // 4 => hailtyg guitsetgene
    await state.search.doSearch();
    // 5 => hailtyn ur dung delgetsend guitsetgene
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
