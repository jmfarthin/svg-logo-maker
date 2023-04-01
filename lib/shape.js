class Shape {
    constructor(text, color, fillColor, shape) {
        this.text = text,
            this.color = color,
            this.fillColor = fillColor
        this.shape = shape
    }
    renderSVG() {
        return `<svg version="1.1"
       width="400" height="400">
       ${this.render()} 
       ${this.renderText()}
       </svg>`
    }
    renderText() {
        return `<text x="200" y="255" font-size="125" font-family="impact" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(text, color, fillColor) {
        super(text, color, fillColor, "circle")
    }
    render() {
        return `<circle cx="200" cy="200" r="150" fill="${this.fillColor}"/>`
    }
}

class Triangle extends Shape {
    constructor(text, color, fillColor) {
        super(text, color, fillColor, "triangle")
    }
    render() {
        return `<polygon points="200 0, 400 300, 0 300" fill="${this.fillColor}" />`
    }
}

class Square extends Shape {
    constructor(text, color, fillColor) {
        super(text, color, fillColor, "rectangle")
    }
    render() {
        return `<rect x="50" y="50" width="300" height="300" fill="${this.fillColor}" />`
    }
}

// const newRec = new Square('JMF', 'black', 'green')

// console.log(newRec.renderSVG());

const newLogo = ({ text, color, fillColor, shape }) => {
    switch (shape) {
        case 'triangle':
            const newTriangle = new Triangle(text, color, fillColor);
            return newTriangle.renderSVG();
        case 'square':
            const newSquare = new Square(text, color, fillColor);
            return newSquare.renderSVG();
        default:
            const newCircle = new Circle(text, color, fillColor);
            return newCircle.renderSVG();
    };
};

// const svcLogo = new Square('JMF', 'black', 'green')
//     return svcLogo.renderSVG();
// console.log(newLogo());

module.exports = { newLogo, Shape, Triangle, Square, Circle };