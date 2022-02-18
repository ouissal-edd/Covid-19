import React, { useState, useEffect } from 'react'
import maladies from '../../maladie'
import axios from 'axios'

export const Formulaire = () => {
    const [cin, setCIN] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');
    const [adress, setAdress] = useState('');
    const [dose, setDose] = useState('');
    const [maladie, setMaladie] = useState('');
    const [traitement, setTraitement] = useState([]);

    const [show, setShow] = useState(true);
    const [hiden, setHiden] = useState(false);
    const [firstHid, setFirst] = useState(false);
    const [secondHid, setSecond] = useState(false);
    const [tirthHid, setTirth] = useState(false);



    const getTraitemet = () => {
        maladies.forEach(element => {
            if (element.maladie === maladie) {
                console.log(element.maladie);
                setTraitement(element.traitemen);
                console.log(traitement);
            }
        });
    }
    useEffect(() => {
        getTraitemet();
    }, [maladie])


    const showInput = (e) => {
        setShow(false);
        setHiden(true);
    }
    const showFirstDose = (e) => {
        setFirst(true);
        setSecond(false);
        setTirth(false);



    }
    const showSecondDose = (e) => {
        setFirst(false);
        setSecond(true);
        setHiden(false);
        setTirth(false);


    }
    const showTirthDose = (e) => {
        setFirst(false);
        setSecond(false);
        setTirth(true);
        setHiden(false);

    }
    const hidenInput = (e) => {
        setShow(true);
        setHiden(false);
    }


    const addUser = async (e) => {
        e.preventDefault();
        const Data = {
            'CIN': cin,
            'age': age,
            'tel': tel,
            'adress': adress,
            'dose': dose,
            'maladie': maladie,
            'traitement': traitement
        };
        await axios.post('http://localhost:8000/covid-data/createData', Data)
    }



    return (
        <form onSubmit={addUser} className='px-10'>


            {/* <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">
                <div slot="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon w-5 h-5 mx-2">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <div class="text-xl font-normal  max-w-full flex-initial">
                    There is an error in your code</div>
                <div class="flex flex-auto flex-row-reverse">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div> */}


            <div className="bg-white shadow rounded-lg p-6">
                <div className="grid lg:grid-cols-2 gap-6">


                    <div className="border focus-within:border-orange-600 focus-within:text-orange-600 transition-all duration-600 relative rounded p-1">
                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label htmlFor="cin" className="bg-white text-gray-600 px-1">CIN *</label>
                            </p>
                        </div>
                        <p>
                            <input id="cin" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                                onChange={(e) => setCIN(e.target.value)}
                                placeholder="CIN"
                                value={cin}
                                required
                            />
                        </p>
                    </div>



                    <div className="border focus-within:border-orange-600 focus-within:text-orange-600 transition-all duration-600 relative rounded p-1">
                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label htmlFor="age" className="bg-white text-gray-600 px-1">Age *</label>
                            </p>
                        </div>
                        <p>
                            <input id="age" autoComplete="false" tabIndex="0" type="number" className="py-1 px-1 outline-none block h-full w-full"
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Age"
                                value={age}
                                required
                            />
                        </p>
                    </div>
                    <div className="border focus-within:border-orange-600 focus-within:text-orange-600 transition-all duration-600 relative rounded p-1">
                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label htmlFor="tel" className="bg-white text-gray-600 px-1">Tel *</label>
                            </p>
                        </div>
                        <p>
                            <input id="tel" autoComplete="false" tabIndex="0" type="number" className="py-1 px-1 outline-none block h-full w-full"
                                onChange={(e) => setTel(e.target.value)}
                                placeholder="tel"
                                value={tel}

                            />
                        </p>
                    </div>




                    <div className="border focus-within:border-orange-600 focus-within:text-orange-600 transition-all duration-600 relative rounded p-1">
                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label htmlFor="adress" className="bg-white text-gray-600 px-1">Adress*</label>
                            </p>
                        </div>
                        <p>
                            <input id="adress" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"
                                onChange={(e) => setAdress(e.target.value)}
                                placeholder="adress"
                                value={adress}

                            />
                        </p>
                    </div>


                    {/* Dose */}
                    <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                        <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Dose</div>
                        <label class="flex radio p-2 cursor-pointer">
                            <input class="my-auto transform scale-125" type="radio"
                                onChange={(e) => setDose(e.target.value)}
                                onClick={(e) => showFirstDose(e)}

                                value="firstDose" name="dose" />
                            <div class="title px-2">1ere dose</div>
                        </label>

                        <label class="flex radio p-2 cursor-pointer">
                            <input class="my-auto transform scale-125" value="secondDose" type="radio"
                                onClick={(e) => showSecondDose(e)}
                                onChange={(e) => setDose(e.target.value)}
                                value="secondDose" name="dose" />
                            <div class="title px-2">2eme dose</div>
                        </label>

                        <label class="flex radio p-2 cursor-pointer">
                            <input class="my-auto transform scale-125" value="tirthDose" type="radio"
                                onClick={(e) => showTirthDose(e)}
                                onChange={(e) => setDose(e.target.value)}
                                value="tirthDose" name="dose" />
                            <div class="title px-2">3eme dose</div>
                        </label>
                    </div>
                    {/* dose */}

                    {/* maladie */}
                    {firstHid &&
                        <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                            <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Vous souffrez d'une maladie ?</div>
                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio"
                                    onClick={(e) => showInput(e)}
                                    value="oui" name="maladie" />
                                <div class="title px-2">Oui</div>
                            </label>

                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio"
                                    onClick={(e) => hidenInput(e)}
                                    onChange={(e) => {
                                        setMaladie(e.target.value)
                                        setTraitement(e.target.value)
                                    }}

                                    value="Non"
                                    name="maladie" />
                                <div class="title px-2">Non</div>
                            </label>
                        </div>
                    }
                    {secondHid &&
                        <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                            <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Avez vous des effets secondaire apres votre 1er dose?</div>
                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio"
                                    value="oui" name="maladie" />
                                <div class="title px-2">Oui</div>
                            </label>

                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio"
                                    value="Non"
                                    name="maladie" />
                                <div class="title px-2">Non</div>
                            </label>
                        </div>
                    }

                    {tirthHid &&
                        <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                            <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Avez vous des effets secondaire apres votre 2eme dose?</div>
                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio"
                                    value="oui" name="maladie" />
                                <div class="title px-2">Oui</div>
                            </label>

                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio"
                                    value="Non"
                                    name="maladie"
                                />
                                <div class="title px-2">Non</div>
                            </label>
                        </div>
                    }

                    {hiden &&

                        <>
                            <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                                <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Traitement</div>
                                {maladies.map((maladie, index) => (
                                    <>

                                        <label key={index} class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio"
                                                value={maladie.maladie}
                                                name='nom_maladie'
                                                onChange={(e) => { setMaladie(e.target.value) }}
                                            />
                                            <div class="title px-2">{maladie.maladie}</div>
                                        </label>


                                    </>
                                ))}

                            </div>


                            <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                                <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Medicament</div>

                                <label class="flex radio p-2 cursor-pointer">
                                    <input class="my-auto transform scale-125"
                                        onChange={(e) => { setTraitement(e.target.value) }}
                                        value={traitement} />
                                </label>
                            </div>
                        </>


                    }




                </div>
                <div className="border-t mt-6 pt-3">
                    <button className="rounded text-gray-100 px-3 py-1 bg-orange-600 hover:shadow-inner hover:bg-orange-700 transition-all duration-300">
                        Save
                    </button>

                </div>
            </div>
        </form>



    )
}

export default Formulaire;
