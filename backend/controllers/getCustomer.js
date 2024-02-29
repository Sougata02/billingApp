const Customer = require('../models/Customer');

exports.getCustomer = async (req, res) => {
    try {
        let name = req.params.name;
        name = name.toLowerCase();

        if (name === undefined || name === "all") {
            let allCustomers = await Customer.find({});
            res.status(200).json({
                success: true,
                response: allCustomers
            });
        } else {
            const regex = new RegExp(name, 'i');
            let matchedCustomers = await Customer.find({ name: regex });
            res.status(200).json({
                success: true,
                response: matchedCustomers
            });
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
};
