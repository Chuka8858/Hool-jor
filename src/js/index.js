require("@babel/polyfill");
import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/Recipe";
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

elements.pageButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    const gotoPageNumber = parseInt(btn.dataset.goto, 10);
    searchView.clearSearchResult();
    searchView.renderRecipes(state.search.result, gotoPageNumber);
  }
});
const r = new Recipe(47746);
r.getRecipe();
