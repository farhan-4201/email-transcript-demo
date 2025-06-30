export const exampleAnswers = [
    "\n\nemail: Hi, please check with sender, still waiting for loading. Need to go to other loading place soon.",
    "\nreasoning: The email mentions that the carrier is waiting for loading at the sender’s site and needs to leave soon for another loading place. This is indicating a delay caused by the consignor. - Consignor delays pickup",
    
    "\n\nemail: Hello, Please be informed that this collection is running late, due to waiting at the supplier for delivery of load ID 2054505. The driver arrived on time for collection but is not offloaded yet.",
    "\nreasoning: The email mentions the collection is late due to waiting at the supplier. This implies that the email is sent from the carrier who is trying to pick up the email but is unable to, therefore indicating a delay caused by the consignor. - Consignor delays pickup",

    "\n\nemail: Hi Please can you cancel the following TO: 1234567 with Load 2345678.",
    "\nreasoning: The email requests the cancellation of a transport order. - Consignor cancels transport",

    "\n\nemail: Hello, please delete duplicate TO: 1234567.",
    "\nreasoning: The email requests the cancellation of a duplicated transport order. - Consignor cancels transport",

    "\n\nemail: Hello, We went to the supplier today and he did not give us the following goods: We're going back to the supplier on tomorrow to avoid closing the order and ask for a new creation if the goods arrive later than expected.",
    "\nreasoning: The carrier informs that the supplier didn’t provide the required goods when they were visited.  - Consignor fails to provide goods",

    "\n\nemail: Hello, today we tried to pick up this shipment but they don't have prepared goods because Hella is closed. Please close. Thanks Steven",
    "\nreasoning: The carrier attempted to pick up the shipment today, but the goods were not available because the supplier was closed. This means that the goods were not available for pick-up due to the supplier. - Consignor fails to provide goods",

    "\n\nemail: Dear All, The truck arrived on time at the supplier but has not been loaded yet. I am sending this due to KPI.",
    "\nreasoning: Despite the carrier’s truck arriving on time at the supplier, the supplier did not load the goods onto the truck. This implies that the supplier hasn’t made the good available and failed to provide them.  - Consignor fails to provide goods",

    "\n\nemail: There are some additional parts from COFAT Maroc. I can see shipment already for COFAT Maroc leaving RDC on 4th from GEFCO France to Luton. Can this consignment be added to this shipment.",
    "\nreasoning: The email requests adding additional parts to the shipment. Since the request is asking for a higher volume than what was originally agreed to, it implies that the consignor is providing a higher volume than initially advised. - Consignor provides a higher volume than advised",

    "\n\nemail: We are at loading place at Fisciano , but seems that there are 3 pallets to collect 2 wood pack pallets x 200 x 80 x 200 + 1 iron pack pallet x 225 x 120 x 215 and you send us order only for 2 pallets. Shall we load all 3 and you will send us the correct order ?.",
    "\nreasoning: The email asks if a higher volume than mentioned on the order – 3 instead of 2 should be loaded. Since this is a higher volume than originally agreed to, it implies that the consignor is providing a higher volume than initially advised. - Consignor provides a higher volume than advised",

    "\n\nemail: Hi, Please find the details below:  NUMBER OF UNITS LOADED: 61 NUMBER OF UNITS PLANNED: 59",
    "\nreasoning: The email states that the number of units loaded is higher than the number of units planned, indicating a higher volume provided. - Consignor provides a higher volume than advised",

    "\n\nemail: Hi, Please find the details below:  NUMBER OF UNITS LOADED: 58 NUMBER OF UNITS PLANNED: 59",
    "\nreasoning: The email states that the number of units loaded is less than the number of units planned, indicating a lower volume provided. - Consignor provides lower volume than advised",

    "\n\nemail: the truck is at the loading point. On the order we have 33 Wire mesh box, the loading point informed the driver they only have 12. Can you please check and confirm is ok?",
    "\nreasoning: The email states that the number of units prepared by the sender is less than the number of units planned, indicating a lower volume provided. - Consignor provides lower volume than advised",

    "\n\nemail: Hello, Could you please check delivery date of this shipment? It looks like it has the wrong information.",
    "\nreasoning: With the sender questioning the delivery date of the shipment, it implies that the delivery date is incorrect. Thus there is incorrect information in the transport order. - Incorrect Transport Order content detected",

    "\n\nemail: For this shipment, we need a complete and correct collection address. There are 2 different addresses.",
    "\nreasoning: The sender is highlighting that there are two different addresses on the order and asks for clarification. Thus there is incorrect information in the transport order. - Incorrect Transport Order content detected",

    "\n\nemail: Good morning, Kindly reminder. For a successful customs procedure, we need an export document for 38 pallets. It is currently missing.",
    "\nreasoning: The email mentions a missing export document, indicating a problem with transport documents. - Missing or incorrect transport documents",

    "\n\nemail: Please note the documents are not uploaded in TMS. Could you send us the documents once you have them? Thank you in advanced.",
    "\nreasoning: The email mentions a missing document in the transport management system (TMS), indicating a missing transport document. - Missing or incorrect transport documents",

    "\n\nemail: Hello, Attached I send you the documents for truck. The C88 is missing, please send the C88 As soon as you have it thanks. If we don't have the C88, then we will run into later issues with customs.",
    "\nreasoning: The email states that the customs related, C88 document is missing. This is then causing further issues with customs. - Customs issue",

    "\n\nemail: Hello, please note we are still waiting for customs clearance on load 2345678. We will let you know when we have an update.",
    "\nreasoning: The email states that they are still waiting for customer clearance, indicating there is a customs related issue. - Customs issue",

    "\n\nemail: We arrived at the recipient address, but they were closed and unable to receive the goods.",
    "\nreasoning: The email mentions that the recipient was closed and unable to receive the goods. We can infer that the sender of the email is the carrier who is trying to deliver the goods thus indicating the delay is caused by the recipient. - Recipient delays delivery",

    "\n\nemail: he is waiting now to unload, yesterday they didn’t unload anymore.",
    "\nreasoning: The email mentions that the truck was not unloaded yesterday by the recipient, indicating a delay caused by the recipient. - Recipient delays delivery",

    "\n\nemail: Hello, could you please check if we can have ETA on 09/01 around 12:00pm instead of 10/01?",
    "\nreasoning: The sender is asking to change the ETA from the 10th to the 9th. This is a request to expedite the transport of the load to an earlier date, than which it was already scheduled. - Expedited Transport Requested",

    "\n\nemail: Hello together, Please check if you can speed up the delivery and deliver earlier. I prefer to get the delivery on Monday 15.01. Thank you for your reply.",
    "\nreasoning: The sender is asking to “speed up the delivery” and deliver earlier than originally planned.  - Expedited Transport Requested",

    "\n\nemail: Good afternoon, Could you request the carrier to accelerate load 123, please? It is not marked as collected on iTMS yet, but I have received the ASN from the suppliers on this route. Can you deliver as early as possible on 03/01/24, please? Thanks Sean",
    "\nreasoning: The sender is asking the carrier to accelerate the load and is requesting for it to be delivered as early as possible. - Expedited Transport Requested",

    "\n\nemail: I spoke with the customer and we will not load this week. We will load next week at the supplier.",
    "\nreasoning: The carrier is informing that he has spoken with the recipient and there will be no shipment from that particular supplier this week, indicating that this transport needs to be cancelled. – Recipient requests cancelling shipment",

    "\n\nemail: please delete the following To 1234567, we have agreed with the supplier.",
    "\nreasoning: The recipient is informing that a shipment should be cancelled in accordance with the shipper. – Recipient requests cancelling shipment",

    "\n\nemail: Hello, We have a pick up announcement: there is a risk of delay in pick up due to weather events;",
    "\nreasoning: The sender of the email is inferred to be the carrier of the shipment. They mention a risk of delay in pick up due to weather events. That notification from the carrier says that there will be a delay from the original pick up time. - Carrier is late for pick up",

    "\n\nemail: Good afternoon, The carrier's truck hasn´t arrived yet to pickup the goods and we're not sure what the reason for the delay is.",
    "\nreasoning: The sender of the email states that the carrier's truck hasn't arrived for pickup yet. Since they have no explanation for why the carrier isn't available it indicates that the carrier is late for pick up. - Carrier is late for pick up",

    "\n\nemail: Late delivery ---- Dear All, Unfortunately the above mentioned load is going to be late due to crossing issue. One scheduled ferry were cancelled.",
    "\nreasoning: The carrier has informed the recipients about the delay. The reason was states as a crossing issue  - Carrier is late for delivery",

    "\n\nemail: Hello, the carrier hasn't delivered the goods yet. What is the reason for the delay?",
    "\nreasoning: The email mentions that the carrier hasn't delivered the goods yet. - Carrier is late for delivery",

    "\n\nemail: Good morning, please note we will delivery this shipment already tomorrow ahead of schedule.",
    "\nreasoning: The email states that the truck will be delivering the material one day earlier, indicating a carrier delivery prior to the schedule. - Carrier delivery prior schedule",

    "\n\nemail: Hello, please note that load 2345678 already arrived today.",
    "\nreasoning: The email states that the recipient has received a shipment earlier than expected, indicating a carrier delivery prior to the schedule. - Carrier delivery prior schedule",

    "\n\nemail: Hello, can you please check if collection on 27.03. is also ok. Delivery will remain unchanged.",
    "\nreasoning: The email requests a change in collection without a change in delivery. Thus the carrier is requesting changes to the schedule. - Carrier requesting changes to schedule",

    "\n\nemail: Hello, please check asap if we can move the ETA to 03/01 until 20:00pm! We might not be able to pick up the goods.",
    "\nreasoning: The email requests a change in the ETA. Thus the carrier is requesting changes to the schedule. - Carrier requesting changes to schedule",
]