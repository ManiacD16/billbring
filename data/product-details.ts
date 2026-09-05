export type ProductMetric = {
  value: string;
  label: string;
  note: string;
};

export type ProductContentItem = {
  title: string;
  description: string;
};

export type ProductStep = {
  title: string;
  description: string;
};

export type ProductDetail = {
  eyebrow: string;
  overviewTitle: string;
  overview: string[];
  metrics: ProductMetric[];
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: ProductContentItem[];
  whyTitle: string;
  whyIntro: string;
  benefits: ProductContentItem[];
  steps: ProductStep[];
  useCases: string[];
  footnote?: string;
};

export const productDetails: Record<string, ProductDetail> = {
  paybring: {
    eyebrow: "Online payment acceptance",
    overviewTitle: "Turn checkout into a smoother payment experience.",
    overview: [
      "PayBring is billbring's payment collection layer for businesses that want to accept online payments without building a fragmented payment stack. It is designed to bring payment initiation, customer checkout and transaction visibility into one connected flow.",
      "Whether you are launching a digital storefront, collecting service payments or embedding payments inside your platform, PayBring gives your team a clearer way to move from payment request to payment status while keeping the experience simple for customers.",
    ],
    metrics: [
      { value: "MULTI-MODE", label: "PAYMENT ACCEPTANCE", note: "Support customer-friendly digital payment journeys." },
      { value: "API", label: "READY", note: "Designed for direct platform and application integration." },
      { value: "LIVE", label: "STATUS", note: "Keep payment outcomes visible to your operations team." },
      { value: "ONE", label: "COLLECTION FLOW", note: "Reduce complexity across checkout and payment tracking." },
    ],
    capabilitiesTitle: "Everything needed around the payment moment.",
    capabilitiesIntro: "PayBring is structured to help businesses create a dependable collection journey from customer action to operational visibility.",
    capabilities: [
      { title: "Flexible checkout journeys", description: "Create a straightforward payment experience across web and digital service flows without forcing customers through unnecessary steps." },
      { title: "Transaction visibility", description: "Give teams a clearer view of initiated, successful and pending payment activity so follow-up becomes easier." },
      { title: "Integration-first architecture", description: "Connect payment collection into your existing product using a developer-friendly API-led approach." },
      { title: "Operational consistency", description: "Bring collections into a common workflow so customer support, reconciliation and reporting can work from the same payment context." },
    ],
    whyTitle: "Why businesses choose PayBring",
    whyIntro: "A payment gateway should do more than process a transaction. It should make the entire collection experience easier to integrate, operate and understand.",
    benefits: [
      { title: "Built for digital businesses", description: "A clean payment layer that fits marketplaces, platforms, service businesses and online commerce experiences." },
      { title: "Designed for conversion clarity", description: "Keep the checkout journey focused, readable and easy for customers to complete." },
      { title: "One connected ecosystem", description: "Pair payment acceptance with billbring payout, UPI and financial-service products as your business expands." },
      { title: "Supportable operations", description: "Use clear transaction states and structured workflows to make day-to-day payment operations easier to manage." },
    ],
    steps: [
      { title: "Create the payment", description: "Your application initiates a payment request for the customer." },
      { title: "Customer completes checkout", description: "The customer selects an available payment method and authorizes the transaction." },
      { title: "Track the outcome", description: "Use the resulting payment status in your order, service or collection workflow." },
    ],
    useCases: ["E-commerce checkout", "Service payments", "Marketplace collections", "Subscription or invoice journeys", "Embedded payments"],
  },

  bringupi: {
    eyebrow: "UPI payment collection",
    overviewTitle: "Make UPI a natural part of how your customers pay.",
    overview: [
      "BringUPI helps businesses accept UPI payments through a connected digital collection experience. It is designed for fast customer action, simple integration and clearer transaction tracking across online and assisted payment journeys.",
      "Instead of treating UPI as a separate payment rail, BringUPI lets you make it part of your wider billbring collection stack so teams can build a more consistent experience across products and channels.",
    ],
    metrics: [
      { value: "UPI", label: "NATIVE", note: "A payment journey built around India's familiar UPI experience." },
      { value: "FAST", label: "CUSTOMER FLOW", note: "Reduce friction from payment intent to confirmation." },
      { value: "API", label: "INTEGRATION", note: "Embed UPI collection into your own product experience." },
      { value: "CLEAR", label: "TRANSACTION VIEW", note: "Keep payment states easier for teams to follow." },
    ],
    capabilitiesTitle: "UPI collection without unnecessary complexity.",
    capabilitiesIntro: "BringUPI is built to help digital businesses and service platforms create simple UPI payment journeys while keeping the operational side structured.",
    capabilities: [
      { title: "UPI-first experience", description: "Offer a familiar payment route for customers who prefer UPI for everyday digital transactions." },
      { title: "Payment status handling", description: "Use clear transaction states to connect the payment result with your own order or service flow." },
      { title: "Platform integration", description: "Add UPI collection to web, app or service journeys through an integration-friendly approach." },
      { title: "Unified collections", description: "Keep UPI within the same broader ecosystem as gateway, QR and payout services instead of operating it in isolation." },
    ],
    whyTitle: "Why choose BringUPI",
    whyIntro: "UPI works best when the experience is fast for customers and predictable for the teams operating it behind the scenes.",
    benefits: [
      { title: "Customer familiarity", description: "Use a payment behavior customers already understand, helping reduce unnecessary checkout friction." },
      { title: "Operational visibility", description: "Give teams a clearer way to see and act on transaction status throughout the payment lifecycle." },
      { title: "Built to connect", description: "Bring UPI into your existing applications rather than forcing your business to work around a separate system." },
      { title: "Expandable ecosystem", description: "Combine UPI collection with BringQR, PayBring and BringPayout as your payment workflows grow." },
    ],
    steps: [
      { title: "Initiate UPI payment", description: "Your product creates the payment request for the required amount." },
      { title: "Customer authorizes", description: "The customer completes the payment using their preferred supported UPI experience." },
      { title: "Receive payment status", description: "Use the resulting status to update your checkout, order or service workflow." },
    ],
    useCases: ["Online checkout", "Invoice collections", "Service payments", "Merchant collections", "App-based payments"],
  },

  bringqr: {
    eyebrow: "QR payment acceptance",
    overviewTitle: "Turn a simple scan into a connected payment journey.",
    overview: [
      "BringQR gives merchants and businesses a straightforward way to accept UPI-based QR payments in physical, assisted and hybrid customer journeys. Customers scan, review and pay while the business keeps the transaction connected to its operating flow.",
      "The product is designed for teams that want the simplicity of QR at the front end without losing visibility and structure behind the payment experience.",
    ],
    metrics: [
      { value: "SCAN", label: "& PAY", note: "A familiar payment action that keeps the customer journey simple." },
      { value: "UPI", label: "CONNECTED", note: "Use QR as a direct route into a UPI payment experience." },
      { value: "LOW", label: "FRICTION", note: "Reduce hardware dependency for many payment collection scenarios." },
      { value: "VISIBLE", label: "PAYMENT STATE", note: "Keep QR payment outcomes connected to your workflow." },
    ],
    capabilitiesTitle: "A lightweight payment surface with a stronger backend flow.",
    capabilitiesIntro: "BringQR is ideal when the customer experience needs to stay simple but the business still needs a structured way to operate payments.",
    capabilities: [
      { title: "Quick customer action", description: "Let customers start payment by scanning a QR rather than navigating a longer checkout process." },
      { title: "Physical + digital journeys", description: "Use QR payments at counters, service desks, events or other in-person collection points." },
      { title: "Transaction-linked workflow", description: "Keep payment status connected to your business process so teams can follow what happened after the scan." },
      { title: "Easy ecosystem pairing", description: "Combine QR with UPI, gateway and POS products to support different customer payment preferences." },
    ],
    whyTitle: "Why choose BringQR",
    whyIntro: "QR should feel effortless to the customer and still give the business enough structure to operate confidently.",
    benefits: [
      { title: "Simple at the counter", description: "A clean scan-and-pay experience that fits naturally into everyday merchant interactions." },
      { title: "Less payment friction", description: "Help customers move from purchase decision to payment without unnecessary steps." },
      { title: "Part of one payment stack", description: "Use BringQR alongside other billbring collection products rather than managing disconnected payment channels." },
      { title: "Designed for scale", description: "A repeatable QR collection approach that can support multiple merchant and service use cases." },
    ],
    steps: [
      { title: "Present the QR", description: "Display the relevant QR within the merchant or service journey." },
      { title: "Customer scans and pays", description: "The customer uses a supported UPI app to complete the transaction." },
      { title: "Update the transaction", description: "Use payment status to complete the sale or service workflow." },
    ],
    useCases: ["Retail counters", "Service desks", "Merchant payments", "Event collections", "Assisted commerce"],
  },

  billbring: {
    eyebrow: "Bill payment & recharge",
    overviewTitle: "One service layer for everyday bills and recharges.",
    overview: [
      "billbring is designed for businesses, retailers and assisted-service networks that want to provide bill payment and recharge journeys from one connected platform. It brings commonly requested consumer payment services into a structured operating experience.",
      "From bill lookup to payment completion, the goal is to help partners serve customers more efficiently while keeping service activity easier to understand and manage.",
    ],
    metrics: [
      { value: "BBPS", label: "BILL PAYMENTS", note: "Support structured bill-payment journeys where services are enabled." },
      { value: "MULTI", label: "SERVICE TYPES", note: "Bring different bill and recharge needs into one experience." },
      { value: "ASSISTED", label: "OR DIGITAL", note: "Suitable for retailer-led and direct digital service models." },
      { value: "ONE", label: "SERVICE FLOW", note: "Reduce fragmentation across bill payment operations." },
    ],
    capabilitiesTitle: "Built for high-frequency everyday service needs.",
    capabilitiesIntro: "billbring helps partners create a consistent customer journey across recurring bills and recharge services without building separate experiences for every category.",
    capabilities: [
      { title: "Bill payment journeys", description: "Support customer bill-payment workflows for enabled biller categories through a structured service experience." },
      { title: "Recharge services", description: "Offer commonly used recharge journeys as part of the same retailer or digital platform." },
      { title: "Assisted-service ready", description: "Give agents and retailers a clear operating flow for serving customers at the point of need." },
      { title: "Service activity visibility", description: "Keep transaction status and service outcomes clearer for day-to-day operational handling." },
    ],
    whyTitle: "Why choose billbring",
    whyIntro: "Bill payment is a repeat-use service. The experience needs to be simple for the customer and efficient for the partner delivering it.",
    benefits: [
      { title: "More services from one platform", description: "Let customers access multiple bill payment and recharge journeys without forcing partners to maintain separate systems." },
      { title: "Designed for retailer networks", description: "A service flow that works for assisted financial-service businesses as well as digital channels." },
      { title: "Clearer transaction handling", description: "Use structured states and service context to make follow-up easier when a customer needs support." },
      { title: "Cross-sell naturally", description: "Pair bill payment with AEPS, DMT, travel, insurance and other billbring products depending on your business model." },
    ],
    steps: [
      { title: "Select the service", description: "Choose the required biller or recharge category available in the journey." },
      { title: "Enter customer details", description: "Provide the information required to identify the bill, account or recharge request." },
      { title: "Complete and confirm", description: "Process the payment and show the resulting service status to the customer." },
    ],
    useCases: ["Retailer service counters", "Utility bill payments", "Mobile recharge", "DTH recharge", "Digital service portals"],
    footnote: "Availability of billers, recharge operators and categories depends on enabled integrations and applicable service coverage.",
  },

  bringpayout: {
    eyebrow: "Business payouts",
    overviewTitle: "Move money to the people your business depends on.",
    overview: [
      "BringPayout helps businesses organize outgoing payments to vendors, merchants, employees and partners through a more structured payout workflow. Instead of handling payouts as disconnected manual tasks, teams can bring initiation and transaction visibility into one operating layer.",
      "It is designed for platforms and businesses that need to make recurring or operational payments while keeping the payout process easier to integrate, track and support.",
    ],
    metrics: [
      { value: "BULK", label: "READY", note: "Structure repeated payout requirements without repetitive manual work." },
      { value: "API", label: "LED", note: "Connect payout creation to your own platform or backend workflow." },
      { value: "TRACK", label: "STATUS", note: "Keep outgoing payment states visible to operations teams." },
      { value: "ONE", label: "PAYOUT LAYER", note: "Centralize multiple business payout use cases." },
    ],
    capabilitiesTitle: "A cleaner operating model for outgoing payments.",
    capabilitiesIntro: "BringPayout helps teams reduce payout fragmentation and connect payment execution with the systems that trigger and track it.",
    capabilities: [
      { title: "Vendor & merchant payouts", description: "Create repeatable payout journeys for suppliers, sellers, partners and other business recipients." },
      { title: "Programmatic payouts", description: "Trigger eligible payout workflows from your own systems using an API-led integration model." },
      { title: "Transaction tracking", description: "Keep payout states visible so finance and support teams can understand what has happened." },
      { title: "Operational controls", description: "Structure payout initiation and review around a consistent business process instead of ad-hoc transfers." },
    ],
    whyTitle: "Why choose BringPayout",
    whyIntro: "Payout operations become harder as transaction volume, recipients and internal workflows grow. BringPayout is designed to keep that complexity manageable.",
    benefits: [
      { title: "Built for repeat operations", description: "Create payout workflows that can be reused across different recipient groups and business scenarios." },
      { title: "Connected to your platform", description: "Reduce manual handoffs by linking payout initiation to the systems where business events already happen." },
      { title: "Clear recipient journey", description: "Keep the payment purpose and status easier to understand for internal teams handling payout questions." },
      { title: "Works with your collection stack", description: "Use BringPayout alongside PayBring and BringUPI to connect incoming and outgoing money movement." },
    ],
    steps: [
      { title: "Create the payout", description: "Submit the eligible recipient and payout details through your configured workflow." },
      { title: "Process the transfer", description: "The payout moves through the enabled payment rail and transaction process." },
      { title: "Track the result", description: "Use the returned status to update finance, merchant or partner workflows." },
    ],
    useCases: ["Vendor payouts", "Marketplace seller payouts", "Partner commissions", "Employee reimbursements", "Operational disbursements"],
  },

  bringremit: {
    eyebrow: "Domestic money transfer",
    overviewTitle: "A more structured way to serve domestic remittance needs.",
    overview: [
      "BringRemit supports domestic money transfer journeys for businesses and assisted-service networks that help customers send money within India. It is designed to turn a commonly requested financial service into a clear, guided operating flow.",
      "For retailer and agent networks, that means a service experience focused on recipient details, transaction progression and customer communication rather than a collection of disconnected steps.",
    ],
    metrics: [
      { value: "DMT", label: "FOCUSED", note: "Designed around domestic money transfer use cases." },
      { value: "GUIDED", label: "SERVICE FLOW", note: "Help agents move through the transfer journey consistently." },
      { value: "TRACK", label: "TRANSACTION", note: "Keep transfer status easier for teams to follow." },
      { value: "RETAIL", label: "READY", note: "Fits assisted financial-service environments." },
    ],
    capabilitiesTitle: "Domestic transfer journeys designed for assisted service.",
    capabilitiesIntro: "BringRemit helps retailers and platforms offer DMT through a repeatable workflow that is easier for operators to follow and customers to understand.",
    capabilities: [
      { title: "Recipient-led transfer flow", description: "Capture the details needed for a domestic transfer in a clear, guided sequence." },
      { title: "Retailer-friendly operation", description: "Give service agents a focused workflow suited to everyday assisted transactions." },
      { title: "Transaction status visibility", description: "Keep transfer progress and outcomes clear enough for customer support and follow-up." },
      { title: "Ecosystem connectivity", description: "Combine DMT with AEPS, cash withdrawal, bill payment and other retailer-focused services." },
    ],
    whyTitle: "Why choose BringRemit",
    whyIntro: "Domestic remittance is often delivered through assisted channels where speed, clarity and operator confidence matter at every step.",
    benefits: [
      { title: "Simple for agents", description: "A guided process helps reduce operational confusion during frequent transfer requests." },
      { title: "Clearer for customers", description: "Keep the transfer purpose, recipient and resulting status understandable throughout the service interaction." },
      { title: "Part of a broader retailer stack", description: "Offer remittance alongside the other services customers already request from your counter or platform." },
      { title: "Integration-minded", description: "Connect DMT workflows into your own service platform instead of running them as an isolated tool." },
    ],
    steps: [
      { title: "Capture transfer details", description: "Enter the sender, recipient and transaction information required by the enabled service flow." },
      { title: "Initiate the remittance", description: "Submit the domestic transfer through the configured transaction journey." },
      { title: "Share the status", description: "Use the resulting status to close the service interaction or guide any required follow-up." },
    ],
    useCases: ["Retailer DMT", "Assisted remittance", "Agent networks", "Financial service kiosks", "Domestic transfer platforms"],
    footnote: "Domestic money transfer services are subject to enabled banking/payment partners, applicable limits and compliance requirements.",
  },

  bringwallet: {
    eyebrow: "Digital wallet layer",
    overviewTitle: "Keep value and everyday payment activity in one connected experience.",
    overview: [
      "BringWallet is designed as a digital wallet layer for businesses and platforms that want a simpler way to organize eligible stored-value and payment journeys. It can act as a familiar customer-facing balance experience while connecting transactions to the wider billbring ecosystem.",
      "The focus is on clarity: helping users understand available value, recent activity and the next action they can take without making the wallet experience feel complicated.",
    ],
    metrics: [
      { value: "ONE", label: "BALANCE VIEW", note: "Create a simple place for users to understand available wallet value." },
      { value: "PAY", label: "& MOVE", note: "Support eligible wallet-led transaction journeys." },
      { value: "TRACK", label: "ACTIVITY", note: "Keep wallet transactions easier for users and teams to follow." },
      { value: "CONNECTED", label: "ECOSYSTEM", note: "Use the wallet alongside other billbring service flows." },
    ],
    capabilitiesTitle: "A wallet experience designed around clarity.",
    capabilitiesIntro: "BringWallet helps products present value, activity and money movement in a familiar format while keeping the operating model connected to the wider platform.",
    capabilities: [
      { title: "Balance-led interface", description: "Give users a clear view of available wallet value and recent transaction activity." },
      { title: "Payment journeys", description: "Use the wallet as part of eligible payment and service interactions within your application." },
      { title: "Transaction history", description: "Help users understand what changed in their wallet and why through a structured activity view." },
      { title: "Platform connectivity", description: "Pair the wallet experience with collections, payouts and service products where your use case requires it." },
    ],
    whyTitle: "Why choose BringWallet",
    whyIntro: "A wallet should feel understandable at a glance. BringWallet is designed to keep the user's balance and activity experience focused while fitting into a broader fintech platform.",
    benefits: [
      { title: "Familiar customer experience", description: "Present balances and transaction activity using patterns users already understand." },
      { title: "Designed to stay connected", description: "Keep the wallet linked to other customer actions instead of making it a standalone destination." },
      { title: "Operational visibility", description: "Give product and support teams a clearer transaction context when users need assistance." },
      { title: "Flexible use-case layer", description: "Adapt the wallet experience to the eligible payment, service or partner model your product needs." },
    ],
    steps: [
      { title: "User accesses wallet", description: "Show the available wallet experience and relevant balance information." },
      { title: "User takes an action", description: "Start an eligible payment, service or transfer journey from the wallet context." },
      { title: "Activity is updated", description: "Reflect the resulting transaction in the user's wallet activity view." },
    ],
    useCases: ["Platform wallets", "Customer balance experiences", "Service ecosystems", "Closed-loop journeys", "Partner applications"],
    footnote: "Wallet functionality and permitted use cases depend on the configured model, partner setup and applicable regulatory requirements.",
  },

  bringaeps: {
    eyebrow: "Aadhaar-enabled assisted banking",
    overviewTitle: "Bring essential banking services closer to the customer.",
    overview: [
      "BringAEPS is designed for assisted-service networks that deliver Aadhaar Enabled Payment System journeys through retailers and agents. It provides a guided service flow for eligible Aadhaar-based banking transactions while keeping the operator experience clear and structured.",
      "For businesses serving customers beyond traditional digital-only channels, BringAEPS can become an important part of a broader financial-inclusion service stack alongside DMT, bill payment and assisted cash services.",
    ],
    metrics: [
      { value: "AEPS", label: "ENABLED FLOW", note: "Built around Aadhaar-enabled assisted banking journeys." },
      { value: "ASSISTED", label: "SERVICE", note: "Designed for retailer and agent-led customer interactions." },
      { value: "BIOMETRIC", label: "JOURNEY", note: "Supports biometric-led transaction steps where required." },
      { value: "CLEAR", label: "STATUS", note: "Keep transaction outcomes easier for operators to understand." },
    ],
    capabilitiesTitle: "Assisted banking, presented as a clear operator journey.",
    capabilitiesIntro: "BringAEPS is focused on helping service networks make Aadhaar-enabled transactions easier to operate consistently at the last mile.",
    capabilities: [
      { title: "Aadhaar-based service flow", description: "Guide the operator through the information and biometric steps required for enabled AEPS transactions." },
      { title: "Retailer operating experience", description: "Use a focused interface suited to service counters, agent networks and assisted financial-service locations." },
      { title: "Transaction outcome visibility", description: "Help agents quickly understand whether the requested banking service completed or needs follow-up." },
      { title: "Financial-inclusion stack", description: "Combine AEPS with DMT, bill payment, cash withdrawal and other assisted services in one ecosystem." },
    ],
    whyTitle: "Why choose BringAEPS",
    whyIntro: "Last-mile financial services need an interface that works for operators under real customer-service pressure. BringAEPS is designed around that assisted context.",
    benefits: [
      { title: "Built for assisted journeys", description: "The product experience is centered on the retailer or agent serving a customer at the point of need." },
      { title: "Clear step-by-step flow", description: "Help operators complete required transaction steps in a consistent order." },
      { title: "One service ecosystem", description: "Give retailers more reasons to serve customers by connecting AEPS with other high-frequency financial services." },
      { title: "Operational context", description: "Keep transaction status and service details clear enough for support, reconciliation and customer communication." },
    ],
    steps: [
      { title: "Select AEPS service", description: "Choose the Aadhaar-enabled banking service available to the customer." },
      { title: "Complete required verification", description: "Capture the required customer and biometric inputs through the enabled flow." },
      { title: "Process and show status", description: "Complete the transaction journey and present the resulting status to the operator and customer." },
    ],
    useCases: ["Retailer banking services", "Agent networks", "Rural service points", "Assisted cash access", "Financial inclusion platforms"],
    footnote: "AEPS availability, transaction types and limits are subject to enabled banking partners, NPCI/banking rules and applicable compliance requirements.",
  },

  bringcash: {
    eyebrow: "Assisted cash withdrawal",
    overviewTitle: "Make cash access easier to deliver at the service counter.",
    overview: [
      "BringCash is designed for retailer and agent networks that provide assisted cash withdrawal services to customers. It turns the withdrawal journey into a clear service flow that can sit alongside the other day-to-day financial services offered from the same counter.",
      "The product focuses on operator simplicity, transaction visibility and a consistent customer-service experience so cash withdrawal does not feel like a separate, manual process.",
    ],
    metrics: [
      { value: "CASH", label: "ACCESS", note: "Support eligible assisted withdrawal journeys at service points." },
      { value: "RETAIL", label: "READY", note: "Designed for agent and retailer operating environments." },
      { value: "GUIDED", label: "FLOW", note: "Keep the withdrawal process easy for operators to follow." },
      { value: "TRACK", label: "STATUS", note: "Keep transaction outcomes visible for customer support." },
    ],
    capabilitiesTitle: "Cash withdrawal as part of a broader service business.",
    capabilitiesIntro: "BringCash helps retailers deliver eligible withdrawal services through an operator-focused workflow that fits the reality of assisted customer interactions.",
    capabilities: [
      { title: "Assisted withdrawal workflow", description: "Guide the operator through the steps needed to process an eligible customer cash withdrawal." },
      { title: "Retailer-first interface", description: "Keep the service easy to navigate even when agents are handling multiple products throughout the day." },
      { title: "Transaction result clarity", description: "Present a clear transaction outcome so the operator knows how to complete the customer interaction." },
      { title: "Cross-service opportunity", description: "Offer cash withdrawal alongside AEPS, DMT, bill payment, recharge and other high-frequency services." },
    ],
    whyTitle: "Why choose BringCash",
    whyIntro: "Assisted cash access is about reliability at the customer touchpoint. The operator needs a fast, understandable process and clear transaction context.",
    benefits: [
      { title: "Designed around the counter", description: "A practical workflow for retailers and agents serving customers in real time." },
      { title: "Easy to learn", description: "A focused service journey helps teams understand what to do at each stage of the withdrawal request." },
      { title: "Works with assisted banking", description: "Use BringCash alongside BringAEPS and BringRemit to create a stronger financial-service offering." },
      { title: "Clearer support handling", description: "Transaction status and service context help operators respond better when a customer has a question." },
    ],
    steps: [
      { title: "Start withdrawal request", description: "Select the configured cash withdrawal service and enter the required customer details." },
      { title: "Complete authorization", description: "Follow the enabled verification and transaction steps for the withdrawal request." },
      { title: "Confirm the outcome", description: "Use the resulting transaction status to complete the cash service interaction." },
    ],
    useCases: ["Retailer cash withdrawal", "Agent banking points", "Assisted financial services", "Last-mile cash access", "Multi-service kiosks"],
    footnote: "Cash withdrawal availability and limits depend on the enabled banking/payment arrangement and applicable compliance requirements.",
  },

  bringpos: {
    eyebrow: "POS & mPOS payments",
    overviewTitle: "Bring digital payment acceptance to the physical counter.",
    overview: [
      "BringPOS helps merchants accept card and digital payments in face-to-face customer journeys using POS or mobile POS experiences. It is designed to connect the in-store payment moment with the same broader operating mindset billbring applies across digital collections.",
      "For retailers, service counters and mobile merchants, BringPOS creates a familiar payment flow while helping the business keep physical payment activity easier to understand alongside its other channels.",
    ],
    metrics: [
      { value: "POS", label: "& mPOS", note: "Support counter-based and mobile payment acceptance models." },
      { value: "CARD", label: "READY", note: "Serve customers who prefer card-led payment journeys." },
      { value: "IN-STORE", label: "PAYMENTS", note: "Connect physical payment acceptance to your business workflow." },
      { value: "ONE", label: "PAYMENT VIEW", note: "Bring physical and digital collection thinking closer together." },
    ],
    capabilitiesTitle: "Payment acceptance for real-world merchant interactions.",
    capabilitiesIntro: "BringPOS is built for businesses that need a dependable counter experience without treating physical payments as an entirely separate operating stack.",
    capabilities: [
      { title: "Counter payment journeys", description: "Create a straightforward payment experience for retail, service and assisted-commerce environments." },
      { title: "Mobile acceptance scenarios", description: "Support mPOS-style use cases where the point of payment needs to move with the merchant or operator." },
      { title: "Transaction visibility", description: "Keep completed and pending payment activity easier for teams to follow in day-to-day operations." },
      { title: "Omnichannel pairing", description: "Use POS alongside QR, UPI and online gateway products to serve customers across more payment contexts." },
    ],
    whyTitle: "Why choose BringPOS",
    whyIntro: "Customers do not think in payment channels. BringPOS helps businesses offer a strong physical payment option that can live beside their digital collection stack.",
    benefits: [
      { title: "Built for face-to-face commerce", description: "A payment experience designed for the speed and clarity needed at a physical point of sale." },
      { title: "More customer choice", description: "Add card-led acceptance alongside UPI and QR so customers can use the payment method that suits them." },
      { title: "Consistent operations", description: "Keep physical payment activity connected to the same wider business processes as your other payment products." },
      { title: "Flexible merchant use cases", description: "Suitable for counters, service desks, assisted commerce and mobile merchant scenarios." },
    ],
    steps: [
      { title: "Enter the amount", description: "The merchant starts the payment from the configured POS or mPOS journey." },
      { title: "Customer authorizes", description: "The customer completes the card or enabled digital payment interaction." },
      { title: "Confirm the sale", description: "Use the payment status to complete the merchant transaction and related workflow." },
    ],
    useCases: ["Retail checkout", "Service counters", "Mobile merchants", "Assisted commerce", "Omnichannel businesses"],
  },

  bringtravel: {
    eyebrow: "Travel booking services",
    overviewTitle: "Add travel booking to the services your customers already use.",
    overview: [
      "BringTravel helps retailers, agents and digital platforms offer travel booking services from within the billbring ecosystem. It is designed to make travel a natural extension of a multi-service business rather than a separate operating product.",
      "Partners can use the travel journey to help customers search and book supported transport options while keeping booking activity within a familiar service environment.",
    ],
    metrics: [
      { value: "SEARCH", label: "TO BOOK", note: "Create a guided journey from travel discovery to booking." },
      { value: "MULTI", label: "TRAVEL TYPES", note: "Support enabled travel categories from a single service experience." },
      { value: "AGENT", label: "READY", note: "Designed for assisted as well as digital booking journeys." },
      { value: "ONE", label: "SERVICE HUB", note: "Keep travel alongside payments and financial services." },
    ],
    capabilitiesTitle: "Travel services that fit a multi-service platform.",
    capabilitiesIntro: "BringTravel is designed for partners that want to expand customer utility without introducing a disconnected booking experience.",
    capabilities: [
      { title: "Search-led booking journey", description: "Help customers move from origin, destination and date selection toward an available travel option." },
      { title: "Assisted booking support", description: "Give agents and retailers a clear flow for helping customers complete travel bookings." },
      { title: "Booking visibility", description: "Keep booking information and status easier to reference during customer service interactions." },
      { title: "Cross-service convenience", description: "Offer travel from the same platform where customers already access bill payment, remittance and other services." },
    ],
    whyTitle: "Why choose BringTravel",
    whyIntro: "For service businesses, travel can increase customer utility and repeat engagement. The key is making the booking experience simple enough to operate every day.",
    benefits: [
      { title: "Expand your service portfolio", description: "Add travel as another customer-facing service without creating a completely separate business workflow." },
      { title: "Designed for assisted sales", description: "Give agents a structured booking journey for customers who prefer help at the point of purchase." },
      { title: "One partner ecosystem", description: "Keep travel connected to the billbring products already used across your service business." },
      { title: "Customer-friendly workflow", description: "Organize search, selection and booking information into a journey that is easy to understand." },
    ],
    steps: [
      { title: "Search the journey", description: "Enter the route, date and traveler requirements for the enabled travel category." },
      { title: "Select an option", description: "Review available choices and capture the traveler information required for booking." },
      { title: "Book and confirm", description: "Complete the payment and booking steps, then present the resulting booking status." },
    ],
    useCases: ["Travel retailers", "Agent networks", "Multi-service stores", "Digital booking portals", "Assisted travel sales"],
    footnote: "Travel inventory, routes, operators and booking terms depend on the enabled travel partners and availability at the time of booking.",
  },

  bringinsure: {
    eyebrow: "Digital insurance distribution",
    overviewTitle: "Make insurance easier to discover through the channels customers already trust.",
    overview: [
      "BringInsure is designed for businesses and service networks that want to offer access to eligible insurance products through a digital or assisted journey. It brings product discovery and application guidance into the same broader service ecosystem customers already use.",
      "The experience is focused on clarity: helping partners explain available options, capture the required customer information and guide the user toward the next step with the relevant insurance provider or partner.",
    ],
    metrics: [
      { value: "DIGITAL", label: "DISCOVERY", note: "Present enabled insurance offerings through a structured journey." },
      { value: "ASSISTED", label: "SELLING", note: "Support agent-led customer conversations where appropriate." },
      { value: "GUIDED", label: "APPLICATION", note: "Keep required information and next steps easier to follow." },
      { value: "PARTNER", label: "LED", note: "Connect customers with eligible insurance products from enabled partners." },
    ],
    capabilitiesTitle: "Insurance access designed for understandable customer journeys.",
    capabilitiesIntro: "BringInsure helps partners add insurance to their service offering while keeping the discovery and application experience structured and approachable.",
    capabilities: [
      { title: "Product discovery", description: "Present enabled insurance categories and options in a way that is easier for customers and agents to understand." },
      { title: "Assisted application journey", description: "Guide the collection of required customer details and the next steps in the insurance application process." },
      { title: "Service-network fit", description: "Offer insurance through retailer, partner or digital channels already used for other billbring services." },
      { title: "Customer handoff clarity", description: "Keep the transition to the relevant insurance partner or process clear once the customer chooses to proceed." },
    ],
    whyTitle: "Why choose BringInsure",
    whyIntro: "Insurance can feel complex to customers. BringInsure is designed to make the first mile of discovery and application more understandable for both customers and service partners.",
    benefits: [
      { title: "Add a high-value service", description: "Expand beyond transactions into a financial-protection category that can deepen customer relationships." },
      { title: "Designed for explanation", description: "Use a guided interface that helps agents and customers work through product information in a more organized way." },
      { title: "Works across channels", description: "Support both digital discovery and assisted-service scenarios depending on your distribution model." },
      { title: "Part of one ecosystem", description: "Connect insurance access with travel, payments and other customer services already offered through billbring." },
    ],
    steps: [
      { title: "Discover eligible products", description: "Review the insurance categories or offerings made available by configured partners." },
      { title: "Capture required details", description: "Guide the customer through the information needed to proceed with the selected insurance journey." },
      { title: "Continue with the provider", description: "Move the customer into the applicable partner-led application, payment or issuance process." },
    ],
    useCases: ["Retail insurance distribution", "Agent-assisted insurance", "Travel insurance journeys", "Digital financial platforms", "Customer service ecosystems"],
    footnote: "Insurance products are offered by applicable insurance providers/partners and are subject to eligibility, underwriting, policy terms and regulatory requirements.",
  },

  bringcredit: {
    eyebrow: "Digital credit discovery",
    overviewTitle: "Connect eligible customers with a clearer path to credit.",
    overview: [
      "BringCredit is designed to help businesses and service platforms connect eligible customers or merchants with digital credit opportunities from enabled lending partners. It focuses on organizing the credit journey from initial interest and information capture to partner-led eligibility and decisioning.",
      "Rather than positioning the platform as the lender, BringCredit acts as a connected service layer that helps make credit discovery and application journeys easier to embed into the broader billbring ecosystem.",
    ],
    metrics: [
      { value: "CREDIT", label: "DISCOVERY", note: "Create a structured first step toward suitable lending products." },
      { value: "DIGITAL", label: "JOURNEY", note: "Move customer information through a guided application experience." },
      { value: "PARTNER", label: "DECISIONING", note: "Eligibility and approval remain with the enabled lending partner." },
      { value: "CONNECTED", label: "SERVICE", note: "Add credit discovery to your wider fintech offering." },
    ],
    capabilitiesTitle: "A cleaner front door to partner-led credit products.",
    capabilitiesIntro: "BringCredit helps platforms organize customer interest, application information and partner handoffs without making the credit journey feel disconnected from the rest of the user experience.",
    capabilities: [
      { title: "Credit discovery journey", description: "Present enabled lending or credit opportunities to customers and merchants through a structured digital experience." },
      { title: "Information capture", description: "Collect the details required to begin an eligibility or application journey with the configured lending partner." },
      { title: "Partner-led outcome", description: "Keep approval, pricing and underwriting decisions with the applicable regulated lending partner." },
      { title: "Embedded service layer", description: "Add credit discovery to an existing payments, merchant or financial-service platform instead of building a separate destination." },
    ],
    whyTitle: "Why choose BringCredit",
    whyIntro: "Credit journeys need clarity around who is eligible, what happens next and who makes the lending decision. BringCredit is designed to keep that experience understandable.",
    benefits: [
      { title: "Built for embedded finance", description: "Introduce credit discovery where customers or merchants already interact with your platform." },
      { title: "Guided customer journey", description: "Organize the early application experience so users understand the information being requested and the next step." },
      { title: "Partner-led lending model", description: "Keep credit decisions with the configured lending partner while your platform manages a cohesive customer experience." },
      { title: "Expand customer utility", description: "Add another financial-service category alongside collections, payouts, wallet and business services." },
    ],
    steps: [
      { title: "Start credit discovery", description: "The customer or merchant reviews an enabled credit opportunity and begins the journey." },
      { title: "Submit required information", description: "Capture the details needed for the configured partner's eligibility or application process." },
      { title: "Partner evaluates", description: "The lending partner handles applicable verification, eligibility, pricing and approval decisions." },
    ],
    useCases: ["Merchant credit discovery", "Embedded lending journeys", "Business finance platforms", "Retailer-led applications", "Digital financial marketplaces"],
    footnote: "Loans and credit are subject to lender eligibility, underwriting, pricing, documentation and applicable regulatory requirements. billbring does not make lending approval decisions unless explicitly licensed and disclosed for a specific product.",
  },
};

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}
