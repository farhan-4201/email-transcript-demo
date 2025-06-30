export const issueMappings = {
    'O_CO01': { responsible_party: 'Consignor', reason: 'Delay', details: 'Consignor caused a delay in pickup' },
    'O_CO07': { responsible_party: 'Consignor', reason: 'Schedule', details: 'Consignor cancelled the transport' },
    'O_CO02': { responsible_party: 'Consignor', reason: 'Volume', details: 'Consignor provided a larger volume than expected' },
    'O_CO03': { responsible_party: 'Consignor', reason: 'Volume', details: 'Consignor provided a smaller volume than expected' },
    'O_CO08': { responsible_party: 'Consignor', reason: 'Volume', details: 'Consignor failed to provide the goods' },
    'O_CO04': { responsible_party: 'Consignor', reason: 'Other', details: 'Order content discrepancy identified' },
    'O_CO05': { responsible_party: 'Consignor', reason: 'Other', details: 'Missing or incorrect transport documents' },
    'O_CO06': { responsible_party: 'Consignor', reason: 'Other', details: 'Customs-related issue encountered' },
    'O_CR01': { responsible_party: 'Carrier', reason: 'Delay', details: 'Carrier arrived late for pickup' },
    'O_CR06': { responsible_party: 'Carrier', reason: 'Delay', details: 'Carrier arrived late for delivery' },
    'O_CR11': { responsible_party: 'Carrier', reason: 'Schedule', details: 'Carrier requested a schedule change' },
    'O_CR12': { responsible_party: 'Carrier', reason: 'Schedule', details: 'Carrier delivered ahead of schedule' },
    'O_RE03': { responsible_party: 'Recipient', reason: 'Delay', details: 'Recipient delayed the delivery' },
    'O_RE02': { responsible_party: 'Recipient', reason: 'Schedule', details: 'Recipient requested expedited transport' },
    'S_RE03': { responsible_party: 'Recipient', reason: 'Schedule', details: 'Recipient requested to cancel the shipment' },
    'Out_of_Scope': { responsible_party: '', reason: '', details: '' }
};
