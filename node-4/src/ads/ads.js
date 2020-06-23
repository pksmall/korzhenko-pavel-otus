const {getDatabase} = require('../database/mongo');
const {ObjectID} = require('mongodb');
const Parser = require('rss-parser');

const collectionName = 'ads';

async function insertAd(ad) {
    const database = await getDatabase();
    if (ad.url) {
        const parser = new Parser();
        await parser.parseURL(ad.url,function(err, feed) {
            ad['data'] = feed;
        });
    }
    const {insertedId} = await database.collection(collectionName).insertOne(ad);
    return insertedId;
}

async function getAds() {
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function getUrls() {
    const database = await getDatabase()
    const urls = await database.collection(collectionName).find({})
        .project({ data: false });
    return urls.toArray();
}

async function getData() {
    const database = await getDatabase()
    const urls = await database.collection(collectionName).find({})
        .project({ title: false, url: false });
    return urls.toArray();
}

async function deleteAd(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
        _id: new ObjectID(id),
    });
}

async function updateAd(id, ad) {
    const database = await getDatabase();
    delete ad._id;
    await database.collection(collectionName).update(
        { _id: new ObjectID(id), },
        {
            $set: {
                ...ad,
            },
        },
    );
}

module.exports = {
    insertAd,
    getAds,
    deleteAd,
    updateAd,
    getUrls,
    getData,
};
