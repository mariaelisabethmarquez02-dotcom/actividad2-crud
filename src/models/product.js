const mogoose = require ("mogoose");

const productSchema = new mogoose.Schema(
    {

        name: {type: String, required: true, trim: true },
        price: {type: Number, default: 0}
    },
    {
        timestamps: true
    }
);

MediaSourceHandle.expots = mogoose.model("Product", productSchema);