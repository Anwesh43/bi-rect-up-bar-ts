const w : number = window.innerWidth 
const h : number = window.innerHeight 
const strokeFactor : number = 90 
const sizeFactor : number = 6.9 
const delay : number = 20 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#f44336",
    "#9C27B0",
    "#1B5E20",
    "#d50000",
    "#00C853"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}