import dbConnect from '../lib/database';
import Admin from '../models/Admin';
import Category from '../models/Category';
import MenuItem from '../models/MenuItem';
import Order from '../models/Order';
import Contact from '../models/Contact';
import Review from '../models/Review';

async function migrate() {
    try {
        await dbConnect();
        // This will ensure all models are registered and collections are created
        await Promise.all([
            Admin.init(),
            Category.init(),
            MenuItem.init(),
            Order.init(),
            Contact.init(),
            Review.init(),
        ]);
        console.log('Migration complete: All collections ensured.');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrate();
