import React, { useContext, useEffect, useState } from 'react'
import { FetchEvo, FetchPokemon, determineType, evoArr, evoTree, fetchArea, fetchSpecies, randomNumGen } from '../utils/utlisComponents'
import { Ipokemon, Iability, Ifrontdefault, Iofficialartwork, Iother, pokeDefault, Iarea, areaDefault } from '../Interefaces/Interface';
import '../../style/styles.css'
import { savelocalStorage, getlocalStorage, removeFromLocalStorage } from "../utils/localStorage"

import emptyHeart from '../../assets/emptyHeart.png'
import fullHeart from '../../assets/fullHeart.png'
import x from '../../assets/xSymbol.png'

const HomePageComponent = () => {
    const [pokemon, setPokemon] = useState<Ipokemon>(pokeDefault);
    const [inputPoke, setInputPoke] = useState<string>("victini"); //this hold the pokemon entered
    const [inputPokeOnChange, setInputPokeOnChange] = useState<string>("victini");
    const [location, setLocation] = useState<string>()

    const [moves, setMoves] = useState<string[]>([])
    const [evos, setEvos] = useState<string[]>([])
    const [abilArr, setAbilArr] = useState<string[]>([])
    const [typeUse, setTypeUse] = useState<string[]>([])
    const [evoObject2, setEvoObject2] = useState<string[]>([])

    const [localStor, setLocalStor] = useState<string[]>([]);
    const [bool1, setBool1] = useState<boolean>(false);

    const [isVisible, setIsVisible] = useState(true); // State to track visibility
    const [heart, setHeart] = useState<string>();
    const [isShiny, setIsShiny] = useState(true);
    const [bgColor, setBgColor] = useState("string")


    const determineBg = (type: string) => {
        switch (type) {
            case "fire":
                setBgColor("bg-yellow-500");
                break;

            case "bug":
                setBgColor("bg-green-500");
                break;

            case "dark":
                setBgColor("bg-gray-700");
                break;

            case "dragon":
                setBgColor("bg-indigo-500");
                break;

            case "electric":
                setBgColor("bg-yellow-300");
                break;

            case "fighting":
                setBgColor("bg-red-500");
                break;

            case "flying":
                setBgColor("bg-blue-300");
                break;

            case "ghost":
                setBgColor("bg-purple-500");
                break;

            case "grass":
                setBgColor("bg-green-300");
                break;

            case "ground":
                setBgColor("bg-yellow-600");
                break;

            case "ice":
                setBgColor("bg-blue-200");
                break;

            case "normal":
                setBgColor("bg-gray-400");
                break;

            case "poison":
                setBgColor("bg-purple-400");
                break;

            case "psychic":
                setBgColor("bg-pink-500");
                break;

            case "rock":
                setBgColor("bg-yellow-700");
                break;

            case "steel":
                setBgColor("bg-gray-500");
                break;

            case "water":
                setBgColor("bg-blue-500");
                break;

            case "fairy":
                setBgColor("bg-pink-200");
                break;

            default:
                setBgColor("");
                break;
        }
    };
    const toggleShiny = () => {
        setIsShiny(!isShiny);
    };


    const determineHeart = () => {
        let localStor = getlocalStorage()

        if (localStor.includes(pokemon.name)) {
            setHeart(fullHeart)
        } else {
            setHeart(emptyHeart)
        }

    }
    const determineHeartOnLoad = (para: string) => {
        let localStor = getlocalStorage()

        if (localStor.includes(para)) {
            setHeart(fullHeart)
        } else {
            setHeart(emptyHeart)
        }

    }


    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleSwitch = () => {

        setBool1((bool1: boolean) => !bool1);


    }

    const handleAdd = (para: string): void => {
        let locals: string[] = getlocalStorage();

        if (locals.includes(para)) {
            removeFromLocalStorage(para)
        } else {
            savelocalStorage(para)
        }
    }

    const EnterClick = () => {
        setInputPoke(inputPokeOnChange)

    }

    useEffect(() => {

        const FetchFirstApi = async () => {
            const fetchedData = await FetchPokemon(inputPoke)

            if (fetchedData.id > 649) {
                return alert("This pokedex only goes up to Gen V")
            }

            setPokemon(fetchedData)
            console.log(fetchedData)
            determineHeartOnLoad(fetchedData.name)
            determineBg(fetchedData.types[0].type.name)


            const area = await fetchArea(fetchedData.id)

            // locations
            try {
                const area = await fetchArea(fetchedData.id)
                if (!area) {

                }
                setLocation(area[0].location_area.name)
            } catch (error) {
                setLocation("N/A")
            }
            //evo chain
            const species = await fetchSpecies(fetchedData.id)
            console.log(species.evolution_chain.url)

            const word = await fetch(species.evolution_chain.url)
            const word2 = await word.json()
            console.log(await word2.chain.species.name)
            evoTree(word2)
            setEvos(evoArr)
            //abil for tmrw


            let abilitiesArray = fetchedData.abilities.map(currentMove => {
                return currentMove.ability.name
            })
            console.log(abilitiesArray)
            setAbilArr(abilitiesArray)


            //type for tmrw 
            let typeArr = [];
            for (let i = 0; i < fetchedData.types.length; i++) {
                typeArr.push(fetchedData.types[i].type.name)
            }
            setTypeUse(typeArr)

            console.log(typeArr)

            // moves for tmrw
            let moveArray = fetchedData.moves.map(currentMove => {
                return currentMove.move.name.replace("-", " ")
            })
            console.log(moveArray)
            setMoves(moveArray)

            let test = [];
            for (let i = 0; i < evoArr.length; i++) {
                let picSrc = await FetchPokemon(evoArr[i])
                test.push(picSrc.sprites.other['official-artwork'].front_default)
            }
            setEvoObject2(test)
        }
        FetchFirstApi()
    }, [inputPoke]) // trigger needed run the useeffect

    useEffect(() => {
        let getLocal = getlocalStorage()
        setLocalStor(getLocal)
    }, [bool1])


    return (
        <div className={bgColor}>
            {/* navbar */}
            <div className="flex justify-center">
                <div
                    className="px-[25px] lg:px-0 max-w-[1720px] w-[1720px] lg:flex lg:flex-row gap-x-12 lg:gap-x-6 md:grid md:grid-cols-3 mt-25px md:mt-[50px] lg:mt-[100px] mb-25px md:mb-[50px]">
                    <input id="inputBox" className=" h-[60px] w-full md:col-span-3 lg:w-[400px] mt-[25px] md:mt-0 customText"
                        type="text "
                        onChange={(e) => setInputPokeOnChange(e.target.value)} onKeyDown={(e: any) => e.key === 'Enter' ? setInputPoke(e.target.value) : null}
                    />

                    <div id="searchBtn"
                        className="bg-[#0066FF] h-[60px] flex items-center justify-center lg:w-fit lg:px-[25px] lg:py-[10px] rounded-[15px] mt-[25px] md:mt-[50px] lg:mt-0">
                        <p className="text-white text-[20px] md:text-3xl text-center"
                            onClick={() => EnterClick()}
                        >Search</p>
                    </div>


                    <div id="randomBtn"
                        className=" bg-[#3F8A38] h-[60px] flex items-center justify-center lg:w-fit lg:px-[25px] lg:py-[10px] rounded-[15px] mt-[25px] md:mt-[50px] lg:mt-0"
                        onClick={() => setInputPoke(randomNumGen())}
                    >
                        <p className="text-white text-[20px] md:text-3xl text-center">Random</p>
                    </div>


                    <div ata-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                        id="getFavoritesBtn"
                        className="bg-[#FF3F3F] h-[60px] flex items-center justify-center lg:w-fit lg:px-[25px] lg:py-[10px] rounded-[15px] mb-[25px] md:mb-0 mt-[25px] md:mt-[50px] lg:mt-0"
                        onClick={toggleVisibility}
                    >
                        <p className="text-white text-[20px] md:text-3xl text-center">Favorites</p>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="flex justify-center pb-[80px]">
                <div className="max-w-[1720px]  w-[1720px] ">
                    <div
                        className="rounded-[15px] bg-white grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-y-12 lg:gap-12 p-[25px] md:p-[50px]">
                        <div id="background2"
                            className={`order-1 lg:order-none rounded-[15px] w-full sm:min-h-[655px] sm:h-auto flex justify-center items-center ${bgColor}`}

                        >
                            {isShiny == true && <img id="coverPic" className=" w-[500px] h-auto" src={pokemon.sprites.other['official-artwork'].front_default} alt="current pkmn" onClick={() => toggleShiny()} />}
                            {isShiny == false && <img id="coverPic" className=" w-[500px] h-auto" src={pokemon.sprites.other['official-artwork'].front_shiny} alt="current pkmn" onClick={() => toggleShiny()} />}

                        </div>

                        <div className="order-3 rounded-[15px] lg:order-none bg-[#EEEEEE] min-h-44 lg:h-auto lg:row-span-2 w-full ">
                            <div className="px-[25px] py-[50px]">
                                <div className="customText">
                                    <p>Location:</p>
                                    <p id="locationText">{location} </p>
                                </div>
                                <div className="customText py-[25px] lg:py-[50px] ">
                                    <p>Moves:</p>
                                    <div className="overflowBox">
                                        <p id="moveText">  {
                                            moves.map((ele: string) => {
                                                return <span
                                                    className='customText'
                                                    key={ele}>{ele}, </span>
                                            })
                                        }</p>
                                    </div>

                                </div>
                                <div className="customText">
                                    <p>Abilities:</p>
                                    <div className="overflowBox">
                                        <p id="AbilitiesText">  {
                                            abilArr.map((ele: string) => {
                                                return <span key={ele}>{ele}, </span>
                                            })
                                        }</p>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className="order-2 lg:order-none px-[25px] py-[50px] rounded-[15px] bg-[#EEEEEE] w-full min-h-44 ">
                            <span className="flex flex-row gap-x-6 items-center">
                                <p id="pkmnName" className="customText" >Name: {pokemon.name}</p>
                                <img className=" w-[20px] md:w-[40px]  h-[20px]  md:h-[40px]" src={heart}
                                    onClick={() => { handleAdd(pokemon.name); handleSwitch(); determineHeart() }}
                                    alt="fire type test" id="saveBtn" />
                            </span>
                            <p id="pkmnNum" className="customText py-[25px] lg:py-[50px]">PokeDex Number: {pokemon.id}</p>
                            <div className="flex flex-row gap-x-6 items-center" id="injectHere">
                                <p id="pkmnType" className="customText">Type/s </p>
                                {
                                    typeUse.map((ele: string) => {

                                        return <img className='md:w-[120px] md:h-[40px] w-[75px] h-[25px]' src={determineType(ele)} alt="type" />


                                    })
                                }

                            </div>
                        </div>


                        <div
                            className="order-4 lg:order-none rounded-[15px] bg-[#4D4D4D] w-full min-h-[300px] h-auto lg:col-span-2">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-48 py-[90px]" id="injectEvo">

                                {/*  */}
                                {
                                    evoObject2.map((ele: string) => {
                                        return <div className=" flex justify-center items-center ">
                                            <img className="w-[300px] h-[300px]" alt='evo imgs' src={ele} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={`toggle-div ${isVisible ? 'visible' : 'hidden'}`}>

                <div className="left-div p-[30px]">
                    <div className='flex justify-end'>
                        <img src={x} className='w-[30px] h-[30px]' alt="close button" onClick={() => toggleVisibility()} />
                    </div>
                    {
                        localStor && localStor.map((ele: string) => {
                            return <div >
                                <div className='px-[25px]  bg-white rounded-[15px] py-[35px] flex justify-between  items-center mt-[25px]'>

                                    <p
                                        key={ele} onClick={() => { setInputPoke(ele); toggleVisibility() }}
                                        className=' ml-[30%] text-center customText text-black'> {ele}</p>

                                    <button
                                        onClick={() => { removeFromLocalStorage(ele); handleSwitch(); toggleVisibility(); determineHeart() }}
                                        className='w-[50px] h-[50px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 pl-[40px] dark:hover:bg-gray-600 dark:hover:text-white mr-[5%]
                                '>X</button>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default HomePageComponent
