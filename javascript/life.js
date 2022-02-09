class Life {
    constructor(){
        this.x = 40
        this.y = 10
        this.width = 20
        this.height = 15
        this.img = new Image()
        this.img.src = "./Images/heart.png" 
    }

    drawLife = (paramTrue) => {
        if(paramTrue === true)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
    }
}