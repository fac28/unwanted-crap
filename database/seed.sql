BEGIN;

INSERT INTO categories (id, name)
VALUES
    (1, 'Electronics'),
    (2, 'Clothing'),
    (3, 'Home & Kitchen'),
    (4, 'Sports'),
    (5, 'Unicorn Accessories')
ON CONFLICT DO NOTHING;

-- Insert Products
INSERT INTO products (id, name, price, description, size, colour, image)
VALUES
    (1, 'Left Airpod', 49.99, 'A single airpod', NULL, 'White', '/1.jpg'),
    (2, 'Left Airpod', 49.99, 'A single airpod', NULL, 'Black', '/2.jpg'),
    (3, 'Stained T-Shirt', 9.99, 'Comfortable cotton T-shirt', 'Medium', 'Red', '/3.jpg'),
    (4, 'Rainbow Unicorn Slippers', 19.99, 'Slippers that make you feel like you are walking on rainbows', 'One Size Fits All', 'Rainbow', '/4.jpg'),
    (5, 'Cable knit jumper', 50, 'My nan gave me this jumper. Unidentifiable smell.', 'M', 'Too many', '/5.jpeg'),
    (6, 'Oktoberfest', 5.34, 'Oktoberfest outfit. Only worn thrice. Not washable.', 'One Size Fits All Only If You Are Tiny', 'German Colours?', '/6.jpeg'),
    (7, 'Peanuts', 7.62, 'I`m allergic so I can`t finish them. The rest of the pack is in perfeclty good condition. ', 'Small', 'Beige', '/7.jpeg')
ON CONFLICT DO NOTHING;

-- Associate Products with Categories
INSERT INTO product_category (id, product_id, category_id)
VALUES
    (1, 1, 1), -- Left Airpod belongs to Electronics
    (2, 2, 1), -- Left Airpod belongs to Electronics
    (3, 3, 2), -- T-Shirt belongs to Clothing
    (4, 3, 4), -- T-Shirt belongs to Sports
    (5, 4, 2), -- Slippers belong to Clothing
    (6, 4, 3), -- Slippers belong to Home & Kitchen
    (7, 4, 5), -- Slippers belong to Unicorn Accessories
    (8, 5, 2),
    (9, 6, 2),
    (10, 7, 3)
ON CONFLICT DO NOTHING;

COMMIT;
