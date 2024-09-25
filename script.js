
const diseases = {
    "fever": "Flu, Malaria, Dengue",
    "cough": "Common Cold, Flu, COVID-19",
    "headache": "Migraine, Tension Headache, Sinusitis",
    "nausea": "Food Poisoning, Stomach Flu, Migraines",
    "fatigue": "Anemia, Depression, Thyroid Problems"
};

document.getElementById('findDiseaseBtn').addEventListener('click', function() {
    const input = document.getElementById('symptoms').value.toLowerCase();
    const symptoms = input.split(',').map(symptom => symptom.trim());
    const foundDiseases = [];

    symptoms.forEach(symptom => {
        if (diseases[symptom]) {
            foundDiseases.push(diseases[symptom]);
        }
    });

    const uniqueDiseases = [...new Set(foundDiseases.flat())];
    const resultDiv = document.getElementById('result');
    
    if (uniqueDiseases.length > 0) {
        resultDiv.innerHTML = `Possible diseases: ${uniqueDiseases.join(', ')}`;
    } else {
        resultDiv.innerHTML = "No diseases found for the given symptoms.";
    }
});
