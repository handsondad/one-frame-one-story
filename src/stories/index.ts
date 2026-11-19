import { adaLovelace } from "./ada-lovelace.ts";
import { archaeopteryxBerlin } from "./archaeopteryx-berlin.ts";
import { bunianScroll } from "./bunian-scroll.ts";
import { cottonMillGirl } from "./cotton-mill-girl.ts";
import { curieLab } from "./curie-lab.ts";
import { damingHunyiMap } from "./daming-hunyi-map.ts";
import { darwinTree } from "./darwin-tree.ts";
import { diamondSutra } from "./diamond-sutra.ts";
import { dnaModel } from "./dna-model.ts";
import { earMouse } from "./ear-mouse.ts";
import { earthrise } from "./earthrise.ts";
import { eclipse1919 } from "./eclipse-1919.ts";
import { einsteinPortrait } from "./einstein-portrait.ts";
import { eulerPortrait } from "./euler-portrait.ts";
import { faradayPortrait } from "./faraday-portrait.ts";
import { firstScan } from "./first-scan.ts";
import { galileoMoon } from "./galileo-moon.ts";
import { gaussPortrait } from "./gauss-portrait.ts";
import { greatWave } from "./great-wave.ts";
import { hookeCork } from "./hooke-cork.ts";
import { huaLuogeng } from "./hua-luogeng.ts";
import { hubbleDeepField } from "./hubble-deep-field.ts";
import { hubbleVar } from "./hubble-var.ts";
import { ibmAtoms } from "./ibm-atoms.ts";
import { ivfEmbryo } from "./ivf-embryo.ts";
import { keelingCurve } from "./keeling-curve.ts";
import { kunyuMap } from "./kunyu-map.ts";
import { lavoisierLab } from "./lavoisier-lab.ts";
import { lunchSkyscraper } from "./lunch-skyscraper.ts";
import { m87BlackHole } from "./m87-black-hole.ts";
import { marchOnWashington } from "./march-on-washington.ts";
import { mendelPortrait } from "./mendel-portrait.ts";
import { mendeleevTable } from "./mendeleev-table.ts";
import { migrantMother } from "./migrant-mother.ts";
import { monaLisa } from "./mona-lisa.ts";
import { moonAldrin } from "./moon-aldrin.ts";
import { muybridgeHorse } from "./muybridge-horse.ts";
import { nagasakiCloud } from "./nagasaki-cloud.ts";
import { newtonPortrait } from "./newton-portrait.ts";
import { nightingaleRose } from "./nightingale-rose.ts";
import { oracleBone } from "./oracle-bone.ts";
import { paleBlueDot } from "./pale-blue-dot.ts";
import { penicillinPlate } from "./penicillin-plate.ts";
import { pentacene } from "./pentacene.ts";
import { photo51 } from "./photo-51.ts";
import { pillarsOfCreation } from "./pillars-of-creation.ts";
import { qingmingScroll } from "./qingming-scroll.ts";
import { quantumEntanglement } from "./quantum-entanglement.ts";
import { rontgenHand } from "./rontgen-hand.ts";
import { rosettaStone } from "./rosetta-stone.ts";
import { sanxingduiMask } from "./sanxingdui-mask.ts";
import { singleAtom } from "./single-atom.ts";
import { snowCholeraMap } from "./snow-cholera-map.ts";
import { starryNight } from "./starry-night.ts";
import { solvay1927 } from "./solvay-1927.ts";
import { sycamoreChip } from "./sycamore-chip.ts";
import { terracottaArmy } from "./terracotta-army.ts";
import { teslaPortrait } from "./tesla-portrait.ts";
import { tobaccoMosaicVirus } from "./tobacco-mosaic-virus.ts";
import { trinityTest } from "./trinity-test.ts";
import { tuYouyou } from "./tu-youyou.ts";
import { turingPortrait } from "./turing-portrait.ts";
import type { Story } from "./types.ts";
import { vitruvianMan } from "./vitruvian-man.ts";
import { voyager1 } from "./voyager-1.ts";
import { wegenerContinents } from "./wegener-continents.ts";
import { wrightFlight } from "./wright-flight.ts";

/** 晾衣杆上从左到右的顺序：按图产生的年份 */
export const STORIES: readonly Story[] = [
  oracleBone,
  sanxingduiMask,
  terracottaArmy,
  rosettaStone,
  diamondSutra,
  qingmingScroll,
  monaLisa,
  kunyuMap,
  galileoMoon,
  hookeCork,
  greatWave,
  snowCholeraMap,
  nightingaleRose,
  darwinTree,
  mendeleevTable,
  muybridgeHorse,
  starryNight,
  rontgenHand,
  wrightFlight,
  curieLab,
  eclipse1919,
  hubbleVar,
  solvay1927,
  photo51,
  earthrise,
  ibmAtoms,
  paleBlueDot,
  pillarsOfCreation,
  pentacene,
  hubbleDeepField,
  singleAtom,
  m87BlackHole,
  dnaModel,
  earMouse,
  ivfEmbryo,
  marchOnWashington,
  penicillinPlate,
  quantumEntanglement,
  trinityTest,
  tobaccoMosaicVirus,
  firstScan,
  sycamoreChip,
  lunchSkyscraper,
  nagasakiCloud,
  moonAldrin,
  bunianScroll,
  damingHunyiMap,
  vitruvianMan,
  lavoisierLab,
  archaeopteryxBerlin,
  cottonMillGirl,
  wegenerContinents,
  migrantMother,
  keelingCurve,
  voyager1,
  newtonPortrait,
  eulerPortrait,
  gaussPortrait,
  adaLovelace,
  faradayPortrait,
  mendelPortrait,
  teslaPortrait,
  einsteinPortrait,
  turingPortrait,
  huaLuogeng,
  tuYouyou,
].sort((a, b) => a.year - b.year);

export const storyById = (id: string) => STORIES.find((s) => s.id === id);
