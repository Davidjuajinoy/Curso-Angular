export interface SearchCountriesResponse {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         Region;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number | null;
    gini:           number | null;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    null | string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           null | string;
}

export interface Currency {
    code:   null | string;
    name:   null | string;
    symbol: null | string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Asia = "Asia",
    Empty = "",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}

export interface RegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: OtherAcronym[];
    otherNames:    OtherName[];
}

export enum OtherAcronym {
    Eaeu = "EAEU",
    Sica = "SICA",
    Unasul = "UNASUL",
    Unasur = "UNASUR",
    Uzan = "UZAN",
}

export enum OtherName {
    AccordDeLibreÉchangeNordAméricain = "Accord de Libre-échange Nord-Américain",
    AlianzaDelPacífico = "Alianza del Pacífico",
    CaribischeGemeenschap = "Caribische Gemeenschap",
    CommunautéCaribéenne = "Communauté Caribéenne",
    ComunidadDelCaribe = "Comunidad del Caribe",
    JāmiAtAdDuwalAlArabīyah = "Jāmiʻat ad-Duwal al-ʻArabīyah",
    LeagueOfArabStates = "League of Arab States",
    SistemaDeLaIntegraciónCentroamericana = "Sistema de la Integración Centroamericana,",
    SouthAmericanUnion = "South American Union",
    TratadoDeLibreComercioDeAméricaDelNorte = "Tratado de Libre Comercio de América del Norte",
    UmojaWaAfrika = "Umoja wa Afrika",
    UnieVanZuidAmerikaanseNaties = "Unie van Zuid-Amerikaanse Naties",
    UnionAfricaine = "Union africaine",
    UniãoAfricana = "União Africana",
    UniãoDeNaçõesSulAmericanas = "União de Nações Sul-Americanas",
    UniónAfricana = "Unión Africana",
    UniónDeNacionesSuramericanas = "Unión de Naciones Suramericanas",
    الاتحادالأفريقي = "الاتحاد الأفريقي",
    جامعةالدولالعربية = "جامعة الدول العربية",
}

export interface Translations {
    de: null | string;
    es: null | string;
    fr: null | string;
    ja: null | string;
    it: null | string;
    br: string;
    pt: string;
    nl: null | string;
    hr: null | string;
    fa: string;
}
