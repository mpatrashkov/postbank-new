import { observable, decorate } from "mobx";

class RootStore {
    token = "";
}

decorate(RootStore, {
    token: observable
});

export default RootStore;