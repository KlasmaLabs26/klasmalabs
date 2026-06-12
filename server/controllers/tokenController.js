const balances = {};

exports.mintTokens = (req, res) => {
    console.log("Mint controller hit");
    console.log(req.body);

    const { address, amount } = req.body;

    if (!address || amount <= 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid address or amount",
        });
    }

    balances[address] = (balances[address] || 0) + Number(amount);

    return res.status(200).json({
        success: true,
        message: "Tokens minted successfully",
        balance: balances[address],
    });
};

exports.transferTokens = (req, res) => {
    const { from, to, amount } = req.body;

    if (!balances[from] || balances[from] < amount) {
        return res.status(400).json({
            success: false,
            message: "Insufficient balance",
        });
    }

    balances[from] -= Number(amount);

    balances[to] = (balances[to] || 0) + Number(amount);

    res.status(200).json({
        success: true,
        message: "Transfer successful",
    });
};

exports.getBalance = (req, res) => {
    const { address } = req.params;

    res.status(200).json({
        success: true,
        address,
        balance: balances[address] || 0,
    });
};