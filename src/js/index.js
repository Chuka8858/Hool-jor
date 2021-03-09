require("@babel/polyfill");
import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";

// web app status
// hailt query ur dun
// uzuulj baiga jor
// liked jor
// ordered joriin nairlaga

const state = {};

const controlSearch = async () => {
  //   1 => webees hailtynh tulhur ug gargaj awna
  const query = searchView.getInput();

  if (query) {
    //  2 => shine hailtyn object uusgej ogno
    state.search = new Search(query);

    // 3 => hailt hihihed zoruilj delgetsiin UI beltgene
    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchResultDiv);

    // 4 => hailtyg guitsetgene
    await state.search.doSearch();
    // 5 => hailtyn ur dung delgetsend guitsetgene
    clearLoader();
    if (state.search.result === undefined) alert("Hailtaar ilertsgui");
    else searchView.renderRecipes(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
