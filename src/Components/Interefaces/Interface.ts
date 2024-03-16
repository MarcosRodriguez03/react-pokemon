export type Ipokemon = {
    abilities: Iability[]
    name: string
    id: number
    location_area_encounters: string
    sprites: Iother
    moves: Imoves[]
    types: Itype[]
}


//path to types
export type Itype = {
    type: ItypeName
}
export type ItypeName = {
    name: ""
}

//path to moves
export type Imoves = {
    move: Imove
}
export type Imove = {
    name: ""
}



//ability path
export type Iability = {
    ability: Iabilities
    name: string
    url: string

}
type Iabilities = {
    name: string
    url: string
}


// sprite path
export type Iother = {
    other: Iofficialartwork

}
export type Iofficialartwork = {
    'official-artwork': Ifrontdefault
}
export type Ifrontdefault = {
    'front_default': ""
    'front_shiny': ""
}

















// object place holder

export const pokeDefault: Ipokemon = {
    abilities: [
        {
            ability: {
                name: "",
                url: "",
            },
            name: "",
            url: ""
        }
    ],
    name: "",
    id: 0,
    location_area_encounters: "",
    sprites: {
        other: {
            'official-artwork': {
                'front_default': "",
                'front_shiny': ""
            }
        }
    },
    moves: [
        {
            move:
                { name: "" },
        },
    ],
    types: [
        {
            type: { name: "" }
        }
    ],

}







//location idk if needed rn

export type Iarea = {
    area: Ilocations[]
}
export type Ilocations = {
    location_area: IareaName
}

export type IareaName = {
    name: string
}
export const areaDefault: Iarea = {
    area: [
        {
            location_area: {
                name: ""
            }
        }
    ]
}