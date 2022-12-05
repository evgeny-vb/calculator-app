import { makeAutoObservable } from "mobx";
import {dark, light} from "../theme.styles";

class UiState {
  theme = dark;

  constructor() {
    makeAutoObservable(this);
  }

  get isLightTheme() {
    return this.theme.name === light.name
  }

  get isDarkTheme() {
    return this.theme.name === dark.name
  }


  toggleTheme() {
    this.theme = this.isDarkTheme ? light : dark;
  }
}

export default new UiState();
