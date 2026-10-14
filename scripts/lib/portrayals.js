/**
 * Portrayal nesting: a character owns "Actors who have played";
 * the actor's role page lives under that character; the actor's
 * canonical person page lives on the subject root and lists every role.
 *
 * Other IPs / works stay siblings. Never nest Captain America under
 * Fantastic Four because Chris Evans played both.
 *
 *   /marvel/fantastic-four/human-torch
 *   /marvel/fantastic-four/human-torch/human-torch-portrayals
 *   /marvel/fantastic-four/human-torch/human-torch-portrayals/human-torch-chris-evans
 *   /marvel/chris-evans
 *   /marvel/avengers/captain-america/captain-america-portrayals/captain-america-chris-evans
 */

function portrayalSlugs(characterSlug, actorSlug) {
    return {
        hubSlug: `${characterSlug}-portrayals`,
        roleSlug: `${characterSlug}-${actorSlug}`
    };
}

/**
 * @param {object} api
 * @param {Function} api.entity
 * @param {Function} api.rel
 * @param {object} opts
 */
function addPortrayal(api, opts) {
    const {
        characterSlug,
        characterName,
        roleName,
        actorSlug,
        actorName,
        credit,
        workSlug = null,
        workName = null
    } = opts;

    const { hubSlug, roleSlug } = portrayalSlugs(characterSlug, actorSlug);
    const roleLabel = roleName || characterName;
    const note = credit
        ? `${actorName} portrayed ${roleLabel} (${credit}).`
        : `${actorName} portrayed ${roleLabel}.`;

    api.entity(
        hubSlug,
        "Actors who have played",
        "topic",
        `Documented screen portrayals of ${characterName}.`,
        `Actors who have played ${characterName}. Each name is this role only — other parts the same actor played live under those characters' own paths.`,
        "documented",
        { parentSlug: characterSlug }
    );

    api.entity(
        roleSlug,
        `${actorName} as ${roleLabel}`,
        "person",
        note,
        `${note} This page is the ${roleLabel} credit. ${actorName}'s other roles are not nested here.`,
        "documented",
        { parentSlug: hubSlug }
    );

    api.rel(
        hubSlug,
        characterSlug,
        "part_of",
        `Portrayals of ${characterName} sit under this character.`,
        0.96,
        0.92
    );
    api.rel(
        roleSlug,
        hubSlug,
        "member_of",
        `${actorName} is listed among actors who have played ${characterName}.`,
        0.97,
        0.94
    );
    api.rel(
        actorSlug,
        roleSlug,
        "involved",
        `${actorName}'s ${roleLabel} credit.`,
        0.98,
        0.95
    );
    api.rel(
        actorSlug,
        characterSlug,
        "involved",
        note,
        0.97,
        0.94
    );

    if (workSlug && workName) {
        api.rel(
            roleSlug,
            workSlug,
            "involved",
            `${actorName} played ${roleLabel} in ${workName}.`,
            0.95,
            0.91
        );
        api.rel(
            workSlug,
            characterSlug,
            "adapted_from",
            `${workName} adapts ${characterName}.`,
            0.93,
            0.88
        );
    }

    return { hubSlug, roleSlug };
}

function ensureActor(api, actorSlug, actorName, description, extras = {}) {
    api.entity(
        actorSlug,
        actorName,
        "person",
        `${actorName} — screen credits mapped to the characters they played.`,
        description,
        "documented",
        extras
    );
}

module.exports = {
    portrayalSlugs,
    addPortrayal,
    ensureActor
};
