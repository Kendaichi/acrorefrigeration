-- Adds editable CTA fields and related-post/project slug arrays to services.

ALTER TABLE services
  ADD COLUMN IF NOT EXISTS related_post_slugs    text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS related_project_slugs text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS cta_heading     text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cta_description text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cta_button_text text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cta_button_link text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS hero_cta_primary_text text NOT NULL DEFAULT 'Get a Quote',
  ADD COLUMN IF NOT EXISTS hero_cta_primary_link text NOT NULL DEFAULT '/contact',
  ADD COLUMN IF NOT EXISTS hero_cta_phone_text   text NOT NULL DEFAULT '1300 227 600',
  ADD COLUMN IF NOT EXISTS hero_cta_phone_link   text NOT NULL DEFAULT 'tel:1300227600',
  ADD COLUMN IF NOT EXISTS overview_cta_text     text NOT NULL DEFAULT 'Discuss Your Needs',
  ADD COLUMN IF NOT EXISTS overview_cta_link     text NOT NULL DEFAULT '/contact';
