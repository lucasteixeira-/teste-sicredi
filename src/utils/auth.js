class Auth {

    constructor() {
        this.logado = false;
    }

    login(cb) {
        this.logado = true;
        cb();
    }

    logout(cb) {
        this.logado = false;
    }

    isAuthenticated() {
        return this.logado;
    }

}

export default new Auth();