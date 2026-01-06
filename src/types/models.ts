export type TransactionType = "income" | "expense" ;

export type AccountType = "credit_card" | "savings" | "investment" | "checking"  ;

export type AccountSubType =
    | "credit_card_personal"
    | "credit_card_corporate"
    | "savings_emergency"
    | "savings_goal"
    | "investment_stocks"
    | "investment_crypto"
    | "investment_mutual_funds"
    | "checking_personal"
    | "checking_business";

export type Institution = {
    id: string;
    name: string;
    type: string;
};


export type Transaction = {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: TransactionType;
    category: string;
    accountId: string;
    currencyId: string;
    isProjected: boolean;
};

export type ProjectedTransaction = {
    id: string;
    date: string;
    description: string;
    amount: number;
    category: string;
    type: TransactionType;
    accountId: string;
    currencyId: string;
    isProjected: true;
    frequency?: "once" | "monthly" | "yearly";
};

export type AnyTransaction = Transaction | ProjectedTransaction

export type Currency = {
    id: string;
    code: string;
    name: string;
    symbol: string;
};

export type Account = {
    id: string;
    name: string;
    type: AccountType;
    subType: AccountSubType;
    institutionId: string;
    currencyId: string;
    balance?: number;
    createdAt: string;
};

export type AccountSummary = {
    accountId: string;
    accountName: string;
    currencyId: string;
    balance: number;
    totalIncome: number;
    totalExpense: number;
    net: number;
};

export type Category = {
    id: string;
    name: string;
    type: TransactionType;
    parentId?: string;
    description?: string;
    keywords?: string[];
    icon?: string;
    color?: string;
};

// for ML stuff
export type CategoryPattern = {
    id: string;
    categoryId: string;
    pattern: string;
    matchType: "regex" | "contains";
    confidence?: number;
};

//for charting
export type CategoryAggregate = {
    categoryId: string;
    actualAmount: number;
    projectedAmount: number;
    percentage?: number;
};

export type Goal = {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount?: number;
    targetDate?: string;
    accountId?: string;
    createdAt: string;
};

export type MonthlyAggregate = {
    month: string;
    actualIncome: number;
    projectedIncome: number;
    actualExpense: number;
    projectedExpense: number;
};