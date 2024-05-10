type FrameOptions = {
  target:string|Element
  type:'2d'|'webgl'
  widgets:Obj[]
}

function genVertexShaderSource() {
  return `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
  }
  `
}

function genFragmentShaderSource() {
  return `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);

  }
  `
}

class Widget {
  constructor(protected x:number, protected y:number) {}

  render(ctx:CanvasRenderingContext2D) {}
}

class Rectangle extends Widget {
  constructor(x:number, y:number, private width:number, private height:number) {
    super(x, y)
  }

  override render(ctx:CanvasRenderingContext2D) {
    ctx.fillRect(this.x, this.y, this.width, this.height)

  }
}

class Obj {
  render(ctx:WebGLRenderingContext) {

  }
}

class Cube extends Obj {
  override render(ctx:WebGLRenderingContext) {
    const vertexShader = ctx.createShader(ctx.VERTEX_SHADER)
    const fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER)

    ctx.shaderSource(vertexShader, genVertexShaderSource())
    ctx.shaderSource(fragmentShader, genFragmentShaderSource())

    ctx.compileShader(vertexShader)
    ctx.compileShader(fragmentShader)

    const program = ctx.createProgram()

    ctx.attachShader(program, vertexShader)
    ctx.attachShader(program, fragmentShader)

    ctx.linkProgram(program)
    ctx.useProgram(program)

    ctx.clearColor(0, 0, 0, 1)
    ctx.clear(ctx.COLOR_BUFFER_BIT)

    ctx.drawArrays(ctx.POINTS, 0, 1)

  }
}

class Frame {
  private ctx:CanvasRenderingContext2D|WebGLRenderingContext

  constructor({ target, type='2d', widgets }:FrameOptions) {
    target = typeof target === 'string' 
      ? document.querySelector(target)
      : target
    
    const canvas = document.createElement('canvas')

    canvas.width = 600
    canvas.height = 400

    this.ctx = canvas.getContext(type) as any

    target.insertAdjacentElement('afterbegin', canvas)
  
    widgets.forEach(widget=>widget.render(this.ctx as WebGLRenderingContext))
  }


}

new Frame({
  target: document.body,
  type:'webgl',
  widgets:[
    new Cube()
  
  ]
})
