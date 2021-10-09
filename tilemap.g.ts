// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`100010000505050505050505050505050505050505040404040404040704040a05040405050404040808090404040404060404050c0404040404040505050504070404050504070505050506040b0505040404050504040505050504040404050505040505060606060505040604040404040c05050604040505070a0604040d0d0d040505060407050506060406040404040405050a0404050505050406050505050405050505050506050505060604040504050506040406060b06050604040302050505060e0e0e060606050c060404040505050606040606060605060405050504050504030102060605040a04040404040505050505050505050605050505050505`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
2 . . . . . . . . . . . 2 . . . 
. . 2 . . . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . 2 . . . . 2 2 2 . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . 2 2 . . 
. . 2 2 2 . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles4,sprites.castle.rock0,sprites.castle.rock1,sprites.castle.rock2,sprites.castle.shrub,sprites.castle.saplingPine,sprites.castle.saplingOak,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
