var NB_MILLISECONDS_IN_SECOND = 1000;
var NB_MILLISECONDS_IN_MINUTE = 60 * 1000;

var chrono = {
    frequence: 10,
    ellapsedTime: 0,
    interval: null,

    start(callback) {

        if (this.interval !== null) {
            console.warn("Chrono déjà démarré...");
            return;
        }
        console.log("Start !");
        var self = this;
        this.interval = window.setInterval(function () {
            self.update(callback);
        }, this.frequence);
    },

    stop() {
        if (this.interval === null) {
            console.warn("Chrono pas encore démarré...");
            return;
        }
        clearInterval(this.interval);
        this.interval = null;
        console.log("Stop !");
    },

    update(callback) {
        this.ellapsedTime = this.ellapsedTime + this.frequence;
        this.displayEllapsedTime();
        callback();
    },

    reset(callback) {
        this.ellapsedTime = 0;
        this.displayEllapsedTime();
        console.log("Temps rénitialisé !")
        callback();
    },

    displayEllapsedTime() {
        // nombre de minutes écoulées
        var m = Math.floor(this.ellapsedTime / NB_MILLISECONDS_IN_MINUTE); // arrondi à l'entier inférieur
        var rest = this.ellapsedTime % NB_MILLISECONDS_IN_MINUTE;
        // nombre de secondes écoulées
        var s = Math.floor(rest / NB_MILLISECONDS_IN_SECOND);
        // nombre de millisecondes restantes
        var ms = rest % NB_MILLISECONDS_IN_SECOND;
        // formatter les valeurs numériques (en ajoutant les zéros nécessaires...)
        var result = pad(m, 2, "0") + ":" + pad(s, 2, "0") + ":" + pad(ms, 3, "0");
        // console.log(result);
        return chrono.result = result;
    },
};





