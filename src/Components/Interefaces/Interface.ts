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


export interface EvolutionChain {
    baby_trigger_item: null;
    chain: Chain;
    id: number;
}

export interface Chain {
    baby_trigger_item: null;
    evolves_to: Evolution[];
    is_baby: boolean;
    species: Species;
}

export interface Evolution {
    evolution_details: EvolutionDetail[];
    evolves_to: Evolution[];
    is_baby: boolean;
    species: Species;
}

export interface EvolutionDetail {
    gender: null;
    held_item: null;
    item: Item | null;
    known_move: null;
    known_move_type: null;
    location: null;
    min_affection: null;
    min_beauty: null;
    min_happiness: null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    party_species: null;
    party_type: null;
    relative_physical_stats: null;
    time_of_day: string;
    trade_species: null;
    trigger: Trigger;
    turn_upside_down: boolean;
}

export interface Item {
    name: string;
    url: string;
}

export interface Trigger {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface IEncounter {
    location_area: {
        name: string;
        url: string;
    };
    version_details: IVersionDetail[];
}

export interface IVersionDetail {
    encounter_details: IEncounterDetail[];
    max_chance: number;
    version: {
        name: string;
        url: string;
    };
}

export interface IEncounterDetail {
    chance: number;
    condition_values: any[];
    max_level: number;
    method: {
        name: string;
        url: string;
    };
    min_level: number;
}
