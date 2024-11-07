export interface upgradesWithName {
  name: string;
  desc: upgrades;
}

export interface upgradeNames {
  [key:string]: upgrades;
}

export type upgrades = upgradesA | upgradesB | upgradesC | upgradesD | upgradesE | upgradesF | upgradesG | upgradesH | upgradesI;

interface upgradesA {
  [key: string]: string;
}
interface upgradesH {
  [key: string]: boolean;
}
interface upgradesI {
  [key: string]: number;
}

interface upgradesB {
  [key:string]: string[];
}

interface upgradesC {
    [key:string]: MWeaponInfo
  }
  type MWeaponInfo = MWeaponInfoA | MWeaponInfoB | MWeaponInfoC | MWeaponInfoD;

  interface MWeaponInfoA {
      [key:string]: number | string | boolean;
  }

  interface MWeaponInfoB {
      [key:string]: MBulletSpeedCurve;
  }
  export interface MBulletSpeedCurve {
      m_spline: Mspline[];
      m_tangents: Mtangent[];
      m_vDomainMins: number[];
      m_vDomainMaxs: number[];
    }
    
    export interface Mtangent {
      m_nIncomingTangent: string;
      m_nOutgoingTangent: string;
    }
    
    export interface Mspline {
      x: number;
      y: number;
      m_flSlopeIncoming: number;
      m_flSlopeOutgoing: number;
    }

  interface MWeaponInfoC {
      [key:string]: MWeaponInfo1D;
  }
  type MWeaponInfo1D = MWeaponInfo1D1 | MWeaponInfo1D2 | MWeaponInfo1D3;
      interface MWeaponInfo1D1 {
        [key:string]: number[];
      }
      interface MWeaponInfo1D2 {
        [key:string]: number;
      }
      interface MWeaponInfo1D3 {
        [key:string]: string;
      }

  interface MWeaponInfoD {
      [key:string]: MWeaponInfo2D;
    }
    type MWeaponInfo2D = MWeaponInfo2D1;
      interface MWeaponInfo2D1 {
        [key:string]: {
          [key:string]: string;
        }
      }


interface upgradesD {
  [key:string]: MvTSI[];
}
  export type MvTSI = MvTSIA | MvTSIB;
  interface MvTSIA {
    [key:string]: string;
  }  
  interface MvTSIB {
    [key:string]: MvSA[];
  }
    export type MvSA = MvSAvAP | MvSAB | MvSAC;
    interface MvSAvAP {
      [key:string]: string[];
    }
    interface MvSAB {
      [key:string]: string | boolean;
    }
    interface MvSAC {
      [key:string]: MvIP[];
    }
      export interface MvIP {
        [key:string]: string;
      }


interface upgradesE {
  [key:string]: MAIM[];
}
  interface MAIM {
    [key:string]: Subclass;
  }
  type Subclass = SubclassA | SubclassB | SubclassC | SubclassD | SubclassE | SubclassF | SubclassG | SubclassH | SubclassI | SubclassJ | SubclassK | SubclassL | SubclassM | SubclassN | SubclassO | SubclassP | SubclassQ | SubclassR | SubclassS;
    interface SubclassA {
      [key:string]: string | boolean | number;
    }
    interface SubclassB {
      [key:string]: string[];
    }
    type SubclassC = SubclassA | SubclassB;
    
    type SubclassD = SubclassA | Subclass1D2;

    type SubclassE = SubclassA | Subclass1D3;

    type SubclassF = SubclassA | Subclass1D4;

    type SubclassG = SubclassA | Subclass1D | Subclass1D3;
    
    type SubclassH = SubclassC | Subclass1D;

    type SubclassI = SubclassC | Subclass1D2;

    type SubclassJ = SubclassC | Subclass1D | Subclass1D2;

    type SubclassK = SubclassC | Subclass1D[];

    type SubclassL = SubclassA | Subclass1D | Subclass1D3;

    type SubclassM = SubclassA | Subclass1D;

    type SubclassN = SubclassA | Subclass1D5;

    type SubclassO = SubclassC | Subclass1D5;

    type SubclassP = SubclassA | Subclass1D6;

    type SubclassQ = SubclassA | Subclass1D | Subclass1D2;

    type SubclassR = SubclassC | Subclass1D3;

    type SubclassS = SubclassC | Subclass1D7;

    interface Subclass1D {
      [key:string]: SubclassA;
    }
    interface Subclass1D2 {
      [key:string]: SubclassC;
    }
    interface Subclass1D3 {
      [key:string]: SubclassM;
    }
    interface Subclass1D4 {
      [key:string]: SubclassG;
    }
    interface Subclass1D5 {
      [key:string]: SubclassD;
    }
    interface Subclass1D6 {
      [key:string]: SubclassI;
    }
    interface Subclass1D7 {
      [key:string]: SubclassA[];
    }

interface upgradesF {
  [key:string]: {
    [key:string]: string;
  }
}

interface upgradesG {
  [key:string]: mMAP;
}
  interface mMAP {
    [key:string]: AP;
  }
    type AP = AP1 | AP2;

    interface AP1 {
      [key:string]: string | number | boolean;
    }
    interface AP2 {
      [key:string]: msSF;
    }
      interface msSF {
        [key:string]: subclass_base1 | subclass_base2;
      }
        interface subclass_base1 {
          _class: string;
          _my_subclass_name: string;
        }
        interface subclass_base2 {
          [key:string]: string[];
        }