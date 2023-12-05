class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(canvas) {
        if (canvas.getContext) {
            const ctx = canvas.getContext("2d");

            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else {
            console.error("Trình duyệt không hỗ trợ canvas.");
        }
    }
}
let myRectangle = new Rectangle(10, 10, 200, 100, "#000000");

let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

myRectangle.render(canvas);
