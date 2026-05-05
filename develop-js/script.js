class Liquid {
    constructor() {
        this.pools = new Map();
        this.flows = new Map();
        this.step = 0;
        this.state = 'idle';
        this.sim = null;
    }
    
    createSim() {
        const main = document.querySelector('main');
        if (!main) return console.error("Main element not found");
        
        this.sim = document.createElement('div');
        this.sim.id = 'liquid';
        
        main.appendChild(this.sim);
        console.log('SIM LIVE')
    }
}

function init() {
    console.log('INIT LIQUID');
    const liquid = new Liquid();
    liquid.createSim();
    console.log('LIQUID LIVE');
}

init();