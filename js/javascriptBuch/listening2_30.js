const button = {
    handler: null,
    // Funktion, die einen Callback-Handler erwartet
    onClick: function (handler) {
        this.handler = handler;
    },
    click: function () {
        console.log("button.click:", this);
        this.handler();
    }
};

const handler = {
    log: function () {
        console.log("handler.log:", this);
    },
    // Objektmethode, die weiter unten als Callback-Handler registriert wird
    handle: function () {
        console.log("handler.handle:", this);
        this.log();
    }
}

// Registieren des Callback-Handlers
button.onClick(handler.handle); // Fehler, weil sich this.log() auf das Objekt button bezieht,
// welches keine Objektmethode log() besitzt. 

// Bindet das Objekt handler an die Objektmethode handler.handle, sodass diese in anderen Objekten,
// ausgeführt werden kann.
button.onClick(handler.handle.bind(handler));

// Implizites Aktivieren des Callback-Handlers
button.click();