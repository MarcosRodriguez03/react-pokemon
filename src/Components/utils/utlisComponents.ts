import { Ipokemon, EvolutionChain, IEncounter } from "../Interefaces/Interface"
import HomePageComponent from "../Pages/HomePageComponent"
import fire from '../../assets/fire.png'
import bug from '../../assets/BugIC_Big.png'
import dark from '../../assets/DarkIC_Big.png'
import dragon from '../../assets/DragonIC_Big.png'
import electric from '../../assets/ElectricIC_Big.png'
import fighting from '../../assets/FightingIC_Big.png'
import flying from '../../assets/FlyingIC_Big.png'
import ghost from '../../assets/GhostIC_Big.png'
import grass from '../../assets/GrassIC_Big.png'
import ground from '../../assets/GroundIC_Big.png'
import ice from '../../assets/IceIC_Big.png'
import normal from '../../assets/NormalIC_Big.png'
import poison from '../../assets/PoisonIC_Big.png'
import psychic from '../../assets/PsychicIC_Big.png'
import rock from '../../assets/RockIC_Big.png'
import steel from '../../assets/SteelIC_Big.png'
import water from '../../assets/WaterIC_Big.png'
import fairy from '../../assets/fairy.png'



export let evoArr: string[] = []

export const FetchPokemon = async (putPoke: string) => {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/' + putPoke)
    const data: Ipokemon = await promise.json()
    return data
}
export const FetchEvo = async (id: string) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    const data: EvolutionChain = await promise.json()
    return data
}
export const fetchArea = async (putPoke2: number) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${putPoke2}/encounters`)
    const data = await promise.json()
    return data
}

export const fetchSpecies = async (putPoke2: number) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${putPoke2}`)
    const data = await promise.json()
    return data
}

export const evoTree = (word2: EvolutionChain) => {
    evoArr = [];
    evoArr.push(word2.chain.species.name)
    if (word2.chain.evolves_to.length > 0) {
        // console.log(word2.chain.species.name)
        if (word2.chain.evolves_to.length > 1) {
            for (let i = 0; i < word2.chain.evolves_to.length; i++) {
                evoArr.push(word2.chain.evolves_to[i].species.name)
                // console.log(word2.chain.evolves_to[i].species.name)
                console.log(evoArr)
            }

        } else {
            // console.log(word2.chain.evolves_to[0].species.name)
            evoArr.push(word2.chain.evolves_to[0].species.name)
            if (word2.chain.evolves_to[0].evolves_to.length > 0) {
                evoArr.push(word2.chain.evolves_to[0].evolves_to[0].species.name)
                // console.log(evoPostMan.chain.evolves_to[0].evolves_to[0].species.name)
                console.log(evoArr)
            }
        }
    }
    return evoArr
}

export function randomNumGen() {
    let rndm = Math.floor(Math.random() * 659) + 1;
    return rndm.toString()
}


export const determineType = (type: string) => {
    switch (type) {
        case "fire":
            return fire;
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fighting":
            return fighting;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        case "fairy":
            return fairy;
        default:
            return "";
    }
}
