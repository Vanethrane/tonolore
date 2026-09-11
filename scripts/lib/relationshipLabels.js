/**
 * Shared relationship labels for generators and the client.
 * Keys are relationship_type enum values.
 *
 * Edge direction is the active party’s action:
 *   creator --created--> work        → Creator: "Created" / Work: "Created By"
 *   work --created_by--> creator     → Work: "Created By" / Creator: "Created"
 *   publisher --publishes--> title   → Publisher: "Publishes"
 * Do not store creator→work as created_by — labels will read backwards.
 */

const RELATIONSHIP_LABELS = {
    created_by: { outgoing: "Created By", incoming: "Created" },
    created: { outgoing: "Created", incoming: "Created By" },
    serialized_in: { outgoing: "Serialized In", incoming: "Serializes" },
    publishes: { outgoing: "Publishes", incoming: "Published By" },
    published: { outgoing: "Published By", incoming: "Publishes" },
    adapted_into: { outgoing: "Adapted Into", incoming: "Adaptation Of" },
    adapted_from: { outgoing: "Adapted From", incoming: "Adaptation Of" },
    produced: { outgoing: "Produced", incoming: "Produced By" },
    preceded: { outgoing: "Preceded", incoming: "Preceded By" },
    followed: { outgoing: "Followed", incoming: "Followed By" },
    caused: { outgoing: "Caused", incoming: "Caused By" },
    part_of: { outgoing: "Part Of", incoming: "Contains" },
    seeks: { outgoing: "Seeks", incoming: "Sought By" },
    found: { outgoing: "Found", incoming: "Found By" },
    reached: { outgoing: "Reached", incoming: "Reached By" },
    suppressed: { outgoing: "Suppressed", incoming: "Suppressed By" },
    records: { outgoing: "Records", incoming: "Recorded By" },
    can_read: { outgoing: "Can Read", incoming: "Read By" },
    member_of: { outgoing: "Member Of", incoming: "Has Member" },
    leads: { outgoing: "Leads", incoming: "Led By" },
    uses: { outgoing: "Uses", incoming: "Used By" },
    contains: { outgoing: "Contains", incoming: "Contained By" },
    opposed_by: { outgoing: "Opposed By", incoming: "Opposes" },
    motivated_by: { outgoing: "Motivated By", incoming: "Motivates" },
    connected_to: { outgoing: "Connected To", incoming: "Connected To" },
    related_to: { outgoing: "Related To", incoming: "Related To" },
    supports: { outgoing: "Supports", incoming: "Supported By" },
    contradicts: { outgoing: "Contradicts", incoming: "Contradicted By" },
    influenced: { outgoing: "Influenced", incoming: "Influenced By" },
    inspired: { outgoing: "Inspired", incoming: "Inspired By" },
    involved: { outgoing: "Involved In", incoming: "Involves" },
    occurred_at: { outgoing: "Occurred At", incoming: "Site Of" },
    located_in: { outgoing: "Located In", incoming: "Contains" }
};

function relationshipLabel(connection) {
    const r = connection.relationship;
    const incoming = connection.direction === "incoming";
    const pair = RELATIONSHIP_LABELS[r];

    if (pair) {
        return pair[incoming ? "incoming" : "outgoing"];
    }

    return String(r || "").replace(/_/g, " ");
}

/** Enum values used by Ton-o-Lore seeds beyond the original schema.sql set. */
const EXTRA_RELATIONSHIP_TYPES = [
    "created",
    "serialized_in",
    "publishes",
    "published",
    "adapted_into",
    "produced",
    "adapted_from",
    "member_of",
    "leads",
    "seeks",
    "found",
    "reached",
    "suppressed",
    "records",
    "can_read",
    "uses",
    "contains",
    "opposed_by",
    "motivated_by"
];

module.exports = {
    RELATIONSHIP_LABELS,
    EXTRA_RELATIONSHIP_TYPES,
    relationshipLabel
};
