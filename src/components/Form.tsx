import { useState } from 'react'
import style from '../styles/Form.module.css'
import { Accomodation, Hygene, Input, Type } from '../types'

export default function Form() {
    const [input, setInput] = useState<Input>({days: "5", hygene: "normal", type: "beach", accomodation: 'hotel'})

    return (
        <form>
            <label>Anzahl Tage</label>
            <input type="range" min={1} max={30} className={style.slider} onChange={(e) => setInput((prev) => ({...prev, days: e.target.value}))}/>

            <label>Hygiene</label>
            <select name="" id="" onChange={(e) => setInput((prev) => ({...prev, hygene: e.target.value as Hygene}))}>
                <option value="clean">Sauber</option>
                <option value="normal">Normal</option>
                <option value="dirty">Dreckig</option>
            </select>

            <label>Reisetyp</label>
            <select name="" id="" onChange={(e) => setInput((prev) => ({...prev, type: e.target.value as Type}))}>
                <option value="beach">Strand</option>
                <option value="hike">Wanderung</option>
                <option value="outdoor">Generell Outdoor</option>
                <option value="ski">Ski-Ferien</option>
                <option value="other">Andere</option>
            </select>

            <label>Reiseziel</label>
            <input type="text" />

            <label>Unterkunft</label>
            <select name="" id="" onChange={(e) => setInput((prev) => ({...prev, accomodation: e.target.value as Accomodation}))}>
                <option value="hotel">Hotel</option>
                <option value="tent">Zelt</option>
                <option value="house">Ferienhaus</option>
                <option value="other">Andere</option>
            </select>
        </form>
    )
}