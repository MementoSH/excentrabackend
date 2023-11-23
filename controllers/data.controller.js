const database = require('../database')
const jwt = require('jsonwebtoken')
const {signature} = require("../config");
const {sign} = require("jsonwebtoken");
class DataController {
    async setData(req, res) {
        try {
            const {
                    organizationName,
                    organizationAddress,
                    organizationEmail,
                    phoneNumber,
                    BusinessType,
                    productDescription,
                    stuffNumber,
                    quarterRevenue,
                    quarterNetProfit,
                    semiAnnualRevenue,
                    semiAnnualNetProfit,
                    annualRevenue,
                    annualNetProfit,
                    operatingExpenses,
                    otherExpenses,
                    profitability,
                    liquidity,
                    financialStability,
                    cashFlow,
                    numberOfAccountReceivable,
                    numberOfAccountPayable,
                    averageCheck,
                    breakEvenPoint,
                    operationalActivities,
                    investmentActivities,
                    financialActivities,
                    amountOfWorkingCapital,
                    warehouseStocks, demand} = req.body
            const email = await jwt.verify(req.headers.authorization, signature).email
            const dataAdded = await database.query("INSERT INTO usersdata (organizationName, organizationAddress, organizationEmail," +
                "phoneNumber, BusinessType, productDescription, stuffNumber, quarterRevenue, quarterNetProfit, semiAnnualRevenue," +
                "semiAnnualNetProfit, annualRevenue, annualNetProfit, operatingExpenses, otherExpenses, profitability, liquidity," +
                "financialStability, cashFlow, numberOfAccountReceivable, numberOfAccountPayable, averageCheck, breakEvenPoint," +
                "operationalActivities, investmentActivities, financialActivities, amountOfWorkingCapital, warehouseStocks, email, demand) values " +
                "($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30) RETURNING *",[
                organizationName,
                organizationAddress,
                organizationEmail,
                phoneNumber,
                BusinessType,
                productDescription,
                stuffNumber,
                quarterRevenue,
                quarterNetProfit,
                semiAnnualRevenue,
                semiAnnualNetProfit,
                annualRevenue,
                annualNetProfit,
                operatingExpenses,
                otherExpenses,
                profitability,
                liquidity,
                financialStability,
                cashFlow,
                numberOfAccountReceivable,
                numberOfAccountPayable,
                averageCheck,
                breakEvenPoint,
                operationalActivities,
                investmentActivities,
                financialActivities,
                amountOfWorkingCapital,
                warehouseStocks,
                email,
                demand
            ])
            res.json(dataAdded.rows[0])
        } catch(e) {
            res.json(e)
        }
    }
    async selectData(req, res) {
        try {
            const select = req.body.select
            const email = await jwt.verify(req.headers.authorization, signature).email
            const fetchedData = await database.query(`SELECT ${select} FROM usersdata WHERE email = '${email}';`)
            res.json(fetchedData.rows[0])
        } catch(e) {
            res.json(e)
        }
    }
    async getAllData(req, res) {
        try {
            const email = await jwt.verify(req.headers.authorization, signature).email
            const fetchedData = await database.query("SELECT * FROM usersdata WHERE email = $1", [email])
            res.json(fetchedData.rows[0])
        } catch(e) {
            res.json(e)
        }
    }
    async updateData(req, res) {
        try {
            const email = await jwt.verify(req.headers.authorization, signature).email
            const {
                organizationName,
                organizationAddress,
                organizationEmail,
                phoneNumber,
                BusinessType,
                productDescription,
                stuffNumber,
                quarterRevenue,
                quarterNetProfit,
                semiAnnualRevenue,
                semiAnnualNetProfit,
                annualRevenue,
                annualNetProfit,
                operatingExpenses,
                otherExpenses,
                profitability,
                liquidity,
                financialStability,
                cashFlow,
                numberOfAccountReceivable,
                numberOfAccountPayable,
                averageCheck,
                breakEvenPoint,
                operationalActivities,
                investmentActivities,
                financialActivities,
                amountOfWorkingCapital,
                warehouseStocks, demand} = req.body
            const dataUpdated = await database.query("UPDATE usersdata set organizationName = $1, organizationAddress = $2, organizationEmail = $3," +
                "phoneNumber = $4, BusinessType = $5, productDescription = $6, stuffNumber = $7, quarterRevenue = $8, quarterNetProfit = $9, semiAnnualRevenue = $10," +
                "semiAnnualNetProfit = $11, annualRevenue = $12, annualNetProfit = $13, operatingExpenses = $14, otherExpenses = $15, profitability = $16, liquidity = $17," +
                "financialStability = $18, cashFlow = $19, numberOfAccountReceivable = $20, numberOfAccountPayable = $21, averageCheck = $22, breakEvenPoint = $23," +
                "operationalActivities = $24, investmentActivities = $25, financialActivities = $26, amountOfWorkingCapital = $27, warehouseStocks = $28, demand = $30 where email = $29 RETURNING *", [
                organizationName,
                organizationAddress,
                organizationEmail,
                phoneNumber,
                BusinessType,
                productDescription,
                stuffNumber,
                quarterRevenue,
                quarterNetProfit,
                semiAnnualRevenue,
                semiAnnualNetProfit,
                annualRevenue,
                annualNetProfit,
                operatingExpenses,
                otherExpenses,
                profitability,
                liquidity,
                financialStability,
                cashFlow,
                numberOfAccountReceivable,
                numberOfAccountPayable,
                averageCheck,
                breakEvenPoint,
                operationalActivities,
                investmentActivities,
                financialActivities,
                amountOfWorkingCapital,
                warehouseStocks,
                email,
                demand
            ])
            res.json(dataUpdated.rows[0])
        } catch(error) {
            res.json(error)
        }
    }
}

module.exports = new DataController()
