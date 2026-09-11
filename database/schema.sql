-- ============================================================
-- Ton-o-Lore DATABASE
-- Knowledge Graph + Rabbit Hole Engine
-- PostgreSQL
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE entity_type AS ENUM (
    'topic',
    'person',
    'place',
    'event',
    'organization',
    'object',
    'concept',
    'mystery',
    'theory',
    'work',
    'technology',
    'language',
    'custom'
);

CREATE TYPE evidence_level AS ENUM (
    'documented',
    'well_supported',
    'likely',
    'disputed',
    'theory',
    'legend',
    'fiction'
);

CREATE TYPE relationship_type AS ENUM (
    'related_to',
    'caused',
    'influenced',
    'inspired',
    'preceded',
    'followed',
    'part_of',
    'created_by',
    'created',
    'involved',
    'occurred_at',
    'located_in',
    'connected_to',
    'contradicts',
    'supports',
    'derived_from',
    'similar_to',
    'opposite_of',
    'referenced_by',
    'popularized_by',
    'serialized_in',
    'publishes',
    'published',
    'adapted_into',
    'adapted_from',
    'produced',
    'member_of',
    'leads',
    'seeks',
    'found',
    'reached',
    'suppressed',
    'records',
    'can_read',
    'uses',
    'contains',
    'opposed_by',
    'motivated_by',
    'unknown'
);

CREATE TYPE page_status AS ENUM (
    'draft',
    'published',
    'archived'
);

-- ============================================================
-- ENTITIES
-- ============================================================

CREATE TABLE entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    type entity_type NOT NULL,
    short_description TEXT,
    description TEXT,
    evidence evidence_level DEFAULT 'documented',
    wikipedia_url TEXT,
    wikidata_id TEXT,
    image_url TEXT,
    image_source TEXT,
    image_credit TEXT,
    image_license TEXT,
    image_usage TEXT,
    image_alt TEXT,
    url_parent_id UUID REFERENCES entities(id) ON DELETE SET NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_entities_type ON entities(type);
CREATE INDEX idx_entities_slug ON entities(slug);
CREATE INDEX idx_entities_name ON entities(name);
CREATE INDEX idx_entities_metadata ON entities USING GIN(metadata);

-- ============================================================
-- RELATIONSHIPS
-- ============================================================

CREATE TABLE relationships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    from_entity_id UUID NOT NULL
        REFERENCES entities(id)
        ON DELETE CASCADE,

    to_entity_id UUID NOT NULL
        REFERENCES entities(id)
        ON DELETE CASCADE,

    relationship relationship_type NOT NULL,

    title TEXT,
    explanation TEXT,

    evidence evidence_level DEFAULT 'documented',

    strength NUMERIC(5,4) DEFAULT 0.5000,
    discovery_score NUMERIC(8,4) DEFAULT 0,

    source_count INTEGER DEFAULT 0,

    metadata JSONB DEFAULT '{}'::jsonb,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    UNIQUE(from_entity_id, to_entity_id, relationship),

    CHECK (from_entity_id <> to_entity_id),
    CHECK (strength >= 0 AND strength <= 1)
);

CREATE INDEX idx_relationships_from
    ON relationships(from_entity_id);

CREATE INDEX idx_relationships_to
    ON relationships(to_entity_id);

CREATE INDEX idx_relationships_type
    ON relationships(relationship);

CREATE INDEX idx_relationships_discovery
    ON relationships(discovery_score DESC);

-- ============================================================
-- SOURCES
-- ============================================================

CREATE TABLE sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title TEXT NOT NULL,
    url TEXT,
    domain TEXT,

    author TEXT,
    publisher TEXT,

    published_at TIMESTAMPTZ,

    source_type TEXT,

    credibility_score NUMERIC(5,4),

    metadata JSONB DEFAULT '{}'::jsonb,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_sources_domain
    ON sources(domain);

-- ============================================================
-- ENTITY SOURCES
-- ============================================================

CREATE TABLE entity_sources (
    entity_id UUID NOT NULL
        REFERENCES entities(id)
        ON DELETE CASCADE,

    source_id UUID NOT NULL
        REFERENCES sources(id)
        ON DELETE CASCADE,

    relevance_score NUMERIC(5,4) DEFAULT 0.5,

    notes TEXT,

    PRIMARY KEY(entity_id, source_id)
);

-- ============================================================
-- RELATIONSHIP SOURCES
-- ============================================================

CREATE TABLE relationship_sources (
    relationship_id UUID NOT NULL
        REFERENCES relationships(id)
        ON DELETE CASCADE,

    source_id UUID NOT NULL
        REFERENCES sources(id)
        ON DELETE CASCADE,

    relevance_score NUMERIC(5,4) DEFAULT 0.5,

    notes TEXT,

    PRIMARY KEY(relationship_id, source_id)
);

-- ============================================================
-- PAGES
-- ============================================================

CREATE TABLE pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    entity_id UUID
        REFERENCES entities(id)
        ON DELETE SET NULL,

    slug TEXT NOT NULL UNIQUE,

    title TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,

    page_type TEXT NOT NULL DEFAULT 'entity',

    content TEXT,

    status page_status NOT NULL DEFAULT 'draft',

    word_count INTEGER DEFAULT 0,

    depth_score NUMERIC(8,4) DEFAULT 0,
    uniqueness_score NUMERIC(8,4) DEFAULT 0,
    engagement_score NUMERIC(8,4) DEFAULT 0,

    generation_version INTEGER DEFAULT 1,

    generated_at TIMESTAMPTZ,
    published_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_pages_entity ON pages(entity_id);
CREATE INDEX idx_pages_status ON pages(status);
CREATE INDEX idx_pages_depth ON pages(depth_score DESC);

-- ============================================================
-- PAGE LINKS
-- ============================================================

CREATE TABLE page_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    from_page_id UUID NOT NULL
        REFERENCES pages(id)
        ON DELETE CASCADE,

    to_page_id UUID NOT NULL
        REFERENCES pages(id)
        ON DELETE CASCADE,

    anchor_text TEXT,
    position INTEGER,

    link_type TEXT DEFAULT 'related',

    relevance_score NUMERIC(5,4) DEFAULT 0.5,

    click_count INTEGER DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    UNIQUE(from_page_id, to_page_id, position)
);

CREATE INDEX idx_page_links_from ON page_links(from_page_id);
CREATE INDEX idx_page_links_to ON page_links(to_page_id);

-- ============================================================
-- RABBIT HOLES
-- ============================================================

CREATE TABLE rabbit_holes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    slug TEXT NOT NULL UNIQUE,

    title TEXT NOT NULL,
    description TEXT,

    starting_entity_id UUID NOT NULL
        REFERENCES entities(id)
        ON DELETE CASCADE,

    depth INTEGER DEFAULT 0,

    weirdness_score NUMERIC(5,4) DEFAULT 0,
    obscurity_score NUMERIC(5,4) DEFAULT 0,
    evidence_score NUMERIC(5,4) DEFAULT 0,
    connection_score NUMERIC(5,4) DEFAULT 0,

    overall_score NUMERIC(8,4) DEFAULT 0,

    generated BOOLEAN DEFAULT FALSE,
    generation_version INTEGER DEFAULT 1,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_rabbit_holes_score
    ON rabbit_holes(overall_score DESC);

CREATE INDEX idx_rabbit_holes_depth
    ON rabbit_holes(depth DESC);

-- ============================================================
-- RABBIT HOLE STEPS
-- ============================================================

CREATE TABLE rabbit_hole_steps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    rabbit_hole_id UUID NOT NULL
        REFERENCES rabbit_holes(id)
        ON DELETE CASCADE,

    step_number INTEGER NOT NULL,

    entity_id UUID NOT NULL
        REFERENCES entities(id)
        ON DELETE CASCADE,

    relationship_id UUID
        REFERENCES relationships(id)
        ON DELETE SET NULL,

    explanation TEXT,

    UNIQUE(rabbit_hole_id, step_number)
);

CREATE INDEX idx_rabbit_steps_hole
    ON rabbit_hole_steps(rabbit_hole_id);

CREATE INDEX idx_rabbit_steps_entity
    ON rabbit_hole_steps(entity_id);

-- ============================================================
-- CONTENT CONNECTIONS
-- ============================================================

CREATE TABLE content_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    page_id UUID NOT NULL
        REFERENCES pages(id)
        ON DELETE CASCADE,

    relationship_id UUID NOT NULL
        REFERENCES relationships(id)
        ON DELETE CASCADE,

    heading TEXT,
    body TEXT,

    display_order INTEGER DEFAULT 0,

    generated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_content_connections_page
    ON content_connections(page_id);

-- ============================================================
-- TAGS
-- ============================================================

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL
);

CREATE TABLE entity_tags (
    entity_id UUID NOT NULL
        REFERENCES entities(id)
        ON DELETE CASCADE,

    tag_id UUID NOT NULL
        REFERENCES tags(id)
        ON DELETE CASCADE,

    PRIMARY KEY(entity_id, tag_id)
);

-- ============================================================
-- SESSIONS
-- ============================================================

CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    session_key TEXT NOT NULL UNIQUE,

    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    entry_page_id UUID
        REFERENCES pages(id)
        ON DELETE SET NULL,

    exit_page_id UUID
        REFERENCES pages(id)
        ON DELETE SET NULL,

    page_count INTEGER DEFAULT 0,
    rabbit_hole_depth INTEGER DEFAULT 0,
    total_seconds INTEGER DEFAULT 0,

    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_sessions_last_seen
    ON sessions(last_seen_at);

-- ============================================================
-- PAGE VIEWS
-- ============================================================

CREATE TABLE page_views (
    id BIGSERIAL PRIMARY KEY,

    session_id UUID
        REFERENCES sessions(id)
        ON DELETE SET NULL,

    page_id UUID
        REFERENCES pages(id)
        ON DELETE SET NULL,

    viewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    seconds_on_page INTEGER,
    scroll_depth NUMERIC(5,4),

    source TEXT,
    referrer TEXT,

    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_page_views_page ON page_views(page_id);
CREATE INDEX idx_page_views_session ON page_views(session_id);
CREATE INDEX idx_page_views_date ON page_views(viewed_at);

-- ============================================================
-- RABBIT HOLE EVENTS
-- ============================================================

CREATE TABLE rabbit_hole_events (
    id BIGSERIAL PRIMARY KEY,

    session_id UUID
        REFERENCES sessions(id)
        ON DELETE SET NULL,

    rabbit_hole_id UUID
        REFERENCES rabbit_holes(id)
        ON DELETE SET NULL,

    entity_id UUID
        REFERENCES entities(id)
        ON DELETE SET NULL,

    event_type TEXT NOT NULL,

    depth INTEGER,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_rabbit_events_hole
    ON rabbit_hole_events(rabbit_hole_id);

CREATE INDEX idx_rabbit_events_type
    ON rabbit_hole_events(event_type);

CREATE INDEX idx_rabbit_events_date
    ON rabbit_hole_events(created_at);

-- ============================================================
-- DISCOVERY SCORES
-- ============================================================

CREATE TABLE entity_discovery_scores (
    entity_id UUID PRIMARY KEY
        REFERENCES entities(id)
        ON DELETE CASCADE,

    curiosity_score NUMERIC(8,4) DEFAULT 0,
    novelty_score NUMERIC(8,4) DEFAULT 0,
    depth_score NUMERIC(8,4) DEFAULT 0,
    connection_score NUMERIC(8,4) DEFAULT 0,
    engagement_score NUMERIC(8,4) DEFAULT 0,
    search_score NUMERIC(8,4) DEFAULT 0,

    overall_score NUMERIC(8,4) DEFAULT 0,

    calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- GENERATION JOBS
-- ============================================================

CREATE TABLE generation_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    job_type TEXT NOT NULL,

    entity_id UUID
        REFERENCES entities(id)
        ON DELETE SET NULL,

    page_id UUID
        REFERENCES pages(id)
        ON DELETE SET NULL,

    status TEXT NOT NULL DEFAULT 'pending',

    priority INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 0,

    error_message TEXT,

    input_data JSONB DEFAULT '{}'::jsonb,
    output_data JSONB DEFAULT '{}'::jsonb,

    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_generation_jobs_status
    ON generation_jobs(status);

CREATE INDEX idx_generation_jobs_priority
    ON generation_jobs(priority DESC);

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER entities_updated_at
BEFORE UPDATE ON entities
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER relationships_updated_at
BEFORE UPDATE ON relationships
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER pages_updated_at
BEFORE UPDATE ON pages
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER rabbit_holes_updated_at
BEFORE UPDATE ON rabbit_holes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
