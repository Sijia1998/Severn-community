import { observable } from 'mobx';

class USERINFO {
    @observable userName;

    @observable passWord;
}

export default new USERINFO();
