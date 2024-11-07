export interface RootObject {
    //    Import_Base: W_Import_Base
    hero_inferno: Heroinferno;
    hero_gigawatt: Herogigawatt;
    hero_hornet: Herohornet;
    hero_ghost: Heroghost;
    hero_atlas: Heroatlas;
    hero_wraith: Herowraith;
    hero_forge: Heroforge;
    hero_chrono: Herochrono;
    hero_dynamo: Herodynamo;
    hero_kelvin: Herokelvin;
    hero_haze: Herohaze;
    hero_bebop: Herobebop;
    hero_orion: Heroorion;
    hero_krill: Herokrill;
    hero_shiv: Heroshiv;
    hero_tengu: Herotengu;
    hero_warden: Herowarden;
    hero_yamato: Heroyamato;
    hero_lash: Herolash;
    hero_viscous: Heroviscous;
    hero_synth: Herosynth;
    hero_mirage: Heromirage;
}
export type abilityKeys = keyof RootObject;
export type AData = RootObject[abilityKeys];


export interface AWithKey {
    heroname: string;
    adata: AData;
}


interface SkillsDataP {
    [key: string]: [{
        [key: string]: any;
    }]
}

interface SkillsDataI {
    [key: string]: string;
}

export type SkillsData = SkillsDataP & SkillsDataI;

export interface skillProperties {
    [key: string]: number;
}

export interface skillDisplayGroups {
    key: string;
    name: string;
    [key: string]: string;
}

export interface skillUpgrades {
    [key: string]: [{
        [key: string]: string;
    }]
}

export type skillScaleData = skillScaleDataA & skillScaleDataB;

export interface skillScaleDataA {
    [key: string]: {
        [key: string]: string | number;
    }
}

export interface skillScaleDataB {
    [key: string]: {
        [key: string]: string[];
    }
}
export interface skillnamemap {
    [key: string]: skillnamemapObj;
}
export interface skillnamemapObj {
    ESlot_Signature_1: string;
    ESlot_Signature_2: string;
    ESlot_Signature_3: string;
    ESlot_Signature_4: string;
}

export interface Weapon_base {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties_base;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
    [key: string]: any;
}
export interface MmapAbilityProperties_base {
    AbilityCooldown: AbilityCooldown_base;
    AbilityDuration: AbilityCooldown_base;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    [key: string]: any;
}

export interface Heromirage {
    ESlot_Weapon_Primary: ESlotWeaponPrimary4;
    ESlot_Weapon_Melee: ESlotWeaponMelee3;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature122;
    ESlot_Signature_2: ESlotSignature222;
    ESlot_Signature_3: ESlotSignature322;
    ESlot_Signature_4: ESlotSignature422;
}

export interface ESlotSignature422 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties99;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strArriveSound: string;
    m_strDepartSound: string;
    m_strChannelDestinationSound: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_TeleportModifier: MTeleportModifier;
    m_BuffModifier: MBuffModifier8;
    m_FireRateModifier: MFireRateModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel18;
    m_strChannelLoopSound: string;
    m_previewParticle: string;
    m_TeleportStartParticle: string;
    m_TeleportEndParticle: string;
    m_strCastDelaySound: string;
    m_strChannelSound: string;
    m_strSelectedSound: string;
    m_strUnselectedSound: string;
    m_strSelectedLoopSound: string;
    m_strMoviePreviewPath: string;
}

export interface MHUDPanel18 {
    m_vecHUDElements: any[];
}

export interface MFireRateModifier {
    subclass: Subclass202;
}

export interface Subclass202 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strParticleEffect: string;
    m_strParticleEffectConfig: string;
}

export interface MBuffModifier8 {
    subclass: Subclass201;
}

export interface Subclass201 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleStatusEffect: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strHudMessageText: string;
    m_strParticleEffect: string;
}

export interface MTeleportModifier {
    subclass: Subclass200;
}

export interface Subclass200 {
    _class: string;
    _my_subclass_name: string;
    m_TeleportOriginParticle: string;
    m_TeleportDestinationParticle: string;
    m_TeleportStartSound: string;
    m_TeleportCompleteSound: string;
    m_TeleportArriveSound: string;
}

export interface MmapAbilityProperties99 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime2;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    SearchRadius: SearchRadius;
    BonusMoveSpeed: BonusMoveSpeed2;
    MovementSpeedBonusDuration: MeleeAttackLength;
    BonusFireRate: SlowPercent;
    FireRateMaxDuration: MeleeAttackLength;
}

export interface SearchRadius {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction9;
}

export interface MsubclassScaleFunction9 {
    subclass: Subclass199;
}

export interface Subclass199 {
    _class: string;
    _my_subclass_name: string;
    m_bFunctionDisabled: boolean;
}

export interface ESlotSignature322 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties98;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo39;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastSound: string;
    m_strCastAnimGraphParam: string;
    m_strMoviePreviewPath: string;
    m_flCameraPreviewOffset: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_SandPhantomModifier: MSandPhantomModifier;
    m_WhirlwindEvasionModifier: MWhirlwindEvasionModifier2;
    m_AutoIntrinsicModifiers: MAutoIntrinsicModifier3[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails26;
}

export interface MAbilityTooltipDetails26 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection26[];
}

export interface MvecAbilityInfoSection26 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock11[];
    m_vecBasicProperties: string[];
}

export interface MvecAbilityPropertiesBlock11 {
    m_vecAbilityProperties: MvecAbilityProperty[];
}

export interface MAutoIntrinsicModifier3 {
    subclass: Subclass198;
}

export interface Subclass198 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_ExplodeParticle: string;
    m_ProcSound: string;
    m_ExplodeSound: string;
    m_bRollOnceForAllBulletsInAShot: boolean;
    m_bCanProcMultipleTimesFromSameShot: boolean;
    m_bCanProcMultipleTimesOnOneTarget: boolean;
    m_flMaxBulletsToProcInShot: number;
    m_bShouldApplyAbilityCooldown: boolean;
    m_TracerAdditionParticle: string;
    m_bRequiresTargetFilter: boolean;
    m_nAbilityTargetTypes: string;
    m_ProcReadyModifier: MProcReadyModifier;
    m_PassiveVictimModifier: MPassiveVictimModifier;
}

export interface MPassiveVictimModifier {
    subclass: Subclass197;
}

export interface Subclass197 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_OverheadParticle: string;
    m_BuffStatusParticle: string;
    m_ConsumeMaxStacksSound: string;
    m_ApplyStackSound: string;
    m_ConsumeMaxStacksNonHeroSound: string;
    m_SlowModifier: MMoveSlowModifier;
    m_BuffStatusVictimParticle: string;
    m_StackDamageParticle: string;
    m_StackReadyParticle: string;
}

export interface MProcReadyModifier {
    subclass: Subclass196;
}

export interface Subclass196 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_ProcReadyParticle: string;
    m_strProcReadySound: string;
}

export interface MWhirlwindEvasionModifier2 {
    subclass: Subclass195;
}

export interface Subclass195 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_AttackerHitFx: string;
    m_ImpactParticle: string;
    m_strAttackerHitSound: string;
    m_strParticleEffect: string;
    m_playerBuffEnemy: string;
    m_playerBuffSelf: string;
    m_ReflectedBulletTracerParticle: string;
}

export interface MSandPhantomModifier {
    subclass: Subclass194;
}

export interface Subclass194 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_eHudDisplayLocation: string;
    m_sExpiredSound: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MWeaponInfo39 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_mapImpactEffects: MmapImpactEffects4;
    [key: string]: any;
}

export interface MmapAbilityProperties98 {
    AbilityCooldown: AbilityCooldown6;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    WhirlwindEvasionChance: MeleeDamageTakenScale;
    WhirlwindDuration: AirJumpVerticalSpeedPercent;
    ProcDamageBase: Damage;
    ProcChance: MeleeHalfAngle;
    ProcCooldown: DamageAmplificationPerStack;
    VictimStackDuration: AirJumpVerticalSpeedPercent;
    RevealDuration: AirJumpVerticalSpeedPercent;
    MaxStacks: DamageAmplificationPerStack;
    MovementSpeedSlow: SlowPercent;
    SlowDuration: MeleeAttackLength;
}

export interface AbilityCooldown6 {
    m_strValue: number;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction3;
    m_bIsHidden: boolean;
}

export interface ESlotSignature222 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties97;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo38;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_strCastSound: string;
    m_ExplosionSound: string;
    m_previewParticle: string;
    m_ExplodeParticle: string;
    m_CasterModifier: MCasterModifier2;
    m_DebuffModifier: MDebuffModifier19;
    m_StealWatcherModifier: MStealWatcherModifier;
    m_RecentlyDebuffedModifier: MProgressModifier;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_projectileInfo: MprojectileInfo25;
    m_strHitConfirm: string;
}

export interface MprojectileInfo25 {
    m_HitSound: string;
    m_LoopingSound: string;
}

export interface MStealWatcherModifier {
    subclass: Subclass193;
}

export interface Subclass193 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_StatStolenBuffModifier: MBulletResistModifier;
    m_StatStolenDebuffModifier: MStatStolenDebuffModifier;
    m_HealModifier: MLandingBonusesModifier;
}

export interface MStatStolenDebuffModifier {
    subclass: Subclass192;
}

export interface Subclass192 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_SiphonParticle: string;
    m_strParticleEffect: string;
    m_nEnabledStateMask: string;
    m_nAttributes: string;
    m_HealModifier: MLandingBonusesModifier;
}

export interface MDebuffModifier19 {
    subclass: Subclass191;
}

export interface Subclass191 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strSmallIconCssClass: string;
    m_DebuffParticle: string;
    m_strParticleEffect: string;
    m_sAmbientLoopingSound: string;
    m_strScreenParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MCasterModifier2 {
    subclass: Subclass190;
}

export interface Subclass190 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_eHudDisplayLocation: string;
    m_bIsHidden: boolean;
    m_CasterBuffParticle: string;
}

export interface MWeaponInfo38 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_mapImpactEffects: MmapImpactEffects2;
    m_eAttachmentSourceType: string;
    m_strCustomAttachmentSource: string;
    m_strBulletLoopingSound: string;
    m_flVerticalAimBias: number;
    [key: string]: any;
}

export interface MmapAbilityProperties97 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    LaunchWindowCooldown: MeleeAttackLength;
    LaunchWindowDuration: MeleeAttackLength;
    AbilityChargesConditionally: MeleeHalfAngle;
    Radius: Radius2;
    DPS: FlameAuraDPS;
    DamageInterval: MeleeHalfAngle;
    DebuffDuration: MeleeAttackLength;
    HealingFactor: MeleeAttackLength;
    NonHeroHealingFactor: MeleeAttackLength;
    BulletArmorReduction: TechResist;
    HealthSteal: HealthSteal;
    StealDuration: MeleeAttackLength;
    MaxStacks: MeleeHalfAngle;
    HeroStack: MeleeHalfAngle;
    NonHeroStack: MeleeHalfAngle;
}

export interface HealthSteal {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction4;
    m_strLocTokenOverride: string;
}

export interface Radius2 {
    m_strValue: string;
    m_strCSSClass: string;
    m_bIsHidden: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface ESlotSignature122 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties96;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_projectileInfo: MprojectileInfo24;
    m_strMoviePreviewPath: string;
    m_mapCastEventParticles: Default2;
    m_TornadoCastParticle: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_CasterModifier: MCasterModifier;
    m_WhirlwindEvasionModifier: MWhirlwindEvasionModifier;
    m_TornadoAura: MTornadoAura;
    m_AbilityTooltipDetails: MAbilityTooltipDetails25;
    m_strCastSound: string;
    m_strChannelSound: string;
    m_strCastDelaySound: string;
}

export interface MTornadoAura {
    subclass: Subclass189;
}

export interface Subclass189 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_sAmbientLoopingSound: string;
    m_strParticleStatusEffect: string;
    m_sExpiredSound: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura12;
    m_sStartSound: string;
}

export interface MmodifierProvidedByAura12 {
    subclass: Subclass188;
}

export interface Subclass188 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strHitConfirmSound: string;
    m_LiftModifier: MLiftModifier2;
}

export interface MLiftModifier2 {
    subclass: Subclass187;
}

export interface Subclass187 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_LiftParticle: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_HoldInPlaceModifier: MHoldInPlaceModifier;
    m_sStartSound: string;
    m_strScreenParticleEffect: string;
    m_sAmbientLoopingSound: string;
}

export interface MHoldInPlaceModifier {
    subclass: Subclass186;
}

export interface Subclass186 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_nEnabledStateMask: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strScreenParticleEffect: string;
    m_sStartSound: string;
}

export interface MWhirlwindEvasionModifier {
    subclass: Subclass185;
}

export interface Subclass185 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_AttackerHitFx: string;
    m_ImpactParticle: string;
    m_strAttackerHitSound: string;
    m_strParticleEffect: string;
    m_playerBuffEnemy: string;
    m_playerBuffSelf: string;
    m_ReflectedBulletTracerParticle: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
}

export interface MCasterModifier {
    subclass: Subclass184;
}

export interface Subclass184 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_cameraSequenceCreated: McameraSequenceCreated6;
    m_cameraSequenceRemoved: McameraSequenceRemoved3;
    m_bEndCreatedSequenceOnRemove: boolean;
}

export interface McameraSequenceCreated6 {
    m_vecDistanceOperations: MvecDistanceOperation12[];
    m_vecVertOffsetOperations: MvecDistanceOperation12[];
    m_vecTargetPosOperations: MvecTargetPosOperation7[];
}

export interface MvecTargetPosOperation7 {
    m_eCameraOperation: string;
    m_flMaintainDuration: number;
    m_bValuesAreRelative: boolean;
    m_bMaintainCurrent: boolean;
    m_flLagMinDuration: number;
    m_flLagSpringStrength: number;
    m_flLagTime: number;
    m_flLagMaxSpeed: number;
    m_bIncreaseSpringStrengthToKeepTargetOnScreen: boolean;
}

export interface MprojectileInfo24 {
    m_flUpSpeed: number;
    m_flSpeed: number;
    m_flGravityScale: number;
    m_bHideImpactParticle: number;
    m_bHideWarningParticle: number;
    m_flVerticalAimBias: number;
    m_LoopingSound: string;
}

export interface MmapAbilityProperties96 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration4;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    OpenHeight: StunDuration;
    Damage: Damage;
    TickRate: MeleeHalfAngle;
    ProjectileThinkInterval: MeleeHalfAngle;
    DistanceAboveGround: MeleeHalfAngle;
    ClimbHeight: MeleeHalfAngle;
    DropDownRate: MeleeHalfAngle;
    TornadoSpeed: MeleeHalfAngle;
    EnemyLiftDuration: StunDuration;
    SplitAngle: MeleeHalfAngle;
    ForwardOffset: MeleeHalfAngle;
    LiftHeight: MeleeHalfAngle;
    DampingFactor: MeleeHalfAngle;
    MaxDeltaMovementControl: MeleeHalfAngle;
    HoldInPlaceDuration: MeleeAttackLength;
    BossDamagePercent: MeleeHalfAngle;
    TargetBulletEvasionChance: MeleeDamageTakenScale;
    TechArmorDamageReduction: SlowPercent;
    WhirlwindEvasionChance: MeleeDamageTakenScale;
    WhirlwindDuration: AirJumpVerticalSpeedPercent;
}

export interface AbilityDuration4 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_eScaleType: string;
}

export interface Herosynth {
    ESlot_Weapon_Primary: ESlotWeaponPrimary20;
    ESlot_Weapon_Melee: ESlotWeaponMelee3;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature121;
    ESlot_Signature_2: ESlotSignature221;
    ESlot_Signature_3: ESlotSignature321;
    ESlot_Signature_4: ESlotSignature421;
}

export interface ESlotSignature421 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties95;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_strCastAnimGraphParam: string;
    m_strCSSClass: string;
    m_strAbilityImage: string;
    m_strCastDelaySound: string;
    m_AoEParticle: string;
    m_strMoviePreviewPath: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_DebuffModifier: MDebuffModifier18;
    m_AbilityTooltipDetails: MAbilityTooltipDetails4;
    m_deploymentInfo: MdeploymentInfo7;
    m_CastParticle: string;
}

export interface MdeploymentInfo7 {
    m_previewParticle: string;
}

export interface MDebuffModifier18 {
    subclass: Subclass183;
}

export interface Subclass183 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_EffectParticle: string;
    m_DebuffParticle: string;
    m_strParticleEffect: string;
    m_eDrawOverheadStatus: string;
    m_bIsHidden: boolean;
    m_sAmbientLoopingSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strScreenParticleEffect: string;
}

export interface MmapAbilityProperties95 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    DPS: Damage;
    DamageInterval: MeleeHalfAngle;
    DebuffDuration: MeleeAttackLength;
    CanBePurged: MeleeHalfAngle;
    HealAmpReceivePenaltyPercent: MeleeDamageTakenScale;
    HealAmpRegenPenaltyPercent: MeleeDamageTakenScale;
}

export interface ESlotSignature321 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties94;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_strCastAnimGraphParam: string;
    m_strCSSClass: string;
    m_strAbilityImage: string;
    m_strCastSound: string;
    m_strMoviePreviewPath: string;
    m_AoEParticle: string;
    m_HitParticle: string;
    m_strExpireSound: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_EscapeModifier: MEscapeModifier;
    m_DebuffModifier: MSlowModifier3;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_cameraSequenceChannelStart: McameraSequenceChannelStart5;
    m_bEndCastStartSequenceOnCastComplete: boolean;
    m_strCastDelaySound: string;
}

export interface McameraSequenceChannelStart5 {
    m_vecDistanceOperations: MvecDistanceOperation19[];
}

export interface MvecDistanceOperation19 {
    m_eCameraOperation: string;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpBias?: number;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MEscapeModifier {
    subclass: Subclass182;
}

export interface Subclass182 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_sAmbientLoopingSound: string;
    m_SatchelParticle: string;
    m_nEnabledStateMask: string;
}

export interface MmapAbilityProperties94 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime5;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    Damage: Damage;
    FallSpeedMax: EnemyDragSpeed;
    FireRateSlow: SlowPercent;
    DebuffDuration: MeleeAttackLength;
}

export interface AbilityChannelTime5 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction7;
    m_eDisplayType: string;
    m_strLocTokenOverride: string;
}

export interface ESlotSignature221 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties93;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strMoviePreviewPath: string;
    m_TeleportTrailParticle: string;
    m_strCastSound: string;
    m_strCasterLoopingSound: string;
    m_strHitConfirmationSound: string;
    m_strProjectileExpireSound: string;
    m_strDamageTakenSound: string;
    m_ImpactParticle: string;
    m_strImpactSound: string;
    m_projectileInfo: MprojectileInfo23;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_WeaponDamageBonusModifier: MWeaponDamageBonusModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails25;
    m_HUDPanel: MHUDPanel4;
    m_vecDependentAbilities: string[];
    m_cameraSequenceTeleport: McameraSequenceTeleport;
    m_strTimerSound: string;
}

export interface McameraSequenceTeleport {
    m_vecTargetPosOperations: MvecTargetPosOperation6[];
}

export interface MvecTargetPosOperation6 {
    m_flSpringMaxDuration: number;
    m_eCameraOperation: string;
}

export interface MAbilityTooltipDetails25 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection25[];
}

export interface MvecAbilityInfoSection25 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock10[];
    m_vecBasicProperties: string[];
}

export interface MvecAbilityPropertiesBlock10 {
    m_vecAbilityProperties: MvecAbilityProperty[];
    m_strPropertiesTitleLocString: string;
}

export interface MWeaponDamageBonusModifier {
    subclass: Subclass181;
}

export interface Subclass181 {
    _my_subclass_name: string;
    _class: string;
    m_sLocalizationName: string;
    m_strParticleEffect: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MprojectileInfo23 {
    m_flGravityScale: number;
    m_flUpSpeed: number;
    m_flSpeed: number;
    m_particle: string;
    m_LoopingSound: string;
    m_nBehaviors: string;
    m_warningParticle: string;
    m_bHideWarningParticle: boolean;
    m_flPhysicsRadius: number;
}

export interface MmapAbilityProperties93 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    Damage: Damage;
    TickRate: MeleeHalfAngle;
    MaxLifetime: MeleeAttackLength;
    WeaponDamageBonus: WeaponDamageBonus;
    WeaponDamageBonusDuration: AirJumpVerticalSpeedPercent;
}

export interface ESlotSignature121 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties92;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo37;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_ShootParticle: string;
    m_ImpactParticle: string;
    m_strCastSound: string;
    m_strProjectileLaunchSound: string;
    m_projectileInfo: MprojectileInfo22;
    m_flAttackInterval: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_BarrageCasterModifier: MProgressModifier;
    m_AmpModifier: MBulletResistModifier;
    m_DebuffModifier: MDebuffModifier7;
    m_AutoChannelModifier: MInnateModifier;
    m_HUDPanel: MHUDPanel4;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_ChannelParticle: string;
}

export interface MprojectileInfo22 {
    m_HitSound: string;
}

export interface MWeaponInfo37 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects3;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_flPenetrationPercent: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_bHitOnceAcrossAllBullets: boolean;
    m_eAttachmentSourceType: string;
    m_strCustomAttachmentSource: string;
    [key: string]: any;
}

export interface MmapAbilityProperties92 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime2;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DamagePerProjectile: Damage;
    ProjectileAmount: MeleeHalfAngle;
    PopUpSpeed: MeleeHalfAngle;
    FallSpeedMax: MeleeHalfAngle;
    AirSpeedMax: EnemyDragSpeed;
    AirDrag: MeleeHalfAngle;
    Radius: AoESleep;
    MoveSlowPercent: SlowPercent;
    SlowDuration: MeleeAttackLength;
    AmpPercentPerStack: MeleeHalfAngle;
    AmpDuration: MeleeAttackLength;
    LifeStealPercentOnHit: MeleeAttackLength;
    LifeStealPercentOnHitNonHero: MeleeAttackLength;
}

export interface ESlotWeaponMelee3 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties2;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityActivation: string;
    m_eAbilityTargetingLocation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_bitsInterruptingStates: string;
    m_strAbilityImage: string;
    m_MeleeDamageFlags: string;
    m_flCollisionDistance: number;
    m_cameraSequenceHoldStart: McameraSequenceHoldStart;
    m_strHoldBegin: string;
    m_HoldBeginEffect: string;
    m_cameraSequenceHitImpact: McameraSequenceHitImpact;
    m_ParryVictimModifier: MParryVictimModifier;
    m_SuccessfulParryParticle: string;
    m_strSuccessfulParrySound: string;
    m_flParryWindow: number;
    m_flParryStunTime: number;
    m_ParryActivateParticle: string;
    m_AirMeleeUpScale: number[];
    m_mapAttacks: MmapAttacks;
    m_HUDPanel: MHUDPanel2;
    m_LightAttackData: MLightAttackData;
    m_HeavyAttackData: MLightAttackData;
}

export interface MLightAttackData {
    m_strHitDebrisSound: string;
    m_strHitSound: string;
    m_strHitHeroSound: string;
}

export interface ESlotWeaponPrimary20 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo36;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo36 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil2;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_nRecoilSeed: number;
    m_strBulletImpactSound: string;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_flBulletDamage: number;
    m_flPelletScatterFactor: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterSpreadFactor: number;
    [key: string]: any;
}

export interface Heroviscous {
    ESlot_Weapon_Primary: ESlotWeaponPrimary19;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature120;
    ESlot_Signature_2: ESlotSignature220;
    ESlot_Signature_3: ESlotSignature320;
    ESlot_Signature_4: ESlotSignature420;
    ESlot_Weapon_Secondary: ESlotWeaponSecondary3;
}

export interface ESlotWeaponSecondary3 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo35;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_cameraSequenceCastStart: Default2;
    m_projectileInfo: Default2;
}

export interface MWeaponInfo35 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects3;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_vecScatterOffsets: any[];
    m_flPelletScatterSpreadFactor: number;
    m_flBulletDamage: number;
    m_flPelletScatterFactor: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_flBulletRadiusVsWorld: number;
    m_flExplosionRadius: number;
    m_flExplosionDamageScaleAtMaxRadius: number;
    m_iAmmoConsumedPerShot: number;
    m_flVerticalAimBias: number;
    m_bCanCrit: boolean;
    m_strBulletLoopingSound: string;
    [key: string]: any;
}

export interface ESlotSignature420 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties91;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_nAbilityTargetTypes: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_TransformStartFx: string;
    m_flVerticalCameraOffsetLerpTime: number;
    m_flVerticalCameraOffsetBias: number;
    m_flVerticalCameraOffset: number;
    m_strAbilityImage: string;
    m_flDistanceCameraOffsetLerpTime: number;
    m_flDistanceCameraOffsetBias: number;
    m_flDistanceCameraOffset: number;
    m_HUDPanel: MHUDPanel17;
    m_BallJumpSound: string;
    m_ExplodeFX: string;
    m_cameraSequenceCastStart: Default2;
    m_cameraSequenceCastComplete: McameraSequenceCastComplete4;
    m_strPopGraphParamter: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_flTransformToBallTime: number;
    m_flTransformFromBallTime: number;
    m_flSpeedAccel: number;
    m_flSpeedDeccel: number;
    m_flTurnRatio: number;
    m_flAirTurnRatio: number;
    m_DamagePreventionModifier: MDamagePreventionModifier;
    m_WallImpactFx: string;
    m_strChannelLoopSound: string;
    m_BallLoopSound: string;
    m_WallImpactSound: string;
    m_PlayerImpactSound: string;
    m_strCastSound: string;
    m_strCastDelaySound: string;
    m_AutoIntrinsicModifiers: any[];
    m_RollingModifier: MRollingModifier;
    m_ExitBallSound: string;
    m_flDefaultBallSpeed: number;
    m_flFastBallSpeed: number;
    m_flElasticity: number;
    m_flWallCheckGroundOffset: number;
    m_flWallPauseTime: number;
    m_flWallTurnRatioMax: number;
    m_flWallTurnRatioMin: number;
    m_strMoviePreviewPath: string;
    m_GroundImpactParticle: string;
    m_JumpParticle: string;
}

export interface MRollingModifier {
    subclass: Subclass180;
}

export interface Subclass180 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_TrailParticle: string;
    m_DirectionParticle: string;
}

export interface MDamagePreventionModifier {
    subclass: Subclass179;
}

export interface Subclass179 {
    _my_subclass_name: string;
    _class: string;
    m_bIsHidden: boolean;
    m_flDuration: number;
    m_strParticleEffect: string;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_eDebuffType: string;
}

export interface MHUDPanel17 {
    m_vecHUDElements: MvecHUDElement3[];
    m_vecButtonHints: MvecButtonHint5[];
}

export interface MvecButtonHint5 {
    m_strContext: string;
    m_eButton1: string;
    m_eHintSide: string;
    m_strLocToken: string;
    m_strBindingOverride1?: string;
}

export interface MmapAbilityProperties91 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    BallRadius: MeleeHalfAngle;
    Damage: AirDropBulletShield;
    BallOffset: MeleeHalfAngle;
    BossDamagePercent: MeleeHalfAngle;
    FrictionPercentage: BonusClipSizePercent;
    AccelerationPercentage: MeleeHalfAngle;
    MoveSpeedMax: EndOfHookMoveSpeedBonus;
    BreakablePropDamageRadius: MeleeHalfAngle;
    BallScale: MeleeHalfAngle;
    JumpForce: MeleeHalfAngle;
    Radius: Radius;
    ParticleRadiusMultiplier: MeleeHalfAngle;
    TickRate: MeleeHalfAngle;
    StunDuration: AirJumpVerticalSpeedPercent;
    KnockForce: MeleeHalfAngle;
    TechResist: MeleeDamageTakenScale;
    BulletResist: MeleeDamageTakenScale;
    AirJumpForce: MeleeHalfAngle;
    CastWhileRolling: MeleeHalfAngle;
}

export interface Radius {
    m_eDisplayType: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface ESlotSignature320 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties90;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_flTargetingConeAngle: string;
    m_HUDPanel: MHUDPanel16;
    m_cameraSequenceCastStart: Default2;
    m_cameraSequenceCastComplete: McameraSequenceCastComplete4;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_PortalParticle: string;
    m_flWindupTime: number;
    m_PunchParticle: string;
    m_flAttackTime: number;
    m_deploymentInfo: MdeploymentInfo6;
    m_nAbilityTargetTypes: string;
    m_WallPunchParticle: string;
    m_CeilingPunchParticle: string;
    m_strSelectedSound: string;
    m_flEnemyPortalTelegraphTime: number;
    m_flSelfPortalTelegraphTime: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_PunchSound: string;
    m_EnemyPortalSound: string;
    m_SelfPortalSound: string;
    m_strCastSound: string;
    m_WindupSound: string;
    m_CastParticle: string;
    m_PunchRollSlowModifier: MPunchRollSlowModifier;
    m_strHitConfirmationSound: string;
    m_flPlayerCheckSphereRadius: number;
    m_ImpactModifier: MMoveSlowModifier;
    m_strMoviePreviewPath: string;
}

export interface MPunchRollSlowModifier {
    subclass: Subclass178;
}

export interface Subclass178 {
    _class: string;
    _my_subclass_name: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_bIsHidden: boolean;
    m_strHintText: string;
    m_strParticleEffect: string;
}

export interface MdeploymentInfo6 {
    m_bRequiresUpNormal: boolean;
    m_bPointTrace: boolean;
    m_previewParticle: string;
    m_bGroundCheck: boolean;
    m_bPlaceFlat: boolean;
    m_flGroundCheckHeightOffset: number;
}

export interface McameraSequenceCastComplete4 {
    m_vecVertOffsetOperations: any[];
    m_vecTargetPosOperations: any[];
}

export interface MHUDPanel16 {
    m_vecHUDElements: any[];
    m_vecButtonHints: any[];
}

export interface MmapAbilityProperties90 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower2;
    WeaponPower: TechPower;
    Damage: Damage;
    Radius: MaxSlowDuration;
    PunchHalfHeight: MeleeHalfAngle;
    TossSpeed: MeleeHalfAngle;
    TossSpeedWall: MeleeHalfAngle;
    TossSpeedUpWall: MeleeHalfAngle;
    TossGroundSideRatio: MeleeHalfAngle;
    PunchRollSlow: MeleeDamageTakenScale;
    PunchRollSlowDuration: MeleeHalfAngle;
    SlowPercent: SlowPercent;
    ImpactDuration: AirJumpVerticalSpeedPercent;
}

export interface TechPower2 {
    m_strValue: string;
    m_strDisableValue: string;
    m_bCanSetTokenOverride: boolean;
    m_eProvidedPropertyType: string;
    m_strCSSClass: string;
}

export interface ESlotSignature220 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties89;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_flTargetingConeAngle: number;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_RestorativeGooParticle: string;
    m_RestorativeGooModifier: MRestorativeGooModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails24;
    m_strDamageTakenSound: string;
    m_strMoviePreviewPath: string;
    m_strCastButtonLocToken: string;
    m_strAltCastButtonLocToken: string;
}

export interface MAbilityTooltipDetails24 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection24[];
}

export interface MvecAbilityInfoSection24 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock9[];
    m_vecBasicProperties: any[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MRestorativeGooModifier {
    subclass: Subclass177;
}

export interface Subclass177 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_sAmbientLoopingSound: string;
    m_flDistanceCameraOffset: number;
    m_flDistanceCameraOffsetLerpTime: number;
    m_flDistanceCameraOffsetBias: number;
    m_RestorativeGooEndParticle: string;
    m_sExpiredSound: string;
    m_nAmbientLoopingSoundRecipients: string;
    m_sStartSound: string;
    m_NonTargetLoopingSound: string;
    m_TargetLoopingSound: string;
    m_BreakoutProgressBarModifier: MBreakoutProgressBarModifier;
    m_eDebuffType: string;
    m_bIsHidden: boolean;
    m_bReverseHudProgressBar: boolean;
    m_eHudDisplayLocation: string;
    m_strParticleEffect: string;
    m_PostCubeBuffModifier: MSlowModifier3;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: any[];
    m_strHintText: string;
    m_strHudMessageText: string;
}

export interface MBreakoutProgressBarModifier {
    subclass: Subclass176;
}

export interface Subclass176 {
    _my_subclass_name: string;
    _class: string;
    m_bReverseHudProgressBar: boolean;
    m_sLocalizationName: string;
    m_eHudDisplayLocation: string;
    m_strSmallIconCssClass: string;
    m_strHintText: string;
}

export interface MmapAbilityProperties89 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    CubeScale: MeleeHalfAngle;
    Friction: MeleeHalfAngle;
    BonusHealthRegen: ExternalBonusHealthRegen;
    MaxHealthRegen: MeleeAttackLength;
    PurgeDebuffs: MeleeHalfAngle;
    PushBackRadius: MeleeHalfAngle;
    PushBackForce: MeleeHalfAngle;
    LightMeleeForce: MeleeHalfAngle;
    HeavyMeleeForce: MeleeHalfAngle;
    BulletForce: MeleeHalfAngle;
    SlideForce: MeleeHalfAngle;
    BreakoutTime: MeleeHalfAngle;
    PostCubeBuff: MeleeHalfAngle;
    BonusMoveSpeed: BonusMoveSpeed3;
    PostCubeBuffDuration: BeamCloseRadius;
    StaminaCooldownReduction: StaminaCooldownReduction;
}

export interface StaminaCooldownReduction {
    m_strValue: string;
    m_eDisplayType: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface BonusMoveSpeed3 {
    m_strValue: string;
    m_eDisplayType: string;
    m_eDisplayUnits: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface ESlotSignature120 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties88;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strCastAnimGraphParam: string;
    m_strAbilityImage: string;
    m_projectileInfo: MprojectileInfo21;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastSound: string;
    m_GooGrenadeImpactModifier: MGooGrenadeImpactModifier;
    m_GooGrenadeExplodeParticle: string;
    m_GrenadeHitImpactSound: string;
    m_GrenadeMissImpactSound: string;
    m_GooGrenadeSkipParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails23;
    m_GooGrenadePuddleAuraModifier: MGooGrenadePuddleAuraModifier;
    m_flMinRestitution: number;
    m_flMaxRestitution: number;
    m_strMoviePreviewPath: string;
}

export interface MGooGrenadePuddleAuraModifier {
    subclass: Subclass175;
}

export interface Subclass175 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_modifierProvidedByAura: MSlowModifier3;
    m_flAuraRadius: number;
}

export interface MAbilityTooltipDetails23 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection23[];
}

export interface MvecAbilityInfoSection23 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock?: MvecAbilityPropertiesBlock9[];
    m_vecBasicProperties?: any[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MGooGrenadeImpactModifier {
    subclass: Subclass174;
}

export interface Subclass174 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_strSmallIconCssClass: string;
    m_eDrawOverheadStatus: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_nAmbientLoopingSoundRecipients: string;
    m_sExpiredSound: string;
}

export interface MprojectileInfo21 {
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_flTriggerRadius: number;
    m_flPhysicsRadius: number;
    m_bHideWarningParticle: number;
    m_particle: string;
    m_nBehaviors: string;
    m_AutoProjectileModifier: MAutoProjectileModifier4;
    m_HitSound: string;
}

export interface MmapAbilityProperties88 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    SlowPercent: SlowPercent2;
    MoveSpeedSlowPercent: BonusClipSizePercent;
    MaxBounces: MeleeHalfAngle;
    Damage: Damage;
    MoveSpeedGroundSlow: MeleeHalfAngle;
    BossDamagePercent: MeleeHalfAngle;
    Radius: MeleeAttackLength;
    PuddleDuration: Damage;
    DetonateCooldown: MeleeHalfAngle;
    SecondHitDamagePercentage: MeleeHalfAngle;
    ThirdHitDamagePercentage: MeleeHalfAngle;
}

export interface SlowPercent2 {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MAutoCastDelayModifier;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
    m_bIsHidden: boolean;
}

export interface ESlotWeaponPrimary19 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo34;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
    m_cameraSequenceCastStart: Default2;
    m_projectileInfo: Default2;
}

export interface MWeaponInfo34 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flBulletDamage: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_vecScatterOffsets: any[];
    m_flPelletScatterSpreadFactor: number;
    m_flPelletScatterFactor: number;
    m_flBulletRadiusVsWorld: number;
    m_flExplosionDamageScaleAtMaxRadius: number;
    [key: string]: any;
}

export interface Herolash {
    ESlot_Weapon_Primary: ESlotWeaponPrimary18;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature119;
    ESlot_Signature_2: ESlotSignature219;
    ESlot_Signature_3: ESlotSignature319;
    ESlot_Signature_4: ESlotSignature419;
}

export interface ESlotSignature419 {
    m_eAbilityType: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilityActivation: string;
    m_mapAbilityProperties: MmapAbilityProperties87;
    _class: string;
    m_eAbilityTargetingShape: string;
    m_flTargetingConeAngle: number;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_bShowTargetingPreviewWhileChanneling: boolean;
    m_eAbilityTargetingLocation: string;
    m_HUDPanel: MHUDPanel4;
    m_strApplyLockonStack: string;
    m_strCancelAbilityKey: string;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_flAirDrag: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_GrappleEnemyModifier: MGrappleEnemyModifier;
    m_LaunchParticle: string;
    m_TargetPreviewParticle: string;
    m_strThrowEnemyAnimGraphParam: string;
    m_strCastAnimSequenceName: string;
    m_strCastSound: string;
    m_strMoviePreviewPath: string;
    m_GrabSound: string;
    m_MissSound: string;
    m_ThrowSound: string;
    m_UltimateCastParticle: string;
    m_strCastDelaySound: string;
    m_UltimateCastEnemyParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_GrappleTargetModifier: MGrappleTargetModifier3;
    m_cameraSequenceCastStart: McameraSequenceCastStart6;
    m_cameraSequenceChannelStart: McameraSequenceChannelStart4;
    m_TargetModifier: MTargetModifier3;
}

export interface MTargetModifier3 {
    subclass: Subclass173;
}

export interface Subclass173 {
    _class: string;
    m_strParticleEffect: string;
    m_strParticleStatusEffect: string;
    m_strScreenParticleEffect: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_LockingOnParticle: string;
    m_LockedOnParticle: string;
}

export interface McameraSequenceChannelStart4 {
    m_vecDistanceOperations: MvecFOVOperation12[];
    m_vecFOVOperations: MvecFOVOperation12[];
}

export interface McameraSequenceCastStart6 {
    m_vecDistanceOperations: MvecDistanceOperation18[];
    m_vecFOVOperations: MvecDistanceOperation18[];
}

export interface MvecDistanceOperation18 {
    m_eCameraOperation: string;
    m_bValuesAreRelative: boolean;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MGrappleTargetModifier3 {
    subclass: Subclass172;
}

export interface Subclass172 {
    _my_subclass_name: string;
    _class: string;
    m_RopeParticle: string;
    m_sStartSound: string;
    m_strParticleEffect: string;
    m_strParticleStatusEffect: string;
}

export interface MGrappleEnemyModifier {
    subclass: Subclass171;
}

export interface Subclass171 {
    _class: string;
    _my_subclass_name: string;
    m_ImpactParticle: string;
    m_GrappleParticle: string;
    m_sStartSound: string;
    m_ImpactSound: string;
    m_cameraSequenceCreated: McameraSequenceCreated5;
    m_DebuffModifier: MDebuffModifier17;
    m_bIsHidden: boolean;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_LaunchParticle: string;
    m_RopeParticle: string;
}

export interface MDebuffModifier17 {
    subclass: Subclass170;
}

export interface Subclass170 {
    _my_subclass_name: string;
    _class: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strParticleEffect: string;
    m_strParticleStatusEffect: string;
    m_strScreenParticleEffect: string;
}

export interface McameraSequenceCreated5 {
    m_vecDistanceOperations: MvecDistanceOperation17[];
}

export interface MvecDistanceOperation17 {
    m_flSpringStrength?: number;
    m_flSpringMaxDuration?: number;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MmapAbilityProperties87 {
    TimeToGainLockonStack: StunDuration;
    LockonConeAngle: StunDuration;
    TimeToLoseLockonStack: MeleeHalfAngle;
    LosingLockGraceTime: MeleeHalfAngle;
    MaxLockonStacks: MeleeHalfAngle;
    StacksCanDecay: MeleeHalfAngle;
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay3;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ImpactDamage: Damage;
    UpBoostSpeed: MeleeHalfAngle;
    LiftHeight: MeleeHalfAngle;
    BoostTime: MeleeHalfAngle;
    HangTime: MeleeHalfAngle;
    ThrowDistance: ThrowDistance;
    MinAimAngle: MeleeHalfAngle;
    SlamSpeed: MeleeHalfAngle;
    ThrowStraightDuration: MeleeHalfAngle;
    SlowDuration: MeleeAttackLength;
    SlowPercent: SlowPercent;
    ImpactRadius: AirJumpVerticalSpeedPercent;
    NotInConeLosesLock: MeleeHalfAngle;
}

export interface ThrowDistance {
    m_strValue: string;
    m_subclassScaleFunction: MsubclassScaleFunction6;
}

export interface ESlotSignature319 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties86;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastSound: string;
    m_strCastAnimGraphParam: string;
    m_strMoviePreviewPath: string;
    m_FlogDebuffModifier: MFlogDebuffModifier;
    m_FlogLifeLeachParticle: string;
    m_FlogParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MFlogDebuffModifier {
    subclass: Subclass169;
}

export interface Subclass169 {
    _class: string;
    _my_subclass_name: string;
    m_FlogDebuffParticle: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties86 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    TargetingConeAngle: Damage;
    EnemySlowPct: StunDuration;
    EnemySlowDuration: MeleeAttackLength;
    HealPctVsNonHeroes: MeleeAttackLength;
    HealPctVsHeroes: MeleeAttackLength;
    Damage: Damage;
    FireRateSlow: SlowPercent;
}

export interface ESlotSignature219 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties85;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_flTargetingConeAngle: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_LashParticle: string;
    m_strCastSound: string;
    m_strVictimCastSound: string;
    m_BuffModifier: MBuffModifier7;
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_strCastAnimGraphParam: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MBuffModifier7 {
    subclass: Subclass168;
}

export interface Subclass168 {
    _class: string;
    _my_subclass_name: string;
    m_nAttributes: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties85 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    JumpVelocity: ChainLength;
    LashFriendlies: MeleeHalfAngle;
    LashMetalSkinDuration: StunDuration;
    MinDistance: StunDuration;
    JumpSlowResistance: MeleeHalfAngle;
    RestoreStaminaOnUse: MeleeHalfAngle;
    WeaponDamageBonus: SlowPercent;
    WeaponDamageBonusDuration: MeleeAttackLength;
    WeaponFireRateBonus: TechResist;
}

export interface ESlotSignature119 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties84;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingLocation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade7[];
    m_StompParticle: string;
    m_StompExplosionSound: string;
    m_ImpactModifier: MSlowModifier;
    m_DownStrikeModifier: MSnipeModifier;
    m_TargetPreviewParticle: string;
    m_strGroundCastAnimGraphParam: string;
    m_strAirCastAnimGraphParam: string;
    m_strCastAnimGraphParam: string;
    m_previewParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastSound: string;
    m_flTrackAmount: number;
    m_flDamageFrustumAngle: number;
    m_flDamageFrustumHalfWidth: number;
    m_flDamageWaveSpeed: number;
    m_flDamageTraceProbeStepDownHeight: number;
    m_flDamageTraceProbeStepUpHeight: number;
    m_StompLineParticle: string;
    m_nGroundCrackGap: number;
    m_StompImpactParticle: string;
    m_flGroupLengthTolerance: number;
    m_StompLineObstructedParticle: string;
    m_StompEnemyImpactSound: string;
}

export interface MvecAbilityUpgrade7 {
    m_vecPropertyUpgrades: MvecPropertyUpgrade7[];
}

export interface MvecPropertyUpgrade7 {
    m_strPropertyName: string;
    m_strBonus: number | string;
    m_eUpgradeType?: string;
    m_eScaleStatFilter?: string;
}

export interface MmapAbilityProperties84 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    StrikeVelocity: MeleeHalfAngle;
    StompDamage: Damage;
    StompDamagePerMeterPrimary: FlameAuraDPS;
    StompDamagePerMeterSecondary: FlameAuraDPS;
    StompDamagePrimaryRange: MeleeHalfAngle;
    MinAimAngle: MeleeHalfAngle;
    SlowDuration: MeleeAttackLength;
    EnemySlowPct: SlowPercent;
    StompVerticalThreshold: MeleeHalfAngle;
    StompBounceHeight: MeleeHalfAngle;
}

export interface ESlotWeaponPrimary18 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo33;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo33 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flIntraBurstCycleTime: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Heroyamato {
    ESlot_Weapon_Primary: ESlotWeaponPrimary17;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Weapon_Secondary: ESlotWeaponSecondary2;
    ESlot_Signature_1: ESlotSignature118;
    ESlot_Signature_2: ESlotSignature218;
    ESlot_Signature_3: ESlotSignature318;
    ESlot_Signature_4: ESlotSignature418;
}

export interface ESlotSignature418 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties83;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_AutoChannelModifier: MAutoChannelModifier;
    m_strMoviePreviewPath: string;
    m_cameraSequenceChannelStart: McameraSequenceChannelStart3;
    m_cameraSequenceCastStart: McameraSequenceCastStart5;
    m_strCastAnimGraphParam: string;
    m_AutoCastDelayModifier: MAutoCastDelayModifier;
    m_strChannelLoopSound: string;
    m_AOERangeEffect: string;
    m_strCastSound: string;
    m_bEndCastStartSequenceOnCastComplete: boolean;
    m_flRiseSpeed: number;
    m_flSpeedDecayScale: number;
    m_cameraSequenceExplosion: McameraSequenceExplosion;
    m_flExplosionShakeFrequency: number;
    m_flExplosionShakeAmplitude: number;
    m_flExplosionShakeDuration: number;
    m_flRiseDuration: number;
    m_flExplodeHoldTime: number;
    m_AnimCastEffect: string;
    m_strCastDelaySound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel11;
    m_BuffModifier: MBuffModifier6;
    m_BuffTimerModifier: MBuffTimerModifier;
}

export interface MBuffTimerModifier {
    subclass: Subclass167;
}

export interface Subclass167 {
    _class: string;
    _my_subclass_name: string;
    m_eHudDisplayLocation: string;
    m_strParticleEffect: string;
}

export interface MBuffModifier6 {
    subclass: Subclass166;
}

export interface Subclass166 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleEffect: string;
    m_nEnabledStateMask: string;
    m_nDisabledStateMask: string;
    m_strParticleStatusEffect: string;
    m_eHudDisplayLocation: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_nStatusEffectPriority: number;
}

export interface McameraSequenceExplosion {
    m_vecDistanceOperations: MvecDistanceOperation16[];
    m_vecFOVOperations: MvecFOVOperation12[];
}

export interface MvecDistanceOperation16 {
    m_flMaintainDuration?: number;
    m_eCameraOperation?: string;
    m_flMaintainFloat?: number;
    m_bValuesAreRelative: boolean;
}

export interface McameraSequenceCastStart5 {
    m_vecDistanceOperations: MvecDistanceOperation13[];
    m_vecFOVOperations: MvecDistanceOperation13[];
}

export interface McameraSequenceChannelStart3 {
    m_vecDistanceOperations: MvecDistanceOperation15[];
    m_vecFOVOperations: MvecFOVOperation4[];
}

export interface MvecDistanceOperation15 {
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_flSpringStrength?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MAutoChannelModifier {
    subclass: Subclass165;
}

export interface Subclass165 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_eDrawOverheadStatus: string;
    m_eHudDisplayLocation: string;
    m_nEnabledStateMask: string;
    m_strParticleEffect: string;
}

export interface MmapAbilityProperties83 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay3;
    AbilityChannelTime: AbilityChannelTime4;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    BonusMoveSpeed: SlowPercent;
    AbilitySpeedPct: StunDuration;
    TechResist: SlowPercent;
    BulletResist: SlowPercent;
}

export interface AbilityChannelTime4 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction7;
    m_eDisplayUnits: string;
    m_strLocTokenOverride: string;
}

export interface AbilityCastDelay3 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_strLocTokenOverride: string;
}

export interface ESlotSignature318 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties82;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_AbilityBehaviorsBits: string;
    m_eAbilityActivation: string;
    m_strAbilityImage: string;
    m_eAbilityTargetingLocation: string;
    m_nAbilityTargetTypes: string;
    m_strCastSound: string;
    m_ImpactParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_eAbilityTargetingShape: string;
    m_flTargetingConeAngle: number;
    m_flBackswingDuration: number;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_HealingSlashSwordGlow: string;
    m_HealingSlashParticle: string;
    m_bEndCastStartSequenceOnCastComplete: boolean;
    m_cameraSequenceCastStart: McameraSequenceCastStart;
    m_cameraSequenceCastComplete: McameraSequenceAttacking;
    m_remapAngleToTime: number[];
    m_DebuffModifier: MSlowModifier3;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_flMaxAttackAngle: number;
    m_CastParticle: string;
    m_strCastDelaySound: string;
}

export interface MmapAbilityProperties82 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: Damage;
    Radius: MeleeAttackLength;
    HealFixedHealth: DebuffDuration;
    HealMaxHealth: MeleeAttackLength;
    DebuffDuration: MeleeAttackLength;
    FireRateSlow: SlowPercent;
}

export interface ESlotSignature218 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties81;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo29;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilityActivation: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_flJumpAirDrag: number;
    m_flDashSpeed: number;
    m_flJumpAirSpeedMax: number;
    m_nAbilityTargetTypes: string;
    m_LeapParticle: string;
    m_strCastDelaySound: string;
    m_ImpactParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_eAbilityTargetingShape: string;
    m_SlashParticle: string;
    m_flFlyingCloseEnoughToTarget: number;
    m_SlowModifier: MSlowModifier3;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_flAnimToStrikePointTime: number;
    m_cameraSequenceFlying: McameraSequenceCastComplete3;
    m_cameraSequenceTeleport: McameraSequenceRemoved2;
    m_cameraSequenceAttacking: McameraSequenceAttacking;
    m_flTargetingConeAngle: number;
    m_flJumpFallSpeedMax: number;
    m_strStartAttack: string;
    m_strStartFlyingToTarget: string;
    m_strGrappleHitTarget: string;
    m_GrappleTargetModifier: MGrappleTargetModifier2;
    m_BulletGrappleTracerParticle: string;
    m_strGrappleHitWorld: string;
    m_strGrappleHitNothing: string;
    m_EnemyGrappleParticle: string;
    m_flGrappleShotDelayToFlyOnHit: number;
    m_flGrappleShotFloatTime: number;
    m_flVelocityTurnSpringStrength: number;
    m_flAngleToSpeedScale: number[];
    m_WeaponBuffModifier: MWeaponBuffModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails22;
    m_flGrappleSpeed: number;
    m_curveSpeedScale: MBulletSpeedCurve;
}

export interface MAbilityTooltipDetails22 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection22[];
}

export interface MvecAbilityInfoSection22 {
    m_strLocString?: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock9[];
    m_vecBasicProperties?: string[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MWeaponBuffModifier {
    subclass: Subclass164;
}

export interface Subclass164 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecScriptValues: any[];
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MGrappleTargetModifier2 {
    subclass: Subclass163;
}

export interface Subclass163 {
    _class: string;
    _my_subclass_name: string;
    m_GrappleRopeParticle: string;
    m_bIsHidden: boolean;
}

export interface MSlowModifier3 {
    subclass: Subclass162;
}

export interface Subclass162 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties81 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: FlameAuraDPS;
    SlowDuration: MeleeAttackLength;
    SlowPercent: SlowPercent;
    WeaponDamageBonus: SlowPercent;
    WeaponPowerIncreaseDuration: MeleeAttackLength;
}

export interface ESlotSignature118 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties80;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_AbilityBehaviorsBits: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_SlowModifier: MSlowModifier;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_strStartSound: string;
    m_strChannelSound: string;
    m_HUDPanel: MHUDPanel15;
    m_ImpactParticle: string;
    m_CastParticle: string;
    m_eAbilityTargetingLocation: string;
    m_flAirDrag: number;
    m_vecLongEffectOffset: number[];
    m_strMoviePreviewPath: string;
    m_eAbilityTargetingShape: string;
    m_PowerUpParticle: string;
    m_flMaxPowerPadding: number;
    m_flEffectGroundTrace: number;
    m_strWhizbySound: string;
    m_strDamageImpactSound: string;
    m_strDamageImpactVictimSound: string;
    m_strPowerUp3Sounds: string;
    m_strPowerUp2Sounds: string;
    m_strPowerUp1Sounds: string;
    m_PowerSlashParticle: string;
    m_PowerSlashFullParticle: string;
    m_strSlashSound: string;
    m_strSlashFullSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_flStartPosTestCapsuleLength: number;
}

export interface MHUDPanel15 {
    m_vecHUDElements: MvecHUDElement4[];
    m_vecButtonHints: MvecButtonHint3[];
}

export interface MmapAbilityProperties80 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    SlashLength: MeleeAttackLength;
    ShortChargeDamagePct: StunDuration;
    MediumChargeDamagePct: StunDuration;
    FullChargeDamage: Damage;
    SlashRadius: SlashRadius;
    FallSpeedMax: MeleeHalfAngle;
    AirSpeedMax: MeleeHalfAngle;
    PowerUpStages: MeleeHalfAngle;
    SlashCollisionRadius: MeleeHalfAngle;
    SlowDuration: MeleeAttackLength;
    SlowPercent: SlowPercent;
    BulletResist: SlowPercent;
}

export interface SlashRadius {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction8;
}

export interface ESlotWeaponSecondary2 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo32;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_ExplosionEffect: string;
    m_nAbilityTargetTypes: string;
}

export interface MWeaponInfo32 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil2;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects3;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_flBulletSpeed: number;
    m_bHitOnceAcrossAllBullets: boolean;
    m_flRecoilRecoveryDelayFactor: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_vecScatterOffsets: any[];
    m_flPelletScatterFactor: number;
    m_flPelletScatterSpreadFactor: number;
    m_strBulletImpactSound: string;
    m_iAmmoConsumedPerShot: number;
    m_flBulletRadiusVsWorld: number;
    m_flBulletDamage: number;
    m_bCanCrit: boolean;
    m_flVerticalAimBias: number;
    m_flExplosionRadius: number;
    [key: string]: any;
}

export interface ESlotWeaponPrimary17 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties79;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo31;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel14;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MHUDPanel14 {
    m_vecHUDElements: MvecHUDElement7[];
    m_Layout: string;
}

export interface MvecHUDElement7 {
    m_strContext: string;
    m_vecPanels: MvecPanel2[];
    m_eType: string;
    m_Layout: string;
    m_strAdditionalClasses?: string;
}

export interface MvecPanel2 {
    m_strPanelName: string;
    m_eProgressType: string;
    m_bReverseProgress?: boolean;
    m_flStartValue?: number;
    m_flEndValue?: number;
}

export interface MWeaponInfo31 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil2;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_bHitOnceAcrossAllBullets: boolean;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_flPelletScatterSpreadFactor: number;
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface MHorizontalRecoil2 {
    m_Range: number;
    m_flBurstExponent: number;
    m_flBurstConstant: number;
}

export interface MmapAbilityProperties79 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ChargeTime: AirJumpVerticalSpeedPercent;
    BulletsPerDegree: MeleeHalfAngle;
    MinRotation: MinRotation;
    MaxRotation: MinRotation;
}

export interface MinRotation {
    m_strValue: number;
}

export interface Herowarden {
    ESlot_Weapon_Primary: ESlotWeaponPrimary;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature117;
    ESlot_Signature_2: ESlotSignature217;
    ESlot_Signature_3: ESlotSignature317;
    ESlot_Signature_4: ESlotSignature417;
}

export interface ESlotSignature417 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties78;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilitySpectatePriority: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastDelaySound: string;
    m_strCastSound: string;
    m_CastDelayModifier: MSlowModifier;
    m_WardenBuffModifier: MWardenBuffModifier;
    m_ChargeUpParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel11;
}

export interface MWardenBuffModifier {
    subclass: Subclass161;
}

export interface Subclass161 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_BuffParticle: string;
    m_PulseHitEnemyParticle: string;
    m_LaserParticle: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_EnemyDebuffModifier: MSilenceModifier;
}

export interface MmapAbilityProperties78 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    PulseInterval: StunDuration;
    PulseDPS: Damage;
    Radius: MeleeAttackLength;
    HealthStealPctHero: MeleeAttackLength;
    HealthStealPct: MeleeAttackLength;
    ConeAngle: MeleeHalfAngle;
    BonusMoveSpeed: BonusMoveSpeed2;
    BulletResist: TechResist;
}

export interface BonusMoveSpeed2 {
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
    m_strConditionalLocTokenOverride: string;
}

export interface ESlotSignature317 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties77;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_flTargetingConeAngle: number;
    m_strAbilityImage: string;
    m_DebuffModifier: MDebuffModifier16;
    m_CastParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strSelectedSound: string;
    m_strCastDelaySound: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastAnimGraphParam: string;
    m_previewParticle: string;
}

export interface MDebuffModifier16 {
    subclass: Subclass160;
}

export interface Subclass160 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_nAttributes: string;
    m_DebuffParticle: string;
    m_strFollowLoop: string;
    m_strExplodeSound: string;
    m_bDurationReducible: boolean;
    m_strEscapedSound: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_sStartSound: string;
    m_AOEParticleCaster: string;
    m_AOEParticleEnemy: string;
    m_AOEParticleOthers: string;
    m_RootModifier: MShieldModifier2;
    m_BulletResistModifier: MAutoCastDelayModifier2;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties77 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ImmobilizeDuration: MeleeAttackLength;
    Damage: Damage;
    EscapeRange: MeleeAttackLength;
    EscapeTime: StunDuration;
    BulletArmorReduction: MeleeHalfAngle;
    BulletArmorReductionDuration: AirJumpVerticalSpeedPercent;
}

export interface ESlotSignature217 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties76;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade3[];
    m_strCastSound: string;
    m_BuffModifier: MBuffModifier5;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
}

export interface MBuffModifier5 {
    subclass: Subclass159;
}

export interface Subclass159 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_BuffParticle: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_sAmbientLoopingSound: string;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties76 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    MoveSpeedBonusPct: StunDuration;
    TechShieldPoints: FlameAuraDPS;
}

export interface ESlotSignature117 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties75;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade4[];
    m_DebuffModifier: MDebuffModifier15;
    m_CastParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_projectileInfo: MprojectileInfo20;
}

export interface MprojectileInfo20 {
    m_particle: string;
    m_flSpeed: number;
    m_nBehaviors: string;
    m_flUpSpeed: number;
    m_flVerticalAimBias: number;
    m_bHideWarningParticle: boolean;
    m_LoopingSound: string;
    m_HitSound: string;
}

export interface MDebuffModifier15 {
    subclass: Subclass158;
}

export interface Subclass158 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_strParticleEffect: string;
    m_nEnabledStateMask: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_sStartSound: string;
}

export interface MmapAbilityProperties75 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    Damage: Damage;
    WeaponPowerDebuff: SlowPercent;
    FireRateSlow: SlowPercent;
    DebuffDuration: MeleeAttackLength;
    MoveSpeedSlowPct: SlowPercent;
    ForwardVelocity: MeleeHalfAngle;
    ProjectileLifetime: MeleeHalfAngle;
    StaminaReduction: MeleeHalfAngle;
}

export interface Herotengu {
    ESlot_Weapon_Primary: ESlotWeaponPrimary16;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature116;
    ESlot_Signature_2: ESlotSignature216;
    ESlot_Signature_3: ESlotSignature316;
    ESlot_Signature_4: ESlotSignature416;
}

export interface ESlotSignature416 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties74;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo30;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_flTargetingConeAngle: number;
    m_strAbilityImage: string;
    m_flTargetAirSpeedFast: number;
    m_flTargetAirSpeedBase: number;
    m_flMoveCollideSpeed: number;
    m_flAcceleration: number;
    m_flDecceleration: number;
    m_flAirSideSpeedPercent: number;
    m_flBoostTime: number;
    m_flBoostSpeedUp: number;
    m_flTrackAmount: number;
    m_flMinFlyHeight: number;
    m_flMaxFlyHeight: number;
    m_flAllyDelayedBoostTime: number;
    m_flChannelingAirDrag: number;
    m_flChannelingMaxFallSpeed: number;
    m_flBombReleaseSpeed: number;
    m_flBombReleasePitch: number;
    m_flBombDropReleaseOffset: number;
    m_HoldBombEffect: string;
    m_flHoldBombOffsetX: number;
    m_flHoldBombOffsetY: number;
    m_flHoldBombOffsetZ: number;
    m_flAnglePitchBias: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_FlyingModifier: MFlyingModifier;
    m_ExplodingAllyModifier: MExplodingAllyModifier;
    m_strExplodeSound: string;
    m_InitialExplodeParticle: string;
    m_AoEModifier: MAoEModifier;
    m_DroppedBuffModifier: MAutoCastDelayModifier2;
    m_GrabModifier: MGrabModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel13;
    m_strMoviePreviewPath: string;
    m_strCastSound: string;
    m_strCastButtonLocToken: string;
    m_strAltCastButtonLocToken: string;
}

export interface MHUDPanel13 {
    m_vecHUDElements: MvecHUDElement3[];
    m_vecButtonHints: MvecButtonHint4[];
}

export interface MvecButtonHint4 {
    m_eButton1?: string;
    m_strLocToken: string;
    m_eHintSide: string;
    m_strContext: string;
    m_strBindingOverride1?: string;
}

export interface MGrabModifier {
    subclass: Subclass157;
}

export interface Subclass157 {
    _my_subclass_name: string;
    _class: string;
    m_sLocalizationName: string;
    m_flLiftHorizontal: number;
    m_flLiftHeight: number;
    m_flFollowDampingFactor: number;
    m_flFollowDistance: number;
    m_flAllyPossibleStuckDistance: number;
    m_nEnabledStateMask: string;
    m_flAllyGrabCancelTime: number;
    m_sStartSound: string;
    m_GrabEffect: string;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_strParticleEffect: string;
    m_strParticleStatusEffect: string;
    m_eHudDisplayLocation: string;
    m_strHudMessageText: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MAoEModifier {
    subclass: Subclass156;
}

export interface Subclass156 {
    _class: string;
    _my_subclass_name: string;
    m_iAuraSearchType: string;
    m_empWaveParticle: string;
    m_bIsHidden: boolean;
    m_modifierProvidedByAura: MmodifierProvidedByAura11;
}

export interface MmodifierProvidedByAura11 {
    subclass: Subclass155;
}

export interface Subclass155 {
    _class: string;
    m_bIsHidden: boolean;
    m_strSilenceTargetSound: string;
    m_strParticleEffect: string;
    _my_subclass_name: string;
    m_SilenceModifier: MSilenceModifier2;
    m_SlowModifier: MMoveSlowModifier;
    m_BulletResistModifier: MBulletResistModifier2;
}

export interface MBulletResistModifier2 {
    subclass: Subclass154;
}

export interface Subclass154 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_strSmallIconCssClass: string;
    m_bKeepMaximumDurationOnRefresh: boolean;
    m_bDurationAffectedByEffectiveness: boolean;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MSilenceModifier2 {
    subclass: Subclass153;
}

export interface Subclass153 {
    _class: string;
    _my_subclass_name: string;
    m_strSmallIconCssClass: string;
    m_sLocalizationName: string;
    m_eDrawOverheadStatus: string;
    m_bIsHidden: boolean;
}

export interface MExplodingAllyModifier {
    subclass: Subclass152;
}

export interface Subclass152 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sStartSound: string;
    m_strParticleEffect: string;
    m_sAmbientLoopingSound: string;
}

export interface MFlyingModifier {
    subclass: Subclass151;
}

export interface Subclass151 {
    _my_subclass_name: string;
    _class: string;
    m_bIsHidden: boolean;
    m_nEnabledStateMask: string;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_sAmbientLoopingSound: string;
    m_strParticleEffect: string;
    m_sStartSound: string;
    m_strParticleStatusEffect: string;
}

export interface MWeaponInfo30 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_mapImpactEffects: MmapImpactEffects2;
    m_eAttachmentSourceType: string;
    m_strBulletLoopingSound: string;
    [key: string]: any;
}

export interface MmapAbilityProperties74 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange5;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    AllyCastDelay: StunDuration;
    ExplodeDamage: Damage;
    OnLandDamageRadiusStart: MeleeHalfAngle;
    OnLandDamageRadius: SelfBuffDuration;
    TossSpeed: EnemyDragSpeed;
    FlyingBulletResist: FlyingBulletResist;
    AllyOutgoingDamagePercent: SlowPercent;
    BuffDuration: SelfBuffDuration;
    AirDropBulletShield: AirDropBulletShield;
    SilenceBombSpeed: MeleeHalfAngle;
    BulletArmorReduction: BulletArmorReduction;
    BulletArmorReductionDuration: SelfBuffDuration;
    SlowPercent: SlowPercent;
    DebuffDuration: SelfBuffDuration;
    SilenceDuration: SelfBuffDuration;
}

export interface BulletArmorReduction {
    m_strLocTokenOverride: string;
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayType: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface AirDropBulletShield {
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayType: string;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface FlyingBulletResist {
    m_strLocTokenOverride: string;
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface ESlotSignature316 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties73;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_strCSSClass: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade6[];
    m_flCollideRadius: number;
    m_DragModifier: MDragModifier2;
    m_strCastSound: string;
    m_CastParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails21;
    m_cameraSequenceCastComplete: McameraSequenceCastComplete;
    m_strMoviePreviewPath: string;
    m_strImpactSound: string;
    m_strFallCollideImpactSound: string;
    m_ImpactParticle: string;
    m_flLandHoldTime: number;
    m_StoneFormParticle: string;
    m_strCastAnimGraphParam: string;
}

export interface MAbilityTooltipDetails21 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection21[];
}

export interface MvecAbilityInfoSection21 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock2[];
    m_vecBasicProperties: any[];
}

export interface MDragModifier2 {
    subclass: Subclass150;
}

export interface Subclass150 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_flForwardOffset: number;
    m_flVerticalOffset: number;
    m_flForceDistScale: number;
}

export interface MvecAbilityUpgrade6 {
    m_vecPropertyUpgrades: MvecPropertyUpgrade6[];
}

export interface MvecPropertyUpgrade6 {
    m_strPropertyName: string;
    m_strBonus: number | string;
    m_strCSSClass?: string;
}

export interface MmapAbilityProperties73 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    StatueScale: MeleeHalfAngle;
    DampingFactor: MeleeHalfAngle;
    MaxFallSpeed: MeleeHalfAngle;
    MoveSpeedMax: ChainLength;
    LiftHeight: MeleeHalfAngle;
    LiftTime: MeleeHalfAngle;
    BonusHealthRegen: ExternalBonusHealthRegen;
    MaxHealthRegen: MeleeAttackLength;
    Damage: Damage;
    StunDuration: MeleeAttackLength;
    Radius: MeleeAttackLength;
}

export interface ESlotSignature216 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties72;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo29;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingLocation: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_flJumpPitch: number;
    m_flJumpSpeed: number;
    m_flJumpAirDrag: number;
    m_flDashSpeed: number;
    m_flJumpAirSpeedMax: number;
    m_flDashCloseEnoughToTarget: number;
    m_flDashLockOntoTargetDist: number;
    m_strCastDelaySound: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_eAbilityTargetingShape: string;
    m_SlashParticle: string;
    m_TetherModifier: MTetherModifier;
    m_GrappleTargetModifier: MGrappleTargetModifier;
    m_vecDependentAbilities: string[];
    m_flBackswingDuration: number;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_flAnimToStrikePointTime: number;
    m_cameraSequenceFlying: McameraSequenceCastComplete3;
    m_cameraSequenceAttacking: McameraSequenceAttacking;
    m_flTargetingConeAngle: number;
    m_flJumpFallSpeedMax: number;
    m_strStartAttack: string;
    m_strStartDash: string;
    m_BulletGrappleTracerParticle: string;
    m_strGrappleHitWorld: string;
    m_strGrappleHitNothing: string;
    m_EnemyGrappleParticle: string;
    m_flGrappleShotDelayToFlyOnHit: number;
    m_flGrappleShotFloatTime: number;
    m_flVelocityTurnSpringStrength: number;
    m_flAngleToSpeedScale: number[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface McameraSequenceAttacking {
    m_vecDistanceOperations: any[];
}

export interface MGrappleTargetModifier {
    subclass: Subclass149;
}

export interface Subclass149 {
    _class: string;
    m_bIsHidden: boolean;
    _my_subclass_name: string;
    m_GrappleRopeParticle: string;
    m_strHudMessageText: string;
}

export interface MTetherModifier {
    subclass: Subclass148;
}

export interface Subclass148 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleStatusEffect: string;
    m_sLocalizationName: string;
    m_TetherSound: string;
    m_HealSound: string;
    m_HitIndicator: string;
    m_GrappleHitSound: string;
    m_flMinConnectTime: number;
    m_flDisconnectDistanceBuffer: number;
    m_flTargetAwayDistance: number;
    m_flCandidateCloserDistance: number;
    m_BuffModifier: MBuffModifier4;
    m_LockedTargetModifier: MZipLineIntroModifier;
    m_eHudDisplayLocation: string;
}

export interface MBuffModifier4 {
    subclass: Subclass147;
}

export interface Subclass147 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strAttackBuffParticle: string;
    m_TetherSound: string;
    m_nEnabledStateMask: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MWeaponInfo29 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_flBulletLifetime: number;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_iClipSize: number;
    m_flBulletRadius: number;
    m_flRange: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_bHitOnceAcrossAllBullets: boolean;
    m_mapImpactEffects: MmapImpactEffects4;
    m_strBulletWhizSound: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_szMuzzleFlashEffectName: string;
    m_strWeaponImpactEffect: string;
    [key: string]: any;
}

export interface MmapAbilityProperties72 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange5;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    BonusFireRate: BonusFireRate;
    BulletLifestealPercent: BulletLifestealPercent2;
    MoveSpeedBonus: TechResist;
    TickRate: MeleeHalfAngle;
    TetherSharedHealPct: StunDuration;
    HealingPerGlub: MeleeHalfAngle;
    TotalTetherTargets: MeleeHalfAngle;
}

export interface BulletLifestealPercent2 {
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
    m_subclassScaleFunction: MsubclassScaleFunction6;
}

export interface BonusFireRate {
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface AbilityCastRange5 {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_strLocTokenOverride: string;
}

export interface ESlotSignature116 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties71;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo18;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strCastAnimGraphParam: string;
    m_ExplodeParticle: string;
    m_previewParticle: string;
    m_strSelectedSound: string;
    m_strSelectedLoopSound: string;
    m_strCastDelaySound: string;
    m_ExplosionSound: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_AuraModifier: MAuraModifier4;
    m_AbilityTooltipDetails: MAbilityTooltipDetails4;
}

export interface MAuraModifier4 {
    subclass: Subclass146;
}

export interface Subclass146 {
    _class: string;
    _my_subclass_name: string;
    m_iAuraSearchType: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura10;
    m_strParticleEffect: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_sStartSound: string;
}

export interface MmodifierProvidedByAura10 {
    subclass: Subclass145;
}

export interface Subclass145 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties71 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    BossDamagePercent: MeleeHalfAngle;
    TickRate: MeleeHalfAngle;
    Radius: MeleeAttackLength;
    Height: MeleeHalfAngle;
    DPS: Damage;
    SlowPercent: SlowPercent;
}

export interface ESlotWeaponPrimary16 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo28;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo28 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flSpreadPerShot: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_nRecoilSeed: number;
    m_NpcAimingSpread: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Heroshiv {
    ESlot_Weapon_Primary: ESlotWeaponPrimary15;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Weapon_Secondary: ESlotWeaponSecondary;
    ESlot_Signature_1: ESlotSignature115;
    ESlot_Signature_2: ESlotSignature215;
    ESlot_Signature_3: ESlotSignature315;
    ESlot_Signature_4: ESlotSignature415;
}

export interface ESlotSignature415 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties70;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_flTargetingConeAngle: number;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strMoviePreviewPath: string;
    m_ChargeUpSound: string;
    m_OnKillSound: string;
    m_LeapModifier: MLeapModifier2;
    m_ActiveBuff: MActiveBuff;
    m_KillableModifier: MKillableModifier;
    m_ImpactParticle: string;
    m_AttackParticle: string;
    m_FlashParticle: string;
    m_KillingBlowCastParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails20;
    m_flPreArrivalAttackStartTime: number;
    m_strCastSound: string;
    m_flGlowMinTime: number;
}

export interface MAbilityTooltipDetails20 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection20[];
}

export interface MvecAbilityInfoSection20 {
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock9[];
    m_strLocString: string;
}

export interface MKillableModifier {
    subclass: Subclass144;
}

export interface Subclass144 {
    _class: string;
    _my_subclass_name: string;
    m_ShivOnlyDeathStatus: string;
    m_strShivOnlyLoopSound: string;
    m_strShivOnlyActivateSound: string;
    m_bIsHidden: boolean;
    m_ShivOnlyDeathTrail: string;
    m_bCasterCountsAsAssister: boolean;
}

export interface MActiveBuff {
    subclass: Subclass143;
}

export interface Subclass143 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleEffect: string;
    m_strParticleEffectConfig: string;
    m_nAttributes: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_nEnabledStateMask: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
}

export interface MLeapModifier2 {
    subclass: Subclass142;
}

export interface Subclass142 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sLocalizationName: string;
    m_sExpiredSound: string;
}

export interface MmapAbilityProperties70 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    RageDrainRate: StunDuration;
    RagePerWeaponDamage: MeleeHalfAngle;
    RagePerSpiritDamage: MeleeHalfAngle;
    RagePerLightMelee: MeleeHalfAngle;
    RagePerHeavyMelee: MeleeHalfAngle;
    BonusAbilityResource: MeleeHalfAngle;
    NonPlayerRageScale: MeleeHalfAngle;
    BonusMoveSpeed: WeaponDamageBonus;
    BuffDamage: SlowPercent;
    RageDrainDelayDuration: MeleeAttackLength;
    Damage: Damage3;
    EnemyHealthPercent: StunDuration;
    EnemyHealthPercentBuffer: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    MoveSpeedToTarget: MeleeHalfAngle;
    PauseOnTargetTime: MeleeHalfAngle;
    MinTimeToTarget: MeleeHalfAngle;
    JumpHeight: MeleeHalfAngle;
    SlashRange: MeleeHalfAngle;
    ShortCooldown: StunDuration;
}

export interface Damage3 {
    m_strValue: string;
    m_eScalingMethod: string;
    m_strCSSClass: string;
}

export interface ESlotSignature315 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties69;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strMoviePreviewPath: string;
    m_nAbilityTargetTypes: string;
    m_ActiveCastParticle: string;
    m_strCastAnimGraphParam: string;
    m_strSelectionNameOverride: string;
    m_strCastAnimSequenceName: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails18;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetFlags: string;
    m_AutoChannelModifier: MAutoCastDelayModifier;
    m_AutoCastDelayModifier: MAutoCastDelayModifier3;
    m_strCastDelaySound: string;
    m_strCastSound: string;
    m_strCastDelayLoopSound: string;
}

export interface MAutoCastDelayModifier3 {
    subclass: Subclass141;
}

export interface Subclass141 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
    m_strParticleEffectConfig: string;
}

export interface MmapAbilityProperties69 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DamagePctDeferred: StunDuration;
    DeferredDamageDuration: StunDuration;
    DeferClearPct: StunDuration;
    DamagePctDeferredMaxRage: StunDuration;
}

export interface ESlotSignature215 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties68;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_eAbilityTargetingLocation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingShape: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_TargetingPreviewParticle: string;
    m_strMoviePreviewPath: string;
    m_DashImpactEffect: string;
    m_DashSwingEffect: string;
    m_DashLineEffect: string;
    m_strDashStartWithTargets: string;
    m_strDashStartMiss: string;
    m_strDashHitEnemy: string;
    m_cameraSequenceCastComplete: McameraSequenceCastComplete3;
    m_cameraSequenceCastStart: McameraSequenceCastStart4;
    m_bEndCastStartSequenceOnCastComplete: boolean;
    m_DashModifier: MDashModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails19;
    m_strCastAnimGraphParam: string;
    m_flEchoDelay: number;
    m_strDashStartEcho: string;
    m_strCastSound: string;
}

export interface MAbilityTooltipDetails19 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection19[];
}

export interface MvecAbilityInfoSection19 {
    m_strLocString?: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock9[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MvecAbilityPropertiesBlock9 {
    m_vecAbilityProperties: MvecAbilityProperty5[];
    m_strPropertiesTitleLocString?: string;
}

export interface MDashModifier {
    subclass: Subclass140;
}

export interface Subclass140 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_DashParticle: string;
    m_DashTrailParticle: string;
    m_strScreenParticleEffect: string;
}

export interface McameraSequenceCastStart4 {
    m_vecFOVOperations: MvecFOVOperation13[];
    m_vecDistanceOperations: MvecFOVOperation13[];
}

export interface MvecFOVOperation13 {
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_flLerpBias?: number;
    m_eCameraOperation: string;
}

export interface McameraSequenceCastComplete3 {
    m_vecTargetPosOperations: MvecTargetPosOperation[];
    m_vecFOVOperations: any[];
}

export interface MmapAbilityProperties68 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    TechCleaveExpireTime: MeleeHalfAngle;
    DashAngleThreshold: MeleeHalfAngle;
    DashSpeed: EnemyDragSpeed;
    DashRange: MeleeAttackLength;
    DashRadius: MeleeHalfAngle;
    ImpactDamage: Damage;
    MoveSpeedPenaltyMaxSpeed: MeleeHalfAngle;
    MoveSpeedPenaltyDuration: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    SideMoveSpeedReduction: MeleeHalfAngle;
    TurnRateMax: MeleeHalfAngle;
    CooldownReductionOnHit: StunDuration;
    CooldownReductionOnHitNonHero: StunDuration;
    MaxCooldownReductionsFromHits: MeleeHalfAngle;
}

export interface ESlotSignature115 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties67;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo27;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_projectileInfo: MprojectileInfo19;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strMoviePreviewPath: string;
    m_DaggerStuckParticle: string;
    m_DaggerImpactParticle: string;
    m_strDaggerHitSound: string;
    m_DamageDebuffModifier: MDamageDebuffModifier;
    m_SlowDebuffModifier: MSlowDebuffModifier;
    m_strHitConfirmationSound: string;
    m_strDamageTakenSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails18;
    m_DaggerExplodeParticle: string;
    m_strChannelSound: string;
    m_strSecondaryStatName: string;
}

export interface MAbilityTooltipDetails18 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection18[];
}

export interface MvecAbilityInfoSection18 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock4[];
    m_vecBasicProperties?: any[];
}

export interface MSlowDebuffModifier {
    subclass: Subclass139;
}

export interface Subclass139 {
    _my_subclass_name: string;
    _class: string;
    m_eDebuffType: string;
    m_bIsHidden: boolean;
}

export interface MDamageDebuffModifier {
    subclass: Subclass138;
}

export interface Subclass138 {
    _my_subclass_name: string;
    _class: string;
    m_eDebuffType: string;
    m_bIsHidden: boolean;
    m_sLocalizationName: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_nAmbientLoopingSoundRecipients: string;
    m_strSmallIconCssClass: string;
    m_strParticleEffect: string;
    m_eDrawOverheadStatus: string;
}

export interface MprojectileInfo19 {
    m_flTriggerRadius: number;
    m_bHideWarningParticle: number;
    m_flTrackingEndTime: number;
    m_particle: string;
    m_flSpeed: number;
    m_HitSound: string;
}

export interface MWeaponInfo27 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_flBulletLifetime: number;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_iClipSize: number;
    m_flBulletRadius: number;
    m_flRange: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flBulletRadiusVsWorld: number;
    m_vecScatterOffsets: number[][];
    m_mapImpactEffects: MmapImpactEffects4;
    m_strBulletWhizSound: string;
    m_szMuzzleFlashEffectName: string;
    m_strWeaponImpactEffect: string;
    m_bHitOnceAcrossAllBullets: boolean;
    [key: string]: any;
}

export interface MmapAbilityProperties67 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    BleedTickRate: MeleeHalfAngle;
    MovementSlow: StunDuration;
    ImpactDamage: Damage;
    BleedDPSPerStack: Damage;
    BleedDuration: MeleeAttackLength;
    AOERadius: MeleeAttackLength;
    RicochetCount: MeleeHalfAngle;
}

export interface ESlotWeaponSecondary {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo26;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo26 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_flPelletScatterSpreadFactor: number;
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    m_flIntraBurstCycleTime: number;
    m_iAmmoConsumedPerShot: number;
    [key: string]: any;
}

export interface ESlotWeaponPrimary15 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo25;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
    m_flPushForce: number;
}

export interface MWeaponInfo25 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_flPelletScatterSpreadFactor: number;
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    m_szSelfBulletTravelTracerParticle: string;
    [key: string]: any;
}

export interface Herokrill {
    ESlot_Weapon_Primary: ESlotWeaponPrimary14;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature114;
    ESlot_Signature_2: ESlotSignature214;
    ESlot_Signature_3: ESlotSignature314;
    ESlot_Signature_4: ESlotSignature414;
}

export interface ESlotSignature414 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties66;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_eAbilitySpectatePriority: string;
    m_flTargetingConeAngle: number;
    m_flTargetingConeHalfWidth: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strChannelLoopSound: string;
    m_MeleeSwingParticle: string;
    m_MeleeImpactParticle: string;
    m_SelfModifier: MSelfModifier;
    m_TargetModifier: MTargetModifier2;
    m_flKillCheckWindow: number;
    m_KillCheckModifier: MLandingBonusesModifier;
    m_HUDPanel: MHUDPanel4;
    m_strMoviePreviewPath: string;
    m_strCastSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
}

export interface MTargetModifier2 {
    subclass: Subclass137;
}

export interface Subclass137 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sLocalizationName: string;
    m_eHudDisplayLocation: string;
    m_strParticleEffect: string;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_eTimeScaleSource: string;
    m_bDurationReducible: boolean;
}

export interface MSelfModifier {
    subclass: Subclass136;
}

export interface Subclass136 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_sAmbientLoopingSound: string;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties66 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DPS: Damage;
    LifeStealPercentOnHit: MeleeAttackLength;
    BonusHealthOnKill: TechResist;
}

export interface ESlotSignature314 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties65;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_projectileInfo: MprojectileInfo18;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_SandDebuff: MDebuffModifier14;
    m_strCastSound: string;
    m_strCastAnimGraphParam: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails10;
    m_mapCastEventParticles: MmapCastEventParticles;
    m_nAbilityTargetTypes: string;
}

export interface MprojectileInfo18 {
    m_flSpeed: number;
    m_flGravityScale: number;
    m_bHideWarningParticle: number;
    m_LoopingSound: string;
    m_AutoProjectileModifier: MAutoProjectileModifier5;
}

export interface MAutoProjectileModifier5 {
    subclass: Subclass135;
}

export interface Subclass135 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_DebuffModifier: MDebuffModifier14;
}

export interface MDebuffModifier14 {
    subclass: Subclass134;
}

export interface Subclass134 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_DebuffParticle: string;
    m_eHudDisplayLocation: string;
    m_strHudMessageText: string;
}

export interface MmapAbilityProperties65 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: Damage;
    GrowthPerMeter: MeleeHalfAngle;
    InitialWidth: MeleeHalfAngle;
    SlowPercent: StunDuration;
    Silence: MeleeHalfAngle;
}

export interface ESlotSignature214 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties64;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_eAbilitySpectatePriority: string;
    m_strCastAnimGraphParam: string;
    m_strCastAnimSequenceName: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade4[];
    m_BurrowModifier: MBurrowModifier;
    m_SpinModifier: MSpinModifier;
    m_ExplodeParticle: string;
    m_strMoviePreviewPath: string;
    m_strCastDelaySound: string;
    m_strCastSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel11;
    m_BurrowStartParticle: string;
    m_BurrowInGroundParticle: string;
    m_BurrowEndParticle: string;
    m_flChannelEndEnemyPopUpForce: number;
    m_strBurrowEndSound: string;
    m_cameraSequenceCastStart: McameraSequenceCreated;
    m_cameraSequenceChannelStart: McameraSequenceCreated4;
    m_cameraSpinStart: McameraSequenceCreated4;
}

export interface MSpinModifier {
    subclass: Subclass133;
}

export interface Subclass133 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_SlowModifier: MMoveSlowModifier;
    m_AoEParticle: string;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_cameraSequenceCreated: McameraSequenceCreated4;
}

export interface McameraSequenceCreated4 {
    m_vecDistanceOperations: MvecDistanceOperation7[];
    m_vecVertOffsetOperations: MvecDistanceOperation7[];
}

export interface MBurrowModifier {
    subclass: Subclass132;
}

export interface Subclass132 {
    _class: string;
    _my_subclass_name: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_nEnabledStateMask: string;
    m_strParticleEffect: string;
    m_DesatTint: number[];
    m_SatTint: number[];
    m_Outline: number[];
    m_flDesatAmount: number;
    m_BurrowPlayerParticle: string;
    m_sExpiredSound: string;
}

export interface MmapAbilityProperties64 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DPS: Damage;
    Radius: MeleeAttackLength;
    BonusMoveSpeed: BonusMoveSpeed;
    SpeedLostDuration: StunDuration;
    EnemyDamageSpeedPenalty: MeleeHalfAngle;
    SpinDuration: MeleeAttackLength;
    SpinSlowPercent: MeleeDamageTakenScale;
    SpinSlowDuration: StunDuration;
    TechResist: SlowPercent;
    BulletResist: SlowPercent;
    TickRate: MeleeHalfAngle;
    UpForce: MeleeHalfAngle;
}

export interface BonusMoveSpeed {
    m_eDisplayUnits: string;
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayType: string;
    m_eProvidedPropertyType: string;
}

export interface ESlotSignature114 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties63;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_AbilityBehaviorsBits: string;
    m_strCastAnimGraphParam: string;
    m_strCSSClass: string;
    m_strAbilityImage: string;
    m_AoEParticle: string;
    m_strMoviePreviewPath: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_EnemyModifier: MEnemyModifier;
    m_DebuffModifier: MDebuffModifier9;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_AoEPlayerParticle: string;
    m_strCastDelaySound: string;
}

export interface MEnemyModifier {
    subclass: Subclass131;
}

export interface Subclass131 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sExpiredSound: string;
    m_EffectParticle: string;
}

export interface MmapAbilityProperties63 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    Damage: Damage;
    DamageHealMultNonHero: MaxSlowDuration;
    DamageHealMult: MaxSlowDuration;
    TickRate: MeleeHalfAngle;
    DamageBonus: MeleeHalfAngle;
    DebuffDuration: MeleeAttackLength;
}

export interface ESlotWeaponPrimary14 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo24;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo24 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_strBulletImpactSound: string;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_nRecoilSeed: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_flPelletScatterSpreadFactor: number;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Heroorion {
    ESlot_Weapon_Primary: ESlotWeaponPrimary13;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature113;
    ESlot_Signature_2: ESlotSignature213;
    ESlot_Signature_3: ESlotSignature313;
    ESlot_Signature_4: ESlotSignature413;
}

export interface ESlotSignature413 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties62;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_projectileInfo: MprojectileInfo17;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastDelaySound: string;
    m_strExplodeSound: string;
    m_ExplosionParticle: string;
    m_ArrowCameraHeightOffset: number;
    m_ArrowCameraDistance: number;
    m_ArrowOffsetX: number;
    m_ArrowInitialPitch: number;
    m_flTrackAmount: number;
    m_flSpeedAccel: number;
    m_flSpeedDeccel: number;
    m_flBaseProjectileSpeed: number;
    m_flMaxProjectileSpeed: number;
    m_HUDPanel: MHUDPanel12;
    m_GuidingModifier: MGuidingModifier;
    m_flKillCheckWindow: number;
    m_KillCheckModifier: MLandingBonusesModifier;
    m_GuidedArrowChannelParticle: string;
    m_strMoviePreviewPath: string;
    m_cameraExplodedTransitionBackToArcher: McameraExplodedTransitionBackToArcher;
    m_flCameraHoldAtExplosion: number;
    m_cameraCancelledTransitionBacktoArcher: McameraCancelledTransitionBacktoArcher;
    m_flFadeToBlackTime: number;
    m_AbilityTooltipDetails: MAbilityTooltipDetails17;
    m_ProjectileModel: string;
    m_flArrowModelTurnSpringStrength: number;
}

export interface MAbilityTooltipDetails17 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection17[];
}

export interface MvecAbilityInfoSection17 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock8[];
    m_vecBasicProperties: string[];
}

export interface MvecAbilityPropertiesBlock8 {
    m_vecAbilityProperties: MvecAbilityProperty6[];
}

export interface McameraCancelledTransitionBacktoArcher {
    m_strContext: string;
    m_vecTargetPosOperations: MvecTargetPosOperation5[];
}

export interface MvecTargetPosOperation5 {
    m_flMaintainDuration?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_flLerpDuration?: number;
}

export interface McameraExplodedTransitionBackToArcher {
    m_strContext: string;
    m_vecTargetPosOperations: MvecTargetPosOperation4[];
    m_vecDistanceOperations: MvecDistanceOperation14[];
}

export interface MvecDistanceOperation14 {
    m_flSpringMaxDuration?: number;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
    m_flLerpDuration?: number;
    m_bLerpStartAtCurrent?: boolean;
    m_flLerpStart?: number;
}

export interface MvecTargetPosOperation4 {
    m_flMaintainDuration: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative: boolean;
    m_bMaintainCurrent: boolean;
}

export interface MGuidingModifier {
    subclass: Subclass130;
}

export interface Subclass130 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sLocalizationName: string;
    m_strScreenParticleEffect: string;
    m_nEnabledStateMask: string;
    m_GlowEnemeyModifier: MGlowEnemeyModifier;
}

export interface MGlowEnemeyModifier {
    subclass: Subclass129;
}

export interface Subclass129 {
    _my_subclass_name: string;
    _class: string;
    m_bIsHidden: boolean;
    m_GlowParticle: string;
}

export interface MHUDPanel12 {
    m_vecHUDElements: MvecHUDElement6[];
    m_vecButtonHints: MvecButtonHint3[];
}

export interface MprojectileInfo17 {
    m_flGravityScale: number;
    m_flUpSpeed: number;
    m_flSpeed: number;
    m_bHideWarningParticle: number;
    m_flPhysicsRadius: number;
    m_flTriggerRadius: number;
    m_AutoProjectileModifier: MAutoProjectileModifier4;
    m_particle: string;
    m_nBehaviors: string;
}

export interface MAutoProjectileModifier4 {
    subclass: Subclass128;
}

export interface Subclass128 {
    _my_subclass_name: string;
    _class: string;
    m_sAmbientLoopingSound: string;
    m_speedToPitchRemap: number[];
}

export interface MmapAbilityProperties62 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ExplosionRadius: MeleeAttackLength;
    Damage: Damage;
    StunDuration: MeleeAttackLength;
    LowHealthEnemyThresholdPct: MeleeHalfAngle;
    BonusTechPowerPerKill: TechResist;
}

export interface ESlotSignature313 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties61;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_projectileInfo: MprojectileInfo16;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strAuraDamageStatName: string;
    m_strCastSound: string;
    m_ExplodeParticle: string;
    m_strTripSound: string;
    m_strExplodeSound: string;
    m_strImmobilizeTargetSound: string;
    m_TrapModifier: MTrapModifier;
    m_SlowModifier: MmodifierProvidedByAura7;
    m_DebuffModifier: MDebuffModifier13;
    m_previewParticle: string;
    m_PreviewRingParticle: string;
    m_strMoviePreviewPath: string;
    m_strArmingSound: string;
    m_strExpiredSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_DotModifier: MDotModifier;
    m_strCastAnimGraphParam: string;
    m_ArmedParticle: string;
}

export interface MDotModifier {
    subclass: Subclass127;
}

export interface Subclass127 {
    _my_subclass_name: string;
    _class: string;
    m_GroundParticle: string;
}

export interface MDebuffModifier13 {
    subclass: Subclass126;
}

export interface Subclass126 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sLocalizationName: string;
    m_eDrawOverheadStatus: string;
    m_strSmallIconCssClass: string;
    m_strParticleEffect: string;
    m_sAmbientLoopingSound: string;
}

export interface MTrapModifier {
    subclass: Subclass125;
}

export interface Subclass125 {
    _class: string;
    _my_subclass_name: string;
    m_eDrawOverheadStatus: string;
    m_eHudDisplayLocation: string;
    m_sLocalizationName: string;
    m_nEnabledStateMask: string;
    m_strParticleEffect: string;
    m_sExpiredSound: string;
}

export interface MprojectileInfo16 {
    m_customModel: string;
    m_bHideWarningParticle: number;
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_flVerticalAimBias: number;
    m_particle: string;
    m_LoopingSound: string;
    m_HitSound: string;
}

export interface MmapAbilityProperties61 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    TrapHeight: MeleeHalfAngle;
    Lifetime: MeleeAttackLength;
    Damage: StunDuration;
    ImmobilizeDuration: MeleeAttackLength;
    TripTime: StunDuration;
    ArmTime: StunDuration;
    TripUpSpeed: EnemyDragSpeed;
    TripGravity: MeleeHalfAngle;
    DisarmTargets: MeleeHalfAngle;
    BulletVulnerbility: StunDuration;
    DebuffDuration: MeleeAttackLength;
    DotDuration: AirJumpVerticalSpeedPercent;
    DotDPS: BonusPerChain;
    SlowPercent: SlowPercent;
    SlowDuration: MeleeAttackLength;
}

export interface ESlotSignature213 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties60;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strCastAnimGraphParam: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_HUDPanel: MHUDPanel4;
    m_strCastSound: string;
    m_JumpParticle: string;
    m_PowerJumpModifier: MPowerJumpModifier;
    m_InAirModifier: MInAirModifier;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MInAirModifier {
    subclass: Subclass124;
}

export interface Subclass124 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_nEnabledStateMask: string;
    m_SlowModifier: MmodifierProvidedByAura7;
    m_strWeaponShootSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MPowerJumpModifier {
    subclass: Subclass123;
}

export interface Subclass123 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_flAirDrag: number;
    m_flVerticalCameraOffset: number;
    m_flVerticalCameraOffsetLerpTime: number;
    m_FloatParticle: string;
}

export interface MmapAbilityProperties60 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    JumpPitch: MeleeHalfAngle;
    JumpSpeed: EnemyDragSpeed;
    AltJumpSpeed: EnemyDragSpeed;
    SlowPercent: SlowPercent;
    SlowDuration: MeleeAttackLength;
    WeaponDamageBonus: SlowPercent;
    FireRateBonus: StunDuration;
    BulletLifestealPercent: BulletLifestealPercent;
    FallSpeedMax: EnemyDragSpeed;
    AirSpeedMax: EnemyDragSpeed;
    BulletSplitShot: StunDuration;
    AbilitySplitShot: AbilitySplitShot;
    FxRadius: MeleeHalfAngle;
    TechLifestealPercent: BulletLifestealPercent;
}

export interface AbilitySplitShot {
    m_strValue: string;
    m_bRoundDown: boolean;
}

export interface ESlotSignature113 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties59;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo23;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strCastAnimGraphParam: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade5[];
    m_strCastSound: string;
    m_ChannelParticle: string;
    m_ChannelStartParticle: string;
    m_HUDPanel: MHUDPanel11;
    m_ShootParticle: string;
    m_AutoChannelModifier: MInnateModifier;
    m_strMoviePreviewPath: string;
    m_cameraSequenceCastStart: McameraSequenceCastStart3;
    m_cameraSequenceChannelStart: McameraSequenceChannelStart2;
    m_strCastDelaySound: string;
    m_strDamageTakenSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
    m_strChannelLoopSound: string;
}

export interface McameraSequenceChannelStart2 {
    m_vecFOVOperations: MvecFOVOperation12[];
    m_nPriority: number;
}

export interface MvecFOVOperation12 {
    m_flMaintainDuration: number;
    m_eCameraOperation: string;
    m_flMaintainFloat: number;
    m_bValuesAreRelative: boolean;
}

export interface McameraSequenceCastStart3 {
    m_vecFOVOperations: MvecFOVOperation11[];
    m_nPriority: number;
}

export interface MvecFOVOperation11 {
    m_bSpringToDefault: boolean;
    m_flSpringTarget: number;
    m_eCameraOperation: string;
}

export interface MHUDPanel11 {
    m_vecHUDElements: MvecHUDElement6[];
}

export interface MvecHUDElement6 {
    m_eType: string;
    m_Layout: string;
    m_strContext: string;
    m_bReverseProgress?: boolean;
}

export interface MWeaponInfo23 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects3;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_flBulletRadiusVsWorld: number;
    m_flPenetrationPercent: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_bHitOnceAcrossAllBullets: boolean;
    [key: string]: any;
}

export interface MmapAbilityProperties59 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime3;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    TechCleaveExpireTime: MeleeHalfAngle;
    FallSpeedMax: EnemyDragSpeed;
    AirSpeedMax: EnemyDragSpeed;
    Damage: Damage;
    CameraHeightOffset: MeleeHalfAngle;
    CameraHorizontalOffset: MeleeHalfAngle;
    BossDamagePercent: MeleeHalfAngle;
}

export interface AbilityChannelTime3 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction7;
    m_bIsHidden: boolean;
}

export interface ESlotWeaponPrimary13 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo22;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo22 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterFactor: number;
    m_bHitOnceAcrossAllBullets: boolean;
    m_AimingMoveSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_flPelletScatterSpreadFactor: number;
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Herobebop {
    ESlot_Weapon_Primary: ESlotWeaponPrimary12;
    ESlot_Weapon_Melee: ESlotWeaponMelee2;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature112;
    ESlot_Signature_2: ESlotSignature212;
    ESlot_Signature_3: ESlotSignature312;
    ESlot_Signature_4: ESlotSignature412;
}

export interface ESlotSignature412 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties58;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strCastAnimGraphParam: string;
    m_strCastDelaySound: string;
    m_strMoviePreviewPath: string;
    m_ChargeParticle: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_LaserModifier: MLaserModifier;
    m_HUDPanel: MHUDPanel10;
    m_AbilityTooltipDetails: MAbilityTooltipDetails16;
    m_strChannelLoopSound: string;
}

export interface MAbilityTooltipDetails16 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection16[];
}

export interface MvecAbilityInfoSection16 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock4[];
    m_vecBasicProperties: string[];
}

export interface MHUDPanel10 {
    m_vecHUDElements: MvecHUDElement2[];
    m_vecButtonHints: any[];
}

export interface MLaserModifier {
    subclass: Subclass122;
}

export interface Subclass122 {
    _class: string;
    _my_subclass_name: string;
    m_BeamParticle: string;
    m_BeamParticleLocal: string;
    m_BeamHitParticle: string;
    m_strLaserStartSound: string;
    m_strLaserEndSound: string;
    m_strLaserHitSound: string;
    m_strLaserLoopSound: string;
    m_SlowModifier: MSlowModifier2;
}

export interface MSlowModifier2 {
    subclass: Subclass121;
}

export interface Subclass121 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties58 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityDuration;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DPS: Damage;
    BeamLength: MaxSlowDuration;
    BeamWidth: BeamWidth;
    BeamCloseRadius: BeamCloseRadius;
    BeamEndRadius: BeamCloseRadius;
    BeamCloseDamagePercent: MeleeHalfAngle;
    Interval: MeleeHalfAngle;
    TrackingSpeed: MeleeHalfAngle;
    ZoomTime: MeleeHalfAngle;
    ZoomBias: MeleeHalfAngle;
    FallSpeedMax: MeleeHalfAngle;
    AirSpeedMax: MeleeHalfAngle;
    BeamLifesteal: MeleeAttackLength;
    BeamLifestealNonHeroPercent: MeleeHalfAngle;
    BossDamagePercent: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    SlowTargetDuration: TurretDeployTime;
    SlowPercent: SlowPercent;
    GroundDashReductionPercent: MeleeDamageTakenScale;
}

export interface BeamCloseRadius {
    m_strValue: string;
    m_eDisplayType: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface BeamWidth {
    m_strValue: string;
    m_eDisplayType: string;
}

export interface ESlotSignature312 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties57;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strHookSuccessSound: string;
    m_strHookAllySound: string;
    m_HookOutParticle: string;
    m_strHookMissSound: string;
    m_strHookImpactGeoSound: string;
    m_strMoviePreviewPath: string;
    m_strAbilityImage: string;
    m_projectileInfo: MprojectileInfo15;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_HUDPanel: MHUDPanel9;
    m_SelfModifier: MZipLineIntroModifier;
    m_ShieldModifier: MShieldModifier2;
    m_TargetModifier: MTargetModifier;
    m_BulletAmpModifier: MBulletAmpModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails15;
}

export interface MAbilityTooltipDetails15 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection15[];
}

export interface MvecAbilityInfoSection15 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock4[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MBulletAmpModifier {
    subclass: Subclass120;
}

export interface Subclass120 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleEffect: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
}

export interface MTargetModifier {
    subclass: Subclass119;
}

export interface Subclass119 {
    _my_subclass_name: string;
    _class: string;
    m_nEnabledStateMask: string;
    m_SlowModifier: MBuffOnKillModifier;
    m_strRetractSound: string;
    m_HookRetrieveParticle: string;
    m_strRetractSoundEnd: string;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_flTossUpSpeed: number;
    m_strApproachingWhooshSound: string;
    m_sAmbientLoopingSound: string;
}

export interface MShieldModifier2 {
    subclass: Subclass118;
}

export interface Subclass118 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_sLocalizationName: string;
}

export interface MHUDPanel9 {
    m_vecHUDElements: MvecHUDElement5[];
    m_vecButtonHints: MvecButtonHint3[];
}

export interface MvecHUDElement5 {
    m_strContext: string;
    m_vecPanels: MvecPanel[];
    m_eType: string;
    m_Layout: string;
    m_strAdditionalClasses: string;
}

export interface MvecPanel {
    m_strPanelName: string;
    m_eProgressType: string;
    m_bReverseProgress: boolean;
    m_flStartValue?: number;
    m_flEndValue: number;
}

export interface MprojectileInfo15 {
    m_customModel: string;
    m_particle: string;
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_flGravityScale: number;
    m_flPhysicsRadius: number;
    m_bHideWarningParticle: number;
    m_AutoProjectileModifier: MAutoProjectileModifier3;
    m_flTriggerRadius: number;
    m_nBehaviors: string;
    m_LoopingSound: string;
}

export interface MAutoProjectileModifier3 {
    subclass: Subclass117;
}

export interface Subclass117 {
    _class: string;
    _my_subclass_name: string;
    m_sStartSound: string;
}

export interface MmapAbilityProperties57 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: StunDuration;
    HookingSlowSpeedLimit: MeleeHalfAngle;
    ReturnSpeed: MeleeHalfAngle;
    ReturnDelay: MeleeHalfAngle;
    ReturnPositionForwardOffset: MeleeHalfAngle;
    EndOfHookSlowTargetSpeed: MeleeDamageTakenScale;
    EndOfHookSlowTargetDuration: MeleeAttackLength;
    EndOfHookMoveSpeedBonus: EndOfHookMoveSpeedBonus;
    EndOfHookCommandRestrictLinger: MeleeHalfAngle;
    ResetCooldownOnFriendlyHook: StunDuration;
    FriendlyHookIgnoreRange: MeleeHalfAngle;
    BulletAmp: StunDuration;
    BulletAmpDuration: MeleeAttackLength;
    BulletShieldOnHook: Damage;
    BulletShieldDuration: MeleeAttackLength;
}

export interface EndOfHookMoveSpeedBonus {
    m_eDisplayUnits: string;
    m_strValue: string;
    m_strCSSClass: string;
}

export interface ESlotSignature212 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties56;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_flTargetingConeAngle: number;
    m_eAbilitySpectatePriority: string;
    m_nAbilityTargetTypes: string;
    m_strCastAnimGraphParam: string;
    m_strAbilityImage: string;
    m_strCastSound: string;
    m_previewParticle: string;
    m_CastBombParticle: string;
    m_strMoviePreviewPath: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_BombAttachedModifier: MBombAttachedModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails14;
    m_strSelectedSound: string;
    m_strUnselectedSound: string;
    m_strAltCastButtonLocToken: string;
}

export interface MAbilityTooltipDetails14 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection14[];
}

export interface MvecAbilityInfoSection14 {
    m_strLocString?: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock7[];
    m_vecBasicProperties?: any[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MvecAbilityPropertiesBlock7 {
    m_vecAbilityProperties: MvecAbilityProperty6[];
    m_strPropertiesTitleLocString: string;
}

export interface MvecAbilityProperty6 {
    m_strImportantProperty: string;
    m_bRequiresAbilityUpgrade?: boolean;
    m_strStatusEffectValue?: string;
    m_bShowPropertyValue?: boolean;
}

export interface MBombAttachedModifier {
    subclass: Subclass116;
}

export interface Subclass116 {
    _my_subclass_name: string;
    _class: string;
    m_bIsHidden: boolean;
    m_bDurationReducible: boolean;
    m_strExplodeSound: string;
    m_strTickTockSound: string;
    m_strTickTockFastSound: string;
    m_sLocalizationName: string;
    m_BombAttachedParticle: string;
    m_ExplodeParticle: string;
    m_StunAttachedParticle: string;
    m_strHudMessageText: string;
    m_DebuffModifier: MDebuffModifier12;
    m_BombAttachedVictimTeamParticle: string;
}

export interface MDebuffModifier12 {
    subclass: Subclass115;
}

export interface Subclass115 {
    _class: string;
    _my_subclass_name: string;
    m_eDrawOverheadStatus: string;
    m_strSmallIconCssClass: string;
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
}

export interface MmapAbilityProperties56 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration3;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    FuseTime: StunDuration;
    Damage: Damage2;
    BonusDamagePctPerPlayerHit: MeleeHalfAngle;
    StunTargetOnExplode: MeleeAttackLength;
    DebuffDuration: MeleeAttackLength;
}

export interface Damage2 {
    m_strValue: string;
    m_strCSSClass: string;
    m_bIsAffectedByBonusCounter: string;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface ESlotSignature112 {
    m_eAbilityActivation: string;
    m_eAbilityTargetingLocation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_bitsInterruptingStates: string;
    m_bStartTrained: boolean;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_MeleeDamageFlags: string;
    m_mapAbilityProperties: MmapAbilityProperties55;
    m_flCollisionDistance: number;
    _editor: Editor;
    _class: string;
    m_strCancelAbilityKey: string;
    m_bitsPostCastEnabledStateMask: string;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_iMaxLevel: number;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_flMaxPitchUp: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_UppercutModifier: MUppercutModifier;
    m_BuffModifier: MBuffModifier3;
    m_ClipModifier: MMoveSlowModifier;
    m_strCastSound: string;
    m_strMoviePreviewPath: string;
    m_UppercutAttackData: MUppercutAttackData;
    m_AbilityTooltipDetails: MAbilityTooltipDetails4;
}

export interface MUppercutAttackData {
    m_strHitSound: string;
    m_strMissSound: string;
    m_bCanBeParried: boolean;
    m_SpeedBonusCurve: MBulletSpeedCurve;
    m_MovementSpeedCurve: MBulletSpeedCurve;
    m_MeleeActivateParticle: string;
    m_MeleeImpactParticle: string;
}

export interface MBuffModifier3 {
    subclass: Subclass114;
}

export interface Subclass114 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
    m_nEnabledStateMask: string;
    m_sStartSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MUppercutModifier {
    subclass: Subclass113;
}

export interface Subclass113 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strStunSound: string;
    m_StunParticle: string;
    m_strParticleStatusEffect: string;
    m_sStartSound: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
    m_NoExplodeModifier: MLandingBonusesModifier;
    m_nStatusEffectPriority: number;
    m_strParticleEffectConfig: string;
}

export interface MmapAbilityProperties55 {
    MeleeHalfAngle: MeleeHalfAngle;
    MeleeAttackLength: MaxSlowDuration;
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    EnemyHeroTossVelocity: MeleeHalfAngle;
    TossVelocity: MeleeHalfAngle;
    MeleeRadius: StunDuration;
    ForceReductionOnAngleDown: MeleeHalfAngle;
    UppercutDamage: Damage;
    LandingDamage: FlameAuraDPS;
    RestoreHookCooldown: MeleeHalfAngle;
    StunOnLand: StunDuration;
    OnLandDamageRadius: MeleeAttackLength;
    UppercutBuffOnHit: MeleeAttackLength;
    BuffGunRangePercent: MeleeDamageTakenScale;
    BuffBaseWeaponPct: MeleeDamageTakenScale;
    ClipSizeBonus: MeleeDamageTakenScale;
}

export interface ESlotWeaponMelee2 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties2;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityActivation: string;
    m_eAbilityTargetingLocation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_bitsInterruptingStates: string;
    m_strAbilityImage: string;
    m_MeleeDamageFlags: string;
    m_flCollisionDistance: number;
    m_cameraSequenceHoldStart: McameraSequenceHoldStart;
    m_strHoldBegin: string;
    m_HoldBeginEffect: string;
    m_cameraSequenceHitImpact: McameraSequenceHitImpact;
    m_ParryVictimModifier: MParryVictimModifier;
    m_SuccessfulParryParticle: string;
    m_strSuccessfulParrySound: string;
    m_flParryWindow: number;
    m_flParryStunTime: number;
    m_ParryActivateParticle: string;
    m_AirMeleeUpScale: number[];
    m_mapAttacks: MmapAttacks;
    m_HUDPanel: MHUDPanel2;
    m_projectileInfo: MprojectileInfo14;
}

export interface MprojectileInfo14 {
    m_LoopingSound: string;
}

export interface ESlotWeaponPrimary12 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties54;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo21;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
    m_strWindupSound: string;
    m_strBeamStartSound: string;
    m_strBeamLoopSound1: string;
    m_strBeamLoopSound2: string;
    m_strBeamStopSound: string;
    m_szWeaponBeamParticle: string;
    m_flWindupRepeatCycle: number;
}

export interface MWeaponInfo21 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface MmapAbilityProperties54 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    WindUpTime: AirJumpVerticalSpeedPercent;
    NoWindUpTime: AirJumpVerticalSpeedPercent;
}

export interface Herohaze {
    ESlot_Weapon_Primary: ESlotWeaponPrimary11;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature111;
    ESlot_Signature_2: ESlotSignature211;
    ESlot_Signature_3: ESlotSignature311;
    ESlot_Signature_4: ESlotSignature411;
}

export interface ESlotSignature411 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties53;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_AutoChannelModifier: MAutoCastDelayModifier;
    m_BulletFlurryModifier: MBulletFlurryModifier;
    m_strMoviePreviewPath: string;
    m_AutoCastDelayModifier: MAutoCastDelayModifier2;
    m_strCastDelaySound: string;
    m_strCastAnimGraphParam: string;
    m_cameraSequenceChannelStart: McameraSequenceChannelStart;
    m_cameraSequenceCastStart: McameraSequenceCastStart2;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: Default2;
    m_cameraSequenceCastComplete: McameraSequenceCastComplete2;
}

export interface McameraSequenceCastComplete2 {
    m_nPriority: number;
}

export interface McameraSequenceCastStart2 {
    m_vecDistanceOperations: MvecDistanceOperation13[];
    m_vecFOVOperations: MvecDistanceOperation13[];
    m_nPriority: number;
}

export interface MvecDistanceOperation13 {
    m_bLerpEndAtDefault: boolean;
    m_flLerpEnd: number;
    m_flLerpDuration: number;
    m_flLerpBias: number;
    m_eCameraOperation: string;
}

export interface McameraSequenceChannelStart {
    m_vecDistanceOperations: MvecDistanceOperation7[];
    m_nPriority: number;
}

export interface MAutoCastDelayModifier2 {
    subclass: Subclass112;
}

export interface Subclass112 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
}

export interface MBulletFlurryModifier {
    subclass: Subclass111;
}

export interface Subclass111 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_bIsHidden: boolean;
    m_vecSetAndTrackedAnimGraphParams: any[];
    m_nEnabledStateMask: string;
    m_eHudDisplayLocation: string;
    m_ImpactParticle: string;
    m_strAttackerHitSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties53 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityDuration;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    TargetsPerTick: StunDuration;
    BonusFireRate: SlowPercent;
    WeaponDamageBonus: MoveSpeedBonus;
    EvasionPercent: MeleeHalfAngle;
    OverrideBulletRadius: MeleeHalfAngle;
}

export interface ESlotSignature311 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties52;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade5[];
    m_strMoviePreviewPath: string;
    m_StackingModifier: MStackingModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails10;
}

export interface MStackingModifier {
    subclass: Subclass110;
}

export interface Subclass110 {
    _my_subclass_name: string;
    _class: string;
    m_strSmallIconCssClass: string;
    m_SlowModifier: MMoveSlowModifier;
}

export interface MmapAbilityProperties52 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    MaxStacks: MeleeHalfAngle;
    DamageBonusFixedPerStack: DamageBonusFixedPerStack;
    ProcDamage: Damage;
    ProcDamageStackCount: MeleeHalfAngle;
    SlowPercent: MeleeDamageTakenScale;
    SlowDuration: MeleeAttackLength;
    BossDamagePct: MeleeHalfAngle;
}

export interface DamageBonusFixedPerStack {
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayType: string;
    m_bDamageAffectedByEffectiveness: boolean;
}

export interface ESlotSignature211 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties51;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_previewParticle: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_PurgeParticle: string;
    m_AutoCastDelayModifier: MAutoCastDelayModifier;
    m_InvisModifier: MInvisModifier;
    m_BuffModifier: MSlowModifier;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastDelaySound: string;
    m_strCastSound: string;
}

export interface MInvisModifier {
    subclass: Subclass109;
}

export interface Subclass109 {
    _class: string;
    _my_subclass_name: string;
    m_nAmbientLoopingSoundRecipients: string;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_sLocalizationName: string;
    m_strParticleEffect: string;
    m_InvisLoopParticle: string;
    m_InvisDetectRadiusParticle: string;
    m_InvisRevealedParticle: string;
    m_strInvisRevealedSound: string;
    m_eHudDisplayLocation: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: any[];
    m_sExpiredSound: string;
}

export interface MAutoCastDelayModifier {
    subclass: Default2;
}

export interface MmapAbilityProperties51 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    InvisAlertWhenFading: MeleeHalfAngle;
    InvisCancelOnDamage: MeleeHalfAngle;
    InvisFadeToDuration: StunDuration;
    InvisMoveSpeedMod: InvisMoveSpeedMod;
    SpottedRadius: ChainLength;
    RevealOnDamageDuration: StunDuration;
    RevealOnSpottedDuration: StunDuration;
    FullInvisDistance: MeleeHalfAngle;
    MovementSpeedWhileZoom: MeleeDamageTakenScale;
    MovementSpeedWhileShoot: MeleeDamageTakenScale;
    PostInvisBuffDuration: MeleeAttackLength;
    BulletLifesteal: BulletLifesteal;
}

export interface BulletLifesteal {
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayType: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface InvisMoveSpeedMod {
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayUnits: string;
    m_eDisplayType: string;
}

export interface ESlotSignature111 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties50;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo20;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_DrowsyModifier: MDrowsyModifier;
    m_SleepBombModifier: MSleepBombModifier;
    m_ImpactParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastDelaySound: string;
}

export interface MSleepBombModifier {
    subclass: Subclass108;
}

export interface Subclass108 {
    _class: string;
    _my_subclass_name: string;
    m_SleepModifier: MSleepModifier2;
    m_BombParticle: string;
    m_ExplodeDamageFriendlyParticle: string;
    m_ExplodeDamageEnemyParticle: string;
    m_strExplodeSound: string;
}

export interface MSleepModifier2 {
    subclass: Subclass107;
}

export interface Subclass107 {
    _class: string;
    _my_subclass_name: string;
    m_DebuffParticle: string;
}

export interface MDrowsyModifier {
    subclass: Subclass106;
}

export interface Subclass106 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_SleepModifier: MSleepModifier;
}

export interface MSleepModifier {
    subclass: Subclass105;
}

export interface Subclass105 {
    _class: string;
    _my_subclass_name: string;
    m_DebuffParticle: string;
    m_sLocalizationName: string;
    m_eHudDisplayLocation: string;
    m_PostSleepModifier: MBuffOnKillModifier;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
}

export interface MWeaponInfo20 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_eAttachmentSourceType: string;
    m_strCustomAttachmentSource: string;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_mapImpactEffects: MmapImpactEffects2;
    m_strBulletLoopingSound: string;
    m_strBulletImpactSound: string;
    m_strBulletWhizSound: string;
    [key: string]: any;
}

export interface MmapAbilityProperties50 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: Damage;
    SleepDuration: MeleeAttackLength;
    SleepWakeUpDelay: DebuffDuration;
    MinimumSleepTime: StunDuration;
    DamageStacksAdded: MeleeHalfAngle;
    AoESleepArmTime: MeleeHalfAngle;
    AoESleep: AoESleep;
    BombFallHeight: MeleeHalfAngle;
    TickRate: MeleeHalfAngle;
    MaxRicochet: MeleeHalfAngle;
    RicochetRadius: MeleeHalfAngle;
    DoesNotBreakInvis: MeleeHalfAngle;
    BulletResistReduction: TechResist;
    BulletResistReductionDuration: MeleeAttackLength;
    StaminaReduction: MeleeHalfAngle;
    DrowsyMoveSlowPercent: SlowPercent;
    DrowsyDuration: StunDuration;
}

export interface AoESleep {
    m_strValue: string;
    m_eDisplayType: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface ESlotWeaponPrimary11 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo19;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo19 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_nRecoilSeed: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletFirstSegmentMinLength: number;
    m_flBulletSpeed: number;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Herokelvin {
    ESlot_Weapon_Primary: ESlotWeaponPrimary10;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature110;
    ESlot_Signature_2: ESlotSignature210;
    ESlot_Signature_3: ESlotSignature310;
    ESlot_Signature_4: ESlotSignature410;
}

export interface ESlotSignature410 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties49;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_previewParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade3[];
    m_IceDomeModifier: MIceDomeModifier;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastDelaySound: string;
    m_strCastButtonLocToken: string;
}

export interface MIceDomeModifier {
    subclass: Subclass104;
}

export interface Subclass104 {
    _class: string;
    _my_subclass_name: string;
    m_BlockerModel: string;
    m_DomeParticle: string;
    m_strDomeEndSound: string;
    m_nAttributes: string;
    m_bIsHidden: boolean;
    m_FriendlyAuraModifier: MFriendlyAuraModifier2;
    m_EnemyAuraModifier: MEnemyAuraModifier;
    m_strTargetLoopingSound: string;
    m_sAmbientLoopingSound: string;
}

export interface MEnemyAuraModifier {
    subclass: Subclass103;
}

export interface Subclass103 {
    _class: string;
    _my_subclass_name: string;
    m_iAuraSearchType: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura9;
    m_bIsHidden: boolean;
}

export interface MmodifierProvidedByAura9 {
    subclass: Subclass102;
}

export interface Subclass102 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_strSmallIconCssClass: string;
    m_nEnabledStateMask: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strParticleStatusEffect: string;
    m_flDuration: number;
}

export interface MFriendlyAuraModifier2 {
    subclass: Subclass101;
}

export interface Subclass101 {
    _class: string;
    _my_subclass_name: string;
    m_iAuraSearchType: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura8;
    m_bIsHidden: boolean;
}

export interface MmodifierProvidedByAura8 {
    subclass: Subclass100;
}

export interface Subclass100 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_sLocalizationName: string;
    m_eHudDisplayLocation: string;
    m_flDuration: number;
}

export interface MmapAbilityProperties49 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    BlockerScaleFactor: MeleeHalfAngle;
    GrowTime: MeleeHalfAngle;
    EnemyDragSpeed: EnemyDragSpeed;
    BonusHealthRegen: BonusHealthRegen2;
    MaxHealthRegen: MeleeAttackLength;
    SlowPercent: SlowPercent;
    FireRateSlow: SlowPercent;
}

export interface BonusHealthRegen2 {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction6;
    m_eProvidedPropertyType: string;
}

export interface ESlotSignature310 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties48;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_BeamParticle: string;
    m_HitParticle: string;
    m_BeamStartSound: string;
    m_BeamStopSound: string;
    m_BeamPointStartLoopSound: string;
    m_BeamPointEndLoopSound: string;
    m_BeamPointClosestLoopSound: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade3[];
    m_HUDPanel: MHUDPanel5;
    m_BuildupModifier: MBuildupModifier;
    m_AutoChannelModifier: MMoveSlowModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MBuildupModifier {
    subclass: Subclass99;
}

export interface Subclass99 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_flBuildUpDecayDelay: number;
    m_sAmbientLoopingSound: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_eBuildupMode: string;
    m_eDrawOverheadStatus: string;
    m_nEnabledStateMask: string;
    m_strScreenParticleEffect: string;
    m_strParticleStatusEffect: string;
}

export interface MmapAbilityProperties48 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ChannelSlowPercent: SlowPercent;
    DPS: Damage;
    TickRate: MeleeHalfAngle;
    PathLength: MeleeAttackLength;
    PathWidth: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    MinSlowPercent: MeleeHalfAngle;
    MaxSlowPercent: SlowPercent;
    MaxFireRateSlowPercent: SlowPercent;
    MaxSlowTime: StunDuration;
    IceBeamBuildupProcDuration: MeleeAttackLength;
    SlowDuration: MeleeAttackLength;
    BeamSplitCount: MeleeHalfAngle;
    BeamSplit: Damage;
}

export interface ESlotSignature210 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties47;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_flMaxPitchChange: number;
    m_flMaxPitchUp: number;
    m_flMaxPitchDown: number;
    m_flMaxHeight: number;
    m_flMomentumDecayRate: number;
    m_flMomentumWeight: number;
    m_flForwardAngleBias: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastSound: string;
    m_IcePathModifier: MIcePathModifier;
    m_strMoviePreviewPath: string;
    m_HUDPanel: MHUDPanel8;
    m_AbilityTooltipDetails: MAbilityTooltipDetails12;
}

export interface MIcePathModifier {
    subclass: Subclass98;
}

export interface Subclass98 {
    _class: string;
    _my_subclass_name: string;
    m_sAmbientLoopingSound: string;
    m_FrontModel: string;
    m_BodyModel: string;
    m_GroundParticle: string;
    m_FloatingParticle: string;
    m_bIsHidden: boolean;
    m_FriendlyAuraModifier: MFriendlyAuraModifier;
    m_BonusSpiritLingerModifier: MBonusSpiritLingerModifier;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_IcePathBuffParticle: string;
    m_strHintText: string;
    m_sExpiredSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MBonusSpiritLingerModifier {
    subclass: Subclass97;
}

export interface Subclass97 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_vecAlwaysShowInStatModifierUI: string[];
}

export interface MFriendlyAuraModifier {
    subclass: Subclass96;
}

export interface Subclass96 {
    _class: string;
    _my_subclass_name: string;
    m_iAuraSearchType: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura7;
}

export interface MmodifierProvidedByAura7 {
    subclass: Subclass95;
}

export interface Subclass95 {
    _class: string;
    _my_subclass_name: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties47 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    IcePathInterval: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    PopupForce: MeleeHalfAngle;
    MinHeight: MeleeHalfAngle;
    IcePathAuraDuration: StunDuration;
    ModifierRadius: StunDuration;
    IcePathShardRadius: StunDuration;
    IcePathEdgeWidth: MeleeHalfAngle;
    IcePathPullInStrength: MeleeHalfAngle;
    MoveSpeedBonus: MoveSpeedBonus;
    SprintSpeedBonus: WeaponDamageBonus;
    BonusTechDamagePercent: SlowPercent;
    SlowResistancePercent: SlowPercent;
    BonusSpiritMeter: MeleeHalfAngle;
    BonusSpiritMax: MeleeHalfAngle;
    BonusSpiritLingerDuration: MeleeAttackLength;
    MoveWhileShootingSpeedPenaltyReductionPercent: MoveWhileShootingSpeedPenaltyReductionPercent;
    MoveWhileZoomedSpeedPenaltyReductionPercent: MoveWhileShootingSpeedPenaltyReductionPercent;
}

export interface MoveWhileShootingSpeedPenaltyReductionPercent {
    m_strValue: string;
    m_strCSSClass: string;
    m_bIsHidden: boolean;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface MoveSpeedBonus {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_eDisplayType: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface ESlotSignature110 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties46;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo18;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_projectileInfo: MprojectileInfo13;
    m_strCastAnimGraphParam: string;
    m_strCastSound: string;
    m_ExplosionSound: string;
    m_previewParticle: string;
    m_ExplodeParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade5[];
    m_IceGrenadeSlowModifier: MIceGrenadeSlowModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails12;
}

export interface MIceGrenadeSlowModifier {
    subclass: Subclass94;
}

export interface Subclass94 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MvecAbilityUpgrade5 {
    m_vecPropertyUpgrades: MvecPropertyUpgrade5[];
}

export interface MvecPropertyUpgrade5 {
    m_strPropertyName: string;
    m_strBonus: number | string | string;
    m_eUpgradeType?: string;
    m_eScaleStatFilter?: string;
}

export interface MprojectileInfo13 {
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_bHideWarningParticle: boolean;
    m_particle: string;
    m_nBehaviors: string;
}

export interface MWeaponInfo18 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_mapImpactEffects: MmapImpactEffects2;
    m_eAttachmentSourceType: string;
    m_strBulletLoopingSound: string;
    m_flVerticalAimBias: number;
    [key: string]: any;
}

export interface MmapAbilityProperties46 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    Damage: FlameAuraDPS;
    SlowPercent: SlowPercent;
    SlowDuration: MeleeAttackLength;
    HealAmount: DebuffDuration;
}

export interface ESlotWeaponPrimary10 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties45;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo17;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
    m_AutoIntrinsicModifiers: MAutoIntrinsicModifier2[];
}

export interface MAutoIntrinsicModifier2 {
    subclass: Subclass93;
}

export interface Subclass93 {
    _class: string;
    _my_subclass_name: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MWeaponInfo17 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface MmapAbilityProperties45 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    CritScalePercent: SlowPercent;
}

export interface Herodynamo {
    ESlot_Weapon_Primary: ESlotWeaponPrimary9;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature19;
    ESlot_Signature_2: ESlotSignature29;
    ESlot_Signature_3: ESlotSignature39;
    ESlot_Signature_4: ESlotSignature49;
}

export interface ESlotSignature49 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties44;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_strCastAnimSequenceName: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_VacuumAuraModifier: MVacuumAuraModifier;
    m_HUDPanel: MHUDPanel4;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails12;
    m_TargetingPreviewParticle: string;
    m_flFallSpeedMax: number;
    m_flAirDrag: number;
    m_flMaxMovespeed: number;
}

export interface MVacuumAuraModifier {
    subclass: Subclass92;
}

export interface Subclass92 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_FinishParticle: string;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura6;
    m_bDurationCanBeTimeScaled: boolean;
    m_strScreenParticleEffect: string;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
    m_AlliedParticle: string;
    m_EnemyParticle: string;
}

export interface MmodifierProvidedByAura6 {
    subclass: Subclass91;
}

export interface Subclass91 {
    _class: string;
    _my_subclass_name: string;
    m_eHudDisplayLocation: string;
    m_bReverseHudProgressBar: boolean;
    m_sLocalizationName: string;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_TargetLoopingSound: string;
    m_eTimeScaleSource: string;
    m_flOuterSpeedScale: number;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
}

export interface MmapAbilityProperties44 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    VacuumRadius: MeleeAttackLength;
    Speed: EnemyDragSpeed;
    TossSpeed: EnemyDragSpeed;
    TossAngle: MeleeHalfAngle;
    DPS: Damage;
    TickRate: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    DamagePercentHealth: StunDuration;
}

export interface ESlotSignature39 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties43;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_NikumanModifier: MNikumanModifier;
    m_strCastSound: string;
    m_SelfBuffModifier: MSelfBuffModifier;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel5;
    m_strCastAnimGraphParam: string;
}

export interface MSelfBuffModifier {
    subclass: Subclass90;
}

export interface Subclass90 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strParticleStatusEffect: string;
    m_strSmallIconCssClass: string;
    m_sStartSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_strParticleEffect: string;
}

export interface MNikumanModifier {
    subclass: Subclass89;
}

export interface Subclass89 {
    _class: string;
    _my_subclass_name: string;
    m_SelfParticle: string;
    m_AOEFriendParticle: string;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_bDurationCanBeTimeScaled: boolean;
    m_strAmbientLoopingLocalPlayerSound: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura5;
}

export interface MmodifierProvidedByAura5 {
    subclass: Subclass88;
}

export interface Subclass88 {
    _class: string;
    _my_subclass_name: string;
    m_sStartSound: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_strParticleEffectConfig: string;
}

export interface MmapAbilityProperties43 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    HealingPerSecond: DebuffDuration;
    HealMaxHealthPercent: MeleeAttackLength;
    ShareWithFriendsRadius: MeleeAttackLength;
    NoChannel: MeleeHalfAngle;
    MovementSpeedBonus: TechResist;
    MovementSpeedBonusDuration: MeleeAttackLength;
}

export interface ESlotSignature29 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties42;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_strCSSClass: string;
    m_strAbilityImage: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityActivation: string;
    m_eAbilitySpectatePriority: string;
    m_AbilityBehaviorsBits: string;
    m_deploymentInfo: MdeploymentInfo5;
    m_strCastSound: string;
    m_strCastEffect: string;
    m_strAllyPositionPreview: string;
    m_previewParticle: string;
    m_BubbleModifier: MBubbleModifier;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails4;
    m_strMoviePreviewPath: string;
    m_strSelectedSound: string;
    m_strUnselectedSound: string;
    m_strCastButtonLocToken: string;
    m_strAltCastButtonLocToken: string;
}

export interface MBubbleModifier {
    subclass: Subclass87;
}

export interface Subclass87 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_sAmbientLoopingSound: string;
    m_strParticleStatusEffect: string;
    m_TeleportStartParticle: string;
    m_TeleportEndParticle: string;
    m_TeleportTrailParticle: string;
    m_eHudDisplayLocation: string;
    m_cameraSequenceCreated: McameraSequenceCreated3;
    m_cameraSequenceRemoved: McameraSequenceRemoved3;
    m_bEndCreatedSequenceOnRemove: boolean;
    m_nStatusEffectPriority: number;
    m_BuffModifier: MBuffModifier2;
    m_sExpiredSound: string;
}

export interface MBuffModifier2 {
    subclass: Subclass86;
}

export interface Subclass86 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_RapidFireParticle: string;
    m_bIsHidden: boolean;
}

export interface McameraSequenceRemoved3 {
    m_vecDistanceOperations: any[];
    m_vecTargetPosOperations: MvecDistanceOperation5[];
}

export interface McameraSequenceCreated3 {
    m_vecDistanceOperations: MvecDistanceOperation12[];
    m_vecVertOffsetOperations: MvecDistanceOperation12[];
    m_vecTargetPosOperations: MvecTargetPosOperation3[];
}

export interface MvecTargetPosOperation3 {
    m_flMaintainDuration?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_bApproachDefault?: boolean;
    m_flApproachSpeed?: number;
    m_flLerpBias?: number;
    m_flLerpDuration?: number;
    m_flLerpGain?: number;
}

export interface MvecDistanceOperation12 {
    m_flApproachTarget?: number;
    m_flApproachSpeed?: number;
    m_eCameraOperation: string;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpBias?: number;
    m_flLerpDuration?: number;
    m_bValuesAreRelative?: boolean;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MdeploymentInfo5 {
    m_previewModel: string;
    m_bCheckPlayerFit: boolean;
    m_bPointTrace: boolean;
    m_previewParticle: string;
}

export interface MmapAbilityProperties42 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    VoidTime: StunDuration;
    AllyDistance: ChainLength;
    TrailInterval: MeleeHalfAngle;
    FireRateBonus: ChainLength;
    FireRateBonusDurationMax: MeleeHalfAngle;
    BonusClipSizePercent: BonusClipSizePercent;
}

export interface BonusClipSizePercent {
    m_strValue: string;
    m_eProvidedPropertyType: string;
}

export interface ESlotSignature19 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties41;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_projectileInfo: MprojectileInfo12;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strCastDelaySound: string;
    m_StompParticle: string;
    m_strCastSound: string;
    m_strStompExplosionSound: string;
    m_DebuffModifier: MDebuffModifier7;
    m_BulletResistModifier: MBulletResistModifier;
    m_HUDPanel: MHUDPanel4;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastDelayLocalPlayerSound: string;
}

export interface MBulletResistModifier {
    subclass: Subclass85;
}

export interface Subclass85 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
}

export interface MprojectileInfo12 {
    m_flUpSpeed: number;
    m_flSpeed: number;
    m_flGravityScale: number;
    m_bHideImpactParticle: number;
    m_bHideWarningParticle: number;
    m_particle: string;
    m_flPhysicsRadius: number;
}

export interface MmapAbilityProperties41 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    TechCleaveExpireTime: MeleeHalfAngle;
    Damage: Damage;
    ClimbHeight: MeleeHalfAngle;
    DistanceAboveGround: MeleeHalfAngle;
    DropDownRate: MeleeHalfAngle;
    TossSpeed: MeleeHalfAngle;
    ImpactInterval: MeleeHalfAngle;
    StompRange: DebuffDuration;
    StompWidth: ChainLength;
    SlowPercent: SlowPercent;
    FireRateSlow: SlowPercent;
    SlowDuration: MeleeAttackLength;
    BulletArmorReduction: MeleeHalfAngle;
    BulletArmorReductionDuration: MeleeAttackLength;
}

export interface ESlotWeaponPrimary9 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo16;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo16 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flBulletRadiusVsWorld: number;
    m_strBulletImpactSound: string;
    m_flSpreadPerShot: number;
    m_flSpreadDecay: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Herochrono {
    ESlot_Weapon_Primary: ESlotWeaponPrimary8;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature18;
    ESlot_Signature_2: ESlotSignature28;
    ESlot_Signature_3: ESlotSignature38;
    ESlot_Signature_4: ESlotSignature48;
}

export interface ESlotSignature48 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties40;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo15;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilitySpectatePriority: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strSwapStarted: string;
    m_strCastSound: string;
    m_BubbleMoveModifier: MBubbleMoveModifier;
    m_strMoviePreviewPath: string;
    m_previewParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails4;
}

export interface MBubbleMoveModifier {
    subclass: Subclass84;
}

export interface Subclass84 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleStatusEffect: string;
    m_bDurationCanBeTimeScaled: boolean;
    m_sAmbientLoopingSound: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_HealParticle: string;
    m_DamageParticle: string;
    m_BeamParticle: string;
    m_nEnabledStateMask: string;
}

export interface MWeaponInfo15 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_flBulletLifetime: number;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_iClipSize: number;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_flRange: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flPelletScatterFactor: number;
    m_bHitOnceAcrossAllBullets: boolean;
    m_mapImpactEffects: MmapImpactEffects4;
    m_strBulletLoopingSound: string;
    m_strBulletWhizSound: string;
    m_szMuzzleFlashEffectName: string;
    m_strWeaponImpactEffect: string;
    m_eAttachmentSourceType: string;
    m_flPenetrationPercent: number;
    [key: string]: any;
}

export interface MmapImpactEffects4 {
    default: Dirt;
}

export interface MmapAbilityProperties40 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    InitialFreezeTime: MeleeHalfAngle;
    MinSwapTime: MeleeHalfAngle;
    SwapTime: MeleeHalfAngle;
    DistanceToMaxTime: MeleeHalfAngle;
    SwapTotalDamage: Damage;
    InitialHeight: MeleeHalfAngle;
    TickRate: MeleeHalfAngle;
    SpellLifesteal: MeleeHalfAngle;
    SpellLifestealNonHero: MeleeHalfAngle;
}

export interface ESlotSignature38 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties39;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade4[];
    m_HUDPanel: MHUDPanel4;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_ChargingModifier: MChargingModifier;
    m_DebuffModifier: MDebuffModifier11;
    m_flShotTimeScaleLingerDuration: number;
    m_strCastAnimGraphParam: string;
    m_cameraKineticCarbineShotFired: McameraKineticCarbineShotFired;
    m_strCastSound: string;
}

export interface McameraKineticCarbineShotFired {
    m_vecDistanceOperations: MvecDistanceOperation11[];
    m_vecFOVOperations: any[];
    m_vecTargetPosOperations: any[];
}

export interface MvecDistanceOperation11 {
    m_bValuesAreRelative?: boolean;
    m_flApproachTarget?: number;
    m_flApproachSpeed?: number;
    m_flApproachAcceleration: number;
    m_eCameraOperation?: string;
    m_flMaintainDuration?: number;
    m_bApproachDefault?: boolean;
    m_flApproachMinDuration?: number;
}

export interface MDebuffModifier11 {
    subclass: Subclass83;
}

export interface Subclass83 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleEffect: string;
    m_sStartSound: string;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
    m_bIsHidden: boolean;
}

export interface MChargingModifier {
    subclass: Subclass82;
}

export interface Subclass82 {
    _my_subclass_name: string;
    _class: string;
    m_sStartSound: string;
    m_strParticleStatusEffect: string;
    m_TracerParticle: string;
    m_FullyChargedParticle: string;
    m_strFullyCharged: string;
    m_strShotSound: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
}

export interface MvecAbilityUpgrade4 {
    m_vecPropertyUpgrades: MvecPropertyUpgrade4[];
}

export interface MvecPropertyUpgrade4 {
    m_strPropertyName: string;
    m_strBonus: number | string | string;
}

export interface MmapAbilityProperties39 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    SpeedChange: Damage;
    SpeedBoostDuration: MeleeAttackLength;
    BaseBulletDamage: Damage;
    MinBonusBulletDamage: StunDuration;
    MaxBonusBulletDamage: StunDuration;
    MaxSlowDuration: MaxSlowDuration;
    BulletTimeScale: MeleeHalfAngle;
    ProjectileTimeScale: MeleeHalfAngle;
    TimeWarpRadius: MeleeHalfAngle;
    BonusBulletSpeed: MeleeHalfAngle;
    ShotCount: MeleeHalfAngle;
    MaxChargeDuration: StunDuration;
    BulletRadiusOverride: MeleeHalfAngle;
    MoveSpeedWhileShootingPenaltyReduction: MeleeHalfAngle;
    MinSlowDuration: MaxSlowDuration;
    TimeScaleDebuff: MeleeHalfAngle;
}

export interface MaxSlowDuration {
    m_strValue: string;
    m_eDisplayType: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface ESlotSignature28 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties38;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_eAbilityTargetingLocation: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strCastSound: string;
    m_AuraModifier: MAuraModifier3;
    m_TimeWallParticle: string;
    m_TimeWallChargeParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strWallCreated: string;
    m_strChargeUpSound: string;
    m_AbilityBehaviorsBits: string;
    m_deploymentInfo: MdeploymentInfo4;
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_nAbilityTargetTypes: string;
    m_previewParticle: string;
    m_strMoviePreviewPath: string;
}

export interface MdeploymentInfo4 {
    m_flPreviewModelScale: number;
    m_bPlaceFlat: boolean;
    m_bGroundCheck: boolean;
    m_previewParticle: string;
}

export interface MAuraModifier3 {
    subclass: Subclass81;
}

export interface Subclass81 {
    _my_subclass_name: string;
    _class: string;
    m_eAuraShapeType: string;
    m_iAuraSearchType: string;
    m_iAuraSearchFlags: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura4;
    m_DebuffModifier: MDebuffModifier10;
    m_flAuraRadius: number;
}

export interface MDebuffModifier10 {
    subclass: Subclass80;
}

export interface Subclass80 {
    _class: string;
    _my_subclass_name: string;
    m_strSmallIconCssClass: string;
    m_sLocalizationName: string;
    m_eDrawOverheadStatus: string;
}

export interface MmodifierProvidedByAura4 {
    subclass: Subclass79;
}

export interface Subclass79 {
    _my_subclass_name: string;
    _class: string;
    m_BuffParticle: string;
    m_DebuffParticle: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties38 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange4;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    TimeWallWidth: MeleeAttackLength;
    TimeWallHeight: AirJumpVerticalSpeedPercent;
    TimeWallDepth: MeleeHalfAngle;
    TimeWallDepthVisualScale: MeleeHalfAngle;
    TimeWallTimeScale: MeleeHalfAngle;
    TimeScaleDuration: StunDuration;
    FriendlyBulletDamageBonus: MeleeHalfAngle;
    FriendlyBulletTimeScale: MeleeHalfAngle;
    MovementSlowPct: StunDuration;
    DamagePctPerWallHit: ChainLength;
    DamageTickRate: MeleeHalfAngle;
    AuraEffectDuration: AirJumpVerticalSpeedPercent;
    TimeWallFormationTime: MeleeHalfAngle;
    DebuffDuration: AirJumpVerticalSpeedPercent;
}

export interface AbilityCastRange4 {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_bIsHidden: boolean;
}

export interface ESlotSignature18 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties37;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo14;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_bShowTargetingPreviewWhileCasting: boolean;
    m_iUpdateTime: number;
    m_strCastAnimGraphParam: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strSecondaryStatName: string;
    m_PulseAreaModifier: MPulseAreaModifier;
    m_previewParticle: string;
}

export interface MPulseAreaModifier {
    subclass: Subclass78;
}

export interface Subclass78 {
    _class: string;
    _my_subclass_name: string;
    m_strLoopingSound: string;
    m_strHitSound: string;
    m_AreaEffect: string;
    m_PreviewRingParticle: string;
    m_strArmedSound: string;
    m_strArmingSound: string;
    m_strParticleEffect: string;
    m_DebuffModifier: MDebuffModifier9;
    m_SlowModifier: MMoveSlowModifier;
}

export interface MDebuffModifier9 {
    subclass: Subclass77;
}

export interface Subclass77 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleEffect: string;
    m_sLocalizationName: string;
    m_eDrawOverheadStatus: string;
    m_strSmallIconCssClass: string;
}

export interface MWeaponInfo14 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_szBulletTravelTracerParticle: string;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_mapImpactEffects: MmapImpactEffects2;
    m_eAttachmentSourceType: string;
    m_flVerticalAimBias: number;
    [key: string]: any;
}

export interface MmapAbilityProperties37 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration3;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    PulseInterval: ChainLength;
    PulseDamage: Damage;
    Pulses: MeleeHalfAngle;
    DamageAmplificationPerStack: DamageAmplificationPerStack;
    DebuffDuration: SelfBuffDuration;
    SlowPercent: SlowPercent;
    MovementSlowDuration: MeleeAttackLength;
    BossDamagePercent: MeleeHalfAngle;
}

export interface DamageAmplificationPerStack {
    m_strLocTokenOverride: string;
    m_strValue: string;
}

export interface AbilityDuration3 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: string;
    m_bIsHidden: boolean;
}

export interface ESlotWeaponPrimary8 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo13;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo13 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_nRecoilSeed: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletRadiusVsWorld: number;
    m_strSpinUpSound: string;
    m_strSpinDownSound: string;
    m_strSpinUpLoopSound: string;
    m_flBulletDamage: number;
    m_flIntraBurstCycleTime: number;
    m_szSelfBulletTravelTracerParticle: string;
    [key: string]: any;
}

export interface Heroforge {
    ESlot_Weapon_Primary: ESlotWeaponPrimary7;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature17;
    ESlot_Signature_2: ESlotSignature27;
    ESlot_Signature_3: ESlotSignature37;
    ESlot_Signature_4: ESlotSignature47;
}

export interface ESlotSignature47 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties36;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilitySpectatePriority: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_projectileInfo: MprojectileInfo11;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_HUDPanel: MHUDPanel5;
    m_strMoviePreviewPath: string;
    m_BarrageModifier: MBarrageModifier;
    m_MoveSlowModifier: MMoveSlowModifier;
    m_strExplodeSound: string;
    m_ImpactParticle: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strChannelLoopSound: string;
    m_strCastSound: string;
    m_cameraSequenceSelected: McameraSequenceSelected;
    m_flMoveSpeedReductionPct: number;
}

export interface McameraSequenceSelected {
    m_vecVertOffsetOperations: MvecVertOffsetOperation2[];
    m_vecDistanceOperations: MvecVertOffsetOperation2[];
}

export interface MvecVertOffsetOperation2 {
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MMoveSlowModifier {
    subclass: Subclass76;
}

export interface Subclass76 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MBarrageModifier {
    subclass: Subclass75;
}

export interface Subclass75 {
    _class: string;
    _my_subclass_name: string;
    m_strFireSound: string;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam2[];
}

export interface MvecSetAndTrackedAnimGraphParam2 {
    m_strName?: string;
    m_strSetValue?: string;
    m_strRestoreValue?: string;
}

export interface MprojectileInfo11 {
    m_particle: string;
    m_customModel: string;
    m_bHideWarningParticle: number;
    m_bHideImpactParticle: number;
    m_flTrackingDuration: number;
    m_flTrackingStartTime: number;
    m_flTrackingEndTime: number;
    m_flTriggerRadius: number;
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_LoopingSound: string;
}

export interface MmapAbilityProperties36 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DamagePerRocket: Damage;
    GrenadesPerSecond: MeleeHalfAngle;
    IntervalRampUpTime: MeleeHalfAngle;
    IntervalRampUpStart: MeleeHalfAngle;
    DetonateTimer: MeleeHalfAngle;
    ExplosionFalloffDisabled: MeleeHalfAngle;
    BossDamagePercent: MeleeHalfAngle;
    ExplosionRadius: MeleeAttackLength;
    TrackingVariance: MeleeHalfAngle;
    TrackSpeedNear: MeleeHalfAngle;
    TrackSpeedFar: MeleeHalfAngle;
    TrackingTime: MeleeHalfAngle;
    MinDistance: ChainLength;
    MaxPitch: MeleeHalfAngle;
    MaxSpread: MeleeHalfAngle;
    ProjectileIgnoreCollisionTime: MeleeHalfAngle;
    GrenadesPerSecondMult: MeleeHalfAngle;
    MoveSlowPercent: SlowPercent;
    MoveSlowDuration: MeleeAttackLength;
}

export interface ESlotSignature37 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties35;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_eAbilitySpectatePriority: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_FriendlyWallParticle: string;
    m_EnemyWallParticle: string;
    m_WallTravelSoundLoop: string;
    m_WallModifier: MWallModifier;
    m_strMoviePreviewPath: string;
    m_strCastSound: string;
    m_vecDependentAbilities: string[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails13;
}

export interface MAbilityTooltipDetails13 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection13[];
}

export interface MvecAbilityInfoSection13 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock3[];
    m_vecBasicProperties?: string[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MWallModifier {
    subclass: Subclass74;
}

export interface Subclass74 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_nAttributes: string;
    m_DebrisParticle: string;
    m_SpikeParticle: string;
    m_WallSpawnSound: string;
    m_EnemyVisionModifier: MZipLineIntroModifier;
    m_DebuffModifier: MDebuffModifier8;
    m_SlowModifier: MSlowModifier;
    m_sExpiredSound: string;
}

export interface MDebuffModifier8 {
    subclass: Subclass73;
}

export interface Subclass73 {
    _class: string;
    _my_subclass_name: string;
    m_bSelfish: boolean;
    m_bIsHidden: boolean;
    m_strSmallIconCssClass: string;
    m_eDrawOverheadStatus: string;
}

export interface MmapAbilityProperties35 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    MinRange: ChainLength;
    WallImpactRange: ChainLength;
    PushForce: MeleeHalfAngle;
    Damage: Damage;
    WallStunDuration: MeleeAttackLength;
    NumWallSegments: MeleeHalfAngle;
    TimeBetweenSegments: MeleeHalfAngle;
    SegmentEmitTime: MeleeHalfAngle;
    TimeToMaxDistance: MeleeHalfAngle;
    StaminaReduction: MeleeHalfAngle;
    BonusDamagePercent: MeleeHalfAngle;
    DebuffDuration: MeleeAttackLength;
    SlowDuration: MeleeAttackLength;
    SlowPercent: SlowPercent;
}

export interface ESlotSignature27 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties34;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_deploymentInfo: MdeploymentInfo3;
    m_projectileInfo: MprojectileInfo10;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_AuraModifier: MAuraModifier2;
    m_DispenserModel: string;
    m_SprayParticle: string;
    m_DestroyedParticle: string;
    m_strMoviePreviewPath: string;
    m_strKilledSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails12;
}

export interface MAbilityTooltipDetails12 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection12[];
}

export interface MvecAbilityInfoSection12 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock6[];
    m_vecBasicProperties: string[];
}

export interface MAuraModifier2 {
    subclass: Subclass72;
}

export interface Subclass72 {
    _class: string;
    _my_subclass_name: string;
    m_sStartSound: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_strParticleEffect: string;
    m_nAmbientParticleRadiusControlPoint: number;
    m_modifierProvidedByAura: MmodifierProvidedByAura3;
    m_bIsHidden: boolean;
}

export interface MmodifierProvidedByAura3 {
    subclass: Subclass71;
}

export interface Subclass71 {
    _class: string;
    _my_subclass_name: string;
    m_sAmbientLoopingSound: string;
    m_sLocalizationName: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MprojectileInfo10 {
    m_customModel: string;
    m_flSpeed: number;
    m_bHideWarningParticle: number;
    m_bHideImpactParticle: number;
    m_nBehaviors: string;
}

export interface MdeploymentInfo3 {
    m_previewModel: string;
    m_bRequiresUpNormal: number;
    m_bGroundCheck: number;
    m_bPlaceFlat: number;
}

export interface MmapAbilityProperties34 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    HealRadius: DebuffDuration;
    ExternalBonusHealthRegen: ExternalBonusHealthRegen;
    TurretHealMult: StunDuration;
    AuraFireRateBonus: SlowPercent;
    MaxHealthRegenPct: MeleeAttackLength;
    MaxHealthRegenPctInterval: MeleeHalfAngle;
}

export interface ExternalBonusHealthRegen {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_eProvidedPropertyType: string;
}

export interface ESlotSignature17 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties33;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo12;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_previewParticle: string;
    m_strChannelLoopSound: string;
    m_deploymentInfo: MdeploymentInfo2;
    m_projectileInfo: MprojectileInfo9;
    m_strCastAnimGraphParam: string;
    m_flDamageFalloffEndScale: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_InnateModifier: MInnateModifier;
    m_DebuffModifier: MDebuffModifier7;
    m_AbilityTooltipDetails: MAbilityTooltipDetails11;
}

export interface MAbilityTooltipDetails11 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection11[];
}

export interface MvecAbilityInfoSection11 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock[];
    m_vecBasicProperties: string[];
    m_strAbilityPropertyUpgradeRequired: string;
}

export interface MDebuffModifier7 {
    subclass: Subclass70;
}

export interface Subclass70 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MInnateModifier {
    subclass: Subclass69;
}

export interface Subclass69 {
    _my_subclass_name: string;
    _class: string;
}

export interface MprojectileInfo9 {
    m_customModel: string;
    m_flProjectileModelScale: number;
    m_flSpeed: number;
    m_bHideWarningParticle: number;
    m_bHideImpactParticle: number;
    m_nBehaviors: string;
}

export interface MdeploymentInfo2 {
    m_previewModel: string;
    m_strExtraBodygroup: string;
    m_flPreviewModelScale: number;
    m_bRequiresUpNormal: number;
    m_bGroundCheck: number;
    m_bPlaceFlat: number;
}

export interface MWeaponInfo12 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects3;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_bUseDesatForFriendlyNonHeroTracer: boolean;
    m_flBulletDamage: number;
    m_eAttachmentSourceType: string;
    m_strCustomAttachmentSource: string;
    [key: string]: any;
}

export interface MmapImpactEffects3 {
    default: Default;
    flesh: Default;
    concrete: Default;
    solidmetal: Default;
    portals: Default;
}

export interface MmapAbilityProperties33 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ModelScale: MeleeHalfAngle;
    TickRate: MeleeHalfAngle;
    TrackingSpeed: MeleeHalfAngle;
    AttackConeAngle: MeleeHalfAngle;
    TurretDeployTime: TurretDeployTime;
    TurretBaseHealth: StunDuration;
    TurretHealthScaling: StunDuration;
    TurretAttackRange: MeleeAttackLength;
    TurretAttackFalloffStart: MeleeAttackLength;
    TurretAttackFalloffEnd: MeleeAttackLength;
    TurretAttackDelay: MeleeHalfAngle;
    TurretDPS: Damage;
    TurretLifetime: MeleeAttackLength;
    TurretDecayDamagePerSecond: MeleeHalfAngle;
    AttackSpeedMult: MeleeHalfAngle;
    TechResist: MeleeDamageTakenScale;
    NonHeroDamagePercentOutgoing: MeleeHalfAngle;
    BossDamagePercentOutgoing: MeleeHalfAngle;
    BossDamagePercentIncoming: MeleeHalfAngle;
    MoveSlowPercent: SlowPercent;
    SlowDuration: MeleeAttackLength;
}

export interface TurretDeployTime {
    m_strValue: string;
    m_strCSSClass: string;
    m_bIsHidden: boolean;
}

export interface ESlotWeaponPrimary7 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo11;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo11 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_bSpinsUp: number;
    m_flMaxSpinCycleTime: number;
    m_flSpinIncreaseRate: number;
    m_flSpinDecayRate: number;
    m_flSpreadPerShot: number;
    m_AimingMoveSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strSpinUpSound: string;
    m_strSpinUpLoopSound: string;
    m_strSpinDownSound: string;
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Herowraith {
    ESlot_Weapon_Primary: ESlotWeaponPrimary6;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature16;
    ESlot_Signature_2: ESlotSignature26;
    ESlot_Signature_3: ESlotSignature36;
    ESlot_Signature_4: ESlotSignature46;
}

export interface ESlotSignature46 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties32;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_flTargetingConeAngle: number;
    m_nAbilityTargetTypes: string;
    m_eAbilitySpectatePriority: string;
    m_projectileInfo: MprojectileInfo8;
    m_previewParticle: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_TargetCastSound: string;
    m_strMoviePreviewPath: string;
    m_TargetParticle: string;
    m_LiftModifier: MLiftModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
    m_strSelectedLoopSound: string;
    m_strSelectedSound: string;
    m_strCastDelaySound: string;
    m_strCastSound: string;
}

export interface MLiftModifier {
    subclass: Subclass68;
}

export interface Subclass68 {
    _class: string;
    _my_subclass_name: string;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_LiftParticle: string;
    m_nEnabledStateMask: string;
    m_bIsHidden: boolean;
    m_strHudMessageText: string;
    m_EmpParticle: string;
    m_EmpPlayerParticle: string;
}

export interface MprojectileInfo8 {
    m_flTriggerRadius: number;
    m_bHideWarningParticle: number;
    m_flTrackingEndTime: number;
    m_particle: string;
    m_flSpeed: number;
    m_LoopingSound: string;
    m_HitSound: string;
}

export interface MmapAbilityProperties32 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DampingFactor: MeleeHalfAngle;
    LiftHeight: MeleeHalfAngle;
    Damage: Damage;
}

export interface ESlotSignature36 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties31;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastSound: string;
    m_strMoviePreviewPath: string;
    m_strCastAnimGraphParam: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails10;
    m_CastParticle: string;
    m_TargetBuffSound: string;
    m_RapidFireModifier: MRapidFireModifier;
}

export interface MRapidFireModifier {
    subclass: Subclass67;
}

export interface Subclass67 {
    _my_subclass_name: string;
    _class: string;
    m_RapidFireParticle: string;
    m_bIsHidden: boolean;
    m_strHudMessageText: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MAbilityTooltipDetails10 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection10[];
}

export interface MvecAbilityInfoSection10 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock6[];
}

export interface MvecAbilityPropertiesBlock6 {
    m_vecAbilityProperties: MvecAbilityProperty5[];
}

export interface MvecAbilityProperty5 {
    m_strImportantProperty: string;
    m_bRequiresAbilityUpgrade?: boolean;
}

export interface MmapAbilityProperties31 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    BonusFireRate: SlowPercent;
    BulletLifestealPercent: BulletLifestealPercent;
    AlliedFireRatePercentage: MeleeHalfAngle;
    MagicDamagePerBullet: MagicDamagePerBullet;
}

export interface BulletLifestealPercent {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface ESlotSignature26 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties30;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityActivation: string;
    m_eAbilitySpectatePriority: string;
    m_AbilityBehaviorsBits: string;
    m_deploymentInfo: MdeploymentInfo;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade3[];
    m_strMoviePreviewPath: string;
    m_HUDPanel: MHUDPanel4;
    m_ProjectMindModifier: MProjectMindModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails9;
    m_strSelectedSound: string;
    m_strUnselectedSound: string;
    m_strCastAnimGraphParam: string;
}

export interface MAbilityTooltipDetails9 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection9[];
}

export interface MvecAbilityInfoSection9 {
    m_strLocString?: string;
    m_vecAbilityPropertiesBlock?: MvecAbilityPropertiesBlock5[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MvecAbilityPropertiesBlock5 {
    m_vecAbilityProperties: MvecAbilityProperty4[];
    m_strPropertiesTitleLocString: string;
}

export interface MvecAbilityProperty4 {
    m_strImportantProperty: string;
    m_bRequiresAbilityUpgrade: boolean;
}

export interface MProjectMindModifier {
    subclass: Subclass66;
}

export interface Subclass66 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_TeleportStartParticle: string;
    m_TeleportEndParticle: string;
    m_TeleportTrailParticle: string;
    m_TeleportModelParticle: string;
    m_sExpiredSound: string;
    m_ShieldModifier: MShieldModifier;
    m_sStartSound: string;
    m_cameraSequenceRemoved: McameraSequenceRemoved2;
}

export interface McameraSequenceRemoved2 {
    m_vecTargetPosOperations: MvecDistanceOperation5[];
}

export interface MShieldModifier {
    subclass: Subclass65;
}

export interface Subclass65 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
}

export interface MdeploymentInfo {
    m_bCheckPlayerFit: boolean;
    m_bPointTrace: boolean;
    m_previewParticle: string;
}

export interface MmapAbilityProperties30 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    CameraDistance: MeleeHalfAngle;
    TrailInterval: MeleeHalfAngle;
    BulletShieldOnLand: Damage;
    BulletShieldDuration: MeleeAttackLength;
}

export interface ESlotSignature16 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties29;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_strAbilityImage: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_projectileInfo: MprojectileInfo7;
    m_strCastAnimGraphParam: string;
    m_strSecondaryStatName: string;
    m_strCastSound: string;
    m_strMoviePreviewPath: string;
    m_ExplodeParticle: string;
    m_flTargetingConeAngle: number;
    m_SummonedCard: string;
    m_flSummonedCardVerticalOffset: number;
    m_flSummonedCardSideOffsetStep: number;
    m_strCardTossSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_HUDPanel: MHUDPanel;
    m_flSummonedCardStartSideOffset: number;
    m_flSummonedCardForwardOffset: number;
    m_strCardSummonSound: string;
    m_bIncludeExtra2DCone: boolean;
    m_strChannelLoopSound: string;
}

export interface MprojectileInfo7 {
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_particle: string;
    m_warningParticle: string;
    m_nBehaviors: string;
    m_DetonateSound: string;
    m_LoopingSound: string;
    m_flTrackingDampingCoefficient: number;
    m_bHideWarningParticle: boolean;
    m_flTriggerRadius: number;
}

export interface MmapAbilityProperties29 {
    AbilityCooldown: AbilityCooldown5;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange3;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: Damage;
    Radius: MeleeAttackLength;
    AbilityChargesConditionally: MeleeHalfAngle;
    ResourcePerCard: MeleeHalfAngle;
    BonusAbilityResource: MeleeHalfAngle;
    NonPlayerCardResourceScale: MeleeHalfAngle;
    CardResourcePerBulletHit: MeleeHalfAngle;
    CardResourcePerBulletCrit: MeleeHalfAngle;
    CardResourcePerLightMelee: MeleeHalfAngle;
    CardResourcePerHeavyMelee: MeleeHalfAngle;
    CardResourceGenPctScale: CardResourceGenPctScale;
    ProjectileOriginHeightOffset: MeleeHalfAngle;
}

export interface CardResourceGenPctScale {
    m_strValue: number;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface AbilityCastRange3 {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction4;
    m_eDisplayType: string;
    m_bIsHidden: boolean;
}

export interface AbilityCooldown5 {
    m_strValue: number;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface ESlotWeaponPrimary6 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo10;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo10 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flSpreadPerShot: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_flSpreadDecay: number;
    m_nRecoilSeed: number;
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    m_szSelfBulletTravelTracerParticle: string;
    [key: string]: any;
}

export interface Heroatlas {
    ESlot_Weapon_Primary: ESlotWeaponPrimary5;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature15;
    ESlot_Signature_2: ESlotSignature25;
    ESlot_Signature_3: ESlotSignature35;
    ESlot_Signature_4: ESlotSignature45;
}

export interface ESlotSignature45 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties28;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_eAbilitySpectatePriority: string;
    m_strAbilityImage: string;
    m_strCastSound: string;
    m_strImpactSound: string;
    m_ImpactParticle: string;
    m_TakeOffParticle: string;
    m_AoEPreviewParticle: string;
    m_strCrashingSound: string;
    m_strMoviePreviewPath: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_flStartupTime: number;
    m_flForwardBoostSpeed: number;
    m_flUpBoostSpeed: number;
    m_flBoostGain: number;
    m_flBoostTime: number;
    m_flHoverTime: number;
    m_flMinAimAngle: number;
    m_flCrashSpeed: number;
    m_flLandingTime: number;
    m_BoostModifier: MBoostModifier;
    m_CrashModifier: MCrashModifier;
    m_ImmunityModifier: MImmunityModifier;
    m_LandingBonusesModifier: MLandingBonusesModifier;
    m_HUDPanel: MHUDPanel8;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_CrashSpeedScaleCurve: MBulletSpeedCurve;
    m_nHoverParticle: string;
    m_flBoostTurnRate: number;
}

export interface MHUDPanel8 {
    m_vecHUDElements: MvecHUDElement2[];
    m_vecButtonHints: MvecButtonHint3[];
}

export interface MLandingBonusesModifier {
    subclass: Subclass64;
}

export interface Subclass64 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
}

export interface MImmunityModifier {
    subclass: Subclass63;
}

export interface Subclass63 {
    _class: string;
    _my_subclass_name: string;
    m_eHudDisplayLocation: string;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_nEnabledStateMask: string;
    m_ShieldParticle: string;
    m_PlayerShieldParticle: string;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
    m_bIsHiddenOverhead: boolean;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strHudMessageText: string;
    m_nDisabledStateMask: string;
}

export interface MCrashModifier {
    subclass: Subclass62;
}

export interface Subclass62 {
    _class: string;
    _my_subclass_name: string;
    m_flCollideRadius: number;
    m_DragModifier: MDragModifier;
    m_nEnabledStateMask: string;
    m_CrashTrailParticle: string;
    m_CrashTrailSmokeParticle: string;
    m_sStartSound: string;
}

export interface MDragModifier {
    subclass: Subclass61;
}

export interface Subclass61 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_flForwardOffset: number;
    m_flVerticalOffset: number;
}

export interface MBoostModifier {
    subclass: Subclass60;
}

export interface Subclass60 {
    _my_subclass_name: string;
    _class: string;
    m_BoostTrailParticle: string;
    m_cameraSequenceCreated: McameraSequenceCreated2;
}

export interface McameraSequenceCreated2 {
    m_vecVertOffsetOperations: MvecVertOffsetOperation[];
    m_vecHorizOffsetOperations: MvecVertOffsetOperation[];
    m_vecDistanceOperations: MvecVertOffsetOperation[];
}

export interface MvecVertOffsetOperation {
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_flLerpBias?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MmapAbilityProperties28 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ImpactRadius: MeleeAttackLength;
    ImpactHeight: MeleeHalfAngle;
    ImpactRadiusPercentage: StunDuration;
    Damage: Damage;
    StunDuration: MeleeAttackLength;
    BonusMaxHealthPerHero: StunDuration;
    BonusFireRatePerHero: SlowPercent;
    LandingBonusesDuration: MeleeAttackLength;
    ImmunityDuration: MeleeAttackLength;
}

export interface ESlotSignature35 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties27;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_HealParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MmapAbilityProperties27 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    RegenIncomingDamagePercent: MeleeAttackLength;
    RegenIncomingDamageDuration: StunDuration;
    RegenDamageInterval: MeleeHalfAngle;
    BonusMaxHealth: StunDuration;
    BonusHealthRegen: BonusHealthRegen;
    BulletResist: BonusHealthRegen;
}

export interface BonusHealthRegen {
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
}

export interface ESlotSignature25 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties26;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilitySpectatePriority: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strMoviePreviewPath: string;
    m_HUDPanel: MHUDPanel4;
    m_cameraSequenceCastComplete: McameraSequenceCastComplete;
    m_strCastDelaySound: string;
    m_strCastSound: string;
    m_strWallSlamSound: string;
    m_flWallStunLookAheadDist: number;
    m_cameraSequenceImpact: McameraSequenceImpact;
    m_ModifierTossAirControlLockout: MModifierTossAirControlLockout;
    m_ModifierWeaponPowerIncrease: MBuffOnKillModifier;
    m_ModifierBullCharging: MModifierBullCharging;
    m_ModifierChargeDragEnemy: MModifierChargeDragEnemy;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
    m_WallImpactParticle: string;
}

export interface MModifierChargeDragEnemy {
    subclass: Subclass59;
}

export interface Subclass59 {
    _my_subclass_name: string;
    _class: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_flVerticalOffset: number;
    m_flForwardOffset: number;
    m_cameraSequenceCreated: McameraSequenceCastComplete;
    m_bEndCreatedSequenceOnRemove: boolean;
    m_cameraSequenceRemoved: McameraSequenceRemoved;
}

export interface McameraSequenceRemoved {
    m_vecDistanceOperations: MvecDistanceOperation10[];
}

export interface MvecDistanceOperation10 {
    m_flMaintainDuration: number;
    m_eCameraOperation: string;
    m_flMaintainFloat: number;
}

export interface MModifierBullCharging {
    subclass: Subclass58;
}

export interface Subclass58 {
    _my_subclass_name: string;
    _class: string;
    m_ChargeParticle: string;
    m_nEnabledStateMask: string;
    m_bIsHidden: boolean;
}

export interface MModifierTossAirControlLockout {
    subclass: Subclass57;
}

export interface Subclass57 {
    _class: string;
    _my_subclass_name: string;
    m_flDuration: number;
    m_bDurationReducible: boolean;
    m_bIsHidden: boolean;
    m_nEnabledStateMask: string;
    m_nAttributes: string;
}

export interface McameraSequenceImpact {
    m_vecDistanceOperations: MvecDistanceOperation5[];
}

export interface McameraSequenceCastComplete {
    m_vecDistanceOperations: MvecDistanceOperation9[];
}

export interface MvecDistanceOperation9 {
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MmapAbilityProperties26 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: Damage;
    SpeedInitial: MeleeHalfAngle;
    ChargeSpeedMax: MeleeHalfAngle;
    ChargeDragVerticalOffset: MeleeHalfAngle;
    TossSpeed: MeleeHalfAngle;
    TossUpMagnitude: MeleeHalfAngle;
    SideMoveSpeedReduction: MeleeHalfAngle;
    TurnRateMax: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    ChargeRadius: MeleeHalfAngle;
    WeaponDamageBonus: WeaponDamageBonus;
    WeaponPowerIncreaseDuration: AirJumpVerticalSpeedPercent;
    CollidePlayersStopTime: MeleeHalfAngle;
    StunDuration: MeleeAttackLength;
}

export interface WeaponDamageBonus {
    m_strValue: string;
    m_strCSSClass: string;
    m_eDisplayUnits: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface ESlotSignature15 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties25;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strCastSound: string;
    m_AuraModifier: MAuraModifier;
    m_previewParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails8;
}

export interface MAbilityTooltipDetails8 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection8[];
}

export interface MvecAbilityInfoSection8 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock[];
}

export interface MAuraModifier {
    subclass: Subclass56;
}

export interface Subclass56 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_modifierProvidedByAura: MmodifierProvidedByAura2;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_flAuraTargetingConeAngle: number;
    m_flAuraTargetingConeHalfWidth: number;
    m_flAuraRadius: number;
    m_bIsHidden: boolean;
}

export interface MmodifierProvidedByAura2 {
    subclass: Subclass55;
}

export interface Subclass55 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_DrainParticle: string;
    m_sAmbientLoopingSound: string;
}

export interface MmapAbilityProperties25 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    HealingFactor: MeleeAttackLength;
    NonHeroHealingFactor: MeleeAttackLength;
    LifeDrainPerSecond: Damage;
    TickRate: MeleeHalfAngle;
}

export interface ESlotWeaponPrimary5 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo9;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo9 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil2;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_flReloadSingleBulletsInitialDelay: number;
    m_bReloadSingleBullets: boolean;
    m_nRecoilSeed: number;
    m_vecScatterOffsets: number[][];
    m_flPelletScatterSpreadFactor: number;
    m_bApplySpreadToFirstPellet: boolean;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_flPelletScatterFactor: number;
    m_strBulletImpactSound: string;
    m_bReloadSingleBulletsAllowCancel: boolean;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface MVerticallRecoil2 {
    m_Range: number;
    m_flBurstSlope: number;
    m_flBurstExponent: number;
    m_flBurstConstant: number;
}

export interface Heroghost {
    ESlot_Weapon_Primary: ESlotWeaponPrimary4;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature14;
    ESlot_Signature_2: ESlotSignature24;
    ESlot_Signature_3: ESlotSignature34;
    ESlot_Signature_4: ESlotSignature44;
}

export interface ESlotSignature44 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties24;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilitySpectatePriority: string;
    m_flTargetingConeAngle: number;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_projectileInfo: MprojectileInfo6;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strMoviePreviewPath: string;
    m_PreCastModifier: MPreCastModifier;
    m_SwapModifier: MSwapModifier;
    m_BuffModifier: MBuffOnKillModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_SwapParticle: string;
    m_strCastDelaySound: string;
    m_previewParticle: string;
}

export interface MSwapModifier {
    subclass: Subclass54;
}

export interface Subclass54 {
    _class: string;
    _my_subclass_name: string;
    m_sAmbientLoopingSound: string;
    m_BloodExchangeParticle: string;
    m_sStartSound: string;
}

export interface MPreCastModifier {
    subclass: Subclass53;
}

export interface Subclass53 {
    _class: string;
    _my_subclass_name: string;
    m_strTargetParticleEffect: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_strTargetScreenParticleEffect: string;
    m_strTargetEnemyParticleEffect: string;
}

export interface MprojectileInfo6 {
    m_flTriggerRadius: number;
    m_bHideWarningParticle: number;
    m_flTrackingEndTime: number;
    m_flSpeed: number;
}

export interface MmapAbilityProperties24 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration2;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay2;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    PostCastHoldTime: MeleeHalfAngle;
    InitialUpSpeed: MeleeHalfAngle;
    EnemyMinHealthPct: StunDuration;
    MinHealthTakenPct: StunDuration;
    HPOnHealthSteal: StunDuration;
    MinDiffToCast: MeleeHalfAngle;
    EnemySlowPct: MeleeHalfAngle;
    SelfBuffDuration: SelfBuffDuration;
    TechResist: TechResist;
    BonusFireRate: TechResist;
}

export interface TechResist {
    m_strValue: string;
    m_eDisplayType: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface SelfBuffDuration {
    m_strValue: string;
    m_strLocTokenOverride: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface AbilityCastDelay2 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction8;
}

export interface MsubclassScaleFunction8 {
    subclass: Subclass52;
}

export interface Subclass52 {
    m_bFunctionDisabled: boolean;
}

export interface AbilityDuration2 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction3;
}

export interface ESlotSignature34 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties23;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo8;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_iUpdateTime: number;
    m_strChannelLoopSound: string;
    m_strCastSound: string;
    m_strCastDelaySound: string;
    m_ImpactParticle: string;
    m_strMoviePreviewPath: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_strSecondaryStatName: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_DebuffModifier: MDebuffModifier6;
    m_AbilityTooltipDetails: MAbilityTooltipDetails7;
    m_mapCastEventParticles: MmapCastEventParticles;
}

export interface MmapCastEventParticles {
    CAST_COMPLETED: string;
}

export interface MAbilityTooltipDetails7 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection7[];
}

export interface MvecAbilityInfoSection7 {
    m_strLocString?: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock4[];
    m_vecBasicProperties: string[];
}

export interface MvecAbilityPropertiesBlock4 {
    m_vecAbilityProperties: MvecAbilityProperty[];
    m_strPropertiesTitleLocString?: string;
}

export interface MDebuffModifier6 {
    subclass: Subclass51;
}

export interface Subclass51 {
    _class: string;
    _my_subclass_name: string;
    m_nEnabledStateMask: string;
    m_strSmallIconCssClass: string;
    m_bIsHidden: boolean;
    m_eDrawOverheadStatus: string;
    m_BloodShardDebuffParticle: string;
    m_sAmbientLoopingSound: string;
}

export interface MWeaponInfo8 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_flBulletGravityScale: number;
    m_flBulletLifetime: number;
    m_flPenetrationPercent: number;
    m_flBulletRadius: number;
    m_flBulletRadiusVsWorld: number;
    m_szBulletTravelTracerParticle: string;
    m_eAttachmentSourceType: string;
    m_strCustomAttachmentSource: string;
    m_strWeaponImpactEffect: string;
    m_mapImpactEffects: MmapImpactEffects2;
    m_strBulletLoopingSound: string;
    m_strBulletWhizSound: string;
    m_strBulletImpactSound: string;
    [key: string]: any;
}

export interface MmapAbilityProperties23 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    HealthToDamage: Damage;
    NumBloodShards: MeleeHalfAngle;
    SpreadAngleDegrees: MeleeHalfAngle;
    MoveSpeedPenaltyPerStack: StunDuration;
    MinSlowAmount: MeleeHalfAngle;
    VulnerabilityPerStack: MeleeHalfAngle;
    DebuffDuration: MeleeAttackLength;
    SlowDuration: MeleeAttackLength;
    MaxStacks: MeleeHalfAngle;
}

export interface ESlotSignature24 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties22;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityActivation: string;
    m_strAbilityImage: string;
    m_eAbilitySpectatePriority: string;
    m_nAbilityTargetTypes: string;
    m_eAbilityTargetingLocation: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilityTargetingShape: string;
    m_flTargetingConeAngle: number;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strCastSound: string;
    m_LifeDrainTargetModifier: MLifeDrainTargetModifier;
    m_strMoviePreviewPath: string;
    m_previewParticle: string;
    m_LifeDrainCasterModifier: MLifeDrainCasterModifier;
    m_HUDPanel: MHUDPanel4;
    m_AbilityTooltipDetails: MAbilityTooltipDetails6;
    m_strCastDelaySound: string;
    m_strSelectedLoopSound: string;
    m_strChannelLoopSound: string;
}

export interface MAbilityTooltipDetails6 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection6[];
}

export interface MvecAbilityInfoSection6 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock3[];
    m_vecBasicProperties: string[];
}

export interface MvecAbilityPropertiesBlock3 {
    m_strPropertiesTitleLocString: string;
    m_vecAbilityProperties: MvecAbilityProperty3[];
}

export interface MvecAbilityProperty3 {
    m_strImportantProperty: string;
    m_bRequiresAbilityUpgrade?: boolean;
    m_strStatusEffectValue?: string;
}

export interface MLifeDrainCasterModifier {
    subclass: Subclass50;
}

export interface Subclass50 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strParticleStatusEffect: string;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
}

export interface MLifeDrainTargetModifier {
    subclass: Subclass49;
}

export interface Subclass49 {
    _class: string;
    _my_subclass_name: string;
    m_DrainParticle: string;
    m_SilenceModifier: MSilenceModifier;
    m_bIsHidden: boolean;
    m_sExpiredSound: string;
    m_sAmbientLoopingSound: string;
}

export interface MSilenceModifier {
    subclass: Subclass48;
}

export interface Subclass48 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
}

export interface MmapAbilityProperties22 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    MaxRange: MeleeAttackLength;
    MoveSpeedReduction: MeleeDamageTakenScale;
    LifeDrainPerSecond: Damage;
    TickRate: MeleeHalfAngle;
    SilenceOnDrain: MeleeHalfAngle;
    LifeDrainHealthMult: MeleeAttackLength;
}

export interface ESlotSignature14 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties21;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo7;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_strAbilityImage: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_projectileInfo: MprojectileInfo5;
    m_strCastAnimGraphParam: string;
    m_previewParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strSecondaryStatName: string;
    m_strMoviePreviewPath: string;
    m_ExplodeParticle: string;
    m_SpilledBloodModifier: MSpilledBloodModifier;
    m_AbilityTooltipDetails: MAbilityTooltipDetails5;
    m_strSelectedLoopSound: string;
    m_strCastSound: string;
}

export interface MAbilityTooltipDetails5 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection5[];
}

export interface MvecAbilityInfoSection5 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock[];
    m_vecBasicProperties?: string[];
    m_strAbilityPropertyUpgradeRequired?: string;
}

export interface MSpilledBloodModifier {
    subclass: Subclass47;
}

export interface Subclass47 {
    _class: string;
    _my_subclass_name: string;
    m_SpilledBloodParticle: string;
    m_flTickRate: number;
    m_flHeight: number;
    m_sAmbientLoopingSound: string;
}

export interface MprojectileInfo5 {
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_particle: string;
    m_warningParticle: string;
    m_flVerticalAimBias: number;
    m_nBehaviors: string;
    m_DetonateSound: string;
    m_WarningSound: string;
    m_LoopingSound: string;
    m_HitSound: string;
}

export interface MWeaponInfo7 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_strBulletImpactSound: string;
    [key: string]: any;
}

export interface MmapAbilityProperties21 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    SelfDamage: Damage;
    Damage: Damage;
    BossDamagePercent: MeleeHalfAngle;
    Radius: MeleeAttackLength;
    ArmingDuration: StunDuration;
    BeepSoundIntervalBias: MeleeHalfAngle;
    BeepSoundMaxFrequency: MeleeHalfAngle;
    BeepSoundBuildupCount: MeleeHalfAngle;
    BloodSpillDPSPercent: StunDuration;
    BloodSpillDuration: MeleeAttackLength;
}

export interface ESlotWeaponPrimary4 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo6;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo6 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_AimingMoveSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Herohornet {
    ESlot_Weapon_Primary: ESlotWeaponPrimary3;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature13;
    ESlot_Signature_2: ESlotSignature23;
    ESlot_Signature_3: ESlotSignature33;
    ESlot_Signature_4: ESlotSignature43;
}

export interface ESlotSignature43 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties20;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_strSelectedSound: string;
    m_strUnselectedSound: string;
    m_AssassinateShotParticle: string;
    m_AssassinateShotParticleOwnerOnly: string;
    m_strSnipeImpactSound: string;
    m_LaserSightParticle: string;
    m_LaserSightParticleOwnerOnly: string;
    m_SnipeModifier: MSnipeModifier;
    m_BuffOnKillModifier: MBuffOnKillModifier;
    m_GlowEnemyModifier: MGlowEnemyModifier;
    m_strCastSound: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel7;
    m_flMinScopeTimeToShoot: number;
    m_flScopeTimeToFullPower: number;
    m_strSelectedLoopSound: string;
}

export interface MHUDPanel7 {
    m_vecHUDElements: MvecHUDElement4[];
}

export interface MvecHUDElement4 {
    m_eType: string;
    m_strContext: string;
    m_Layout: string;
    m_strAdditionalClasses: string;
}

export interface MGlowEnemyModifier {
    subclass: Subclass46;
}

export interface Subclass46 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_GlowParticle: string;
    m_nEnabledStateMask: string;
    m_bCasterCountsAsAssister: boolean;
}

export interface MBuffOnKillModifier {
    subclass: Subclass45;
}

export interface Subclass45 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MSnipeModifier {
    subclass: Subclass44;
}

export interface Subclass44 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sAmbientLoopingSound: string;
}

export interface MmapAbilityProperties20 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    SnipeFOV: MeleeHalfAngle;
    SnipeZoomDuration: StunDuration;
    Range: ChainLength;
    Damage: Damage;
    ShotRadius: MeleeHalfAngle;
    LowHealthEnemyDamageBonus: Damage;
    LowHealthEnemyThresholdPct: MeleeHalfAngle;
    ViewPunch: MeleeHalfAngle;
    MoveSpeed: MeleeHalfAngle;
    MaxSoundDistance: MeleeHalfAngle;
    WeaponDamageBonus: SlowPercent;
    BuffOnKillDuration: MeleeAttackLength;
    BonusGoldOnKill: MeleeHalfAngle;
    HeadshotBonus: StunDuration;
}

export interface ESlotSignature33 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties19;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_iUpdateTime: number;
    m_projectileInfo: MprojectileInfo4;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_DebuffModifier: MDebuffModifier5;
    m_HitParticle: string;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strCastDelaySound: string;
}

export interface MDebuffModifier5 {
    subclass: Subclass43;
}

export interface Subclass43 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleStatusEffect: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MprojectileInfo4 {
    m_flGravityScale: number;
    m_flUpSpeed: number;
    m_flSpeed: number;
    m_bHideWarningParticle: number;
    m_particle: string;
    m_HitSound: string;
    m_LoopingSound: string;
    m_flTriggerRadius: number;
}

export interface MmapAbilityProperties19 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DotHealthPercent: ChainLength;
    TickRate: MeleeHalfAngle;
    ImpactDamage: FlameAuraDPS;
    DebuffDuration: DebuffDuration;
    VisualSplashRadius: MeleeHalfAngle;
    TargetBounceRange: AirJumpVerticalSpeedPercent;
    TargetBounceCount: MeleeHalfAngle;
    HealAmpReceivePenaltyPercent: MeleeDamageTakenScale;
    HealAmpRegenPenaltyPercent: MeleeDamageTakenScale;
    BulletResistReduction: SlowPercent;
}

export interface DebuffDuration {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction6;
}

export interface ESlotSignature23 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties18;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_eAbilitySpectatePriority: string;
    m_strAbilityImage: string;
    m_flVerticalMoveSpeedPercent: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_flAirDrag: number;
    m_flAirSpeedApproach: number;
    m_LeapModifier: MLeapModifier;
    m_DustParticle: string;
    m_TrailParticle: string;
    m_CastParticle: string;
    m_HUDPanel: MHUDPanel6;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails4;
    m_strCastAnimGraphParam: string;
    m_strChannelSound: string;
}

export interface MAbilityTooltipDetails4 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection4[];
}

export interface MvecAbilityInfoSection4 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock[];
    m_vecBasicProperties: any[];
}

export interface MHUDPanel6 {
    m_vecHUDElements: MvecHUDElement3[];
    m_vecButtonHints: MvecButtonHint3[];
}

export interface MvecButtonHint3 {
    m_eButton1: string;
    m_strLocToken: string;
    m_eHintSide: string;
    m_strContext: string;
}

export interface MLeapModifier {
    subclass: Subclass42;
}

export interface Subclass42 {
    _class: string;
    _my_subclass_name: string;
    m_nEnabledStateMask: string;
    m_strHintText: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
}

export interface MmapAbilityProperties18 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime2;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    GravityScale: MeleeHalfAngle;
    MaxFallSpeed: MeleeHalfAngle;
    MaxFlyHeight: MeleeHalfAngle;
    JumpVelocity: AuraLingerDuration;
    AirSpeedBonus: AirSpeedBonus;
    AirSideMoveSpeedPercentage: MeleeHalfAngle;
    MinVelocityZ: MeleeHalfAngle;
    WeaponRecoilReduction: MeleeDamageTakenScale;
    MagicDamagePerBullet: MagicDamagePerBullet;
    BonusClipSizePercent: MeleeDamageTakenScale;
}

export interface MagicDamagePerBullet {
    m_strValue: string;
    m_strCSSClass: string;
    m_bDamageAffectedByEffectiveness: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction5;
}

export interface AirSpeedBonus {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_eDisplayType: string;
    m_strCSSCLass: string;
}

export interface AbilityChannelTime2 {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction7;
}

export interface MsubclassScaleFunction7 {
    subclass: Subclass41;
}

export interface Subclass41 {
    _class: string;
    _my_subclass_name: string;
    m_vecScalingStats: string[];
    m_bFunctionDisabled: boolean;
}

export interface ESlotSignature13 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties17;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo5;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_iUpdateTime: number;
    m_projectileInfo: MprojectileInfo3;
    m_strCastAnimGraphParam: string;
    m_previewParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_ExplodeParticle: string;
    m_strExplodeSound: string;
    m_strCastSound: string;
    m_DisarmModifier: MDisarmModifier;
    m_ChainModifier: MChainModifier2;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MChainModifier2 {
    subclass: Subclass40;
}

export interface Subclass40 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleStatusEffect: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_sAmbientLoopingSound: string;
    m_strSmallIconCssClass: string;
    m_strScreenParticleEffect: string;
    m_strParticleEffect: string;
}

export interface MDisarmModifier {
    subclass: Subclass39;
}

export interface Subclass39 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
}

export interface MprojectileInfo3 {
    m_flSpeed: number;
    m_flUpSpeed: number;
    m_bHideWarningParticle: boolean;
    m_particle: string;
    m_flVerticalAimBias: number;
    m_nBehaviors: string;
}

export interface MWeaponInfo5 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_szBulletTravelTracerParticle: string;
    m_flVerticalAimBias: number;
    m_flBulletRadius: number;
    m_mapImpactEffects: MmapImpactEffects2;
    [key: string]: any;
}

export interface MmapImpactEffects2 {
    default: Default2;
}

export interface Default2 {
}

export interface MmapAbilityProperties17 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Damage: Damage;
    SlowPercent: StunDuration;
    ChainLength: ChainLength;
    CaptureRadius: MeleeAttackLength;
    ChainDuration: MeleeAttackLength;
    HasDisarm: MeleeHalfAngle;
    EnemyDragSpeed: EnemyDragSpeed;
}

export interface EnemyDragSpeed {
    m_strValue: string;
    m_eDisplayUnits: string;
}

export interface ChainLength {
    m_strValue: string;
    m_eDisplayType: string;
    m_strCSSClass: string;
}

export interface ESlotWeaponPrimary3 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo4;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo4 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flBulletDamage: number;
    m_nRecoilSeed: number;
    m_AimingMoveSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_szSelfBulletTravelTracerParticle: string;
    [key: string]: any;
}

export interface Herogigawatt {
    ESlot_Weapon_Primary: ESlotWeaponPrimary2;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature12;
    ESlot_Signature_2: ESlotSignature22;
    ESlot_Signature_3: ESlotSignature32;
    ESlot_Signature_4: ESlotSignature42;
}

export interface ESlotSignature42 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties16;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_eAbilitySpectatePriority: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_strCastAnimSequenceName: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_strChannelLoopSound: string;
    m_strMoviePreviewPath: string;
    m_StormCloudModifier: MStormCloudModifier;
    m_nAbilityTargetFlags: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_HUDPanel: MHUDPanel5;
}

export interface MStormCloudModifier {
    subclass: Subclass38;
}

export interface Subclass38 {
    _class: string;
    _my_subclass_name: string;
    m_DrawFriendly: string;
    m_AoEFriendly: string;
    m_ZapEnemy: string;
    m_DrawEnemy: string;
    m_AoEEnemy: string;
    m_ZapFriendly: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_vecScriptValues: MvecScriptValue[];
    m_nEnabledStateMask: string;
    m_strParticleStatusEffect: string;
    m_strDamageRecievedSound: string;
    m_strAmbientZapSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MvecScriptValue {
    m_eModifierValue: string;
    m_value: number;
}

export interface MmapAbilityProperties16 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    Radius: MeleeAttackLength;
    InitialRadius: MeleeAttackLength;
    DPS: Damage;
    BossDamagePercent: MeleeHalfAngle;
    DamageInterval: MeleeHalfAngle;
    ExpandTime: StunDuration;
    CloudHeight: MeleeHalfAngle;
    CameraDistance: MeleeHalfAngle;
    EndingSoonTime: MeleeHalfAngle;
    BulletResistOnActive: SlowPercent;
}

export interface ESlotSignature32 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties15;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_strCastAnimGraphParam: string;
    m_strAbilityImage: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade3[];
    m_BuffModifier: MBuffModifier;
    m_ChainParticle: string;
    m_CastHitParticle: string;
    m_ChainModifier: MChainModifier;
    m_strCastDelaySound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
    m_strMoviePreviewPath: string;
}

export interface MChainModifier {
    subclass: Subclass37;
}

export interface Subclass37 {
    _class: string;
    _my_subclass_name: string;
    m_ChainParticle: string;
    m_ChainSound: string;
    m_VictimSound: string;
    m_bIsHidden: boolean;
    m_nAttributes: string;
}

export interface MBuffModifier {
    subclass: Subclass36;
}

export interface Subclass36 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_TracerParticle: string;
    m_WeaponFxParticle: string;
    m_strWeaponShootSound: string;
    m_strBulletWhizSound: string;
    m_sAmbientLoopingSound: string;
    m_sExpiredSound: string;
    m_DebuffModifier: MDebuffModifier4;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
    m_bIsHidden: boolean;
}

export interface MDebuffModifier4 {
    subclass: Subclass35;
}

export interface Subclass35 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strParticleEffect: string;
    m_bPrivateAccess: boolean;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MvecAbilityUpgrade3 {
    m_vecPropertyUpgrades: MvecPropertyUpgrade3[];
}

export interface MvecPropertyUpgrade3 {
    m_strPropertyName: string;
    m_strBonus: number | number | string | string;
    m_eUpgradeType?: string;
    m_eScaleStatFilter?: string;
}

export interface MmapAbilityProperties15 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityDuration;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DamagePerChain: DamagePerChain;
    BonusPerChain: BonusPerChain;
    ChainCount: MeleeHalfAngle;
    ChainTickRate: MeleeHalfAngle;
    ChainRadius: MeleeAttackLength;
    TechResistDebuff: SlowPercent;
    DebuffDuration: MeleeAttackLength;
    BossDamagePercent: MeleeHalfAngle;
}

export interface BonusPerChain {
    m_strValue: string;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface DamagePerChain {
    m_strValue: string;
    m_eDisplayType: string;
    m_strCSSClass: string;
    m_bDamageAffectedByEffectiveness: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface AbilityDuration {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction6;
}

export interface ESlotSignature22 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties14;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_eAbilityTargetingShape: string;
    m_AbilityBehaviorsBits: string;
    m_flTargetingConeAngle: number;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_previewParticle: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_CastParticle: string;
    m_StaticChargeModifier: MStaticChargeModifier;
    m_strMoviePreviewPath: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails3;
    m_strCastDelaySound: string;
}

export interface MAbilityTooltipDetails3 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection3[];
}

export interface MvecAbilityInfoSection3 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock2[];
    m_vecBasicProperties: string[];
}

export interface MStaticChargeModifier {
    subclass: Subclass34;
}

export interface Subclass34 {
    _class: string;
    _my_subclass_name: string;
    m_nAttributes: string;
    m_strParticleEffect: string;
    m_ZapParticle: string;
    m_ExplodeParticle: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_strParticleStatusEffect: string;
    m_nAmbientLoopingSoundRecipients: string;
    m_sAmbientLoopingSound: string;
    m_bDurationReducible: boolean;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties14 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange2;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ShockRadius: MeleeAttackLength;
    Damage: Damage;
    ShockDelay: StunDuration;
    StunDuration: MeleeAttackLength;
    AdditionalShockTarget: MeleeHalfAngle;
}

export interface AbilityCastRange2 {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction6;
}

export interface MsubclassScaleFunction6 {
    subclass: Subclass33;
}

export interface Subclass33 {
    _class: string;
    _my_subclass_name: string;
    m_eSpecificStatScaleType: string;
    m_vecScalingStats: string[];
    m_flStatScale: number;
}

export interface ESlotSignature12 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties13;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityTargetingShape: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_projectileInfo: MprojectileInfo2;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_ZapModifier: MZapModifier;
    m_strCastDelaySound: string;
    m_strMoviePreviewPath: string;
    m_strHitSound: string;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MZapModifier {
    subclass: Subclass32;
}

export interface Subclass32 {
    _class: string;
    _my_subclass_name: string;
    m_ZapParticle: string;
    m_bIsHidden: boolean;
    m_TargetScreenParticleEffect: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MprojectileInfo2 {
    m_flGravityScale: number;
    m_flUpSpeed: number;
    m_flSpeed: number;
    m_particle: string;
    m_nBehaviors: string;
    m_AutoProjectileModifier: MAutoProjectileModifier2;
    m_bHideWarningParticle: boolean;
    m_LoopingSound: string;
}

export interface MAutoProjectileModifier2 {
    subclass: Subclass31;
}

export interface Subclass31 {
    _class: string;
    _my_subclass_name: string;
    m_sExpiredSound: string;
}

export interface MmapAbilityProperties13 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ShockRadius: MeleeAttackLength;
    DPS: Damage;
    TickRate: MeleeHalfAngle;
    MinShockDuration: MeleeHalfAngle;
    MaxLifetime: MeleeAttackLength;
    HitSpeed: MeleeHalfAngle;
    SlowPercent: SlowPercent;
    BossDamagePercent: MeleeHalfAngle;
}

export interface ESlotWeaponPrimary2 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo3;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MWeaponInfo3 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_flRecoilRecoveryDelayFactor: number;
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_StandingMoveSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flIntraBurstCycleTime: number;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface Heroinferno {
    ESlot_Weapon_Primary: ESlotWeaponPrimary;
    ESlot_Weapon_Melee: ESlotWeaponMelee;
    ESlot_Ability_Mantle: ESlotAbilityMantle;
    ESlot_Ability_Jump: ESlotAbilityJump;
    ESlot_Ability_Slide: ESlotAbilitySlide;
    ESlot_Ability_ZipLine: ESlotAbilityZipLine;
    ESlot_Ability_ZipLineBoost: ESlotAbilityZipLineBoost;
    ESlot_Ability_ClimbRope: ESlotAbilityClimbRope;
    ESlot_Ability_Innate_1: ESlotAbilityInnate1;
    ESlot_Ability_Innate_2: ESlotAbilityInnate2;
    ESlot_Ability_Innate_3: ESlotAbilityInnate3;
    ESlot_Signature_1: ESlotSignature1;
    ESlot_Signature_2: ESlotSignature2;
    ESlot_Signature_3: ESlotSignature3;
    ESlot_Signature_4: ESlotSignature4;
}

export interface ESlotSignature4 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties12;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_eAbilitySpectatePriority: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_strCastSound: string;
    m_ExplodeSound: string;
    m_ExplodeParticle: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_ProgressBarModifier: MProgressBarModifier;
    m_FireBombModifier: MFireBombModifier;
    m_DebuffModifier: MDebuffModifier3;
    m_HUDPanel: MHUDPanel4;
    m_AbilityTooltipDetails: MAbilityTooltipDetails2;
}

export interface MAbilityTooltipDetails2 {
    m_vecAbilityInfoSections: MvecAbilityInfoSection2[];
}

export interface MvecAbilityInfoSection2 {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock2[];
}

export interface MvecAbilityPropertiesBlock2 {
    m_vecAbilityProperties: MvecAbilityProperty2[];
}

export interface MvecAbilityProperty2 {
    m_strImportantProperty: string;
    m_strStatusEffectValue?: string;
    m_bShowPropertyValue?: boolean;
}

export interface MDebuffModifier3 {
    subclass: Subclass30;
}

export interface Subclass30 {
    _my_subclass_name: string;
    _class: string;
    m_sLocalizationName: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MFireBombModifier {
    subclass: Subclass29;
}

export interface Subclass29 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_ChargeParticle: string;
    m_GroundParticle: string;
    m_strParticleStatusEffect: string;
    m_strScreenParticleEffect: string;
    m_strParticleStatusEffectConfig: string;
    m_nStatusEffectPriority: number;
}

export interface MProgressBarModifier {
    subclass: Subclass28;
}

export interface Subclass28 {
    _class: string;
    _my_subclass_name: string;
    m_bReverseHudProgressBar: boolean;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties12 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ExplodeDelay: StunDuration;
    StunDuration: MeleeAttackLength;
    Damage: FlameAuraDPS;
    Radius: MeleeAttackLength;
    SlowDuration: MeleeAttackLength;
    SlowPercent: SlowPercent;
    LifeStealPercentOnHit: MeleeAttackLength;
}

export interface ESlotSignature3 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties11;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strSecondaryStatName: string;
    m_strAbilityImage: string;
    m_strMoviePreviewPath: string;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_AutoIntrinsicModifiers: MAutoIntrinsicModifier[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MAutoIntrinsicModifier {
    subclass: Subclass27;
}

export interface Subclass27 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sAfterburnExplodeParticle: string;
    m_ExplodeSound: string;
    m_AfterburnDotModifier: MAfterburnDotModifier;
    m_BuildUpModifier: MBuildUpModifier;
    m_vecProcDamageTypes: string[];
}

export interface MBuildUpModifier {
    subclass: Subclass26;
}

export interface Subclass26 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_bUseBaseWeaponCycleTimeForDelay: boolean;
    m_eBuildupMode: string;
    m_bBuildupAffectedByEffectiveness: boolean;
    m_eDrawOverheadStatus: string;
}

export interface MAfterburnDotModifier {
    subclass: Subclass25;
}

export interface Subclass25 {
    _class: string;
    _my_subclass_name: string;
    m_strSmallIconCssClass: string;
    m_sAmbientLoopingSound: string;
    m_strParticleStatusEffect: string;
    m_sAfterburnParticle: string;
    m_eDrawOverheadStatus: string;
    m_nStatusEffectPriority: number;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
    m_sStartSound: string;
}

export interface MmapAbilityProperties11 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    BuildUpDuration: MeleeAttackLength;
    BuildUpBulletPercentPerHit: AirJumpVerticalSpeedPercent;
    TickRate: MeleeHalfAngle;
    BurnDuration: MeleeAttackLength;
    DPS: FlameAuraDPS;
    CritBuildup: AirJumpVerticalSpeedPercent;
    AfterburnSpiritDamageReduction: AfterburnSpiritDamageReduction;
}

export interface AfterburnSpiritDamageReduction {
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
    m_bIsNegativeAttribute: boolean;
}

export interface ESlotSignature2 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties10;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_eAbilitySpectatePriority: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_flSlideBufferSpeed: number;
    m_flSlideBufferTime: number;
    m_vecAbilityUpgrades: MvecAbilityUpgrade2[];
    m_vecDependentAbilities: string[];
    m_FlameDashModifier: MFlameDashModifier;
    m_HUDPanel: MHUDPanel5;
    m_strMoviePreviewPath: string;
    m_cameraSpeedBoost: McameraSpeedBoost;
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface McameraSpeedBoost {
    m_vecFOVOperations: MvecFOVOperation10[];
    m_vecDistanceOperations: MvecDistanceOperation8[];
}

export interface MvecDistanceOperation8 {
    m_flLerpDuration?: number;
    m_flLerpGain?: number;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
}

export interface MvecFOVOperation10 {
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_flLerpBias?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
    m_bSpringToDefault?: boolean;
}

export interface MHUDPanel5 {
    m_vecHUDElements: MvecHUDElement3[];
}

export interface MvecHUDElement3 {
    m_eType: string;
    m_strContext: string;
    m_Layout: string;
    m_bReverseProgress: boolean;
}

export interface MFlameDashModifier {
    subclass: Subclass24;
}

export interface Subclass24 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_sAmbientLoopingSound: string;
    m_sStartSound: string;
    m_sExpiredSound: string;
    m_nEnabledStateMask: string;
    m_GroundAuraModifier: MGroundAuraModifier;
    m_FlameAuraParticle: string;
    m_ProgressModifier: MProgressModifier;
    m_cameraSequenceCreated: McameraSequenceCreated;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface McameraSequenceCreated {
    m_vecDistanceOperations: MvecDistanceOperation7[];
}

export interface MvecDistanceOperation7 {
    m_flSpringStrength?: number;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MProgressModifier {
    subclass: Subclass23;
}

export interface Subclass23 {
    _my_subclass_name: string;
    _class: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
}

export interface MGroundAuraModifier {
    subclass: Subclass22;
}

export interface Subclass22 {
    _class: string;
    _my_subclass_name: string;
    m_GroundParticle: string;
    m_sAmbientLoopingSound: string;
    m_flHeight: number;
    m_modifierProvidedByAura: MmodifierProvidedByAura;
}

export interface MmodifierProvidedByAura {
    subclass: Subclass21;
}

export interface Subclass21 {
    _class: string;
    _my_subclass_name: string;
    m_bIsHidden: boolean;
    m_strSmallIconCssClass: string;
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
    m_DebuffModifier: MDebuffModifier2;
    m_strScreenParticleEffect: string;
}

export interface MDebuffModifier2 {
    subclass: Subclass20;
}

export interface Subclass20 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_strSmallIconCssClass: string;
    m_eDrawOverheadStatus: string;
    m_bIsHidden: boolean;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MvecAbilityUpgrade2 {
    m_vecPropertyUpgrades: MvecPropertyUpgrade2[];
}

export interface MvecPropertyUpgrade2 {
    m_strPropertyName: string;
    m_strBonus: number | string;
}

export interface MmapAbilityProperties10 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    DashTime: MeleeAttackLength;
    DashSpeed: StunDuration;
    DashAirSpeed: StunDuration;
    FlameAuraRadius: MeleeAttackLength;
    FlameAuraDPS: FlameAuraDPS;
    AuraLingerDuration: AuraLingerDuration;
    TickRate: MeleeHalfAngle;
    GroundFlameDuration: MeleeAttackLength;
    GroundAuraSpacing: MeleeHalfAngle;
    SpeedBurstSpeed: StunDuration;
    SpeedBurstDuration: MeleeHalfAngle;
    SideMoveSpeedReduction: MeleeHalfAngle;
    FlameDashDebuffDuration: MeleeAttackLength;
    FlameDashJumpBonus: MeleeDamageTakenScale;
    FireRateSlow: MeleeDamageTakenScale;
    SlowResistancePercent: SlowPercent;
}

export interface AuraLingerDuration {
    m_strValue: string;
    m_bIsHidden: boolean;
}

export interface FlameAuraDPS {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction5;
}

export interface MsubclassScaleFunction5 {
    subclass: Subclass19;
}

export interface Subclass19 {
    _class: string;
    _my_subclass_name: string;
    m_flStatScale: number;
}

export interface ESlotSignature1 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties9;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_nAbilityPointsCost: number;
    m_nAbillityUnlocksCost: number;
    m_eAbilityType: string;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_PreviewPathParticle: string;
    m_strAbilityOffCooldownSound: string;
    m_strAbilityChargeReadySound: string;
    m_skillshotMissParticle: string;
    m_iUpdateTime: number;
    m_eAbilityTargetingShape: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_strAbilityImage: string;
    m_strCastAnimGraphParam: string;
    m_strSecondaryStatName: string;
    m_previewParticle: string;
    m_strCastSound: string;
    m_ExplodeParticle: string;
    m_strMoviePreviewPath: string;
    m_projectileInfo: MprojectileInfo;
    m_vecAbilityUpgrades: MvecAbilityUpgrade[];
    m_AbilityTooltipDetails: MAbilityTooltipDetails;
}

export interface MAbilityTooltipDetails {
    m_vecAbilityInfoSections: MvecAbilityInfoSection[];
}

export interface MvecAbilityInfoSection {
    m_strLocString: string;
    m_vecAbilityPropertiesBlock: MvecAbilityPropertiesBlock[];
    m_vecBasicProperties: string[];
}

export interface MvecAbilityPropertiesBlock {
    m_vecAbilityProperties: MvecAbilityProperty[];
}

export interface MvecAbilityProperty {
    m_strImportantProperty: string;
}

export interface MvecAbilityUpgrade {
    m_vecPropertyUpgrades: MvecPropertyUpgrade[];
}

export interface MvecPropertyUpgrade {
    m_strPropertyName: string;
    m_strBonus: string;
}

export interface MprojectileInfo {
    m_flSpeed: number;
    m_flGravityScale: number;
    m_bHideWarningParticle: number;
    m_flTrackingEndTime: number;
    m_particle: string;
    m_LoopingSound: string;
    m_AutoProjectileModifier: MAutoProjectileModifier;
}

export interface MAutoProjectileModifier {
    subclass: Subclass18;
}

export interface Subclass18 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleEffect: string;
    m_DebuffModifier: MDebuffModifier;
    m_SlowModifier: MSlowModifier;
}

export interface MSlowModifier {
    subclass: Subclass17;
}

export interface Subclass17 {
    _my_subclass_name: string;
    _class: string;
    m_bIsHidden: boolean;
    m_sLocalizationName: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MDebuffModifier {
    subclass: Subclass16;
}

export interface Subclass16 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_bIsHidden: boolean;
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
    m_strSmallIconCssClass: string;
    m_eDrawOverheadStatus: string;
    m_nStatusEffectPriority: number;
    m_sAmbientLoopingSound: string;
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MmapAbilityProperties9 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    TickRate: MeleeHalfAngle;
    FlameHeightOffGround: MeleeHalfAngle;
    ParticleRadiusMultiplier: MeleeHalfAngle;
    DamageAmplification: MeleeHalfAngle;
    DebuffDuration: MeleeAttackLength;
    Damage: Damage;
    LifestealPercentHero: LifestealPercentHero;
    GrowthPerMeter: MeleeHalfAngle;
    InitialWidth: MeleeHalfAngle;
    SlowDuration: MeleeAttackLength;
    SlowPercent: SlowPercent;
    HealAmpReceivePenaltyPercent: MeleeDamageTakenScale;
    HealAmpRegenPenaltyPercent: MeleeDamageTakenScale;
}

export interface SlowPercent {
    m_strValue: string;
    m_strCSSClass: string;
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
}

export interface LifestealPercentHero {
    m_strValue: string;
    m_eDisplayType: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_UsageFlags: string;
}

export interface Damage {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction4;
}

export interface MsubclassScaleFunction4 {
    subclass: Subclass15;
}

export interface Subclass15 {
    _class: string;
    _my_subclass_name: string;
    m_eSpecificStatScaleType: string;
    m_flStatScale: number;
}

export interface ESlotAbilityInnate3 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties8;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_AbilityBehaviorsBits: string;
    m_eAbilityActivation: string;
    m_SuccessfulParryParticle: string;
    m_strCastSound: string;
    m_strSuccessfulParrySound: string;
    m_HUDPanel: MHUDPanel4;
    m_ParryActiveModifier: MParryActiveModifier;
    m_ParryVictimModifier: MParryVictimModifier2;
    m_flBossVictimNoMeleeTime: number;
    m_flBossVictimCalmTime: number;
    m_ParryBossVictimNoMeleeModifier: MZipLineIntroModifier;
    m_ParryBossVictimCalmModifier: MZipLineIntroModifier;
    m_flActiveTime: number;
    m_flWhiffDuration: number;
    m_flMovementRestrictionTime: number;
    m_ParryCooldownModifier: MParryCooldownModifier;
    m_flParryEndVisualTime: number;
    m_ParryEndVisualModifier: MParryEndVisualModifier;
    m_flSuccessActiveTime: number;
}

export interface MParryEndVisualModifier {
    subclass: Subclass14;
}

export interface Subclass14 {
    _my_subclass_name: string;
    _class: string;
    m_bIsHidden: boolean;
    m_strParticleEffect: string;
    m_strParticleStatusEffect: string;
    m_nStatusEffectPriority: number;
}

export interface MParryCooldownModifier {
    subclass: Subclass13;
}

export interface Subclass13 {
    _my_subclass_name: string;
    _class: string;
    m_eDrawOverheadStatus: string;
    m_bIsHidden: boolean;
}

export interface MParryVictimModifier2 {
    subclass: Subclass12;
}

export interface Subclass12 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleEffect: string;
    m_OnCreateResponse: MOnCreateResponse;
}

export interface MParryActiveModifier {
    subclass: Subclass11;
}

export interface Subclass11 {
    _class: string;
    _my_subclass_name: string;
    m_strParticleStatusEffect: string;
    m_strParticleEffect: string;
}

export interface MmapAbilityProperties8 {
    AbilityCooldown: AbilityCooldown4;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    ParriedStunTime: MeleeHalfAngle;
    MeleeDamageTakenScale: MeleeHalfAngle;
    ParryMoveSpeed: MeleeHalfAngle;
}

export interface AbilityCooldown4 {
    m_strValue: number;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction3;
}

export interface MsubclassScaleFunction3 {
    subclass: Subclass10;
}

export interface Subclass10 {
    _class: string;
    _my_subclass_name: string;
    m_eSpecificStatScaleType: string;
    m_bFunctionDisabled: boolean;
}

export interface ESlotAbilityInnate2 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_iUpdateTime: number;
    m_bitsInterruptingStates: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_SprintParticle: string;
    m_strSprintSound: string;
}

export interface ESlotAbilityInnate1 {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties7;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_HUDPanel: MHUDPanel4;
    m_flMaxMoveIterationScale: number;
    m_flMaxAngDiff: number;
    m_strDashActivate: string;
    m_flDurationScaleForSpeed: number;
    m_flAirDashEndVelocityScale: number;
    m_bitsInterruptingStates: string;
    m_DashParticle: string;
    m_flPostDragDuration: number;
    m_flPostDrag: number;
    m_flAirDashAccPct: number;
    m_flSlideEarlyOutWindow: number;
    m_flSlideLockoutTime: number;
    m_flGroundDashAirbornDrag: number;
    m_strGroundDashActivate: string;
    m_curvePosition: MBulletSpeedCurve;
    m_flGroundDashDistanceInMeters: number;
    m_cameraSequenceGroundDashActivate: McameraSequenceGroundDashActivate;
    m_cameraSequenceAirDashActivate: McameraSequenceAirDashActivate;
    m_strStaminaDrainedSound: string;
    m_DownDashParticle: string;
    m_bPlayMeepMop: boolean;
}

export interface McameraSequenceAirDashActivate {
    m_vecFOVOperations: MvecFOVOperation9[];
    m_vecTargetPosOperations: MvecTargetPosOperation[];
}

export interface MvecFOVOperation9 {
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative: boolean;
}

export interface McameraSequenceGroundDashActivate {
    m_vecTargetPosOperations: MvecTargetPosOperation2[];
}

export interface MvecTargetPosOperation2 {
    m_eCameraOperation: string;
    m_flLagTime: number;
    m_flLagMaxSpeed: number;
    m_flLagSpringStrength: number;
}

export interface MHUDPanel4 {
    m_vecHUDElements: MvecHUDElement2[];
}

export interface MvecHUDElement2 {
    m_eType: string;
    m_Layout: string;
    m_strContext: string;
}

export interface MmapAbilityProperties7 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    PostGroundDashSpeed: MeleeHalfAngle;
    PostGroundDashSpeedTime: MeleeHalfAngle;
    PostGroundDashSpreadPenalty: MeleeHalfAngle;
    AirDashTravelTime: MeleeHalfAngle;
    AirDashDistance: AirJumpVerticalSpeedPercent;
    AirDashTravelTimeBias: MeleeHalfAngle;
}

export interface ESlotAbilityClimbRope {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties4;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_flActivateRange: number;
    m_flMinButtonHoldTimeToActivate: number;
    m_flClimbSpeedUp: number;
    m_flClimbSpeedDown: number;
    m_flClimbSpeedDownMax: number;
    m_flClimbDownAccelTime: number;
    m_flLatchSpeed: number;
    m_flAttachOffset: number;
    m_flMinReconnectTime: number;
    m_flSideMoveReduction: number;
    m_flTopOffset: number;
    m_flBottomOffset: number;
    m_flTraceRadiusSize: number;
    m_flStopTimeToShoot: number;
    m_flJumpOffVertical: number;
    m_flJumpOffHorizontal: number;
    m_flDuckOffVertical: number;
    m_flDuckOffHorizontal: number;
    m_flJumpToRoofRayCheckDist: number;
    m_flMinTimeToRoofCheck: number;
    m_flClimbRopeSlowDurationOnHit: number;
    m_HUDPanel: MHUDPanel2;
    m_ClimbRopeSlowOnHitModifier: MZipLineSlowModifier;
}

export interface ESlotAbilityZipLineBoost {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties6;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_strCSSClass: string;
    m_strAbilityImage: string;
    m_ZipboostModifier: MZipboostModifier;
    m_HUDPanel: MHUDPanel3;
    m_flTimeForHint: number;
}

export interface MHUDPanel3 {
    m_vecButtonHints: MvecButtonHint2[];
    m_vecHUDElements: any[];
}

export interface MvecButtonHint2 {
    m_eButton1: string;
    m_strLocToken: string;
    m_eHintSide: string;
    m_bShowAbilityIcon: boolean;
    m_bIsHintShownWhileOnCooldown: boolean;
}

export interface MZipboostModifier {
    subclass: Subclass9;
}

export interface Subclass9 {
    _class: string;
    _my_subclass_name: string;
    m_strSmallIconCssClass: string;
    m_strParticleEffect: string;
    m_sLocalizationName: string;
    m_flRampUpTime: number;
    m_flPercentageSpeedIncrease: number;
    m_cameraSequenceStartBoost: McameraSequenceStartBoost;
    m_sStartSound: string;
}

export interface McameraSequenceStartBoost {
    m_vecFOVOperations: MvecFOVOperation8[];
    m_vecDistanceOperations: MvecDistanceOperation6[];
    m_vecTargetPosOperations: any[];
}

export interface MvecDistanceOperation6 {
    m_flApproachSpeed?: number;
    m_flApproachTarget?: number;
    m_flApproachMinDuration?: number;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MvecFOVOperation8 {
    m_flApproachTarget?: number;
    m_flApproachSpeed?: number;
    m_flApproachMinDuration?: number;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpBias?: number;
    m_flLerpDuration?: number;
    m_eCameraOperation: string;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MmapAbilityProperties6 {
    AbilityCooldown: AbilityCooldown3;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
}

export interface AbilityCooldown3 {
    m_strValue: number;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
    m_eScaleType: string;
}

export interface ESlotAbilityZipLine {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties5;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_strZipLineStartSound: string;
    m_ZipLinePreviewParticle: string;
    m_ZipLineSpeedParticle: string;
    m_ZipLineTetherParticle: string;
    m_ZipLineTetherAttachParticle: string;
    m_strZipLineSummonSound: string;
    m_strZipLineLatchedSound: string;
    m_flMinButtonHoldTimeToActivate: number;
    m_flCrouchDropSpeedFraction: number;
    m_flCrouchDropAirDragSuppressDuration: number;
    m_RidingZipLineModifier: MRidingZipLineModifier;
    m_KnockedOffSlowModifier: MKnockedOffSlowModifier;
    m_ZipLineIntroModifier: MZipLineIntroModifier;
    m_cameraSequenceAwaitingTether: McameraSequenceAwaitingTether;
    m_cameraSequenceLatched: McameraSequenceLatched;
    m_cameraSequenceAttached: McameraSequenceAttached;
    m_cameraSequenceClear: McameraSequenceClear;
    m_DOFWhileZiplining: MDOFWhileZoomed;
    m_ZipLineEnemyKnockdownProtectionParticle: string;
    m_ZipLineSelfKnockdownProtectionParticle: string;
    m_ZipLineKnockdownProtectionStatusParticle: string;
    m_ZipLineKnockdownImmuneModifier: MZipLineKnockdownImmuneModifier;
    m_ZipLineSlowModifier: MZipLineSlowModifier;
    m_flCameraWobbleIntensity: number;
}

export interface MZipLineSlowModifier {
    subclass: Subclass8;
}

export interface Subclass8 {
    _my_subclass_name: string;
    _class: string;
    m_flRampUpTime: number;
    m_flPercentageMultiplierStart: number;
    m_flPercentageMultiplierEnd: number;
    m_bIsHidden: boolean;
}

export interface MZipLineKnockdownImmuneModifier {
    subclass: Subclass7;
}

export interface Subclass7 {
    _class: string;
    _my_subclass_name: string;
    m_ZipLineEnemyKnockdownProtectionParticle: string;
    m_ZipLineSelfKnockdownProtectionParticle: string;
    m_ZipLineKnockdownProtectionStatusParticle: string;
    m_sLocalizationName: string;
    m_eDebuffType: string;
    m_bIsHidden: boolean;
    m_ZipLineKnockdownProtectionStatusEnemyParticle: string;
}

export interface McameraSequenceClear {
    m_vecDistanceOperations: MvecDistanceOperation5[];
    m_vecFOVOperations: MvecDistanceOperation5[];
}

export interface MvecDistanceOperation5 {
    m_eCameraOperation: string;
}

export interface McameraSequenceAttached {
    m_vecFOVOperations: MvecFOVOperation7[];
    m_vecDistanceOperations: MvecDistanceOperation4[];
    m_vecVertOffsetOperations: any[];
}

export interface MvecDistanceOperation4 {
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative: boolean;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MvecFOVOperation7 {
    m_flLerpDuration: number;
    m_eCameraOperation: string;
}

export interface McameraSequenceLatched {
    m_vecFOVOperations: MvecFOVOperation6[];
    m_vecTargetPosOperations: MvecTargetPosOperation[];
}

export interface MvecFOVOperation6 {
    m_flLerpBias?: number;
    m_flLerpDuration: number;
    m_bLerpEndAtDefault: boolean;
    m_flLerpEnd: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative: boolean;
    m_flSpringStrength?: number;
    m_bSpringToDefault?: boolean;
    m_flSpringTarget?: number;
}

export interface McameraSequenceAwaitingTether {
    m_vecDistanceOperations: MvecDistanceOperation3[];
    m_vecFOVOperations: MvecFOVOperation5[];
}

export interface MvecFOVOperation5 {
    m_flLerpBias?: number;
    m_flLerpDuration?: number;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative: boolean;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MvecDistanceOperation3 {
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_flMaintainDuration?: number;
    m_flMaintainFloat?: number;
}

export interface MZipLineIntroModifier {
    subclass: Subclass6;
}

export interface Subclass6 {
    _class: string;
    _my_subclass_name: string;
    m_nEnabledStateMask: string;
    m_bIsHidden: boolean;
}

export interface MKnockedOffSlowModifier {
    subclass: Subclass5;
}

export interface Subclass5 {
    _class: string;
    _my_subclass_name: string;
    m_sLocalizationName: string;
    m_eDebuffType: string;
}

export interface MRidingZipLineModifier {
    subclass: Subclass4;
}

export interface Subclass4 {
    _class: string;
    _my_subclass_name: string;
    m_sAmbientLoopingSound: string;
    m_sEndSound: string;
    m_bIsHidden: boolean;
}

export interface MmapAbilityProperties5 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    MaxMountDistance2D: MeleeHalfAngle;
    StunDuration: StunDuration;
    SlowDuration: MeleeHalfAngle;
    KnockedOffDamagePct: MeleeHalfAngle;
    DismountHorizontalMinSpeedPercent: MeleeHalfAngle;
    DismountHorizontalMaxSpeedPercent: MeleeHalfAngle;
    PlayerSpeedCheckScale: MeleeHalfAngle;
    DismountVerticalSpeed: MeleeHalfAngle;
    DamageCooldown: DamageCooldown;
    ZipSpeedInner: MeleeHalfAngle;
    ZipSpeedOuter: MeleeHalfAngle;
    ZipAcc: MeleeHalfAngle;
    LatchSpeed: MeleeHalfAngle;
    LatchInitialSpeed: MeleeHalfAngle;
    LatchEndSpeed: MeleeHalfAngle;
    LatchReelAcc: MeleeHalfAngle;
    LatchVisualSnapProgress: MeleeHalfAngle;
    ZiplineProtectionSlowDurationOnHit: MeleeHalfAngle;
    ZiplineProtectionDamageAmp: ZiplineProtectionDamageAmp;
}

export interface ZiplineProtectionDamageAmp {
    m_strVAlue: string;
}

export interface DamageCooldown {
    m_strValue: number;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface StunDuration {
    m_strValue: string;
    m_strCSSClass: string;
}

export interface ESlotAbilitySlide {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties4;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_bitsInterruptingStates: string;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_flTurnSpeed: number;
    m_flTurnMinAngDiff: number;
    m_flTurnMaxAngDiff: number;
    m_flSprintBoostSpeed: number;
    m_flMinSustainSpeed: number;
    m_flMinActivationSpeed: number;
    m_flBoostMinSpeed: number;
    m_flBoostMaxSpeed: number;
    m_flButtonPressWindow: number;
    m_flBoostMinTriggerSpeed: number;
    m_flBoostMaxTriggerSpeed: number;
    m_flAccMaxSlopeDeg: number;
    m_flAccMinSlopeDeg: number;
    m_flAccMinSlopeScale: number;
    m_flSlideActivationProbeForwardOffset: number;
    m_flSlopeFacingAngleToActivate: number;
    m_flAirDragAfterJump: number;
    m_flAirDragAfterJumpTime: number;
    m_flAirDragMaxAngle: number;
    m_flDashSlideSpeed: number;
    m_flDashMinActivationSpeed: number;
    m_flFrictionMaxSlope: number;
    m_flFrictionMinSlope: number;
    m_flFrictionFlatGround: number;
    m_flFlatGroundFrictionGraceTime: number;
    m_flMinAngleToConsiderASlope: number;
    m_flFrictionFlatGroundGrace: number;
    m_flAirDragResetTime: number;
    m_flLateSlideJumpWindow: number;
    m_cameraSequenceCastStart: McameraSequenceCastStart;
    m_cameraSequenceStartSliding: McameraSequenceStartSliding;
    m_cameraSequenceEndSliding: McameraSequenceEndSliding;
    m_flLandedFlatGroundFrictionGraceTime: number;
    m_flSlideMaxSlopeMaxAccSpeed: number;
    m_flSlideMinSlopeMaxAccSpeed: number;
    m_flSlideMaxSlopeAcceleration: number;
    m_flSlideMinSlopeAcceleration: number;
    m_flLandingSlopeScaleBias: number;
    m_flFrictionUphillMinSlope: number;
    m_flFrictionUphillMaxSlope: number;
    m_flInitialSlideUseForwardProbeTime: number;
    m_SlideParticle: string;
    m_flSlideProbeForwardOffset: number;
    m_flMaxDistanceBetweenProbeSamples: number;
    m_flCurrentSlopeSampleDistance: number;
    m_flSampleVelDiffStdDevScaleCutoff: number;
    m_strStartSound: string;
    m_strStopSound: string;
    m_strLoopingSound: string;
    m_SlideEffectRemap: number[];
    m_flDashSlideFrictionTime: number;
    m_flDashSlideFriction: number;
    m_flDashSlideFailSpeed: number;
    m_flDashSlideStartTime: number;
    m_strDashSlideActivate: string;
    m_GetupSpeedCurve: MBulletSpeedCurve;
    m_flGetupBusyDuration: number;
}

export interface McameraSequenceEndSliding {
    m_vecFOVOperations: MvecFOVOperation4[];
}

export interface MvecFOVOperation4 {
    m_flSpringStrength: number;
    m_eCameraOperation: string;
}

export interface McameraSequenceStartSliding {
    m_vecFOVOperations: MvecFOVOperation3[];
}

export interface MvecFOVOperation3 {
    m_flApproachTarget?: number;
    m_flApproachSpeed?: number;
    m_flApproachAcceleration?: number;
    m_flMaintainDuration?: number;
    m_eCameraOperation?: string;
    m_flMaintainFloat?: number;
}

export interface McameraSequenceCastStart {
    m_strToken: string;
    m_bIsEmpty: boolean;
    m_vecDistanceOperations: any[];
    m_vecFOVOperations: any[];
    m_vecTargetPosOperations: any[];
    m_vecVertOffsetOperations: any[];
    m_vecHorizOffsetOperations: any[];
}

export interface MmapAbilityProperties4 {
    AbilityCooldown: AbilityCooldown2;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
}

export interface AbilityCooldown2 {
    m_strValue: number;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface ESlotAbilityJump {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties3;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_flDashJumpEndTime: number;
    m_flDashJumpMissMaxSpeed: number;
    m_strDashJumpActivate: string;
    m_flDashJumpStartTime: number;
    m_flMantleRefundWindow: number;
    m_AirJumpParticle: string;
    m_DashJumpParticle: string;
    m_AirJumpExecutedSound: string;
    m_flLateJumpGraceWindow: number;
    m_flDashJumpVerticalSpeed: number;
    m_flDashJumpDistanceInMeters: number;
    m_WallJumpParticle: string;
    m_WallJumpExecutedSound: string;
    m_WallJumpAirDragCurve: MBulletSpeedCurve;
    m_flWallJumpNormalSpeed: number;
    m_flMaxWallYawOffset: number;
    m_flRemapSpeedToWallJumpVelocityDist: number[];
    m_flZiplineRefundWindow: number;
}

export interface MmapAbilityProperties3 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    VerticalSpeed: MeleeHalfAngle;
    SlideLeapSpeedPenaltyMax: MeleeHalfAngle;
    SlideLeapSpeedPenaltyTime: MeleeHalfAngle;
    WeaponSpreadPenalty: MeleeHalfAngle;
    AirJumpVerticalSpeedPercent: AirJumpVerticalSpeedPercent;
}

export interface AirJumpVerticalSpeedPercent {
    m_strValue: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface ESlotAbilityMantle {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_vecMantleTypes: MvecMantleType[];
}

export interface MvecMantleType {
    m_eMantleType: string;
    m_flMaxHeight: number;
    m_flAnimHeight: number;
    m_flMinHeight?: number;
    m_flVerticalTime?: number;
    m_flHorizontalTime?: number;
}

export interface ESlotWeaponMelee {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties2;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo2;
    _multibase: string[];
    m_eAbilityType: string;
    m_bStartTrained: boolean;
    m_iMaxLevel: number;
    m_eAbilityActivation: string;
    m_eAbilityTargetingLocation: string;
    m_AbilityBehaviorsBits: string;
    m_nAbilityTargetTypes: string;
    m_nAbilityTargetFlags: string;
    m_bitsInterruptingStates: string;
    m_strAbilityImage: string;
    m_MeleeDamageFlags: string;
    m_flCollisionDistance: number;
    m_cameraSequenceHoldStart: McameraSequenceHoldStart;
    m_strHoldBegin: string;
    m_HoldBeginEffect: string;
    m_cameraSequenceHitImpact: McameraSequenceHitImpact;
    m_ParryVictimModifier: MParryVictimModifier;
    m_SuccessfulParryParticle: string;
    m_strSuccessfulParrySound: string;
    m_flParryWindow: number;
    m_flParryStunTime: number;
    m_ParryActivateParticle: string;
    m_AirMeleeUpScale: number[];
    m_mapAttacks: MmapAttacks;
    m_HUDPanel: MHUDPanel2;
}

export interface MHUDPanel2 {
    m_vecButtonHints: MvecButtonHint[];
}

export interface MvecButtonHint {
    m_strLocToken: string;
    m_eHintSide: string;
    m_strBindingOverride1: string;
    m_strContext: string;
}

export interface MmapAttacks {
    EAttackType_Light: EAttackTypeLight;
    EAttackType_Heavy: EAttackTypeHeavy;
    EAttackType_HeavyAir: EAttackTypeHeavyAir;
    EAttackType_Slide: EAttackTypeSlide;
}

export interface EAttackTypeSlide {
    m_Trigger: string;
    m_SpeedBonusCurve: string;
    m_bApplyScreenShake: boolean;
    bIsHeavyAttack: boolean;
    m_MovementSpeedCurve: MBulletSpeedCurve;
    m_flCooldownOnMiss: number;
    m_flCooldownOnHit: number;
    m_flMovementAcc: number;
    m_flKnockUpStrength: number;
}

export interface EAttackTypeHeavyAir {
    m_Trigger: string;
    bIsHeavyAttack: boolean;
    m_flCooldownOnHit: number;
    m_flCooldownOnMiss: number;
    m_bApplyScreenShake: boolean;
    m_SpeedBonusCurve: MBulletSpeedCurve;
    m_MovementSpeedCurve: MBulletSpeedCurve;
    m_flMovementAcc: number;
    m_cameraSequenceAttackStart: McameraSequenceAttackStart2;
    m_flAttackStateTime: number;
    m_strHitHeroSound: string;
    m_MeleeAttackParticle: string;
}

export interface McameraSequenceAttackStart2 {
    m_vecDistanceOperations: any[];
    m_vecFOVOperations: MvecFOVOperation2[];
}

export interface MvecFOVOperation2 {
    m_bValuesAreRelative: boolean;
    m_flApproachTarget?: number;
    m_flApproachSpeed?: number;
    m_flApproachAcceleration?: number;
    m_flMaintainDuration?: number;
    m_eCameraOperation?: string;
    m_flMaintainFloat?: number;
}

export interface EAttackTypeHeavy {
    m_cameraSequenceAttackStart: McameraSequenceAttackStart;
    m_Trigger: string;
    m_flCooldownOnHit: number;
    m_flCooldownOnMiss: number;
    m_bApplyScreenShake: boolean;
    m_SpeedBonusCurve: MBulletSpeedCurve;
    m_MovementSpeedCurve: MBulletSpeedCurve;
    bIsHeavyAttack: boolean;
    m_strActivateSound: string;
    m_flMovementAcc: number;
    m_strHitSound: string;
    m_strDashStart: string;
    m_MeleeSwingParticle: string;
    m_MeleeActivateParticle: string;
    m_MeleeImpactParticle: string;
    m_strHitHeroSound: string;
    m_strHitDebrisSound: string;
    m_MeleeAttackParticle: string;
}

export interface McameraSequenceAttackStart {
    m_vecTargetPosOperations: MvecTargetPosOperation[];
}

export interface MvecTargetPosOperation {
    m_flLagMinDuration: number;
    m_flLagTime: number;
    m_flLagMaxSpeed: number;
    m_flLagSpringStrength: number;
    m_eCameraOperation: string;
}

export interface EAttackTypeLight {
    m_Trigger: string;
    m_flCooldownOnHit: number;
    m_flCooldownOnMiss: number;
    m_SpeedBonusCurve: MBulletSpeedCurve;
    m_MovementSpeedCurve: MBulletSpeedCurve;
    m_MeleeActivateParticle: string;
    m_strHitSound: string;
    m_MeleeImpactParticle: string;
    m_flAttackStateTime: number;
    m_MeleeSwingParticle: string;
    m_strHitDebrisSound: string;
    m_strHitHeroSound: string;
}

export interface MParryVictimModifier {
    subclass: Subclass3;
}

export interface Subclass3 {
    _my_subclass_name: string;
    _class: string;
    m_strParticleEffect: string;
    m_OnCreateResponse: MOnCreateResponse;
    m_vecSetAndTrackedAnimGraphParams: MvecSetAndTrackedAnimGraphParam[];
    m_vecAutoRegisterModifierValueFromAbilityPropertyName: string[];
}

export interface MvecSetAndTrackedAnimGraphParam {
    m_strName: string;
    m_strSetValue: string;
    m_strRestoreValue: string;
}

export interface MOnCreateResponse {
    m_nConcept: string;
    m_nSpeakerType: string;
}

export interface McameraSequenceHitImpact {
    m_vecDistanceOperations: MvecDistanceOperation2[];
}

export interface MvecDistanceOperation2 {
    m_bValuesAreRelative: boolean;
    m_flApproachTarget: number;
    m_eCameraOperation?: string;
    m_flMaintainDuration?: number;
}

export interface McameraSequenceHoldStart {
    m_vecFOVOperations: MvecFOVOperation[];
    m_vecDistanceOperations: MvecDistanceOperation[];
}

export interface MvecDistanceOperation {
    m_flMaintainDuration?: number;
    m_eCameraOperation: string;
    m_bValuesAreRelative?: boolean;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpDuration?: number;
    m_flLerpBias?: number;
}

export interface MvecFOVOperation {
    m_flMaintainDuration?: number;
    m_eCameraOperation: string;
    m_flMaintainFloat?: number;
    m_bValuesAreRelative?: boolean;
    m_flLerpDuration?: number;
    m_bLerpEndAtDefault?: boolean;
    m_flLerpEnd?: number;
    m_flLerpBias?: number;
    m_flDelay?: number;
}

export interface MWeaponInfo2 {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    [key: string]: any;
}

export interface MmapAbilityProperties2 {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
    MeleeHalfAngle: MeleeHalfAngle;
    MeleeAttackLength: MeleeAttackLength;
    MeleeDamageTakenScale: MeleeDamageTakenScale;
}

export interface MeleeDamageTakenScale {
    m_eProvidedPropertyType: string;
    m_UsageFlags: string;
    m_strValue: string;
}

export interface MeleeAttackLength {
    m_strValue: string;
    m_strCSSClass: string;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface MeleeHalfAngle {
    m_strValue: string;
}

export interface ESlotWeaponPrimary {
    _class: string;
    m_strCancelAbilityKey: string;
    m_mapAbilityProperties: MmapAbilityProperties;
    m_bitsPostCastEnabledStateMask: string;
    _editor: Editor;
    m_WeaponInfo: MWeaponInfo;
    _multibase: string[];
    m_bStartTrained: boolean;
    m_eAbilityTargetingLocation: string;
    m_eAbilityActivation: string;
    m_AbilityBehaviorsBits: string;
    m_bitsInterruptingStates: string;
    m_eAbilityType: string;
    m_strAbilityImage: string;
    m_nAbilityPointsCost: number;
    m_HUDPanel: MHUDPanel;
    m_sObstructedShotSound: string;
    m_DOFWhileZoomed: MDOFWhileZoomed;
    m_sDisarmedSound: string;
    m_flMinDisarmedSoundInterval: number;
}

export interface MDOFWhileZoomed {
    m_flDofNearCrisp: number;
    m_flDofFarCrisp: number;
    m_flDofFarBlurry: number;
}

export interface MHUDPanel {
    m_vecHUDElements: MvecHUDElement[];
}

export interface MvecHUDElement {
    m_strContext: string;
    m_eType: string;
}

export interface MWeaponInfo {
    m_BulletSpeedCurve: MBulletSpeedCurve;
    m_Spread: number;
    m_StandingSpread: number;
    m_flScatterYawScale: number;
    m_flShootingUpSpreadPenalty: number;
    m_flZoomMoveSpeedPercent: number;
    m_flShootMoveSpeedPercent: number;
    m_flHorizontalPunch: number;
    m_flVerticalPunch: number;
    m_flRecoilRecoverySpeed: number;
    m_VerticallRecoil: MVerticallRecoil;
    m_HorizontalRecoil: MHorizontalRecoil;
    m_flRecoilSpeed: number;
    m_flZoomFOV: number;
    m_flDamageFalloffStartRange: number;
    m_flDamageFalloffEndRange: number;
    m_flRange: number;
    m_flBulletLifetime: number;
    m_flDamageFalloffStartScale: number;
    m_flDamageFalloffEndScale: number;
    m_flDamageFalloffBias: number;
    m_iBullets: number;
    m_flCycleTime: number;
    m_reloadDuration: number;
    m_iClipSize: number;
    m_iBurstShotCount: number;
    m_flBurstShotCooldown: number;
    m_flBulletGravityScale: number;
    m_flBulletRadius: number;
    m_flBulletReflectScale: number;
    m_flBulletReflectAmount: number;
    m_flBulletInheritShooterVelocityScale: number;
    m_szBulletTravelTracerParticle: string;
    m_szMuzzleFlashEffectName: string;
    m_strShootSound: string;
    m_strBulletWhizSound: string;
    m_flBulletWhizDistance: number;
    m_mapImpactEffects: MmapImpactEffects;
    m_flCritBonusStart: number;
    m_flCritBonusEnd: number;
    m_flCritBonusStartRange: number;
    m_flCritBonusEndRange: number;
    m_flCritBonusAgainstNPCs: number;
    m_flShootSpreadPenaltyPerShot: number;
    m_flShootSpreadPenaltyDecayDelay: number;
    m_flShootSpreadPenaltyDecay: number;
    m_flRecoilShotIndexRecoveryTimeFactor: number;
    m_bCanZoom: boolean;
    m_strWeaponImpactEffect: string;
    m_flReloadMoveSpeed: string;
    m_strLocalPlayerBulletImpactSound: string;
    m_strLocalPlayerBulletImpactHeavySound: string;
    m_strReloadSound: string;
    m_strReloadEndSound: string;
    m_strZoomInSound: string;
    m_strZoomOutSound: string;
    m_strLowAmmoSound: string;
    m_bBulletShouldUseVerlet: boolean;
    m_nLowAmmoIndicatorThreshold: number;
    m_nRecoilSeed: number;
    m_StandingMoveSpreadPenalty: number[];
    m_AimingMoveSpreadPenalty: number[];
    m_AimingShootSpreadPenalty: number[];
    m_StandingShootSpreadPenalty: number[];
    m_strBulletImpactSound: string;
    m_flBulletDamage: number;
    [key: string]: any;
}

export interface MmapImpactEffects {
    default: Default;
    flesh: Default;
    concrete: Default;
    solidmetal: Default;
    portals: Default;
    dirt: Dirt;
    metalvehicle: Dirt;
    metal: Dirt;
    leafy_tree: Dirt;
    wood: Dirt;
    wood_plank: Dirt;
}

export interface Dirt {
    m_strSound: string;
}

export interface Default {
    m_strDecal: string;
    m_strParticle: string;
    m_strSound: string;
}

export interface MHorizontalRecoil {
    m_Range: number[];
    m_flBurstExponent: number;
}

export interface MVerticallRecoil {
    m_Range: number[];
    m_flBurstSlope: number;
    m_flBurstExponent: number;
    m_flBurstConstant: number;
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

export interface Editor {
    folder_name: string;
}

export interface MmapAbilityProperties {
    AbilityCooldown: AbilityCooldown;
    AbilityDuration: AbilityCooldown;
    AbilityCastRange: AbilityCastRange;
    AbilityUnitTargetLimit: AbilityUnitTargetLimit;
    AbilityCastDelay: AbilityCastDelay;
    AbilityChannelTime: AbilityChannelTime;
    AbilityPostCastDuration: AbilityPostCastDuration;
    AbilityCharges: AbilityCooldown;
    AbilityCooldownBetweenCharge: AbilityCooldown;
    ChannelMoveSpeed: ChannelMoveSpeed;
    AbilityResourceCost: AbilityCastDelay;
    TechPower: TechPower;
    WeaponPower: TechPower;
}

export interface TechPower {
    m_strValue: string;
    m_strDisableValue: string;
    m_bCanSetTokenOverride: boolean;
    m_eProvidedPropertyType: string;
}

export interface ChannelMoveSpeed {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
}

export interface AbilityPostCastDuration {
    m_strValue: string;
    m_strDisableValue: string;
}

export interface AbilityChannelTime {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction2;
}

export interface MsubclassScaleFunction2 {
    subclass: Subclass2;
}

export interface Subclass2 {
    _class: string;
    _my_subclass_name: string;
    m_vecScalingStats: string[];
}

export interface AbilityCastDelay {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
}

export interface AbilityUnitTargetLimit {
    m_strValue: string;
    m_bCanSetTokenOverride: boolean;
}

export interface AbilityCastRange {
    m_strValue: string;
    m_eDisplayUnits: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
}

export interface AbilityCooldown {
    m_strValue: string;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
}
export interface AbilityCooldown_base {
    m_strValue: string | number;
    m_strDisableValue: string;
    m_strCSSClass: string;
    m_bCanSetTokenOverride: boolean;
    m_subclassScaleFunction: MsubclassScaleFunction;
}
export interface MsubclassScaleFunction_base {
    subclass: ability_subclass_base;
}

export interface ability_subclass_base {
    _class: string;
    [key: string]: any;
}

export interface MsubclassScaleFunction {
    subclass: Subclass;
}

export interface Subclass {
    _class: string;
    _my_subclass_name: string;
    m_eSpecificStatScaleType: string;
}