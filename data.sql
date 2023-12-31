CREATE TABLE usersdata (
            id SERIAL PRIMARY KEY,
            organizationName VARCHAR(255),
            organizationAddress VARCHAR(255),
            organizationEmail VARCHAR(255),
            phoneNumber VARCHAR(255),
            BusinessType VARCHAR(255),
            productDescription VARCHAR(255),
            stuffNumber VARCHAR(255),
            quarterRevenue VARCHAR(255),
            quarterNetProfit VARCHAR(255),
            semiAnnualRevenue VARCHAR(255),
            semiAnnualNetProfit VARCHAR(255),
            annualRevenue VARCHAR(255),
            annualNetProfit VARCHAR(255),
            operatingExpenses VARCHAR(255),
            otherExpenses VARCHAR(255),
            profitability VARCHAR(255),
            liquidity VARCHAR(255),
            financialStability VARCHAR(255),
            cashFlow VARCHAR(255),
            numberOfAccountReceivable VARCHAR(255),
            numberOfAccountPayable VARCHAR(255),
            averageCheck VARCHAR(255),
            breakEvenPoint VARCHAR(255),
            operationalActivities VARCHAR(255),
            investmentActivities VARCHAR(255),
            financialActivities VARCHAR(255),
            amountOfWorkingCapital VARCHAR(255),
            warehouseStocks VARCHAR(255),
            email VARCHAR(255),
            demand VARCHAR(255)
);
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);
