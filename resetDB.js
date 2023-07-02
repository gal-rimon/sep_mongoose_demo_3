const db = require('./db');
const ProductModel = require('./models/Product');
const CategoryModel = require('./models/Category');
const UserModel = require('./models/User');

main();

async function cleanDB() {
    console.log('cleaning...');

    await UserModel.deleteMany();
    await ProductModel.deleteMany();
    await CategoryModel.deleteMany();

    console.log('clean!');
}

async function main() {
    db.connect();
    await cleanDB();
    await db.disconnect();
}

