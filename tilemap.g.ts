// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000602100b0b0b0b0b0b0b0b0b0b0b0b0a1b01140000000000000000000000000803011400130e0e0e0e0e0e0e0e0e0e1803011400120b0b0b0a0d0d0101010104030114000000000014010101010101040301120b0b0b0a00140c0c0c0c0c1104030c0c0c11011400140000000000170409000000190114001400100b0a001704030b0a00190114001400170114001704030114000f0c1100140017011400170403011400000017000000130c180017040301120b0a00170b0b0b1400000017040301010114000f0c0c0c180010161504030101011400000000000000171a010403010101120b0b0b0b0b0b0b1501010405020202020202020202020202020207`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . . . . . 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 . . . . . 2 2 
. . . . 2 2 2 . 2 . 2 2 2 . 2 2 
2 2 2 . 2 2 2 . 2 . 2 2 2 . 2 2 
2 2 2 . 2 2 2 . 2 . 2 2 2 . 2 2 
2 2 2 . . . 2 . . . 2 2 2 . 2 2 
2 2 2 2 2 . 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 
2 2 2 2 2 . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairLarge,sprites.dungeon.stairWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleRedCrystal,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
