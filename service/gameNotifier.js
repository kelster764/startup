const GameEvent = {
    System: 'system',
    End: 'gameEnd',
    Start: 'gameStart',
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
            this.receiveEvent(new EventMessage('Dinos', GameEvent.System, { msg: 'disconnected' }));
        };
        this.socket.onmessage = async (msg) => {
            try {
              const event = JSON.parse(await msg.data.text());
              this.receiveEvent(event);
            } catch {}
          };

    }





}
