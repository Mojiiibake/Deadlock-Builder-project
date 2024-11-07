// Type guard functions
export function isTechItem(item) {
    return item.type === 'tech';
}
export function isArmorItem(item) {
    return item.type === 'armor';
}
export function isWeaponItem(item) {
    return item.type === 'weapon';
}
export function isAbilityItem(item) {
    return item.type === 'ability';
}
export function isUpgradeItem(item) {
    return item.type === 'upgrade';
}
// Utility function to safely access properties
export function getItemProperty(item, prop) {
    return item.properties[prop] ?? null;
}
// Utility function to convert string measurements to numbers
export function convertToMeters(value) {
    if (typeof value === 'number')
        return value;
    const match = value.match(/^(\d+(?:\.\d+)?)m$/);
    return match ? parseFloat(match[1]) : NaN;
}
// Utility function to check if a value is a number or a string representing a number
export function isNumberOrNumberString(value) {
    return typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value)));
}
