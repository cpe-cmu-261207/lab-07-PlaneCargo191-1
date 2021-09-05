import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][],
  color: string
}

let colors = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const createRandomCanvas = () => {
  const output: string[][] = []
  for(let i = 0; i < 16; i++) {
    output[i] = []
    for(let j = 0; j < 16; j++) {
      output[i].push(colors[Math.floor((Math.random() * 12) % 12)])
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  color: '#000000'
})

export const emptyCanvas = () => {
  PixelPainterStore.update(x => {x.canvas = createEmptyCanvas()})
}

export const randomCanvas = () => {
  PixelPainterStore.update(x => {x.canvas = createRandomCanvas()})
}

export const selectColor = (color: string) => {
  PixelPainterStore.update(x => {x.color = color})
}

export const fillColor = (i: number, j: number) => {
  PixelPainterStore.update(x => {x.canvas[j][i] = x.color})
}