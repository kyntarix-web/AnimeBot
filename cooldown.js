const cooldowns = new Map();

export function onCooldown(userId, seconds) {
if (cooldowns.has(userId)) {
const expires = cooldowns.get(userId);
if (Date.now() < expires) return true;
}

cooldowns.set(userId, Date.now() + seconds * 1000);
return false;
}