/**
 * Friendly entity-kind labels for connection cards and page eyebrows.
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

export function entityTypeLabel(entity) {
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
        if (/\bseries\b/.test(blob)) {
            return "Series";
        }
        return "Work";
    }

    return (
        BASE_TYPE_LABELS[type] ||
        String(type || "topic")
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
    );
}
