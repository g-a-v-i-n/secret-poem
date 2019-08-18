// word lists
//
// verb
// noun
// preposition
// adverb
// adjective
// determiner
// properNoun
// possessiveNoun
// possesiveProperNoun
// pronoun

// sentence structures
//
// adverb verb
// adjective noun
// adjective noun verb adverb
// adjective noun verb
// preposition possesiveProperNoun noun
// adverb determiner noun verb pronoun verb

// crypto
//
// eth keys
//
// public 0295e082f661ce064a122062774cdd0c2134630c239c8b6cfdd49326046e683365
// private 71324704dcfd8f7055ab769c7e088ba3132f117f03015559ff38757b6470a49d


// encoding
//
// number => poem
// hex => poem
// hex with checksum => poem
// number => tree => syntax tree => poem

// const words = require('categorized-words')
const fs = require('fs')
const lexicon = require('./lexicon')

const btoa = str => Buffer(str, 'binary').toString('base64');
const hexToTen = str => parseInt(str, 16);
const tenToHex = int => int.toString(16);
const tenTo64 = int => atob()

const count = Object
  .entries(lexicon)
  .map(([k, v]) => console.log(k, v.length))

const pk = '71324704dcfd8f7055ab769c7e088ba3132f117f03015559ff38757b6470a49d'

// a 10
// b 11
// c 12
// d 13
// e 14
// f 15

// '7[1324704d]c[fd8f7055ab769c]7[e088ba31]3[2f11]7[f0301555]9[ff38757b6]4[70a49]d'

// '71324704dcfd8f7055ab769c7e088ba3132f117f03015559ff38757b6470a49d'

// const chunks8 = [
//   '71324704',
//   'dcfd8f70',
//   '55ab769c',
//   '7e088ba3',
//   '132f117f',
//   '03015559',
//   'ff38757b',
//   '6470a49d'
// ]

const chunks16 = [
  '71324704dcfd8f70',
  '55ab769c7e088ba3',
  '132f117f03015559',
  'ff38757b6470a49d'
]


// '71324704'
// idx-1 decide sentance struct + chunk
//
const seq = num => Array.from(Array(num), (nada, i) => i)
const randInt = max => Math.floor(Math.random() * Math.floor(max))

// console.log('71324704dcfd8f7055ab769c7e088ba3132f117f03015559ff38757b6470a49d'.match(/.{1,16}/g))

// const selectRandomWords = (src, num, range) => {
//   return seq(num)
//     .map(() => randInt(range))
//     .map(idx => src[idx])
// }

//
// const resortedLexicon = Object
//   .entries(lex)
//   .reduce((acc, [key, val]) => {
//     const cat = val[0]
//     if (acc[cat] !== undefined) {
//       acc[cat] = [...acc[cat], key]
//     } else {
//       acc[cat] = [key]
//     }
//
//     return acc
//   }, {})
//
// fs.writeFileSync('./lexicon.json', JSON.stringify(resortedLexicon));


// words.N[0]

// const corpus = {
//   noun:
//   verb:
//   adjective:
//   interjection:
//   conjunction:
//   pronoun:
// }

// corpus.noun = seq(256)
//   .map(() => randInt(47004))
//   .map(idx => words.N[idx])




// console.log(corpus.noun)

// const N = 'N'
// const V = 'V'
// const A = 'A'
// const I = 'I'
// const C = 'C'
// const P = 'P'
// const S = 'S'


// console.log('first noun in list:', words.N[0])

const CC = 'CC' // CC Coord Conjuncn           and,but,or
const CD = 'CD' // CD Cardinal number          one,two
const DT = 'DT' // DT Determiner               the,some
const EX = 'EX' // EX Existential there        there
// const FW = 'FW' // FW Foreign Word             mon dieu
const IN = 'IN' // IN Preposition              of,in,by
const JJ = 'JJ' // JJ Adjective                big
const JJR = 'JJR' // JJR Adj., comparative       bigger
const JJS = 'JJS' // JJS Adj., superlative       biggest
const LS = 'LS' // LS List item marker         1,One
const MD = 'MD' // MD Modal                    can,should
const NN = 'NN' // NN Noun, sing. or mass      dog
const NNP = 'NNP' // NNP Proper noun, sing.      Edinburgh
const NNPS = 'NNPS' // NNPS Proper noun, plural    Smiths
const NNS = 'NNS' // NNS Noun, plural            dogs
const POS = 'POS' // POS Possessive ending       Õs
const PDT = 'PDT' // PDT Predeterminer           all, both
const PP$ = 'PP$' // PP$ Possessive pronoun      my,oneÕs
const PRP = 'PRP' // PRP Personal pronoun         I,you,she
const RB = 'RB' // RB Adverb                   quickly
const RBR = 'RBR' // RBR Adverb, comparative     faster
const RBS = 'RBS' // RBS Adverb, superlative     fastest
const RP = 'RP' // RP Particle                 up,off
const SYM = 'SYM' // SYM Symbol                  +,%,&
const TO = 'TO' // TO ÒtoÓ                     to
const UH = 'UH' // UH Interjection             oh, oops
const VB = 'VB' // VB verb, base form          eat
const VBD = 'VBD' // VBD verb, past tense        ate
const VBG = 'VBG' // VBG verb, gerund            eating
const VBN = 'VBN' // VBN verb, past part         eaten
const VBP = 'VBP' // VBP Verb, present           eat
const VBZ = 'VBZ' // VBZ Verb, present           eats
const WDT = 'WDT' // WDT Wh-determiner           which,that
const WP = 'WP' // WP Wh pronoun               who,what
const WP$ = 'WP$' // WP$ Possessive-Wh           whose
const WRB = 'WRB' // WRB Wh-adverb               how,where

// NNP 27712
// NN 19003
// JJ 16834
// NNS 10702
// VBG 3676
// RB 2370
// JJR 276
// VBN 2997
// undefined 1
// VBD 1917
// VBZ 1612
// VBP 328
// NNPS 1112
// PRP$ 22
// VB 2365
// PRP 64
// JJS 241
// . 2
// FW 550
// RBR 20
// WP 15
// $ 12
// DT 42
// : 204
// IN 213
// UH 163
// CC 21
// `` 23
// NNP|NP 1
// VBN|JJ 1
// RB|VBG 1
// ) 3
// MD 50
// NNP|VBN 2
// SYM 9
// WRB 24
// WP$ 2
// JJ|NP 4
// NNP|JJ 1
// EX 3
// NN|JJ 8
// WDT 8
// VBG|NN 1
// RP 3
// NN|SYM 2
// NNP|NN 1
// ( 3
// RBS 2
// TO 4
// ! 1
// NN|NN 1
// PDT 1
// NNS|NN 1
// WP|MD|NP 1
// JJ|CC 1
// , 1
// NN|NNS 2
// LS 5
// NNP|VB 1
// NN|IN 2
// MD|VB 2
// NN|DT 1
// LS|NN 1
// ; 1
// NNP|CC|NP 1
// JJ|JJR 1
// NN|WRB 2
// JJ|IN 1
// RBS|JJ 1
// NN|VBG 1
// # 1

const phrases = [
  [RB, JJ, NN, VBZ],
  [NN, JJ, RB, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
  [RB, JJ, NN, VBZ],
]




// const chunks8 = [
//   '71324704', // [7] 71 32 47 04
//   'dcfd8f70', // [d] dc fd 8f 70
//   '55ab769c', // [5] 55 ab 76 9c
//   '7e088ba3',
//   '132f117f',
//   '03015559',
//   'ff38757b',
//   '6470a49d',
// ]

const hexChars = '0123456789abcdef'.split('')

const key = '71324704dcfd8f7055ab769c7e088ba3132f117f03015559ff38757b6470a49d'
const randKey = seq(64)
  .map(() => hexChars[randInt(16)])
  .join('')
console.log(randKey)

const makeBadPoem = key => {
  const lines = key.match(/.{1,8}/g)

  const ds = lines.map(ln => {
    const first = hexToTen(ln[0])
    const base10 = ln.match(/.{1,2}/g).map(duo => hexToTen(duo))
    return {
      phrase: phrases[first],
      line: base10,
    }
  })

  const poem = ds
    .map(d => d.phrase.map((word, idx) => lexicon[word][d.line[idx]]).join(' ')).join(',\n')
  return poem
}

console.log(
  // makeBadPoem(key).toLowerCase()
)

console.log(
  makeBadPoem(randKey).toLowerCase()
)

// const ph = k
//   .match(/.{1,2}/g)
//   .map(two => hexToTen(two))
// const matrix = ch.map(sixteen => sixteen
//   .match(/.{1,2}/g)
//   .map(two => hexToTen(two))
// )

// ph.map()


// // need more regular word lists
// const a = ['71', '32', '47', '04'].map(n => hexToTen(n));
// const b = ['55', 'ab', '76', '9c'].map(n => hexToTen(n));
//
// console.log(
//   square[0].map((type, idx) => lexicon[type][a[idx]]).join(' ')
// )

// could use commas to delimit and concat diff sentance structs like so
// const sentences = [
//
//   [I],  // 0
//   [A, P],  // 1
//   [A, N, V],  // 2
//   [A, N, P, V],  //3
//   [I, C, V, C, I],   // 4
//   [P, V, P, N, C, N],   // 5
//   [I, A, N, P, S, V, I],   // 6
//   [A, N, V, C, P, V, P, N],   // 7
//   [S, V, C, N, C]
//
//
//   // 4
//   [A, C, N],
//   // 5
//   [N, P, V, P, N],
//   // 6
//   [A, N, P, V],
//   // 7
//   [S, V, C, N],
//   // 8
//   [P, V, P, N, C, N],
//   // 9
//
//   // a
//   [A, N, N, A, A],
//   // b
//   [N, C, N],
//   // c
//   [N, P, N, C, C, P],
//   // d
//   [A, P],
//   // e
//   [C, A, N],
//   // f
//   [C, N],
// ]


// console.log('first noun in list:', words.N[0])
