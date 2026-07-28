-- ========================================================
-- Dynamic Categories Table & RLS Policies for MarFami
-- ========================================================

CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- 1. Public read access for categories
DROP POLICY IF EXISTS "Allow public read categories" ON categories;
CREATE POLICY "Allow public read categories" ON categories
    FOR SELECT
    USING (true);

-- 2. Admin write access (create, update, delete)
DROP POLICY IF EXISTS "Allow admin write categories" ON categories;
CREATE POLICY "Allow admin write categories" ON categories
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'email' IN ('camiloarenas135@gmail.com', 'marfamishop@gmail.com'));

-- Seed default categories
INSERT INTO categories (name) VALUES
    ('Tecnología'),
    ('Hogar y Cocina'),
    ('Ropa'),
    ('Belleza'),
    ('Peluches'),
    ('Novedades')
ON CONFLICT (name) DO NOTHING;
