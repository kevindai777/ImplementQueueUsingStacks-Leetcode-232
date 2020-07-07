//Objective is to design a queue using stacks. We implement 4 methods: 'push', 'pop', 'peek', 'empty'
//'Push' will push a value into the queue
//'Pop' will pop a value out of the queue
//'Peek' will return the top value in the queue
//'Empty' will return if the queue is empty or not.


//Design of a queue using two stacks

class Queue {
    constructor() {
        this.stack = []
        this.temp = []
    }

    push(x) {
        this.stack.push(x)
    }

    pop() {
        //'temp' will become [3,2,1], letting us pop '1' out first
        while (this.stack.length > 0) {
            this.temp.push(this.stack.pop())
        }

        let pop = this.temp.pop()

        while (this.temp.length > 0) {
            this.stack.push(this.temp.pop())
        }

        return pop
    }

    peek() {
        while (this.stack.length > 0) {
            this.temp.push(this.stack.pop())
        }

        let pop = this.temp.pop()
        this.temp.push(pop)

        while (this.temp.length > 0) {
            this.stack.push(this.temp.pop())
        }

        return pop
    }

    empty() {
        return this.stack.length == 0
    }
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.peek()
queue.pop()