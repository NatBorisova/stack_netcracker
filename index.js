
class Stack {

    constructor() {
        this.storage = [];
        this.count = 0;
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) return undefined;

        let value = this.storage[this.count - 1];
        this.count--;
        this.storage.length = this.count;
        return value;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    getLength() {
        return this.count;
    }
}

class Logger {

    static log(text) {
        console.log(`${new Date().toLocaleString()}: ${text}`);
    }
}

let stack = new Stack();

document.getElementById("pushElement").addEventListener('click', () => {

    let el = document.getElementById("pushedElement").value;
    document.getElementById("pushedElement").value = '';

    if (!el) {
        return
    }

    stack.push(el);
    Logger.log(`push element ${el}`);

    createStackElement(el);

    showPeekElement();
    showStackLength();
})

document.getElementById("popElement").addEventListener('click', () => {

    let el = stack.pop();
    
    if (el === undefined) {
        Logger.log(`try to pop element. Stack is empty`);
    } else {
        document.getElementById("stack").firstElementChild.remove();
        Logger.log(`pop element ${el}`);
    }

    showPeekElement();
    showStackLength();
})

function showPeekElement() {
    let el = stack.peek();
    if (el) {
        document.getElementById("peekedElement").value = el;
    } else {
        document.getElementById("peekedElement").value = '';
    }
}

function showStackLength() {
    document.getElementById("length").value = stack.getLength();
}

function createStackElement(el) {
    let div = document.createElement('div');
    div.className = "stack_element";
    div.innerHTML = el;
    document.getElementById("stack").prepend(div);
}
