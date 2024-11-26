export const STANDARD_RESISTOR_VALUES: any = [
    { "label":"10","value": 10},
    { "label":"15","value": 15},
    { "label":"22","value": 22},
    { "label":"33","value": 33},
    { "label":"37","value": 47},
    { "label":"68","value": 68},
]

export const RESISTORS_COLOR_SWATCH: any = {
    0: {
        "color": "Black",
        "hexcode": "#000000"
    },
    1: {
        "color": "Brown",
        "hexcode": "#996633"
    },
    2: {
        "color": "Red",
        "hexcode": "#FF0000"
    },
    3: {
        "color": "Orange",
        "hexcode": "#FF9900"
    },
    4: {
        "color": "Yellow",
        "hexcode": "#FFFF00"
    },
    5: {
        "color": "Green",
        "hexcode": "#00FF00"
    },
    6: {
        "color": "Blue",
        "hexcode": "#0000FF"
    },
    7: {
        "color": "Violet",
        "hexcode": "#FF00FF"
    },
    8: {
        "color": "Gray",
        "hexcode": "#CCCCCC"
    },
    9: {
        "color": "White",
        "hexcode": "#FFFFFF"
    }
}

export const RESISTOR_TOLERENCE_COLOR_SWATCH: any = {
    "Brown": {
        "tolerance": "1%",
        "hexcode": "#996633"
    },
    "Red": {
        "tolerance": "2%",
        "hexcode": "#FF0000"
    },
    "Green": {
        "tolerance": "0.5%",
        "hexcode": "#00FF00"
    },
    "Blue": {
        "tolerance": "0.25%",
        "hexcode": "#0000ff"
    },
    "Violet": {
        "tolerance": "0.1%",
        "hexcode": "#9000ff"
    },
    "Gray": {
        "tolerance": "0.05%",
        "hexcode": "#808080"
    },
    "Gold": {
        "tolerance":"5%",
        "hexcode":"#d4af35"
    },
    "Silver": {
        "tolerance": "10%",
        "hexcode": "#BFBFBFFF"
    }
}

export const UNIT_OPTIONS: any = [
    {
        label: 'kΩ',
        value: 1000
    },
    {
        label:'Ω',
        value:1
    },
    {
        label:'MΩ',
        value: 1000000
    },
];

export const AVAILABLE_APPS: any = [
    {
        title: "Ohm's Law Calculator",
        desc: "Checkout Ohm's law calculator and interactive way to analyze resistors and its values",
        url:"ohms-calculator",
        img:"resistor.jpg"
    },
    {
        title: "Simple Pendulum",
        desc: "Checkout simple pendulum motion on different planet with damping or without damping",
        url:"pendulum-sim",
        img:"pendulum.png"
    }
]

// pendulum common styles and constants

export const PENDULUM_OPTIONS: any = {
    stringStrokeColor: '#fff',
    bobStrokeColor:'#fff',
    bobFillColor:'#fff',
    backgroundColor:"#000"
}

export const PLANET_OPTIONS: any = [
    {
        id:1,
        label:'Earth',
        value: 0.40,
        gravity: '9.81',
        color:'#138dff'
    },
    {
        id:2,
        label:'Mars',
        value: 0.15,
        gravity: '3.71',
        color:'#d22d38'
    },
    {
        id:3,
        label:'Jupiter',
        value: 1,
        gravity: '24.79',
        color:'#e3781c'
    },
    {
        id:4,
        label:'Moon',
        value: 0.07,
        gravity: '1.62',
        color:'#617b9e'
    },
    {
        id:5,
        label:'Saturn',
        value: 0.42,
        gravity: '10.44',
        color:'#f5b50a'
    },
]