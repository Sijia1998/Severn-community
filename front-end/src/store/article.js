import { observable } from 'mobx';

class ARTICLE {
    @observable userName;

    @observable passWord;
}

export default new ARTICLE();
