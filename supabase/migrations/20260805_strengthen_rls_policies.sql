-- ========================================================
-- Enhanced Row Level Security (RLS) & Validation Policies
-- ========================================================

-- Enable Row Level Security on all core tables
ALTER TABLE IF EXISTS products ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS vip_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS categories ENABLE ROW LEVEL SECURITY;

-- 1. Policies for 'products' table
DROP POLICY IF EXISTS "Allow public read access" ON products;
CREATE POLICY "Allow public read access" ON products
    FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Allow admin write access" ON products;
CREATE POLICY "Allow admin write access" ON products
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'email' IN ('camiloarenas135@gmail.com', 'marfamishop@gmail.com'))
    WITH CHECK (auth.jwt() ->> 'email' IN ('camiloarenas135@gmail.com', 'marfamishop@gmail.com'));

-- 2. Policies for 'orders' table (Public insert with payload validation constraints)
DROP POLICY IF EXISTS "Allow public insert" ON orders;
CREATE POLICY "Allow public insert" ON orders
    FOR INSERT
    TO public
    WITH CHECK (
        LENGTH(TRIM(customer_name)) >= 3 AND LENGTH(customer_name) <= 100 AND
        LENGTH(TRIM(customer_phone)) >= 8 AND LENGTH(customer_phone) <= 20 AND
        LENGTH(TRIM(delivery_address)) >= 10 AND LENGTH(delivery_address) <= 300 AND
        total_amount >= 0 AND total_amount <= 50000000 AND
        status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')
    );

DROP POLICY IF EXISTS "Allow admin read/write" ON orders;
CREATE POLICY "Allow admin read/write" ON orders
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'email' IN ('camiloarenas135@gmail.com', 'marfamishop@gmail.com'));

-- 3. Policies for 'vip_members' table (Public insert with payload validation)
DROP POLICY IF EXISTS "Allow public insert" ON vip_members;
CREATE POLICY "Allow public insert" ON vip_members
    FOR INSERT
    TO public
    WITH CHECK (
        LENGTH(TRIM(name)) >= 2 AND LENGTH(name) <= 100 AND
        LENGTH(TRIM(whatsapp)) >= 8 AND LENGTH(whatsapp) <= 20
    );

DROP POLICY IF EXISTS "Allow admin read/write" ON vip_members;
CREATE POLICY "Allow admin read/write" ON vip_members
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'email' IN ('camiloarenas135@gmail.com', 'marfamishop@gmail.com'));

-- 4. Policies for 'categories' table
DROP POLICY IF EXISTS "Allow public read categories" ON categories;
CREATE POLICY "Allow public read categories" ON categories
    FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Allow admin write categories" ON categories;
CREATE POLICY "Allow admin write categories" ON categories
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'email' IN ('camiloarenas135@gmail.com', 'marfamishop@gmail.com'));
