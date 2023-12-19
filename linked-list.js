// Node factory
function createNode(value) {
    return {
        value: value,
        next: null
    };
}

// list factory
function createList() {
    let head = null;
    let tail = null;

    const append = function(value) {
        const newNode = createNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };

    const prepend = function(value) {
        const newNode = createNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };

    const size = function() {
        let current = this.head;
        let counter = 0;
        while(current) {
            counter++;
            current = current.next;
        }
        return counter;
    };

    const listHead = function() {
        return this.head;
    };

    const listTail = function() {
        return this.tail;
    };

    const at = function(index) {
        let current = this.head;
        let counter = 0;

        while(counter !== index) {
            counter++;
            current = current.next;
        }

        return current;
    };

    const pop = function() {
        let current = this.head;
        let previous = null;

        while(current.next !== null) {
            previous = current;
            current = current.next;
        }
        
        previous.next = null;
        this.tail = previous;

        // returns the removed element
        return current;
    };

    const contains = function(value) {
        let current = this.head;
        while(current) {
            if(value === current.value) {
                return true;
            }

            current = current.next;
        }

        return false;
    };

    const find = function(value) {
        let current = this.head;
        let counter = 0;

        while(current) {
            if(value === current.value) {
                return counter;
            }

            current = current.next;
            counter++;
        }

        return null;
    };

    const toString = function() {
        let current = this.head;
        let string = ''

        while (current) {
            string += `( ${current.value} ) -> `;
            current = current.next;
        }
        
        string += '( null )'
        return string;
    };

    const insertAt = function(value, index) {
        let current = this.head;
        let previous;
        let counter = 0;
        const newNode = createNode(value);
        let newList = '';

        while(current) {
            if(counter === index) {
                newNode.next = current;
                previous.next = newNode;
            }

            counter++;
            previous = current;
            current = current.next;
        }

        if(index >= counter) {
            return 'no such index'
        }

        newList = this.toString();
        return newList;
    };

    const removeAt = function(index) {
        let current = this.head;
        let previous;
        let counter = 0;
        let removedNode;

        while(current) {
            if(counter === index) {
                previous.next = current.next;
                removedNode = current;
            }

            counter++;
            previous = current;
            current = current.next;
        }

        if(index >= counter) {
            return 'no such index'
        }

        return removedNode;
    }

    return {
        head, tail, append, prepend, size,
        listHead, listTail, at, pop, contains, find,
        toString, insertAt, removeAt
    };
}

const sample = createList();
sample.append(4);
sample.append(5);
sample.append(6);
sample.append(7);
sample.prepend(3);
sample.prepend(2);
sample.prepend(1);
console.log(sample.size()); // 7
console.log(sample.listHead()); // {value: 1, next: {…}}
console.log(sample.listTail()); // {value: 7, next: null}
console.log(sample.at(0)); // {value: 1, next: {…}}
console.log(sample.pop()); // {value: 7, next: null}
console.log(sample.contains(4)); // true
console.log(sample.contains(8)); // false
console.log(sample.find(1)); // 0
console.log(sample.find(10)); // null
console.log(sample.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( null )
console.log(sample.insertAt('a',3)); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( a ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( null )
console.log(sample.insertAt('a',7)); // no such index
console.log(sample.removeAt(3)); // {value: 'a', next: {…}}
