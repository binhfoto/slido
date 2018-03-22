const createDoc = (model, item) => {
    return new Promise((resolve, reject) => {
        new model(item).save((err, saved) => {
            return err ? reject(err) : resolve(saved);
        });
    });
};

module.exports = createDoc;