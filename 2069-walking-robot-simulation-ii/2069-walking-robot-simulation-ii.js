var Robot = function(width, height) {
    this.w = width;
    this.h = height;
    this.perim = 2 * (width + height - 2);
    this.pos = 0;
    this.moved = false;
};

Robot.prototype.step = function(num) {
    if (this.perim === 0) return;

    this.pos = (this.pos + num) % this.perim;
    this.moved = true;
};

Robot.prototype.getPos = function() {
    let p = this.pos;
    let w = this.w, h = this.h;

    if (p < w - 1) return [p, 0];

    p -= (w - 1);
    if (p < h - 1) return [w - 1, p];

    p -= (h - 1);
    if (p < w - 1) return [w - 1 - p, h - 1];

    p -= (w - 1);
    return [0, h - 1 - p];
};

Robot.prototype.getDir = function() {
    let [x, y] = this.getPos();
    let w = this.w, h = this.h;

    // special case
    if (x === 0 && y === 0 && this.moved) return "South";

    if (y === 0) return "East";         // bottom
    if (x === w - 1) return "North";    // right
    if (y === h - 1) return "West";     // top (FIXED)
    return "South";                     // left
};