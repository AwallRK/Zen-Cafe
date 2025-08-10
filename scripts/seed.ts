import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import bcrypt from 'bcryptjs';
import dbConnect from '../lib/database';
import Admin from '../models/Admin';
import Category from '../models/Category';
import MenuItem from '../models/MenuItem';
import Order from '../models/Order';
import Contact from '../models/Contact';
import Review from '../models/Review';
import { menuItems } from '../data/menu-items';


const categories = [
    { id: 'tea', name: 'Tea & Beverages', icon: '🍵' },
    { id: 'sweets', name: 'Traditional Sweets', icon: '🍡' },
    { id: 'light', name: 'Light Meals', icon: '🍱' },
    { id: 'seasonal', name: 'Seasonal Specials', icon: '🌸' },
];

async function seed() {
    try {
        await dbConnect();

        // Clear existing data
        await Promise.all([
            Admin.deleteMany({}),
            Category.deleteMany({}),
            MenuItem.deleteMany({}),
            Order.deleteMany({}),
            Contact.deleteMany({}),
            Review.deleteMany({}),
        ]);

        // Seed categories
        await Category.insertMany(categories);

        // Seed menu items
        await MenuItem.insertMany(menuItems);

        // Seed dummy admin with bcrypt password
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await Admin.create({
            name: 'Cafe Admin',
            email: 'admin@zencafe.jp',
            password: hashedPassword,
            role: 'admin',
        });

        // Seed dummy order
        await Order.create({
            orderType: 'pickup',
            cart: [
                {
                    id: menuItems[0].id,
                    name: menuItems[0].name,
                    price: 800,
                    quantity: 1,
                    image: menuItems[0].image,
                },
            ],
            subtotal: 800,
            tax: 80,
            total: 880,
            paymentMethod: 'Credit Card',
            customer: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                phone: '080-1234-5678',
            },
        });

        // Seed dummy contact
        await Contact.create({
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            subject: 'General Inquiry',
            message: 'Hello, I would like to know more about your tea ceremony sessions.',
        });

        // Seed dummy review
        const firstMenuItem = await MenuItem.findOne({ id: menuItems[0].id });
        await Review.create({
            menuItem: firstMenuItem ? firstMenuItem._id : undefined,
            name: 'Anonymous',
            rating: 5,
            comment: 'Amazing matcha and great atmosphere!'
        });

        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error('Seeding failed:', err);
        process.exit(1);
    }
}

seed();
