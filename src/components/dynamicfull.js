import React from 'react';
import './common.css'


const dynamicfull = () => {
  const headerNumbers=[
    "",
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    268,
    269,
    270,
    271,
    272,
    273,
    274,
    275,
    276,
    277,
    278,
    279,
    280,
    281,
    282,
    283,
    284,
    285,
    286,
    287,
    288,
    289,
    290,
    291,
    292,
    293,
    294,
    295,
    296,
    297,
    298,
    299,
    300,
  ]
  const header = [
    { name: 'Rank', title: '' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
    { name: 'Lucine', title: 'Ag2' },
    { name: 'Valine', title: 'Ag2' },
    { name: 'Proline', title: 'Ag2' },
    { name: 'Alanine', title: 'Ag2' },
]

const protien1R1=[
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },

 
]

const protien1R2=[
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },

  

]
const protien1R3=[
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },
  { name: 'Alanine', title: '3.648' },
  { name: 'Serine', title: '1.423' },

 
]

const protien1R4=[
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },
  { name: 'Glycine', title: '4.981' },
  { name: 'Leucine', title: '5.455' },

  

]
  return (
    <div>

      <div id="datatable-fixed" data-mdb-max-height="460" data-mdb-fixed-header="true" className="datatable">
        <div className="datatable-inner table-responsive ps ps--active-y ps--active-x" style={{ overflow: "auto", position: "relative", maxHeight: "460px"}}>
          <table className="table datatable-table">

            <thead className="datatable-header">

              <tr>
{headerNumbers.map((v,i)=>{
return(

  <th style={{ cursor: "pointer",top: "-1px"  }} scope="col" className="fixed-cell" key={i}>{v}</th>
)
})}
              </tr>
              <tr>
                {header.map((v,i)=>{

                return(

                  <th key={i} style={{ cursor: "pointer",top: "-1px" }} scope="col" className="fixed-cell">
                {v.name}
                <span className="header-title">
                  {v.title}
                </span>
                </th>
                  )
              })}
                </tr>
            </thead><tbody className="datatable-body">
              <tr scope="row" data-mdb-index="0">
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell " data-mdb-field="name" false="">1st</td>
                {protien1R1.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">2nd</td>
                {protien1R2.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">3rd</td>
                {protien1R3.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">4th</td>
                {protien1R4.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">5th</td>
                {protien1R1.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">6th</td>
                {protien1R2.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">7th</td>
                {protien1R3.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">8th</td>
                {protien1R4.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">9th</td>
                {protien1R1.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">10th</td>
                {protien1R2.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">11th</td>
                {protien1R3.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">12th</td>
                {protien1R4.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">13th</td>
                {protien1R1.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">14th</td>
                {protien1R2.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">15th</td>
                {protien1R3.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">16th</td>
                {protien1R4.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">17th</td>
                {protien1R1.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">18th</td>
                {protien1R2.map((v,i)=>{
                  return(

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
                <td style={{ minWidth: "199px", maxWidth: "200px", width: "200px", left: "-1px" }} className="fixed-cell" data-mdb-field="name" false="">19th</td>
                {protien1R3.map((v,i)=>{
                  return(

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
  );
};

export default dynamicfull;