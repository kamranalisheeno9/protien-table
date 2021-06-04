import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './common.css'

const UniversalCompact = ({ fullUniversal }) => {
  const [organismNumber, setOrganismNumber] = useState(1)

  const headerNumbers = [
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]
  const header = [
    { name: 'Rank', title: '' },
    { name: 'L', title: 'Ag2' },
    { name: 'V', title: 'Ag2' },
    { name: 'P', title: 'Ag2' },
    { name: 'A', title: 'Ag2' },
    { name: 'T', title: 'Ag2' },

    { name: 'L', title: 'Ag2' },
    { name: 'V', title: 'Ag2' },
    { name: 'P', title: 'Ag2' },
    { name: 'A', title: 'Ag2' },
    { name: 'T', title: 'Ag2' },

    { name: 'L', title: 'Ag2' },
    { name: 'V', title: 'Ag2' },
    { name: 'P', title: 'Ag2' },
    { name: 'A', title: 'Ag2' },
    { name: 'T', title: 'Ag2' },

    { name: 'L', title: 'Ag2' },
    { name: 'V', title: 'Ag2' },
    { name: 'P', title: 'Ag2' },
    { name: 'A', title: 'Ag2' },
    { name: 'T', title: 'Ag2' },

  ]

  // Data For Protien 1

  const organism1R1 = [
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'S', title: '1.423' },


  ]


  const organism1R2 = [
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },



  ]
  const organism1R3 = [
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'S', title: '6.224' },
    { name: 'G', title: '9.302' },


  ]

  const organism1R4 = [
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'A', title: '7.455' },


  ]

  const organism1R5 = [
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'C', title: '10.981' },

  ]
  const organism1R6 = [
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'G ', title: '12.981' },

  ]
  const organism1R7 = [
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },

  ]
  const organism1R8 = [
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },

  ]
  const organism1R9 = [
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },

  ]
  const organism1R10 = [
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },

  ]
  const organism1R11 = [
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },

  ]

  const organism1R12 = [
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },

  ]
  const organism1R13 = [
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },

  ]
  const organism1R14 = [
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },

  ]
  const organism1R15 = [
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },

  ]
  const organism1R16 = [
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },

  ]
  const organism1R17 = [
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },

  ]
  const organism1R18 = [
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },

  ]
  const organism1R19 = [
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },

  ]

  // Data For Protien 2

  const organism2R1 = [
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },

    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },
    { name: 'G', title: '3.648' },
    { name: 'P', title: '1.423' },


  ]


  const organism2R2 = [
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'G', title: '4.981' },
    { name: 'L', title: '5.455' },



  ]
  const organism2R3 = [
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },
    { name: 'P', title: '6.224' },
    { name: 'G', title: '9.302' },


  ]

  const organism2R4 = [
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },


  ]

  const organism2R5 = [
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'G', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'C', title: '10.981' },

  ]
  const organism2R6 = [
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },

  ]
  const organism2R7 = [
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },
    { name: 'G ', title: '16.981' },
    { name: 'I ', title: '17.455' },

  ]
  const organism2R8 = [
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'I ', title: '21.981' },
    { name: 'L ', title: '23.455' },

  ]
  const organism2R9 = [
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },

  ]
  const organism2R10 = [
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },

  ]
  const organism2R11 = [
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },

  ]

  const organism2R12 = [
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'G', title: '39.455' },

  ]
  const organism2R13 = [
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },

  ]
  const organism2R14 = [
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },
    { name: 'G ', title: '41.981' },
    { name: 'I ', title: '42.455' },

  ]
  const organism2R15 = [
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'I ', title: '43.981' },
    { name: 'L ', title: '45.455' },

  ]
  const organism2R16 = [
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },

  ]
  const organism2R17 = [
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },

  ]
  const organism2R18 = [
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },

  ]
  const organism2R19 = [
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },

  ]



  // Data For Protien 3

  const organism3R1 = [
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },

    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },
    { name: 'P', title: '3.648' },
    { name: 'M', title: '1.423' },


  ]


  const organism3R2 = [
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },



  ]
  const organism3R3 = [
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'M', title: '6.224' },
    { name: 'S', title: '9.302' },


  ]

  const organism3R4 = [
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },


  ]

  const organism3R5 = [
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'P', title: '11.455' },
    { name: 'C', title: '10.981' },
    { name: 'C', title: '10.981' },

  ]
  const organism3R6 = [
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },

  ]
  const organism3R7 = [
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },

  ]
  const organism3R8 = [
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },

  ]
  const organism3R9 = [
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'M ', title: '26.981' },
    { name: 'L', title: '28.455' },

  ]
  const organism3R10 = [
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'P ', title: '31.455' },

  ]
  const organism3R11 = [
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },

  ]

  const organism3R12 = [
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },
    { name: 'C', title: '37.981' },
    { name: 'P', title: '39.455' },

  ]
  const organism3R13 = [
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },

  ]
  const organism3R14 = [
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },

  ]
  const organism3R15 = [
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },

  ]
  const organism3R16 = [
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'M ', title: '46.981' },
    { name: 'L', title: '47.455' },

  ]
  const organism3R17 = [
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'P ', title: '49.455' },

  ]
  const organism3R18 = [
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },

  ]
  const organism3R19 = [
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },

  ]


  // Data For Protien 4

  const organism4R1 = [
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },

    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },
    { name: 'A', title: '3.648' },
    { name: 'T', title: '1.423' },


  ]


  const organism4R2 = [
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },



  ]
  const organism4R3 = [
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'T', title: '6.224' },
    { name: 'S', title: '9.302' },


  ]

  const organism4R4 = [
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'A ', title: '8.981' },
    { name: 'T', title: '7.455' },


  ]

  const organism4R5 = [
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'A', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'L', title: '10.981' },

  ]
  const organism4R6 = [
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },

  ]
  const organism4R7 = [
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },

  ]
  const organism4R8 = [
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },

  ]
  const organism4R9 = [
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'T ', title: '26.981' },
    { name: 'L', title: '28.455' },

  ]
  const organism4R10 = [
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'A ', title: '31.455' },

  ]
  const organism4R11 = [
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },

  ]

  const organism4R12 = [
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'A', title: '39.455' },

  ]
  const organism4R13 = [
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },

  ]
  const organism4R14 = [
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },

  ]
  const organism4R15 = [
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },

  ]
  const organism4R16 = [
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'T ', title: '46.981' },
    { name: 'L', title: '47.455' },

  ]
  const organism4R17 = [
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'A ', title: '49.455' },

  ]
  const organism4R18 = [
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },

  ]
  const organism4R19 = [
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },

  ]


  // Data For Protien 5

  const organism5R1 = [
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },

    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },
    { name: 'H', title: '3.648' },
    { name: 'C', title: '1.423' },


  ]


  const organism5R2 = [
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },
    { name: 'S', title: '4.981' },
    { name: 'L', title: '5.455' },



  ]
  const organism5R3 = [
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },
    { name: 'C', title: '6.224' },
    { name: 'S', title: '9.302' },


  ]

  const organism5R4 = [
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },
    { name: 'I ', title: '8.981' },
    { name: 'T', title: '7.455' },


  ]

  const organism5R5 = [
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'H', title: '11.455' },
    { name: 'L', title: '10.981' },
    { name: 'L', title: '10.981' },

  ]
  const organism5R6 = [
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },
    { name: 'G ', title: '12.981' },
    { name: 'H ', title: '13.455' },

  ]
  const organism5R7 = [
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },
    { name: 'S ', title: '16.981' },
    { name: 'V', title: '17.455' },

  ]
  const organism5R8 = [
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },
    { name: 'V', title: '21.981' },
    { name: 'L ', title: '23.455' },

  ]
  const organism5R9 = [
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },
    { name: 'C ', title: '26.981' },
    { name: 'L', title: '28.455' },

  ]
  const organism5R10 = [
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },
    { name: 'P ', title: '30.981' },
    { name: 'H ', title: '31.455' },

  ]
  const organism5R11 = [
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },
    { name: 'T ', title: '34.981' },
    { name: 'T ', title: '35.455' },

  ]

  const organism5R12 = [
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },
    { name: 'L', title: '37.981' },
    { name: 'H', title: '39.455' },

  ]
  const organism5R13 = [
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },
    { name: 'G ', title: '40.981' },
    { name: 'H ', title: '41.455' },

  ]
  const organism5R14 = [
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },
    { name: 'S ', title: '41.981' },
    { name: 'V', title: '42.455' },

  ]
  const organism5R15 = [
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },
    { name: 'V', title: '43.981' },
    { name: 'L ', title: '45.455' },

  ]
  const organism5R16 = [
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },
    { name: 'C ', title: '46.981' },
    { name: 'L', title: '47.455' },

  ]
  const organism5R17 = [
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },
    { name: 'P ', title: '48.981' },
    { name: 'H ', title: '49.455' },

  ]
  const organism5R18 = [
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },
    { name: 'T ', title: '50.981' },
    { name: 'T ', title: '51.455' },

  ]
  const organism5R19 = [
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },
    { name: 'V ', title: '54.981' },
    { name: 'T ', title: '56.455' },

  ]








  const [row1, setRow1] = useState(organism1R1)
  const [row2, setRow2] = useState(organism1R2)
  const [row3, setRow3] = useState(organism1R3)
  const [row4, setRow4] = useState(organism1R4)
  const [row5, setRow5] = useState(organism1R5)
  const [row6, setRow6] = useState(organism1R6)
  const [row7, setRow7] = useState(organism1R7)
  const [row8, setRow8] = useState(organism1R8)
  const [row9, setRow9] = useState(organism1R9)
  const [row10, setRow10] = useState(organism1R10)
  const [row11, setRow11] = useState(organism1R11)
  const [row12, setRow12] = useState(organism1R12)
  const [row13, setRow13] = useState(organism1R13)
  const [row14, setRow14] = useState(organism1R14)
  const [row15, setRow15] = useState(organism1R15)
  const [row16, setRow16] = useState(organism1R16)
  const [row17, setRow17] = useState(organism1R17)
  const [row18, setRow18] = useState(organism1R18)
  const [row19, setRow19] = useState(organism1R19)


  // Active Classes

  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  const [active4, setActive4] = useState(false)
  const [active5, setActive5] = useState(false)

  const Active1 = () => {
    setActive1(true)
    setActive2(false)
    setActive3(false)
    setActive4(false)
    setActive5(false)
  }
  const Active2 = () => {
    setActive1(false)
    setActive2(true)
    setActive3(false)
    setActive4(false)
    setActive5(false)
  }
  const Active3 = () => {
    setActive1(false)
    setActive2(false)
    setActive3(true)
    setActive4(false)
    setActive5(false)
  }
  const Active4 = () => {
    setActive1(false)
    setActive2(false)
    setActive3(false)
    setActive4(true)
    setActive5(false)
  }
  const Active5 = () => {
    setActive1(false)
    setActive2(false)
    setActive3(false)
    setActive4(false)
    setActive5(true)
  }










  // Pagination


  // Set Data 1 On Pagination


  const organismOne = () => {
    setRow1(organism1R1)
    setRow2(organism1R2)
    setRow3(organism1R3)
    setRow4(organism1R4)
    setRow5(organism1R5)
    setRow6(organism1R6)
    setRow7(organism1R7)
    setRow8(organism1R8)
    setRow9(organism1R9)
    setRow10(organism1R10)
    setRow11(organism1R11)
    setRow12(organism1R12)
    setRow13(organism1R13)
    setRow14(organism1R14)
    setRow15(organism1R15)
    setRow16(organism1R16)
    setRow17(organism1R17)
    setRow18(organism1R18)
    setRow19(organism1R19)

    setOrganismNumber(1)
    Active1()
  }

  // Set Data 2 On Pagination


  const organismTwo = () => {
    setRow1(organism2R1)
    setRow2(organism2R2)
    setRow3(organism2R3)
    setRow4(organism2R4)
    setRow5(organism2R5)
    setRow6(organism2R6)
    setRow7(organism2R7)
    setRow8(organism2R8)
    setRow9(organism2R9)
    setRow10(organism2R10)
    setRow11(organism2R11)
    setRow12(organism2R12)
    setRow13(organism2R13)
    setRow14(organism2R14)
    setRow15(organism2R15)
    setRow16(organism2R16)
    setRow17(organism2R17)
    setRow18(organism2R18)
    setRow19(organism2R19)

    setOrganismNumber(2)
    Active2()

  }

  // Set Data 3 On Pagination


  const organismThree = () => {
    setRow1(organism3R1)
    setRow2(organism3R2)
    setRow3(organism3R3)
    setRow4(organism3R4)
    setRow5(organism3R5)
    setRow6(organism3R6)
    setRow7(organism3R7)
    setRow8(organism3R8)
    setRow9(organism3R9)
    setRow10(organism3R10)
    setRow11(organism3R11)
    setRow12(organism3R12)
    setRow13(organism3R13)
    setRow14(organism3R14)
    setRow15(organism3R15)
    setRow16(organism3R16)
    setRow17(organism3R17)
    setRow18(organism3R18)
    setRow19(organism3R19)

    setOrganismNumber(3)
    Active3()

  }




  // Set Data 4 On Pagination


  const organismFour = () => {
    setRow1(organism4R1)
    setRow2(organism4R2)
    setRow3(organism4R3)
    setRow4(organism4R4)
    setRow5(organism4R5)
    setRow6(organism4R6)
    setRow7(organism4R7)
    setRow8(organism4R8)
    setRow9(organism4R9)
    setRow10(organism4R10)
    setRow11(organism4R11)
    setRow12(organism4R12)
    setRow13(organism4R13)
    setRow14(organism4R14)
    setRow15(organism4R15)
    setRow16(organism4R16)
    setRow17(organism4R17)
    setRow18(organism4R18)
    setRow19(organism4R19)

    setOrganismNumber(4)
    Active4()

  }


  // Set Data 5 On Pagination


  const organismFive = () => {
    setRow1(organism5R1)
    setRow2(organism5R2)
    setRow3(organism5R3)
    setRow4(organism5R4)
    setRow5(organism5R5)
    setRow6(organism5R6)
    setRow7(organism5R7)
    setRow8(organism5R8)
    setRow9(organism5R9)
    setRow10(organism5R10)
    setRow11(organism5R11)
    setRow12(organism5R12)
    setRow13(organism5R13)
    setRow14(organism5R14)
    setRow15(organism5R15)
    setRow16(organism5R16)
    setRow17(organism5R17)
    setRow18(organism5R18)
    setRow19(organism5R19)

    setOrganismNumber(5)
    Active5()

  }






  return (
    <Container fluid>
      <div className="text-container" >
        <h6 >Full View</h6>
        <h6>Universal Tables of Organism {organismNumber}</h6>

      </div>
      <div className="view-btn">
        <Button variant="light" onClick={fullUniversal}>Change View</Button>

      </div>
      <div className="pagination">

        <Row>

          <Col   >
            <ul>
              <li onClick={() => organismOne()} className={active1 ? "bg-number" : ""}>1</li>
              <li onClick={() => organismTwo()} className={active2 ? "bg-number" : ""}>2</li>
              <li onClick={() => organismThree()} className={active3 ? "bg-number" : ""} >3</li>
              <li onClick={() => organismFour()} className={active4 ? "bg-number" : ""} >4</li>
              <li onClick={() => organismFive()} className={active5 ? "bg-number" : ""} >5</li>
            </ul>
          </Col>

        </Row>
      </div>
      <div className="dynamic-tables">


        {/* -------------- FULL TABLE DYNAMIC ---------------- */}

        <div id="datatable-fixed" data-mdb-max-height="460" data-mdb-fixed-header="true" className="datatable">
          <div className="datatable-inner table-responsive ps ps--active-y ps--active-x" style={{ overflow: "auto", position: "relative", maxHeight: "460px" }}>
            <table className="table datatable-table" id="myTable">

              <thead className="datatable-header">

                <tr>
                  {headerNumbers.map((v, i) => {
                    return (

                      <th style={{ cursor: "pointer", top: "-1px" }} scope="col" className="fixed-cell column-name" key={i}>
                        {v}

                      </th>
                    )
                  })}
                </tr>
                <tr>
                  {header.map((v, i) => {

                    return (

                      <th key={i} style={{ cursor: "pointer", top: "-1px" }} scope="col" className="fixed-cell">

                        {v.name}
                        <span style={{ textTransform: "none" }} className="header-title">
                          {v.title}
                        </span>
                      </th>
                    )
                  })}
                </tr>
              </thead><tbody className="datatable-body">
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell " data-mdb-field="name" false="">1st</td>
                  {row1.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">2nd</td>
                  {row2.map((v, i) => {

                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">3rd</td>
                  {row3.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">4th</td>
                  {row4.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">5th</td>
                  {row5.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">6th</td>
                  {row6.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">7th</td>
                  {row7.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">8th</td>
                  {row8.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">9th</td>
                  {row9.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">10th</td>
                  {row10.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">11th</td>
                  {row11.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">12th</td>
                  {row12.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">13th</td>
                  {row13.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">14th</td>
                  {row14.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">15th</td>
                  {row15.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">16th</td>
                  {row16.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">17th</td>
                  {row17.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">18th</td>
                  {row18.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr scope="row" data-mdb-index="0">
                  <td style={{ left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">19th</td>
                  {row19.map((v, i) => {
                    return (

                      <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px" }} className="protien-table" data-mdb-field="position" false="" key={i}>
                        {v.name}
                        <span className="header-title">
                          {v.title}
                        </span>
                      </td>
                    )
                  })}
                </tr>

              </tbody>
            </table>



          </div>



        </div>







      </div>
    </Container>

  );
};

export default UniversalCompact;