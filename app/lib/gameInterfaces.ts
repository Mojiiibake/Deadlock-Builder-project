// Common types
type ImageUrl = string;
type VideoUrl = string;

// Generic property type to handle various number and string values
type PropertyValue = number | string | null;

// Base item interface
export interface BaseItem {
    name: string;
    class_name: string;
    image?: ImageUrl;
    video?: VideoUrl;
    properties: {
        [key: string]: PropertyValue;
    };
    weapon_info: Record<string, unknown>;
    id: number;
    type: string;
    cost?: number;
    tier?: number;
    max_level?: number;
}

// Tech item interface
export interface TechItem extends BaseItem {
    type: 'tech';
}

// Armor item interface
export interface ArmorItem extends BaseItem {
    type: 'armor';
}

// Weapon item interface
export interface WeaponItem extends BaseItem {
    type: 'weapon';
    // Note: We're not adding bullet_damage or clip_size here as they're in properties
}

// Ability item interface
export interface AbilityItem extends BaseItem {
    type: 'ability';
    points_cost?: number;
    unlocks_cost?: number;
}

// Upgrade item interface
export interface UpgradeItem extends BaseItem {
    type: 'upgrade';
    properties: {
        ability_cast_delay: number;
        ability_cast_range: number;
        ability_channel_time: number;
        ability_charges: number;
        ability_cooldown: number;
        ability_cooldown_between_charge: number;
        ability_duration: number;
        ability_post_cast_duration: number;
        ability_resource_cost: number;
        ability_unit_target_limit: number;
        channel_move_speed: number;
        tech_power: number;
        weapon_power: number;
        [key: string]: PropertyValue;
    };
}

// Union type for all items
export type Item = TechItem | ArmorItem | WeaponItem | AbilityItem | UpgradeItem;
// Character interfaces
export interface CharacterStartingStats {
    max_move_speed: number;
    sprint_speed: number;
    crouch_speed: number;
    move_acceleration: number;
    light_melee_damage: number;
    heavy_melee_damage: number;
    max_health: number;
    weapon_power: number;
    reload_speed: number;
    weapon_power_scale: number;
    proc_build_up_rate_scale: number;
    stamina: number;
    base_health_regen: number;
    stamina_regen_per_second: number;
    ability_resource_max: number;
    ability_resource_regen_per_second: number;
    crit_damage_received_scale: number;
    tech_duration: number;
    tech_range: number;
}

export interface CharacterItems {
    [key: string]: number;
}

export interface ItemSlotInfo {
    max_purchase_for_tier: number[];
}

export interface PurchaseBonus {
    tier: number;
    value: string;
}

export interface LevelInfo {
    required_gold: number;
    bonus_currencies?: string[];
    use_standard_upgrade: boolean;
}

export interface StandardLevelUpUpgrades {
    [key: string]: number;
}

export interface HeroShopStatDisplay {
    weapon_stats_display: {
        weapon_image: ImageUrl;
    };
}

export interface CharacterImages {
    portrait: ImageUrl;
    card: ImageUrl;
    top_bar: ImageUrl;
    minimap: ImageUrl;
    small: ImageUrl;
    weapon: ImageUrl;
}

export interface Character {
    id: number;
    class_name: string;
    name: string;
    player_selectable: boolean;
    disabled: boolean;
    in_development: boolean;
    needs_testing: boolean;
    assigned_players_only: boolean;
    bot_selectable: boolean;
    limited_testing: boolean;
    complexity: number;
    readability: number;
    starting_stats: CharacterStartingStats;
    collision_radius: number;
    collision_height: number;
    step_height: number;
    items: CharacterItems;
   
    item_slot_info: {
        [key: string]: ItemSlotInfo;
    };
    purchase_bonuses: {
        [key: string]: PurchaseBonus[];
    };
    level_info: {
        [key: string]: LevelInfo;
    };
    stealth_speed_meters_per_second: number;
    footstep_sound_travel_distance_meters: number;
    step_sound_time: number;
    color_ui: number[];
    color_glow_friendly: number[];
    color_glow_enemy: number[];
    color_glow_team1: number[];
    color_glow_team2: number[];
    standard_level_up_upgrades: StandardLevelUpUpgrades;
    hero_shop_stat_display: HeroShopStatDisplay;
    selection_image: ImageUrl;
    icon_image_small: ImageUrl;
    minimap_image: ImageUrl;
    icon_hero_card: ImageUrl;
    top_bar_image: ImageUrl;
    images: CharacterImages;
}

// Type guard functions
export function isTechItem(item: Item): item is TechItem {
    return item.type === 'tech';
}

export function isArmorItem(item: Item): item is ArmorItem {
    return item.type === 'armor';
}

export function isWeaponItem(item: Item): item is WeaponItem {
    return item.type === 'weapon';
}

export function isAbilityItem(item: Item): item is AbilityItem {
    return item.type === 'ability';
}

export function isUpgradeItem(item: Item): item is UpgradeItem {
    return item.type === 'upgrade';
}

// Utility function to safely access properties
export function getItemProperty(item: Item, prop: string): PropertyValue {
    return item.properties[prop] ?? null;
}

// Utility function to convert string measurements to numbers
export function convertToMeters(value: string | number): number {
    if (typeof value === 'number') return value;
    const match = value.match(/^(\d+(?:\.\d+)?)m$/);
    return match ? parseFloat(match[1]) : NaN;
}

// Utility type for flexible number or string properties
export type NumberOrString = number | string;

// Utility function to check if a value is a number or a string representing a number
export function isNumberOrNumberString(value: unknown): value is NumberOrString {
    return typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value)));
}