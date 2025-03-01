const diatonicScales = {
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
    'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    'Cb': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
};

document.addEventListener('DOMContentLoaded', () => {
    const keySelector = document.getElementById('keySelector');
    const displayArea = document.getElementById('displayArea');
    document.body.style.textAlign = "left";
    document.body.style.fontSize = "1em";
    keySelector.style.fontSize = "0.5em";

    keySelector.addEventListener('change', () => {
        const selectedKey = keySelector.value;
        const scale = diatonicScales[selectedKey];
        
        let tableHTML = `<h2>Key of ${selectedKey} Major</h2>
        <h3>Notes:</h3>
        <p>${scale.join(', ')}</p>       
        <div style="display: flex; justify-content: center; gap: 20px;">
            <div>
                <h3>Triads:</h3>
                <table border="1" style="width: 100%;">
                    <tr><th>Chord Symbol</th><th>Chord Quality</th><th>Root Note</th><th>3rd</th><th>5th</th></tr>
                    ${scale.map((note, i) => `<tr><td>${note}</td><td>${['Major', 'Minor', 'Minor', 'Major', 'Major', 'Minor', 'Diminished'][i]}</td><td>${note}</td><td>${scale[(i + 2) % 7]}</td><td>${scale[(i + 4) % 7]}</td></tr>`).join('')}
                </table>
            </div>
            <div>
                <h3>Seventh Chords in the Key of ${selectedKey}:</h3>
                <table border="1" style="width: 100%;">
                    <tr><th>Chord Symbol</th><th>Chord Quality</th><th>Root Note</th><th>3rd</th><th>5th</th><th>7th</th></tr>
                    ${scale.map((note, i) => `<tr><td>${note}</td><td>${['Major 7', 'Minor 7', 'Minor 7', 'Major 7', 'Dominant 7', 'Minor 7', 'Half-Diminished 7'][i]}</td><td>${note}</td><td>${scale[(i + 2) % 7]}</td><td>${scale[(i + 4) % 7]}</td><td>${scale[(i + 6) % 7]}</td></tr>`).join('')}
                </table>
            </div>
        </div>`;
        
        displayArea.innerHTML = tableHTML;
    });
});
