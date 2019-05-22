const mongoose = require("mongoose");
const Vaccines = require("../models/Vaccines");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/members", { useNewUrlParser: true }
);

const vaccineSeed = [
    {
        name: "Influenza inactivate (IIV) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        dose: "1 dose annually",
        date: new Date(Date.now())
    },
    {
        name: "Influenza recombinant (RIV) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 dose annually",
        date: new Date(Date.now())
    },
    {
        name: "Tetanus, diptheria, pertussis (TDAP) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 dose Tdap, the Td booster every 10yrs",
        date: new Date(Date.now())
    },
    {
        name: "Measles, mumps, rubella (MMR) ",
        needed: true,
        age: 65,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 or 2 doses depending on indication (if born in 1957 or later)",
        date: new Date(Date.now())
    },
    {
        name: "Varicella (VAR) ",
        needed: true,
        age: 40,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2 doses (if born in 1980 or later",
        date: new Date(Date.now())
    },
    {
        name: "Zoster (RZV (preferred) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2 doses for adults 50 or > who lack documentation or evidence of past infection",
        date: new Date(Date.now())

    },
    {
        name: "Zoster live (ZVL)",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 dose for adults 60 or >  who lack documentation or evidence of past infection",
        date: new Date(Date.now())

    },
    {
        name: "Human papillomavirus (HPV) Female",
        needed: true,
        age: 21,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2-3 doses for adults women who are between 19 to 26 year old at initial vaccination",
        date: new Date(Date.now())
    },
    {
        name: "Human papillomavirus (HPV) Male",
        needed: true,
        age: 30,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2-3 doses for adults men who are between 19 to 22 year old at initial vaccination",
        date: new Date(Date.now())
    },
    {
        name: "Pneumococcal conjugte (PCV13) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 dose",
        date: new Date(Date.now())
    },
    {
        name: "Pneumococcal polysaccharide (PPSV23) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 dose at any age depending on additional risk factors on indicaion",
        date: new Date(Date.now())
    },
    {
        name: "Hepatitis A (HepA) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2 or 3 doses depending on vaccine",
        date: new Date(Date.now())
    },
    {
        name: "Hepatitis B (HepB) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2 or 3 doses depending on vaccine",
        date: new Date(Date.now())
    },
    {
        name: "Meningococcal A, C, W, Y (MenACWY) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 or 2 doses depending on indication",
        date: new Date(Date.now())
    },
    {
        name: "Meningococcal B (MenB) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "2 or 3 doses depending on indication",
        date: new Date(Date.now())
    },
    {
        name: "Haemophilus influenzae type b (Hib) ",
        needed: true,
        age: 125,
        gender: null,
        pregnancy: true,
        travelling: true,
        immunity: true,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditions: true,
        otherFactors: true,
        zoster: true,
        pregnancy: true,
        cd4below200: true,
        dose: "1 or 3 doses depending on indication",
        riskfactors: true,
        date: new Date(Date.now())
    }
];

// console.log(vaccineSeed)

Vaccines.collection.deleteMany()
    .then(() => {
        Vaccines.collection.insertMany(vaccineSeed)
            .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    })
