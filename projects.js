class Frame {
    constructor(width, height, depth, x, y, z, tex) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.x = x;
        this.y = y;
        this.z = z;
        this.tex = tex; 
    }

    display() {
        push()
        translate(this.x, this.y, this.z)
        texture(this.tex)
	    box(this.width, this.height, this.depth)
        pop()
    }

    zoomInX() {

        if (scrollProg >= width && scrollProg <= width * 2) {
            background(255, 0, 0);
        
        }
    }

}