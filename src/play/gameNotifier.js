const GameEvent = {
    Baby: 'Baby',
    Kid: 'Kid',
    Mom: 'Mom',
    Dad: 'Dad',
    End: 'gameEnd',
    Start: 'gameStart',
    System: 'system'
}

class EventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
      } 
}

class GameEventNotifier {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage('Dinos', GameEvent.System, { msg: 'connected' }));
          };
        this.socket.onclose = (event) => {
          console.log("WebSocket closed:", event);
            this.receiveEvent(new EventMessage('Dinos', GameEvent.System, { msg: 'disconnected' }));
        };
        this.socket.onmessage = async (msg) => {
            try {
              const event = JSON.parse(await msg.data.text());
              this.receiveEvent(event);
            } catch {}
        };
    }
    
    broadcastEvent(from, type, value) {
      console.log("broadcasted");
        const event = new EventMessage(from, type, value);
        console.log(JSON.stringify(event));
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }
    
     receiveEvent(event) {
        this.events.push(event);

        //this.events.forEach((e) => {
        this.handlers.forEach((handler) => {
        handler(event);
      //});
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
