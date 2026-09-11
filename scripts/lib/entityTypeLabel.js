/**
 * Friendly entity-kind labels for connection cards, SEO, and exports.
 * Prefer specific kinds (weapon, location, character) over raw enum
 * values or generic relationship verbs like "part of".
 */

function normalizeSpace(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
}

function blobFor(entity) {
    return normalizeSpace(
        [
            entity?.name,
            entity?.type,
            entity?.kind,
            entity?.display_type,
            entity?.metadata?.kind,
            entity?.short_description,
            entity?.description
        ]
            .filter(Boolean)
            .join(" ")
    ).toLowerCase();
}

const BASE_TYPE_LABELS = {
    person: "Character",
    place: "Location",
    object: "Item",
    organization: "Faction",
    event: "Event",
    concept: "Concept",
    work: "Work",
    topic: "Topic",
    technology: "Technology",
    mystery: "Mystery",
    theory: "Theory",
    language: "Language",
    custom: "Topic"
};

const KIND_LABELS = {
    character: "Character",
    person: "Person",
    artist: "Artist",
    creator: "Creator",
    location: "Location",
    place: "Location",
    weapon: "Weapon",
    armor: "Armor",
    item: "Item",
    artifact: "Artifact",
    vehicle: "Vehicle",
    ship: "Ship",
    creature: "Creature",
    faction: "Faction",
    organization: "Faction",
    event: "Event",
    concept: "Concept",
    work: "Work",
    series: "Series",
    topic: "Topic",
    technology: "Technology",
    mystery: "Mystery",
    theory: "Theory",
    language: "Language"
};

function explicitKind(entity) {
    const raw =
        entity?.kind ||
        entity?.display_type ||
        entity?.metadata?.kind ||
        entity?.metadata?.display_type ||
        "";
    return String(raw || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");
}

function refinePersonLabel(entity) {
    const blob = blobFor(entity);
    if (
        /\b(musician|composer|rapper|singer|vocalist|band|dj\b|producer|pianist|guitarist|drummer|conductor|orchestra|album)\b/.test(
            blob
        )
    ) {
        return "Artist";
    }
    if (
        /\b(author|writer|novelist|illustrator|mangaka|director|screenwriter|actor|actress|creator|developer|designer)\b/.test(
            blob
        ) &&
        !/\bfictional (character|person)\b/.test(blob)
    ) {
        return "Creator";
    }
    return "Character";
}

function refineObjectLabel(entity) {
    const blob = blobFor(entity);
    const name = normalizeSpace(entity?.name).toLowerCase();

    if (
        /\b(armor|armour|surcoat|cloak|helmet|mail|plate|shield)\b/.test(blob) ||
        /\b(armor|armour|surcoat|cloak|helmet)\b/.test(name)
    ) {
        return "Armor";
    }

    if (
        /\b(weapon|sword|blade|dagger|knife|axe|bow|crossbow|gun|rifle|cannon|spear|halberd|hammer|mace|whip|scythe|launcher|bomb|missile|saber|sabre|katana|staff|wand)\b/.test(
            blob
        ) ||
        /\b(sword|blade|dagger|knife|axe|bow|crossbow|gun|cannon|spear|launcher|bomb)\b/.test(
            name
        )
    ) {
        return "Weapon";
    }

    if (
        /\b(ship|vessel|boat|galleon|frigate|starship|spaceship|cruiser)\b/.test(
            blob
        )
    ) {
        return "Ship";
    }

    if (
        /\b(vehicle|mechs?\b|battlemech|tank|car|bike|motorcycle|aircraft|plane|jet)\b/.test(
            blob
        )
    ) {
        return "Vehicle";
    }

    if (
        /\b(artifact|relic|behelit|beherit|tome|grimoire|amulet|talisman)\b/.test(
            blob
        )
    ) {
        return "Artifact";
    }

    if (
        /\b(creature|monster|beast|demon|devil|golem|construct|pokemon|pokémon)\b/.test(
            blob
        )
    ) {
        return "Creature";
    }

    return "Item";
}

/**
 * @param {object} entity - entity or connection row with type/name/descriptions
 * @returns {string}
 */
function entityTypeLabel(entity) {
    if (!entity) {
        return "Topic";
    }

    const kind = explicitKind(entity);
    if (kind && KIND_LABELS[kind]) {
        return KIND_LABELS[kind];
    }

    const type = String(entity.type || "topic").toLowerCase();

    if (type === "person") {
        return refinePersonLabel(entity);
    }

    if (type === "object") {
        return refineObjectLabel(entity);
    }

    if (type === "work") {
        const blob = blobFor(entity);
        if (/\b(series|anime|manga|comic|novel|film|movie|game|album)\b/.test(blob)) {
            if (/\bseries\b/.test(blob)) return "Series";
        }
        return "Work";
    }

    return BASE_TYPE_LABELS[type] || titleCase(type.replace(/_/g, " "));
}

/**
 * Infer a stable metadata.kind for expand/seed pipelines.
 */
function inferEntityKind(entity) {
    const label = entityTypeLabel(entity).toLowerCase();
    const map = {
        character: "character",
        person: "person",
        artist: "artist",
        creator: "creator",
        location: "location",
        weapon: "weapon",
        armor: "armor",
        item: "item",
        artifact: "artifact",
        vehicle: "vehicle",
        ship: "ship",
        creature: "creature",
        faction: "faction",
        event: "event",
        concept: "concept",
        work: "work",
        series: "series",
        topic: "topic",
        technology: "technology",
        mystery: "mystery",
        theory: "theory",
        language: "language"
    };
    return map[label] || String(entity?.type || "topic").toLowerCase();
}

/**
 * Map fandom / crawl category titles onto entity type + kind.
 */
function classifyFromCategoryTitle(title, fallbackType = "topic") {
    const t = String(title || "").toLowerCase();

    if (/\bweapons?\b|\barmaments?\b|\bswords?\b/.test(t)) {
        return { type: "object", kind: "weapon" };
    }
    if (/\barmou?r\b|\bshields?\b/.test(t)) {
        return { type: "object", kind: "armor" };
    }
    if (/\bships?\b|\bvessels?\b/.test(t)) {
        return { type: "object", kind: "ship" };
    }
    if (/\bvehicles?\b|\bmechs?\b/.test(t)) {
        return { type: "object", kind: "vehicle" };
    }
    if (/\b(items?|artifacts?|objects?|equipment|tools?|gadgets?)\b/.test(t)) {
        return { type: "object", kind: "item" };
    }
    if (/\b(locations?|places?|planets?|cities|towns|regions?|worlds?)\b/.test(t)) {
        return { type: "place", kind: "location" };
    }
    if (/\b(characters?|people|males?|females?|cast)\b/.test(t)) {
        return { type: "person", kind: "character" };
    }
    if (/\b(organizations?|factions?|groups?|clans?|guilds?|crews?)\b/.test(t)) {
        return { type: "organization", kind: "faction" };
    }
    if (/\b(events?|battles?|wars?|arcs?)\b/.test(t)) {
        return { type: "event", kind: "event" };
    }
    if (/\b(concepts?|powers?|abilities?|techniques?)\b/.test(t)) {
        return { type: "concept", kind: "concept" };
    }

    return {
        type: fallbackType,
        kind: inferEntityKind({ type: fallbackType, name: title })
    };
}

function titleCase(value) {
    return String(value || "")
        .split(/\s+/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

module.exports = {
    entityTypeLabel,
    inferEntityKind,
    classifyFromCategoryTitle,
    BASE_TYPE_LABELS,
    KIND_LABELS
};
