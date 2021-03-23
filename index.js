
class Stack {

    constructor() {
        this.storage = [];
        this.count = 0;
    }

    push(value) {
        if (!value) {
            console.error(`Push() failed. Empty value`);
            return;
        }
        this.storage[this.count] = value;
        this.count++;
        console.log(`push element - ${value}`);
    }

    pop() {
        try {
            if (!this.count) {
                throw new Error("Pop() failed. Stack is empty");;
            }
            this.count--;
            let value = this.storage[this.count];
            this.storage.length = this.count;
            console.log(`pop element - ${value}`);
            return value;
        }
        catch (error) {
            console.error(`Pop() failed. ${error.message}`);
        }
    }

    peek() {
        try {
            return this.storage[this.count - 1];
        } catch (error) {
            console.error(error.message);
        }
    }

    getLength() {
        return this.count;
    }
}

var console = (function (oldCons) {
    return {
        log: function (text) {
            oldCons.log(`${new Date().toLocaleString()}: ${text}`);
        },
        error: function (text) {
            oldCons.error(`${new Date().toLocaleString()}: ${text}`);
        }
    };
}(window.console));

window.console = console;

let stack = new Stack();

document.getElementById("pushElement").addEventListener('click', () => {

    let pushedElement = document.getElementById("pushedElement");

    stack.push(pushedElement.value);

    if (pushedElement.value) {
        addStackDivElement(pushedElement.value);
    }

    pushedElement.value = '';

    showPeekElement();
    showStackLength();
})

document.getElementById("popElement").addEventListener('click', () => {

    stack.pop();

    try {
        document.getElementById("stack").firstElementChild.remove();
    } catch {

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

function addStackDivElement(el) {
    let div = document.createElement('div');
    div.className = "stack_element";
    div.innerHTML = el;
    document.getElementById("stack").prepend(div);
}
