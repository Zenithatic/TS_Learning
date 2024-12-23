// Type aliases allow you to create custom names for complex types
type Coordinate = [number, number]

function analyzeCoordinate(coord: Coordinate) {
    console.log(`Coordinate X: ${coord[0]}`)
    console.log(`Coordinate Y: ${coord[1]}`)
}

const coords: Coordinate[] = [[1, 2], [3, 4], [5, 6]]

type CoordinateObject = { x: number, y: number }
const coord1: CoordinateObject = { x: 1, y: 2}

