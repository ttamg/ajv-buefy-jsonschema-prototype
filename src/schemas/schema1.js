var schema = {
  title: "JSON schema definition for all possible facts",
  description:
    "Facts should be provided in the POST data as a JSON object with key value pairs.  The key being the Fact name and the value being the Fact value.  Each possible Fact is a property in this JSON schema.",
  type: "object",
  properties: {
    CheapestChoice: {
      title: "Cheapest self-select ISA provider",
      description:
        "Identifies which of the self-select ISA providers is cheaper for your usage",
      question: "Which self-select ISA provider is cheapest for you?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Select",
      tags: [],
      name: "CheapestChoice",
      allOf: [
        {
          title: "CompanyOptionEnum",
          description: "An enumeration.",
          enum: [
            "Hargreaves Lansdown",
            "Interactive Investor",
            "AJ Bell",
            "Barclays",
            "IG",
          ],
        },
      ],
    },
    ETFsBalance: {
      title: "Value of ETF investments",
      description: "",
      question: "What is the total value of ETF investments in your ISA?",
      helptext: "This can be approximate. Please give the value in £.",
      askable: true,
      placeholder: 0,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "ETFsBalance",
      maximum: 10000000.0,
      type: "number",
    },
    ProportionAssetsAreForeign: {
      title: "Foreign assets proportion",
      description: "",
      question: "What proportion of your assets are foreign currency?",
      helptext:
        "Estimate the percentage of your ISA portfolio that will be in non-GBP assets.  ISA providers charge foreign currency fees and we use this to estimate their charges.",
      askable: true,
      placeholder: null,
      widget: "SliderPercent",
      minimum: 0.0,
      tags: [],
      name: "ProportionAssetsAreForeign",
      multipleOf: 0.1,
      maximum: 1.0,
      type: "number",
    },
    IGISAAnnualCharges: {
      title: "IG annual charges",
      description: "",
      question: "How much will IG charge me per year for my ISA?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "IGISAAnnualCharges",
      type: "number",
    },
    StocksBalance: {
      title: "Value of stocks and shares",
      description: "",
      question:
        "What is the total value of stocks and shares excluding ETFs in your ISA?",
      helptext:
        "Exclude ETFs as these are asked in a separate question if needed.  Values can be approximate. Please give the value in £.",
      askable: true,
      placeholder: 0,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "StocksBalance",
      maximum: 100000000.0,
      type: "number",
    },
    RegularInvestments: {
      title: "Regular monthly investments",
      description: "",
      question: "Will you be making regular monthly investments into the ISA?",
      helptext:
        "These are regular scheduled monthly payments into your ISA that will be automatically invested into assets you select.",
      askable: true,
      placeholder: null,
      widget: "YesNo",
      tags: [],
      name: "RegularInvestments",
      type: "boolean",
    },
    CheapestAnnualCharge: {
      title: "Annual charges from cheapest provider",
      description:
        "Estimates the annual charge from the cheapest self-select ISA provider for your given usage.",
      question:
        "What is the annual charge for the cheapest self-select ISA provider for me?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Input",
      tags: [],
      name: "CheapestAnnualCharge",
      type: "number",
    },
    FundTradesPerYear: {
      title: "Fund trades per year",
      description: "",
      question: "How many fund trades will you make a year?",
      helptext:
        "Only include Fund trades.  We will use this to work out the average trade commission you will pay at different ISA providers.",
      askable: true,
      placeholder: 0,
      widget: "Slider",
      minimum: 0.0,
      tags: [],
      name: "FundTradesPerYear",
      maximum: 200.0,
      type: "number",
    },
    AJBellISAAnnualCharges: {
      title: "AJ Bell annual charges",
      description: "Estimate of charges for AJ Bell ISA",
      question: "How much will AJ Bell charge me per year for my ISA?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "AJBellISAAnnualCharges",
      type: "number",
    },
    ETFTradesPerYear: {
      title: "ETF trades per year",
      description: "",
      question: "How many ETF trades will you make a year?",
      helptext:
        "Only include ETF trades.  Fund and share trades are asked in a separate question.  We will use this to work out the average trade commission you will pay at different ISA providers.",
      askable: true,
      placeholder: 0,
      widget: "Slider",
      minimum: 0.0,
      tags: [],
      name: "ETFTradesPerYear",
      maximum: 200.0,
      type: "number",
    },
    CompaniesToCompare: {
      title: "Companies to compare",
      description: "Includes companies or excludes them from the comparison.",
      question: "Which ISA providers do you want to compare?",
      helptext:
        "Choose at least 2.  Exclude companies you are not interested in.  The fewer companies that are in the comparison, the fewer questions I will need to ask you.",
      askable: true,
      placeholder: [
        "Hargreaves Lansdown",
        "Interactive Investor",
        "AJ Bell",
        "Barclays",
        "IG",
      ],
      widget: "MultiCheckbox",
      tags: [],
      name: "CompaniesToCompare",
      items: {
        title: "CompanyOptionEnum",
        description: "An enumeration.",
        enum: [
          "Hargreaves Lansdown",
          "Interactive Investor",
          "AJ Bell",
          "Barclays",
          "IG",
        ],
      },
      minItems: 2.0,
      type: "array",
    },
    ProportionAssetsAreUSStocks: {
      title: "US stocks proportion",
      description: "",
      question: "What proportion of your assets will be US stocks?",
      helptext:
        "Specifically some ISA providers have a special charge rate for US stocks.  We use this to estimate US fees.  Input the percentage of your portfolio that is in US stocks.",
      askable: true,
      placeholder: null,
      widget: "SliderPercent",
      minimum: 0.0,
      tags: [],
      name: "ProportionAssetsAreUSStocks",
      multipleOf: 0.1,
      maximum: 1.0,
      type: "number",
    },
    StockTradesPerYear: {
      title: "Stocks and shares trades per year",
      description: "",
      question: "How many stocks and shares trades will you make a year?",
      helptext:
        "Only include shares and not ETF trades.  We will use this to work out the average trade commission you will pay at different ISA providers.",
      askable: true,
      placeholder: 0,
      widget: "Slider",
      minimum: 0.0,
      tags: [],
      name: "StockTradesPerYear",
      maximum: 200.0,
      type: "number",
    },
    HargreavesLansdownISAAnnualCharges: {
      title: "Hargreaves Lansdown annual charges",
      description: "Estimate of charges for Hargreaves Lansdown ISA",
      question:
        "How much will Hargreaves Lansdown charge me per year for my ISA?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "HargreavesLansdownISAAnnualCharges",
      type: "number",
    },
    RemainUKResident: {
      title: "UK resident",
      description: "",
      question: "Are you likely to remain an official UK tax resident?",
      helptext:
        "You must be a UK tax resident to take out an ISA.  However in the future if you move abroad, some companies will add a charge for non-UK tax residents.",
      askable: true,
      placeholder: null,
      widget: "YesNo",
      tags: [],
      name: "RemainUKResident",
      type: "boolean",
    },
    AverageTradeSize: {
      title: "Average trade size",
      description: "",
      question: "What is your average trade size?",
      helptext: "Estimate the typical trade size in £.",
      askable: true,
      placeholder: 5000,
      widget: "Slider",
      tags: [],
      exclusiveMinimum: 0.0,
      name: "AverageTradeSize",
      maximum: 25000.0,
      type: "number",
    },
    InteractiveInvestorISAAnnualCharges: {
      title: "Interactive Investor annual charges",
      description: "Estimate of charges for Interactive Investor ISA",
      question:
        "How much will Interactive Investor charge me per year for my ISA?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "InteractiveInvestorISAAnnualCharges",
      type: "number",
    },
    ProportionTelephoneTrades: {
      title: "Telephone trades proportion",
      description: "",
      question: "What proportion of your trades will be made by telephone?",
      helptext:
        "Enter a percentage which will be phone trades in a typical year.",
      askable: true,
      placeholder: null,
      widget: "SliderPercent",
      minimum: 0.0,
      tags: [],
      name: "ProportionTelephoneTrades",
      multipleOf: 0.25,
      maximum: 1.0,
      type: "number",
    },
    FundsBalance: {
      title: "Value of fund investments",
      description: "",
      question: "What is the total value of fund investments in your ISA?",
      helptext: "This can be approximate. Please give the value in £.",
      askable: true,
      placeholder: 0,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "FundsBalance",
      maximum: 10000000.0,
      type: "number",
    },
    BarclaysISAAnnualCharges: {
      title: "Barclays annual charges",
      description: "",
      question: "How much will Barclays charge me per year for my ISA?",
      helptext: "",
      askable: false,
      placeholder: null,
      widget: "Input",
      minimum: 0.0,
      tags: [],
      name: "BarclaysISAAnnualCharges",
      type: "number",
    },
  },
  additionalProperties: false,
};

export default schema;
