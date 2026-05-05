class Liquid {
    constructor() {
        this.pools = new Map();
        this.flows = new Map();
        this.step = 0;
        this.state = 'idle';
        this.element = null;
    }
    
    create() {
        console.log('CREATING LIQUID ...')
        const main = document.querySelector('main');
        if (!main) return console.error("Main element not found");
        
        this.element = document.createElement('div');
        this.element.className = 'liquid';
        
        main.appendChild(this.element);
        console.log('LIQUID CREATED')
    }
}

function init() {
    console.log('INITIALIZING LIQUID APPLICATION ...');
    const liquid = new Liquid();
    liquid.create();
    console.log('LIQUID APPLICATION INITIALIZED');
}

init();