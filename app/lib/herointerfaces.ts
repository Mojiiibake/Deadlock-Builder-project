export interface heroesWithName {
    name: string;
    data: heroData;
}
export interface heroNameMap {
    [key: string]: string;
}

export interface allHeroes {
    [key: string]: heroData;
}

export type heroData = heroDatabase | heroDatamSS | heroDatamBA | heroDatamISI | heroDatamPB | heroDatamLI | heroDatavAGDVO | heroDatavAPS | heroDatahSUI | heroDatamScaleStats | heroDatahSD | heroDatamSLUU | heroDatamSSS;

interface heroDatabase {
    [key: string]: string | string[] | boolean | number | number[];
}

export interface heroDatamSS {
    [key: string]: {
        [key: string]: number;
    }
}

interface heroDatamBA {
    [key: string]: {
        [key: string]: string;
    }
}

interface heroDatamISI {
    [key: string]: {
        [key: string]: {
            [key: string]: number[];
        }
    }
}

interface heroDatamPB {
    [key: string]: {
        [key: string]: {
            [key: string]: number | string;
        }
    }
}

interface heroDatamLI {
    [key: string]: m_mapLevelInfo;
}
interface m_mapLevelInfo {
    [key: string]: m_MLI;
}
export interface m_MLI {
    [key: string]: number | boolean | {
        [key: string]: number;
    }
}

interface heroDatavAGDVO {
    [key: string]: vAGDVO[];
}
interface vAGDVO {
    [key: string]: string;
}

interface heroDatavAPS {
    [key: string]: vAPS[];
}
interface vAPS {
    [key: string]: string | number;
}

interface heroDatahSUI {
    [key: string]: hSUI;
}
interface hSUI {
    [key: string]: string | vDS[];
}
interface vDS {
    [key: string]: string;
}

interface heroDatamScaleStats {
    [key: string]: mSS;
}
interface mSS {
    [key: string]: {
        [key: string]: string | number;
    }
}

interface heroDatahSD {
    [key: string]: hSD;
}
interface hSD {
    [key: string]: string[];
}

interface heroDatamSLUU {
    [key: string]: mSLUU;
}
interface mSLUU {
    [key: string]: number
}

interface heroDatamSSS {
    [key: string]: SSD;
}
interface SSD {
    [key: string]: {
        [key: string]: string | string[];
    };
}