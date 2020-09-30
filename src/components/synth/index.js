import React, { useEffect } from 'react';
import { DuoSynth, FMSynth, AMSynth } from 'tone';
import { useAppContext } from '../../context';
import Pad from './pad';

const styles = {
    display: "grid",
    gridGap: 10,
    gridTemplateColumns: "repeat(4, 1fr)"
}

export default () => {

    const { state } = useAppContext();

    useEffect( () => {
        window.addEventListener("keydown", handleKeydown)
        // clean up to avoid memory leaks
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [state.mode] )

    const synth = state.mode === 'light'? new FMSynth() :new DuoSynth();
    synth.toMaster();

    const handleKeydown = e => {
        console.log(e);
    }

    const playSound = targetLetter => {
        const note = state.notes.find( ({letter}) => letter === targetLetter );
        if (note) {
            synth.triggerAttackRelease(note.note, "8n");
        }

    }

    return (
        <div style={styles}>
            {state.notes.map(note => <Pad key={note.letter} {...note} playSound={playSound} key={note.letter}/> )}
        </div>
    )
}